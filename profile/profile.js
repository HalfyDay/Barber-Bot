(function () {
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_PROFILE_API_URL = `${window.location.origin}/api/home/profile`;
  const HOME_PROFILE_TELEGRAM_START_API_URL = `${HOME_PROFILE_API_URL}/telegram/start`;
  const HOME_PROFILE_TELEGRAM_STATUS_API_URL = `${HOME_PROFILE_API_URL}/telegram/status`;
  const HOME_PROFILE_TELEGRAM_UNLINK_API_URL = `${HOME_PROFILE_API_URL}/telegram/unlink`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const REMEMBER_STORAGE_KEY = "home-user-remember";
  const LOGIN_PAGE_URL = "/login/";
  const TELEGRAM_POLL_INTERVAL_MS = 2000;

  const profileForm = document.getElementById("profile-form");
  const profileDisplayNameInput = document.getElementById("profile-display-name");
  const profilePhoneInput = document.getElementById("profile-phone");
  const profilePasswordInput = document.getElementById("profile-password");
  const profilePasswordRepeatInput = document.getElementById("profile-password-repeat");
  const profilePasswordToggle = document.getElementById("profile-password-toggle");
  const profilePasswordBlock = document.getElementById("profile-password-block");
  const profileEditButton = document.getElementById("profile-edit-toggle");
  const profileEditActions = document.getElementById("profile-edit-actions");
  const profileCancelButton = document.getElementById("profile-cancel");
  const profileNameLimit = document.getElementById("profile-name-limit");
  const profilePhoneLimit = document.getElementById("profile-phone-limit");
  const profileTelegramLimit = document.getElementById("profile-telegram-limit");
  const profileSaveButton = document.getElementById("profile-save");
  const profileStatus = document.getElementById("profile-status");
  const telegramStatus = document.getElementById("profile-telegram-status");
  const telegramLinkButton = document.getElementById("profile-telegram-link");
  const telegramUnlinkButton = document.getElementById("profile-telegram-unlink");
  const logoutButton = document.getElementById("profile-logout");

  const isReady =
    profileForm &&
    profileDisplayNameInput &&
    profilePhoneInput &&
    profilePasswordInput &&
    profilePasswordRepeatInput &&
    profilePasswordToggle &&
    profilePasswordBlock &&
    profileEditButton &&
    profileEditActions &&
    profileCancelButton &&
    profileNameLimit &&
    profilePhoneLimit &&
    profileTelegramLimit &&
    profileSaveButton &&
    profileStatus &&
    telegramStatus &&
    telegramLinkButton &&
    telegramUnlinkButton &&
    logoutButton;

  if (!isReady) return;

  const state = {
    session: null,
    remember: false,
    profile: null,
    editing: false,
    passwordChangeEnabled: false,
    telegramRequestId: "",
    telegramPollTimer: null,
    telegramPending: false,
  };

  const getStorageArea = (type) => {
    try {
      return type === "session" ? window.sessionStorage : window.localStorage;
    } catch {
      return null;
    }
  };

  const safeStorageGet = (storage, key) => {
    try {
      return storage?.getItem ? storage.getItem(key) : null;
    } catch {
      return null;
    }
  };

  const safeStorageSet = (storage, key, value) => {
    try {
      if (storage?.setItem) storage.setItem(key, value);
    } catch {
      // ignore
    }
  };

  const safeStorageRemove = (storage, key) => {
    try {
      if (storage?.removeItem) storage.removeItem(key);
    } catch {
      // ignore
    }
  };

  const normalizeText = (value) => (value == null ? "" : String(value).trim());

  const normalizePhone = (value) => {
    const raw = normalizeText(value).replace(/[^\d+]/g, "");
    if (!raw) return "";
    const digits = raw.startsWith("+") ? raw.slice(1) : raw;
    if (digits.length === 10) return `+7${digits}`;
    if (digits.length === 11 && digits.startsWith("8")) return `+7${digits.slice(1)}`;
    if (digits.length === 11 && digits.startsWith("7")) return `+${digits}`;
    if (raw.startsWith("+")) return `+${digits}`;
    return `+${digits}`;
  };

  const extractPhoneDigits = (value) => {
    const rawDigits = normalizeText(value).replace(/\D/g, "");
    if (!rawDigits) return "";
    let digits = rawDigits;
    if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
    return digits.slice(0, 10);
  };

  const formatPhoneMasked = (digits) => {
    const safeDigits = (digits || "").slice(0, 10);
    if (!safeDigits) return "";
    let output = "+7";
    const part1 = safeDigits.slice(0, 3);
    const part2 = safeDigits.slice(3, 6);
    const part3 = safeDigits.slice(6, 8);
    const part4 = safeDigits.slice(8, 10);
    if (part1) {
      output += ` (${part1}`;
      if (part1.length === 3) output += ")";
    }
    if (part2) output += ` ${part2}`;
    if (part3) output += `-${part3}`;
    if (part4) output += `-${part4}`;
    return output;
  };

  const isPhoneComplete = (value) => extractPhoneDigits(value).length === 10;

  const applyPhoneMask = (input) => {
    const digits = extractPhoneDigits(input.value);
    input.value = formatPhoneMasked(digits);
    const nextPos = input.value.length;
    try {
      input.setSelectionRange(nextPos, nextPos);
    } catch {
      // ignore
    }
  };

  const attachPhoneMask = (input) => {
    input.addEventListener("input", () => applyPhoneMask(input));
    input.addEventListener("blur", () => {
      if (!extractPhoneDigits(input.value)) input.value = "";
    });
  };

  const toDateMs = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return null;
    const parsed = Date.parse(safeValue);
    return Number.isFinite(parsed) ? parsed : null;
  };

  const formatLimitDate = (value) => {
    const ms = toDateMs(value);
    if (!ms) return "";
    return new Date(ms).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const normalizeLimit = (limit) => ({
    isLocked: Boolean(limit?.isLocked),
    lastChangedAt: normalizeText(limit?.lastChangedAt) || null,
    nextAllowedAt: normalizeText(limit?.nextAllowedAt) || null,
  });

  const buildSessionPayload = (payload = {}) => ({
    token: normalizeText(payload.token),
    user: {
      id: normalizeText(payload.user?.id),
      phone: normalizePhone(payload.user?.phone),
      displayName: normalizeText(payload.user?.displayName || payload.user?.phone),
    },
  });

  const persistSessionPayload = (payload, remember) => {
    const serialized = JSON.stringify(payload);
    const localStore = getStorageArea("local");
    const sessionStore = getStorageArea("session");
    safeStorageSet(getStorageArea("local"), REMEMBER_STORAGE_KEY, remember ? "1" : "0");
    if (remember) {
      safeStorageSet(localStore, SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(sessionStore, SESSION_STORAGE_KEY);
    } else {
      safeStorageSet(sessionStore, SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(localStore, SESSION_STORAGE_KEY);
    }
  };

  const clearSessionPayload = () => {
    safeStorageRemove(getStorageArea("local"), SESSION_STORAGE_KEY);
    safeStorageRemove(getStorageArea("session"), SESSION_STORAGE_KEY);
  };

  const loadPersistedSession = () => {
    const localRaw = safeStorageGet(getStorageArea("local"), SESSION_STORAGE_KEY);
    if (localRaw) {
      try {
        return { session: buildSessionPayload(JSON.parse(localRaw)), remember: true };
      } catch {
        // ignore
      }
    }
    const sessionRaw = safeStorageGet(getStorageArea("session"), SESSION_STORAGE_KEY);
    if (sessionRaw) {
      try {
        return { session: buildSessionPayload(JSON.parse(sessionRaw)), remember: false };
      } catch {
        // ignore
      }
    }
    const remember = safeStorageGet(getStorageArea("local"), REMEMBER_STORAGE_KEY) === "1";
    return { session: null, remember };
  };

  const redirectToLogin = () => {
    window.location.replace(LOGIN_PAGE_URL);
  };

  const stopTelegramPolling = () => {
    if (state.telegramPollTimer) {
      window.clearTimeout(state.telegramPollTimer);
      state.telegramPollTimer = null;
    }
  };

  const setStatus = (message, type = "default") => {
    profileStatus.textContent = normalizeText(message);
    profileStatus.classList.remove("is-error", "is-ok");
    if (type === "error") profileStatus.classList.add("is-error");
    if (type === "ok") profileStatus.classList.add("is-ok");
  };

  const setHint = (element, limit, modeLabel = "изменить") => {
    if (!element) return;
    const safeLimit = normalizeLimit(limit);
    if (safeLimit.isLocked) {
      const nextLabel = formatLimitDate(safeLimit.nextAllowedAt);
      element.textContent = nextLabel
        ? `Можно ${modeLabel} после ${nextLabel}`
        : "Можно менять не чаще одного раза в 30 дней";
      element.classList.add("is-locked");
      return;
    }
    element.textContent = "";
    element.classList.remove("is-locked");
  };

  const setPasswordChangeEnabled = (enabled) => {
    const next = Boolean(enabled) && state.editing;
    state.passwordChangeEnabled = next;
    profilePasswordBlock.hidden = !next;
    profilePasswordToggle.textContent = next ? "Не менять пароль" : "Сменить пароль";
    if (!next) {
      profilePasswordInput.value = "";
      profilePasswordRepeatInput.value = "";
    }
  };

  const setEditingMode = (enabled) => {
    state.editing = Boolean(enabled);
    const limits = state.profile?.limits || {};
    const canEditName = state.editing && !Boolean(limits?.name?.isLocked);
    const canEditPhone = state.editing && !Boolean(limits?.phone?.isLocked);

    profileDisplayNameInput.disabled = !canEditName;
    profilePhoneInput.disabled = !canEditPhone;

    profileEditButton.hidden = state.editing;
    profileEditActions.hidden = !state.editing;
    profilePasswordToggle.hidden = !state.editing;

    if (!state.editing) {
      setPasswordChangeEnabled(false);
    }
  };

  const setFormPending = (isPending) => {
    const pending = Boolean(isPending);
    profileEditButton.disabled = pending;
    profileSaveButton.disabled = pending;
    profileCancelButton.disabled = pending;
    profilePasswordToggle.disabled = pending;
  };

  const updateTelegramButtons = () => {
    const linked = Boolean(state.profile?.telegramLinked);
    const lockTelegram = Boolean(state.profile?.limits?.telegram?.isLocked);
    telegramLinkButton.hidden = linked;
    telegramUnlinkButton.hidden = !linked;
    telegramLinkButton.disabled = state.telegramPending || lockTelegram;
    telegramUnlinkButton.disabled = state.telegramPending || lockTelegram;
  };

  const setTelegramPending = (isPending) => {
    state.telegramPending = Boolean(isPending);
    updateTelegramButtons();
  };

  const setSessionFromToken = (nextToken) => {
    const normalizedToken = normalizeText(nextToken);
    if (!normalizedToken || !state.session) return;
    state.session.token = normalizedToken;
    persistSessionPayload(state.session, state.remember);
  };

  const updateSessionTokenFromHeader = (response) => {
    const refreshedToken = normalizeText(response?.headers?.get("x-home-session-token"));
    if (!refreshedToken) return;
    setSessionFromToken(refreshedToken);
  };

  const apiRequest = async (url, options = {}) => {
    const token = normalizeText(state.session?.token);
    if (!token) {
      clearSessionPayload();
      redirectToLogin();
      throw new Error("Нет активной сессии.");
    }
    const method = normalizeText(options.method || "GET").toUpperCase();
    const headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    };
    if (!headers["Content-Type"] && options.body !== undefined) {
      headers["Content-Type"] = "application/json";
    }
    const response = await fetch(url, {
      method,
      headers,
      body: options.body,
    });
    updateSessionTokenFromHeader(response);
    if (response.status === 401 || response.status === 403) {
      clearSessionPayload();
      redirectToLogin();
      throw new Error("Сессия истекла. Выполните вход снова.");
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(normalizeText(payload?.message || payload?.error) || "Ошибка запроса.");
    }
    return payload;
  };

  const validateSessionToken = async (token) => {
    if (!token) return null;
    const response = await fetch(`${HOME_API_BASE_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) return null;
    const payload = await response.json().catch(() => ({}));
    const refreshedToken = normalizeText(response.headers.get("x-home-session-token"));
    return {
      user: payload?.user || null,
      nextToken: refreshedToken || token,
    };
  };

  const renderProfile = (user) => {
    const safeUser = user || {};
    const safeLimits = safeUser.limits || {};
    state.profile = {
      id: normalizeText(safeUser.id),
      phone: normalizePhone(safeUser.phone),
      displayName: normalizeText(safeUser.displayName),
      telegramLinked: Boolean(normalizeText(safeUser.telegramId) || safeUser.telegramLinked),
      limits: {
        name: normalizeLimit(safeLimits.name),
        phone: normalizeLimit(safeLimits.phone),
        telegram: normalizeLimit(safeLimits.telegram),
      },
    };

    profileDisplayNameInput.value = state.profile.displayName;
    profilePhoneInput.value = formatPhoneMasked(extractPhoneDigits(state.profile.phone));

    setHint(profileNameLimit, state.profile.limits.name, "изменить ФИО");
    setHint(profilePhoneLimit, state.profile.limits.phone, "изменить телефон");
    setHint(profileTelegramLimit, state.profile.limits.telegram, "изменить Telegram");

    telegramStatus.textContent = state.profile.telegramLinked
      ? "Telegram привязан"
      : "Telegram не привязан";

    setEditingMode(false);
    updateTelegramButtons();
  };

  const scheduleTelegramPolling = () => {
    stopTelegramPolling();
    if (!state.telegramRequestId) return;
    state.telegramPollTimer = window.setTimeout(() => {
      void pollTelegramLinkStatus();
    }, TELEGRAM_POLL_INTERVAL_MS);
  };

  const pollTelegramLinkStatus = async () => {
    if (!state.telegramRequestId) return;
    try {
      const payload = await apiRequest(
        `${HOME_PROFILE_TELEGRAM_STATUS_API_URL}?requestId=${encodeURIComponent(
          state.telegramRequestId,
        )}`,
      );
      if (!payload?.done) {
        scheduleTelegramPolling();
        return;
      }
      state.telegramRequestId = "";
      stopTelegramPolling();
      setTelegramPending(false);
      if (payload?.success && payload?.user) {
        renderProfile(payload.user);
        setStatus("Telegram обновлен.", "ok");
        return;
      }
      setStatus(
        normalizeText(payload?.message) || "Не удалось завершить обновление Telegram.",
        "error",
      );
    } catch {
      if (!state.telegramRequestId) return;
      scheduleTelegramPolling();
    }
  };

  const handleEditStart = () => {
    if (!state.profile) return;
    setEditingMode(true);
    setStatus("");
  };

  const handleEditCancel = () => {
    if (!state.profile) return;
    profileDisplayNameInput.value = state.profile.displayName;
    profilePhoneInput.value = formatPhoneMasked(extractPhoneDigits(state.profile.phone));
    setEditingMode(false);
    setStatus("");
  };

  const handleSaveProfile = async (event) => {
    event.preventDefault();
    if (!state.editing) return;

    setStatus("");
    setFormPending(true);

    const displayName = normalizeText(profileDisplayNameInput.value) || state.profile?.displayName || "";
    const phone = normalizePhone(
      formatPhoneMasked(extractPhoneDigits(profilePhoneInput.value || state.profile?.phone || "")),
    );
    const password = normalizeText(profilePasswordInput.value);
    const passwordRepeat = normalizeText(profilePasswordRepeatInput.value);

    const originalDisplayName = normalizeText(state.profile?.displayName);
    const originalPhone = normalizePhone(state.profile?.phone);
    const nameChanged = displayName !== originalDisplayName;
    const phoneChanged = phone !== originalPhone;

    if (!displayName) {
      setStatus("Введите ФИО.", "error");
      setFormPending(false);
      return;
    }
    if (!isPhoneComplete(profilePhoneInput.value) || !phone) {
      setStatus("Введите корректный номер телефона.", "error");
      setFormPending(false);
      return;
    }

    if (state.passwordChangeEnabled) {
      if (!password || !passwordRepeat) {
        setStatus("Введите новый пароль и повторите его.", "error");
        setFormPending(false);
        return;
      }
      if (password !== passwordRepeat) {
        setStatus("Пароли не совпадают.", "error");
        setFormPending(false);
        return;
      }
    }

    if (!nameChanged && !phoneChanged && !state.passwordChangeEnabled) {
      setStatus("Изменений нет.");
      setFormPending(false);
      return;
    }

    try {
      const payload = await apiRequest(HOME_PROFILE_API_URL, {
        method: "PUT",
        body: JSON.stringify({
          displayName,
          phone,
          password: state.passwordChangeEnabled ? password : undefined,
        }),
      });
      const updatedUser = payload?.user || {};
      if (normalizeText(payload?.token)) {
        setSessionFromToken(payload.token);
      }
      state.session.user = {
        ...state.session.user,
        id: normalizeText(updatedUser.id) || state.session.user?.id,
        phone: normalizePhone(updatedUser.phone || state.session.user?.phone),
        displayName: normalizeText(updatedUser.displayName || state.session.user?.displayName),
      };
      persistSessionPayload(state.session, state.remember);
      renderProfile(updatedUser);
      setStatus("Профиль сохранен.", "ok");
    } catch (error) {
      setStatus(error?.message || "Не удалось сохранить профиль.", "error");
    } finally {
      setFormPending(false);
    }
  };

  const handleTelegramLink = async () => {
    if (state.telegramPending || state.profile?.telegramLinked) return;
    setStatus("");
    setTelegramPending(true);
    stopTelegramPolling();
    state.telegramRequestId = "";
    try {
      const payload = await apiRequest(HOME_PROFILE_TELEGRAM_START_API_URL, {
        method: "POST",
      });
      const requestId = normalizeText(payload?.requestId);
      const botLink = normalizeText(payload?.botLink);
      if (!requestId) {
        setStatus("Не удалось запустить привязку Telegram.", "error");
        setTelegramPending(false);
        return;
      }
      state.telegramRequestId = requestId;
      if (!botLink) {
        setStatus("Не удалось открыть Telegram-бота. Попробуйте позже.", "error");
        setTelegramPending(false);
        return;
      }
      window.open(botLink, "_blank", "noopener,noreferrer");
      setStatus("Подтвердите действие в Telegram и вернитесь на сайт.");
      scheduleTelegramPolling();
    } catch (error) {
      setStatus(error?.message || "Не удалось запустить привязку Telegram.", "error");
      setTelegramPending(false);
    }
  };

  const handleTelegramUnlink = async () => {
    if (state.telegramPending || !state.profile?.telegramLinked) return;
    setStatus("");
    setTelegramPending(true);
    try {
      const payload = await apiRequest(HOME_PROFILE_TELEGRAM_UNLINK_API_URL, {
        method: "POST",
      });
      renderProfile(payload?.user || {});
      setStatus("Telegram отвязан.", "ok");
    } catch (error) {
      setStatus(error?.message || "Не удалось отвязать Telegram.", "error");
    } finally {
      setTelegramPending(false);
    }
  };

  const handleLogout = () => {
    stopTelegramPolling();
    clearSessionPayload();
    redirectToLogin();
  };

  const init = async () => {
    attachPhoneMask(profilePhoneInput);
    setPasswordChangeEnabled(false);

    profileForm.addEventListener("submit", handleSaveProfile);
    profileEditButton.addEventListener("click", handleEditStart);
    profileCancelButton.addEventListener("click", handleEditCancel);
    profilePasswordToggle.addEventListener("click", () => {
      setPasswordChangeEnabled(!state.passwordChangeEnabled);
      setStatus("");
    });
    telegramLinkButton.addEventListener("click", handleTelegramLink);
    telegramUnlinkButton.addEventListener("click", handleTelegramUnlink);
    logoutButton.addEventListener("click", handleLogout);
    window.addEventListener("beforeunload", stopTelegramPolling);

    const persisted = loadPersistedSession();
    state.remember = persisted.remember;
    if (!persisted.session?.token) {
      redirectToLogin();
      return;
    }
    const checked = await validateSessionToken(persisted.session.token);
    if (!checked?.user) {
      clearSessionPayload();
      redirectToLogin();
      return;
    }
    state.session = buildSessionPayload({
      token: checked.nextToken,
      user: checked.user,
    });
    persistSessionPayload(state.session, state.remember);

    try {
      const payload = await apiRequest(HOME_PROFILE_API_URL);
      renderProfile(payload?.user || {});
    } catch (error) {
      setStatus(error?.message || "Не удалось загрузить профиль.", "error");
    }
  };

  init();
})();
