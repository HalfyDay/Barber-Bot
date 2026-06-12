const jwt = require("jsonwebtoken");
const { tenantPrismaStorage, getTenantPrismaClient, getTenantTimezone } = require("./prismaRuntime");

// Extract business ID from JWT token without verifying signature (graceful extraction)
const getBusinessIdFromToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.split(" ")[1];
  if (!token) return null;
  try {
    const decoded = jwt.decode(token);
    if (decoded && decoded.businessId) {
      return decoded.businessId;
    }
  } catch (error) {
    // Ignore decode errors
  }
  return null;
};

const tenantMiddleware = async (req, res, next) => {
  try {
    const globalPrisma = getTenantPrismaClient("public");
    const host = req.headers.host || req.hostname || "";
    const cleanHost = host.split(":")[0].toLowerCase();

    // 1. Identify businessId from various sources
    let businessId =
      req.headers["x-business-id"] ||
      req.query.businessId ||
      getBusinessIdFromToken(req);

    let business = null;

    if (businessId) {
      // Find business by ID
      business = await globalPrisma.businesses.findUnique({
        where: { id: String(businessId) },
      });
    }

    // 2. If not found by ID, try resolving by host (subdomain or custom domain)
    if (!business && cleanHost) {
      const parts = cleanHost.split(".");
      let subdomain = null;
      let hostDomain = cleanHost;
      
      const reserved = ["panel", "admin", "www", "api"];
      let remainingParts = [...parts];
      if (reserved.includes(remainingParts[0])) {
        remainingParts.shift();
      }
      
      if (remainingParts.length < parts.length) {
        hostDomain = remainingParts.join(".");
      }
      
      if (cleanHost.endsWith(".localhost")) {
        if (remainingParts.length >= 2) {
          subdomain = remainingParts[0];
        }
      } else if (remainingParts.length >= 3) {
        subdomain = remainingParts[0];
      }

      if (subdomain || (cleanHost !== "localhost" && cleanHost !== "127.0.0.1")) {
        business = await globalPrisma.businesses.findFirst({
          where: {
            OR: [
              subdomain ? { subdomain } : undefined,
              { customDomain: hostDomain },
              { customCrmDomain: hostDomain },
              { customDomain: cleanHost },
              { customCrmDomain: cleanHost },
            ].filter(Boolean),
          },
        });
      }
    }

    // 3. Resolve to correct schema
    let schema = "public";
    if (business && business.isActive) {
      schema = business.dbSchema;
      req.business = business;
      req.businessId = business.id;
    }

    // Get PrismaClient for the target schema
    const tenantPrisma = getTenantPrismaClient(schema);
    req.prisma = tenantPrisma; // Attach prisma to request object for convenience

    const timezone = await getTenantTimezone(schema);

    // Run request inside AsyncLocalStorage context
    tenantPrismaStorage.run({ prisma: tenantPrisma, timezone, schema }, () => {
      next();
    });
  } catch (error) {
    console.error("[tenant-middleware] Error resolving tenant:", error);
    next();
  }
};

module.exports = {
  tenantMiddleware,
};
