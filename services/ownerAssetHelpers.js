const createOwnerAssetHelpers = ({
  fs,
  path,
  IMAGE_DIR,
  MENU_IMAGE_DIR,
}) => {
  const IMAGE_EXTENSIONS = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
  ]);

  const normalizeText = (value) => (value ?? "").toString().trim();

  const buildSafeImageFilename = (input = "", fallbackExt = ".png") => {
    const normalized = normalizeText(input).replace(/\\/g, "/");
    const candidate = path.basename(normalized) || `avatar-${Date.now()}`;
    const extCandidate = path.extname(candidate);
    const ext = (extCandidate || fallbackExt).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) {
      return null;
    }
    const baseName =
      (extCandidate ? candidate.slice(0, -extCandidate.length) : candidate) ||
      `avatar-${Date.now()}`;
    const safeBase = baseName
      .normalize("NFKD")
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}0-9._-]/gu, "")
      .replace(/-+/g, "-")
      .replace(/^[-_.]+|[-_.]+$/g, "");
    return `${safeBase || `avatar-${Date.now()}`}${ext}`;
  };

  const getExistingImageFilename = (input = "") => {
    const normalized = normalizeText(input).replace(/\\/g, "/");
    const candidate = path.basename(normalized);
    if (!candidate) return null;
    const ext = path.extname(candidate).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) return null;
    return candidate;
  };

  const decodeBase64Image = (input = "") => {
    const normalized = normalizeText(input);
    const payload = normalized.includes("base64,")
      ? normalized.split("base64,").pop()
      : normalized;
    if (!payload) {
      throw new Error("Empty image payload.");
    }
    return Buffer.from(payload, "base64");
  };

  const ensureUniqueImageName = async (filename, targetDir = IMAGE_DIR) => {
    let attempt = 0;
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    let candidate = filename;
    while (await fs.pathExists(path.join(targetDir, candidate))) {
      attempt += 1;
      candidate = `${base}-${attempt}${ext}`;
    }
    return candidate;
  };

  const listAvatarImages = async () => {
    try {
      if (!(await fs.pathExists(IMAGE_DIR))) return [];
      const entries = await fs.readdir(IMAGE_DIR, { withFileTypes: true });
      const images = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => `/Image/${entry.name.replace(/\\/g, "/")}`);
      return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
    } catch (error) {
      console.error("Avatar scan error:", error);
      return [];
    }
  };

  const listMenuImages = async () => {
    try {
      if (!(await fs.pathExists(MENU_IMAGE_DIR))) return [];
      const entries = await fs.readdir(MENU_IMAGE_DIR, { withFileTypes: true });
      const images = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => `/Image/menu_bots/${entry.name.replace(/\\/g, "/")}`);
      return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
    } catch (error) {
      console.error("Menu image scan error:", error);
      return [];
    }
  };

  return {
    buildSafeImageFilename,
    getExistingImageFilename,
    decodeBase64Image,
    ensureUniqueImageName,
    listAvatarImages,
    listMenuImages,
  };
};

module.exports = {
  createOwnerAssetHelpers,
};
