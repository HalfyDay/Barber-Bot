const createHomePushService = ({
  normalizeText,
  normalizePhone,
  prisma,
  getUserMeta,
  updateUserMeta,
}) => {
  let webPush = null;
  try {
    webPush = require("web-push");
  } catch {
    webPush = null;
  }

  const generatedVapidKeys = webPush ? webPush.generateVAPIDKeys() : null;
  const vapidPublicKey =
    normalizeText(process.env.WEB_PUSH_PUBLIC_KEY) ||
    normalizeText(generatedVapidKeys?.publicKey);
  const vapidPrivateKey =
    normalizeText(process.env.WEB_PUSH_PRIVATE_KEY) ||
    normalizeText(generatedVapidKeys?.privateKey);
  const vapidSubject =
    normalizeText(process.env.WEB_PUSH_SUBJECT) || "mailto:support@brothershop.website";

  if (webPush && vapidPublicKey && vapidPrivateKey) {
    webPush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);
  } else {
    webPush = null;
  }

  const normalizeSubscription = (input = {}, userAgent = "") => {
    if (!input || typeof input !== "object") return null;
    const endpoint = normalizeText(input.endpoint);
    const keys = input.keys && typeof input.keys === "object" ? input.keys : {};
    const p256dh = normalizeText(keys.p256dh);
    const auth = normalizeText(keys.auth);
    if (!endpoint || !p256dh || !auth) return null;
    return {
      endpoint,
      expirationTime:
        input.expirationTime === null || input.expirationTime === undefined
          ? null
          : Number(input.expirationTime) || null,
      keys: { p256dh, auth },
      createdAt: new Date().toISOString(),
      userAgent: normalizeText(userAgent),
    };
  };

  const getPublicConfig = () => ({
    enabled: Boolean(webPush && vapidPublicKey),
    publicKey: vapidPublicKey,
  });

  const registerSubscription = async (userId, input, userAgent = "") => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) throw new Error("UNAUTHORIZED");
    const subscription = normalizeSubscription(input, userAgent);
    if (!subscription) throw new Error("INVALID_SUBSCRIPTION");
    const meta = await getUserMeta(safeUserId);
    const nextSubscriptions = [
      subscription,
      ...((Array.isArray(meta?.pushSubscriptions) ? meta.pushSubscriptions : []).filter(
        (item) => normalizeText(item?.endpoint) !== subscription.endpoint,
      )),
    ].slice(0, 8);
    await updateUserMeta(safeUserId, { pushSubscriptions: nextSubscriptions });
    return { success: true, subscriptions: nextSubscriptions.length };
  };

  const unregisterSubscription = async (userId, endpoint = "") => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) throw new Error("UNAUTHORIZED");
    const safeEndpoint = normalizeText(endpoint);
    const meta = await getUserMeta(safeUserId);
    const currentSubscriptions = Array.isArray(meta?.pushSubscriptions)
      ? meta.pushSubscriptions
      : [];
    const nextSubscriptions = safeEndpoint
      ? currentSubscriptions.filter(
          (item) => normalizeText(item?.endpoint) !== safeEndpoint,
        )
      : [];
    await updateUserMeta(safeUserId, { pushSubscriptions: nextSubscriptions });
    return { success: true, subscriptions: nextSubscriptions.length };
  };

  const removeDeadSubscriptions = async (userId, deadEndpoints = []) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId || !deadEndpoints.length) return;
    const meta = await getUserMeta(safeUserId);
    const currentSubscriptions = Array.isArray(meta?.pushSubscriptions)
      ? meta.pushSubscriptions
      : [];
    const deadSet = new Set(deadEndpoints.map((endpoint) => normalizeText(endpoint)).filter(Boolean));
    const nextSubscriptions = currentSubscriptions.filter(
      (item) => !deadSet.has(normalizeText(item?.endpoint)),
    );
    if (nextSubscriptions.length === currentSubscriptions.length) return;
    await updateUserMeta(safeUserId, { pushSubscriptions: nextSubscriptions });
  };

  const canSendForChannel = (meta = {}, channel = "booking") => {
    if (channel === "balance") return meta.balancePushNotificationsEnabled !== false;
    return meta.bookingPushNotificationsEnabled !== false;
  };

  const sendNotificationToUser = async (userId, payload = {}, options = {}) => {
    if (!webPush) return { sent: false, reason: "disabled" };
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return { sent: false, reason: "user_required" };
    const meta = await getUserMeta(safeUserId);
    if (!canSendForChannel(meta, normalizeText(options.channel) || "booking")) {
      return { sent: false, reason: "channel_disabled" };
    }
    const subscriptions = Array.isArray(meta?.pushSubscriptions)
      ? meta.pushSubscriptions
      : [];
    if (!subscriptions.length) return { sent: false, reason: "no_subscriptions" };

    const message = JSON.stringify({
      title: normalizeText(payload.title) || "BrotherShop",
      body: normalizeText(payload.body) || "",
      tag: normalizeText(payload.tag) || "brothershop-home",
      url: normalizeText(payload.url) || "/booking/",
      icon: normalizeText(payload.icon) || "/android-chrome-192x192.png",
      badge: normalizeText(payload.badge) || "/favicon-32x32.png",
      data: payload.data && typeof payload.data === "object" ? payload.data : {},
    });

    const deadEndpoints = [];
    let sentCount = 0;
    for (const subscription of subscriptions) {
      try {
        await webPush.sendNotification(subscription, message);
        sentCount += 1;
      } catch (error) {
        const statusCode = Number(error?.statusCode || error?.status || 0);
        if (statusCode === 404 || statusCode === 410) {
          deadEndpoints.push(normalizeText(subscription?.endpoint));
          continue;
        }
        console.warn("Home push send failed:", error?.message || error);
      }
    }
    if (deadEndpoints.length) {
      await removeDeadSubscriptions(safeUserId, deadEndpoints);
    }
    return { sent: sentCount > 0, count: sentCount };
  };

  const resolveUserIdForAppointment = async (appointment = {}) => {
    const userId = normalizeText(appointment.UserID || appointment.userId);
    if (userId) return userId;
    const appointmentPhone = normalizePhone(appointment.Phone || appointment.phone || "");
    const appointmentName = normalizeText(
      appointment.CustomerName || appointment.customerName || appointment.Name || "",
    );
    const users = await prisma.users.findMany({
      select: { id: true, Phone: true, Name: true },
    });
    const byPhone =
      users.find(
        (user) =>
          appointmentPhone &&
          normalizePhone(user.Phone || "") &&
          normalizePhone(user.Phone || "") === appointmentPhone,
      ) || null;
    if (byPhone?.id) return normalizeText(byPhone.id);
    const byName =
      users.find(
        (user) => appointmentName && normalizeText(user.Name || "") === appointmentName,
      ) || null;
    return normalizeText(byName?.id);
  };

  return {
    getPublicConfig,
    registerSubscription,
    unregisterSubscription,
    sendNotificationToUser,
    resolveUserIdForAppointment,
  };
};

module.exports = {
  createHomePushService,
};
