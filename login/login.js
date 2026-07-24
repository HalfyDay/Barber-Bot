(function () {
  const EYE_ICON_OPEN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>';
  const EYE_ICON_CLOSED =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Zm9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="m4 20 16-16"/></svg>';
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_API_ROOT_URL = `${window.location.origin}/api/home`;
  const HOME_PUBLIC_API_URL = `${window.location.origin}/api/home/public`;
  const HOME_VK_AUTH_COMPLETE_API_URL = `${HOME_API_BASE_URL}/vk/complete`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const REMEMBER_STORAGE_KEY = "home-user-remember";
  const BARBER_SESSION_STORAGE_KEY = "barber-session";
  const BARBER_REMEMBER_STORAGE_KEY = "barber-session-remember";
  const LOGOUT_MARKER_STORAGE_KEY = "home-user-logout-marker";
  const REFERRAL_STORAGE_KEY = "home-user-referral-code";
  const HOME_PAGE_URL = "/booking/";
  const IS_ANDROID_APP_SHELL = /BrotherShopAndroidApp/i.test(window.navigator?.userAgent || "");

  if (document.documentElement) document.documentElement.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);
  if (document.body) document.body.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);

  const loginTab = document.getElementById("tab-login");
  const registerTab = document.getElementById("tab-register");
  const tabsRoot = document.querySelector(".tabs");
  const authFrame = document.getElementById("auth-frame");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginPhoneInput = document.getElementById("login-phone");
  const registerFullNameField = document.getElementById("register-fullname-field");
  const registerFullNameInput = document.getElementById("register-fullname");
  const registerPhoneInput = document.getElementById("register-phone");
  const registerPasswordInput = document.getElementById("register-password");
  const registerPasswordRepeatInput = document.getElementById("register-password-repeat");
  const registerPrivacyConsentInput = document.getElementById("register-privacy-consent");
  const registerSubmitButton = document.getElementById("register-submit");
  const loginPasswordInput = document.getElementById("login-password");
  const togglePasswordButton = document.getElementById("toggle-password");
  const statusElement = document.getElementById("status");
  const forgotLink = document.getElementById("forgot-link");
  const vkIdContainer = document.getElementById("vkid-onetap");

  const isReady =
    loginTab &&
    registerTab &&
    loginForm &&
    registerForm &&
    authFrame &&
    loginPhoneInput &&
    registerFullNameField &&
    registerPhoneInput &&
    registerPasswordInput &&
    registerPasswordRepeatInput &&
    registerPrivacyConsentInput &&
    registerSubmitButton &&
    loginPasswordInput &&
    togglePasswordButton &&
    statusElement &&
    forgotLink &&
    vkIdContainer;

  if (!isReady) {
    document.body.classList.remove("checking");
    return;
  }

  let vkIdLoginAvailable = false;
  let vkIdAppId = "";
  let vkIdSdkPromise = null;
  let vkIdOneTapRendered = false;

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

  const getPendingReferralCode = () =>
    normalizeText(safeStorageGet(getStorageArea("local"), REFERRAL_STORAGE_KEY)).toUpperCase();

  const setPendingReferralCode = (value) => {
    const safeValue = normalizeText(value).toUpperCase();
    if (!safeValue) {
      safeStorageRemove(getStorageArea("local"), REFERRAL_STORAGE_KEY);
      return;
    }
    safeStorageSet(getStorageArea("local"), REFERRAL_STORAGE_KEY, safeValue);
  };

  const normalizeText = (value) => (value == null ? "" : String(value).trim());

  const buildCurrentPageRedirectUrl = () => {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    if (url.pathname && url.pathname !== "/") {
      url.pathname = `${url.pathname.replace(/\/+$/, "")}/`;
    }
    return url.toString();
  };

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
  const countLocalDigitsInSlice = (value) => extractPhoneDigits(value).length;

  const removeDigitFromMaskedValue = (input, mode) => {
    const current = input.value || "";
    const digits = extractPhoneDigits(current);
    if (!digits.length) {
      input.value = "";
      return true;
    }
    const start = input.selectionStart ?? current.length;
    const end = input.selectionEnd ?? start;
    if (start !== end) return false;

    const removeIndex =
      mode === "backspace"
        ? countLocalDigitsInSlice(current.slice(0, start)) - 1
        : countLocalDigitsInSlice(current.slice(0, start));
    if (removeIndex < 0 || removeIndex >= digits.length) return false;

    const nextDigits = `${digits.slice(0, removeIndex)}${digits.slice(removeIndex + 1)}`;
    input.value = formatPhoneMasked(nextDigits);
    const nextPos = input.value.length;
    try {
      input.setSelectionRange(nextPos, nextPos);
    } catch {
      // ignore
    }
    return true;
  };

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
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Backspace" && event.key !== "Delete") return;
      const value = input.value || "";
      const start = input.selectionStart ?? value.length;
      const end = input.selectionEnd ?? start;
      if (start !== end) return;

      if (event.key === "Backspace") {
        if (start <= 0) return;
        const prevChar = value[start - 1];
        if (/\d/.test(prevChar)) return;
        if (removeDigitFromMaskedValue(input, "backspace")) event.preventDefault();
        return;
      }

      const nextChar = value[start];
      if (!nextChar || /\d/.test(nextChar)) return;
      if (removeDigitFromMaskedValue(input, "delete")) event.preventDefault();
    });

    input.addEventListener("input", () => applyPhoneMask(input));
    input.addEventListener("blur", () => {
      if (!extractPhoneDigits(input.value)) input.value = "";
    });
  };

  const buildSessionPayload = (payload = {}) => ({
    token: normalizeText(payload.token),
    user: {
      id: normalizeText(payload.user?.id),
      phone: normalizePhone(payload.user?.phone),
      displayName: normalizeText(payload.user?.displayName || payload.user?.phone),
      access: {
        isBarber: payload.user?.access?.isBarber === true,
        role: normalizeText(payload.user?.access?.role) || "client",
        barberId: normalizeText(payload.user?.access?.barberId),
        barberName: normalizeText(payload.user?.access?.barberName),
      },
      authenticatedViaBarberAccess: payload.user?.authenticatedViaBarberAccess === true,
    },
  });

  const buildBarberSessionPayload = (payload = {}) => ({
    token: normalizeText(payload.token),
    username: normalizeText(payload.username || payload.login),
    displayName: normalizeText(payload.displayName || payload.barberName || payload.username),
    barberId: normalizeText(payload.barberId || payload.id),
    role: normalizeText(payload.role),
    barberName: normalizeText(payload.barberName || payload.displayName || payload.username),
    phone: normalizePhone(payload.phone),
  });

  const persistRememberChoice = (remember) => {
    safeStorageSet(getStorageArea("local"), REMEMBER_STORAGE_KEY, remember ? "1" : "0");
  };

  const persistBarberRememberChoice = (remember) => {
    safeStorageSet(
      getStorageArea("local"),
      BARBER_REMEMBER_STORAGE_KEY,
      remember ? "1" : "0",
    );
  };

  const persistSessionPayload = (payload, remember) => {
    const serialized = JSON.stringify(payload);
    const localStore = getStorageArea("local");
    const sessionStore = getStorageArea("session");
    if (remember) {
      safeStorageSet(localStore, SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(sessionStore, SESSION_STORAGE_KEY);
    } else {
      safeStorageSet(sessionStore, SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(localStore, SESSION_STORAGE_KEY);
    }
  };

  const persistBarberSessionPayload = (payload, remember) => {
    const serialized = JSON.stringify(payload);
    const localStore = getStorageArea("local");
    const sessionStore = getStorageArea("session");
    if (remember) {
      safeStorageSet(localStore, BARBER_SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(sessionStore, BARBER_SESSION_STORAGE_KEY);
    } else {
      safeStorageSet(sessionStore, BARBER_SESSION_STORAGE_KEY, serialized);
      safeStorageRemove(localStore, BARBER_SESSION_STORAGE_KEY);
    }
  };

  const clearSessionPayload = () => {
    safeStorageRemove(getStorageArea("local"), SESSION_STORAGE_KEY);
    safeStorageRemove(getStorageArea("session"), SESSION_STORAGE_KEY);
  };

  const clearLogoutMarker = () => {
    safeStorageRemove(getStorageArea("local"), LOGOUT_MARKER_STORAGE_KEY);
    safeStorageRemove(getStorageArea("session"), LOGOUT_MARKER_STORAGE_KEY);
  };

  const hasLogoutMarker = () =>
    Boolean(
      safeStorageGet(getStorageArea("local"), LOGOUT_MARKER_STORAGE_KEY) ||
        safeStorageGet(getStorageArea("session"), LOGOUT_MARKER_STORAGE_KEY),
    );

  const clearBarberSessionPayload = () => {
    safeStorageRemove(getStorageArea("local"), BARBER_SESSION_STORAGE_KEY);
    safeStorageRemove(getStorageArea("session"), BARBER_SESSION_STORAGE_KEY);
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

  const loadPersistedBarberSession = () => {
    const localRaw = safeStorageGet(getStorageArea("local"), BARBER_SESSION_STORAGE_KEY);
    if (localRaw) {
      try {
        return { session: buildBarberSessionPayload(JSON.parse(localRaw)), remember: true };
      } catch {
        // ignore
      }
    }
    const sessionRaw = safeStorageGet(getStorageArea("session"), BARBER_SESSION_STORAGE_KEY);
    if (sessionRaw) {
      try {
        return { session: buildBarberSessionPayload(JSON.parse(sessionRaw)), remember: false };
      } catch {
        // ignore
      }
    }
    const remember = safeStorageGet(getStorageArea("local"), BARBER_REMEMBER_STORAGE_KEY) === "1";
    return { session: null, remember };
  };

  const validateSessionToken = async (token) => {
    if (!token) return null;
    try {
      const response = await fetch(`${HOME_API_BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) return null;
      const payload = await response.json();
      const refreshed = response.headers.get("x-home-session-token");
      return { user: payload?.user || null, nextToken: refreshed || token };
    } catch {
      return null;
    }
  };

  const getPostLoginRedirectUrl = () => {
    const fallbackUrl = new URL(HOME_PAGE_URL, window.location.origin);
    try {
      const params = new URLSearchParams(window.location.search || "");
      const nextValue = normalizeText(params.get("next"));
      if (!nextValue.startsWith("/")) return fallbackUrl.pathname + fallbackUrl.search + fallbackUrl.hash;
      const nextUrl = new URL(nextValue, window.location.origin);
      if (nextUrl.origin !== window.location.origin) {
        return fallbackUrl.pathname + fallbackUrl.search + fallbackUrl.hash;
      }
      return `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    } catch {
      return fallbackUrl.pathname + fallbackUrl.search + fallbackUrl.hash;
    }
  };

  const redirectToHome = () => {
    window.location.replace(getPostLoginRedirectUrl());
  };

  const tryRestoreSession = async () => {
    if (hasLogoutMarker()) {
      clearSessionPayload();
      return null;
    }
    const persisted = loadPersistedSession();
    if (!persisted.session?.token) return null;
    const checked = await validateSessionToken(persisted.session.token);
    if (!checked?.user) {
      clearSessionPayload();
      return null;
    }
    const nextPayload = buildSessionPayload({
      token: checked.nextToken,
      user: checked.user,
    });
    persistSessionPayload(nextPayload, persisted.remember);
    return nextPayload;
  };

  const applyPendingReferralForSession = async (token, referralCode) => {
    const safeToken = normalizeText(token);
    const safeReferralCode = normalizeText(referralCode).toUpperCase();
    if (!safeToken || !safeReferralCode) return false;
    try {
      const response = await fetch(`${HOME_API_ROOT_URL}/referral/apply`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${safeToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ referralCode: safeReferralCode }),
      });
      setPendingReferralCode("");
      return response.ok;
    } catch {
      setPendingReferralCode("");
      return false;
    }
  };

  const setStatus = (text, type = "default") => {
    statusElement.textContent = text || "";
    statusElement.classList.remove("is-error", "is-ok", "is-waiting");
    if (type === "error") statusElement.classList.add("is-error");
    if (type === "ok") statusElement.classList.add("is-ok");
    if (type === "waiting") statusElement.classList.add("is-waiting");
    statusElement.setAttribute("aria-busy", type === "waiting" ? "true" : "false");
  };

  const setPending = (formElement, isPending) => {
    const submitButton = formElement?.querySelector('button[type="submit"]');
    if (!submitButton) return;
    submitButton.disabled = isPending;
    submitButton.style.opacity = isPending ? "0.72" : "1";
    submitButton.style.cursor = isPending ? "not-allowed" : "pointer";
  };

  const setElementHidden = (element, hidden) => {
    if (!element) return;
    element.hidden = Boolean(hidden);
  };

  const isLocalDevOrigin = () => {
    const hostname = normalizeText(window.location.hostname).toLowerCase();
    return (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "[::1]" ||
      hostname.endsWith(".local")
    );
  };

  const setVkIdContainerVisible = (visible) => {
    if (!vkIdContainer) return;
    vkIdContainer.hidden = !visible;
    vkIdContainer.classList.toggle("is-visible", Boolean(visible));
  };

  const applyVkIdLoginAvailability = (isAvailable, appId = "") => {
    vkIdLoginAvailable = Boolean(isAvailable);
    vkIdAppId = normalizeText(appId);
    setVkIdContainerVisible(vkIdLoginAvailable);
  };

  const loadVkIdLoginAvailability = async () => {
    try {
      const response = await fetch(HOME_PUBLIC_API_URL, { cache: "no-store" });
      const payload = await response.json().catch(() => ({}));
      const canUseVkId = !isLocalDevOrigin();
      if (!response.ok) {
        applyVkIdLoginAvailability(false, "");
        return;
      }
      applyVkIdLoginAvailability(
        canUseVkId && payload?.site?.auth?.vkIdEnabled === true && normalizeText(payload?.site?.auth?.vkIdAppId),
        payload?.site?.auth?.vkIdAppId,
      );
    } catch {
      applyVkIdLoginAvailability(false, "");
    }
  };

  const toBase64Url = (input) =>
    window.btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");

  const randomBase64Url = (size = 32) => {
    const bytes = new Uint8Array(size);
    window.crypto.getRandomValues(bytes);
    return toBase64Url(String.fromCharCode(...bytes));
  };

  const loadVkIdSdk = async () => {
    if (window.VKIDSDK) return window.VKIDSDK;
    if (window.VKID) return window.VKID;
    if (vkIdSdkPromise) return vkIdSdkPromise;
    vkIdSdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@vkid/sdk@2.6.5/dist-sdk/umd/index.js";
      script.async = true;
      script.onload = () => {
        if (window.VKIDSDK) resolve(window.VKIDSDK);
        else if (window.VKID) resolve(window.VKID);
        else reject(new Error("VK ID SDK unavailable"));
      };
      script.onerror = () => reject(new Error("VK ID SDK load failed"));
      document.head.appendChild(script);
    });
    return vkIdSdkPromise;
  };

  const handleVkIdLogin = async () => {
    if (!vkIdLoginAvailable || !vkIdAppId) return;
    setStatus("Открываем VK ID…", "waiting");
    try {
      const VKID = await loadVkIdSdk();
      const codeVerifier = randomBase64Url(32);
      const stateToken = randomBase64Url(24);
      VKID.Config.init({
        app: Number(vkIdAppId),
        redirectUrl: buildCurrentPageRedirectUrl(),
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE,
        scope: "phone email",
        state: stateToken,
        codeVerifier,
      });
      const authResult = await VKID.Auth.login({
        lang: VKID.Languages.RUS,
        scheme: VKID.Scheme.LIGHT,
      });
      const response = await fetch(HOME_VK_AUTH_COMPLETE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: authResult?.code,
          deviceId: authResult?.device_id,
          codeVerifier,
          redirectUrl: buildCurrentPageRedirectUrl(),
          referralCode: getPendingReferralCode(),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
        throw new Error(payload?.message || "Не удалось выполнить вход через VK ID.");
      }
      const sessionPayload = buildSessionPayload({
        token: payload.token,
        user: payload.user,
      });
      clearLogoutMarker();
      persistRememberChoice(true);
      persistSessionPayload(sessionPayload, true);
      setPendingReferralCode("");
      redirectToHome();
    } catch (error) {
      setStatus(normalizeText(error?.message) || "Не удалось выполнить вход через VK ID.", "error");
    }
  };

  const handleVkIdOneTapSuccess = async ({ code, deviceId, tokenPayload }) => {
    const response = await fetch(HOME_VK_AUTH_COMPLETE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        deviceId,
        tokenPayload,
        redirectUrl: buildCurrentPageRedirectUrl(),
        referralCode: getPendingReferralCode(),
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
      throw new Error(payload?.message || "Не удалось выполнить вход через VK ID.");
    }
    const sessionPayload = buildSessionPayload({
      token: payload.token,
      user: payload.user,
    });
    clearLogoutMarker();
    persistRememberChoice(true);
    persistSessionPayload(sessionPayload, true);
    setPendingReferralCode("");
    redirectToHome();
  };

  const exchangeVkIdCodeSafe = async (VKID, code, deviceId, timeoutMs = 900) => {
    if (!VKID?.Auth?.exchangeCode || !code || !deviceId) return null;
    try {
      return await Promise.race([
        VKID.Auth.exchangeCode(code, deviceId),
        new Promise((_, reject) => window.setTimeout(() => reject(new Error("VK_EXCHANGE_TIMEOUT")), timeoutMs)),
      ]);
    } catch {
      return null;
    }
  };

  const renderVkIdOneTap = async () => {
    if (!vkIdLoginAvailable || !vkIdAppId || !vkIdContainer) return;
    if (vkIdOneTapRendered) return;
    try {
      const VKID = await loadVkIdSdk();
      VKID.Config.init({
        app: Number(vkIdAppId),
        redirectUrl: buildCurrentPageRedirectUrl(),
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE,
        scope: "phone email",
      });
      vkIdContainer.innerHTML = "";
      const oneTap = new VKID.OneTap();
      oneTap
        .render({
          container: vkIdContainer,
          scheme: VKID.Scheme?.DARK || "dark",
          showAlternativeLogin: true,
          styles: {
            borderRadius: 999,
          },
        })
        .on(VKID.WidgetEvents.ERROR, (error) => {
          console.warn("VK ID widget error", error);
          setVkIdContainerVisible(false);
        })
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, async (payload) => {
          try {
            setStatus("Выполняем вход через VK ID...", "waiting");
            const tokenPayload = await exchangeVkIdCodeSafe(
              VKID,
              payload?.code,
              payload?.device_id,
            );
            await handleVkIdOneTapSuccess({
              code: payload?.code,
              deviceId: payload?.device_id,
              tokenPayload,
            });
          } catch (error) {
            setStatus(normalizeText(error?.message) || "Не удалось выполнить вход через VK ID.", "error");
          }
        });
      vkIdOneTapRendered = true;
    } catch (error) {
      console.warn("VK ID One Tap init failed", error);
      setVkIdContainerVisible(false);
    }
  };

  const switchTab = (tab) => {
    const showLogin = tab === "login";
    tabsRoot.setAttribute("data-active", showLogin ? "login" : "register");
    loginTab.classList.toggle("is-active", showLogin);
    registerTab.classList.toggle("is-active", !showLogin);
    loginTab.setAttribute("aria-selected", showLogin ? "true" : "false");
    registerTab.setAttribute("aria-selected", showLogin ? "false" : "true");
    loginForm.classList.toggle("is-active", showLogin);
    registerForm.classList.toggle("is-active", !showLogin);
    setStatus("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatus("");
    setPending(loginForm, true);

    const normalizedPhone = normalizePhone(
      formatPhoneMasked(extractPhoneDigits(loginPhoneInput.value)),
    );
    const password = normalizeText(loginPasswordInput.value);
    const referralCode = getPendingReferralCode();

    if (!isPhoneComplete(loginPhoneInput.value) || !normalizedPhone) {
      setStatus("Введите корректный номер телефона.", "error");
      setPending(loginForm, false);
      return;
    }
    if (!password) {
      setStatus("Введите пароль.", "error");
      setPending(loginForm, false);
      return;
    }

    try {
      let homeResponse = null;
      let homePayload = {};
      let homeError = null;
      try {
        homeResponse = await fetch(`${HOME_API_BASE_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: normalizedPhone, password, referralCode }),
        });
        homePayload = await homeResponse.json().catch(() => ({}));
      } catch (error) {
        homeError = error;
      }
      if (homeResponse?.ok && homePayload?.success && homePayload?.token && homePayload?.user) {
        const sessionPayload = buildSessionPayload({
          token: homePayload.token,
          user: homePayload.user,
        });
        clearLogoutMarker();
        persistRememberChoice(true);
        persistSessionPayload(sessionPayload, true);
        setPendingReferralCode("");
        redirectToHome();
        return;
      }

      if (homeError) {
        setStatus("Сервер недоступен. Попробуйте позже.", "error");
        setPending(loginForm, false);
        return;
      }
      setStatus(
        normalizeText(homePayload?.message) ||
          "Не удалось выполнить вход.",
        "error",
      );
      setPending(loginForm, false);
    } catch {
      setStatus("Не удалось выполнить вход. Попробуйте позже.", "error");
      setPending(loginForm, false);
    }
  };

  const legacyHandleRegister = async (event) => {
    event.preventDefault();
    setStatus("");
    setPending(registerForm, true);

    const fullName = normalizeText(registerFullNameInput.value);
    const phone = normalizePhone(
      formatPhoneMasked(extractPhoneDigits(registerPhoneInput.value)),
    );
    const password = normalizeText(registerPasswordInput?.value);
    const passwordRepeat = normalizeText(registerPasswordRepeatInput?.value);
    const privacyConsentAccepted = registerPrivacyConsentInput?.checked === true;
    const referralCode = getPendingReferralCode();

    if (!fullName || !isPhoneComplete(registerPhoneInput.value) || !phone || !password || !passwordRepeat) {
      setStatus("Заполните все поля регистрации.", "error");
      setPending(registerForm, false);
      return;
    }
    if (password !== passwordRepeat) {
      setStatus("Пароли не совпадают.", "error");
      setPending(registerForm, false);
      return;
    }

    if (!privacyConsentAccepted) {
      setStatus("Подтвердите согласие на обработку персональных данных.", "error");
      setPending(registerForm, false);
      return;
    }

    try {
      const response = await fetch(`${HOME_API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          password,
          displayName: fullName,
          referralCode,
          privacyConsentAccepted,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
        setStatus(payload?.message || "Не удалось зарегистрироваться.", "error");
        setPending(registerForm, false);
        return;
      }
      const sessionPayload = buildSessionPayload({
        token: payload.token,
        user: payload.user,
      });
      clearLogoutMarker();
      persistRememberChoice(true);
      persistSessionPayload(sessionPayload, true);
      setPendingReferralCode("");
      redirectToHome();
    } catch {
      setStatus("Сервер недоступен. Попробуйте позже.", "error");
      setPending(registerForm, false);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setStatus("");
    setPending(registerForm, true);

    const fullName = normalizeText(registerFullNameInput.value);
    const phone = normalizePhone(
      formatPhoneMasked(extractPhoneDigits(registerPhoneInput.value)),
    );
    const password = normalizeText(registerPasswordInput?.value);
    const passwordRepeat = normalizeText(registerPasswordRepeatInput?.value);
    const privacyConsentAccepted = registerPrivacyConsentInput?.checked === true;
    const referralCode = getPendingReferralCode();

    if (!password || !passwordRepeat) {
      setStatus("Введите пароль и повторите его.", "error");
      setPending(registerForm, false);
      return;
    }
    if (password !== passwordRepeat) {
      setStatus("Пароли не совпадают.", "error");
      setPending(registerForm, false);
      return;
    }

    if (!privacyConsentAccepted) {
      setStatus("Подтвердите согласие на обработку персональных данных.", "error");
      setPending(registerForm, false);
      return;
    }

    try {
      if (!fullName || !isPhoneComplete(registerPhoneInput.value) || !phone) {
        setStatus("Заполните все поля регистрации.", "error");
        setPending(registerForm, false);
        return;
      }
      const response = await fetch(`${HOME_API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          password,
          displayName: fullName,
          referralCode,
          privacyConsentAccepted,
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
        setStatus(payload?.message || "Не удалось зарегистрироваться.", "error");
        setPending(registerForm, false);
        return;
      }
      const sessionPayload = buildSessionPayload({
        token: payload.token,
        user: payload.user,
      });
      clearLogoutMarker();
      clearBarberSessionPayload();
      persistRememberChoice(true);
      persistSessionPayload(sessionPayload, true);
      setPendingReferralCode("");
      redirectToHome();
    } catch {
      setStatus("Сервер недоступен. Попробуйте позже.", "error");
      setPending(registerForm, false);
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setStatus("Восстановление пароля пока не подключено.", "error");
  };

  const handleTogglePassword = () => {
    const nextType = loginPasswordInput.type === "password" ? "text" : "password";
    loginPasswordInput.type = nextType;
    togglePasswordButton.innerHTML = nextType === "password" ? EYE_ICON_CLOSED : EYE_ICON_OPEN;
    togglePasswordButton.setAttribute(
      "aria-label",
      nextType === "password" ? "Показать пароль" : "Скрыть пароль",
    );
  };

  const init = async () => {
    togglePasswordButton.innerHTML = EYE_ICON_CLOSED;
    tabsRoot.setAttribute("data-active", "login");
    await loadVkIdLoginAvailability();
    try {
      const params = new URLSearchParams(window.location.search || "");
      const referralCode = normalizeText(params.get("ref"));
      if (referralCode) {
        setPendingReferralCode(referralCode);
      }
    } catch {
      // ignore malformed query string
    }
    attachPhoneMask(loginPhoneInput);
    attachPhoneMask(registerPhoneInput);

    loginTab.addEventListener("click", () => switchTab("login"));
    registerTab.addEventListener("click", () => switchTab("register"));
    loginForm.addEventListener("submit", handleLogin);
    registerForm.addEventListener("submit", handleRegister);
    forgotLink.addEventListener("click", handleForgotPassword);
    togglePasswordButton.addEventListener("click", handleTogglePassword);
    void renderVkIdOneTap();

    const restoredHomeSession = await tryRestoreSession();
    if (restoredHomeSession) {
      const referralCode = getPendingReferralCode();
      if (referralCode) {
        await applyPendingReferralForSession(restoredHomeSession.token, referralCode);
      }
      redirectToHome();
      return;
    }
    document.body.classList.remove("checking");
    setStatus("");
  };

  init();
})();
