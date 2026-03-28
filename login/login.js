(function () {
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_TELEGRAM_AUTH_START_API_URL = `${HOME_API_BASE_URL}/telegram/start`;
  const HOME_TELEGRAM_AUTH_STATUS_API_URL = `${HOME_API_BASE_URL}/telegram/status`;
  const HOME_TELEGRAM_AUTH_COMPLETE_API_URL = `${HOME_API_BASE_URL}/telegram/complete`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const REMEMBER_STORAGE_KEY = "home-user-remember";
  const BARBER_SESSION_STORAGE_KEY = "barber-session";
  const BARBER_REMEMBER_STORAGE_KEY = "barber-session-remember";
  const LOGOUT_MARKER_STORAGE_KEY = "home-user-logout-marker";
  const REFERRAL_STORAGE_KEY = "home-user-referral-code";
  const HOME_PAGE_URL = "/booking/";
  const TELEGRAM_AUTH_POLL_FAST_INTERVAL_MS = 700;
  const TELEGRAM_AUTH_POLL_SLOW_INTERVAL_MS = 1500;
  const TELEGRAM_AUTH_POLL_FAST_ATTEMPTS = 6;
  const TELEGRAM_AUTH_INITIAL_POLL_DELAY_MS = 280;
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
  const registerSubmitButton = document.getElementById("register-submit");
  const loginPasswordInput = document.getElementById("login-password");
  const togglePasswordButton = document.getElementById("toggle-password");
  const statusElement = document.getElementById("status");
  const forgotLink = document.getElementById("forgot-link");
  const telegramDivider = document.getElementById("telegram-divider");
  const telegramButton = document.getElementById("telegram-login");
  const telegramSetupBanner = document.getElementById("telegram-setup-banner");
  const telegramSetupEyebrow = document.getElementById("telegram-setup-eyebrow");
  const telegramSetupTitle = document.getElementById("telegram-setup-title");
  const telegramSetupDescription = document.getElementById("telegram-setup-description");

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
    registerSubmitButton &&
    loginPasswordInput &&
    togglePasswordButton &&
    statusElement &&
    forgotLink &&
    telegramDivider &&
    telegramButton &&
    telegramSetupBanner &&
    telegramSetupEyebrow &&
    telegramSetupTitle &&
    telegramSetupDescription;

  if (!isReady) {
    document.body.classList.remove("checking");
    return;
  }

  let telegramPollTimer = null;
  let telegramAuthRequestId = "";
  let telegramAuthFinished = false;
  let telegramPollAttempt = 0;
  let telegramPollInFlight = false;
  let telegramSetupState = {
    active: false,
    requestId: "",
    mode: "",
    phone: "",
    displayName: "",
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

  const resolveTelegramSetupName = (displayName, phone) => {
    const safeName = normalizeText(displayName);
    if (!safeName) return "";
    const safeNamePhone = normalizePhone(safeName);
    const safePhone = normalizePhone(phone);
    if (safeNamePhone && safePhone && safeNamePhone === safePhone) {
      return "";
    }
    return safeName;
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

  const redirectToHome = () => {
    window.location.replace(HOME_PAGE_URL);
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

  const renderTelegramSetupUi = () => {
    const isActive = telegramSetupState.active;
    const isSetPasswordMode = telegramSetupState.mode === "set_password";
    setElementHidden(telegramDivider, isActive);
    setElementHidden(telegramButton, isActive);
    setElementHidden(telegramSetupBanner, !isActive);
    setElementHidden(tabsRoot, isActive);
    authFrame.classList.toggle("is-telegram-setup", isActive);
    registerSubmitButton.classList.toggle("telegram-setup-submit", isActive);

    registerPhoneInput.readOnly = isActive;
    registerPhoneInput.setAttribute("aria-readonly", isActive ? "true" : "false");
    registerFullNameInput.readOnly = false;
    registerFullNameInput.required = true;

    registerSubmitButton.textContent = isActive
      ? isSetPasswordMode
        ? "ВОЙТИ"
        : "ЗАВЕРШИТЬ РЕГИСТРАЦИЮ"
      : "СОЗДАТЬ АККАУНТ";

    if (!isActive) {
      telegramSetupEyebrow.textContent = "TELEGRAM ПОДТВЕРЖДЕН";
      telegramSetupTitle.textContent = "Завершите вход на сайте";
      telegramSetupDescription.textContent =
        "Остался последний шаг: заполните данные ниже и сохраните пароль для входа на сайте.";
      registerFullNameInput.placeholder = "Введите ФИО";
      registerPhoneInput.placeholder = "Введите номер телефона";
      return;
    }

    if (isSetPasswordMode) {
      telegramSetupEyebrow.textContent = "ПЕРВЫЙ ВХОД ЧЕРЕЗ TELEGRAM";
      telegramSetupTitle.textContent = "Вы почти вошли";
      telegramSetupDescription.textContent =
        "Это нужно только один раз: проверьте имя и задайте пароль для входа на сайте.";
      registerFullNameInput.placeholder = "ФИО";
    } else {
      telegramSetupEyebrow.textContent = "TELEGRAM ПОДТВЕРЖДЕН";
      telegramSetupTitle.textContent = "Завершите регистрацию";
      telegramSetupDescription.textContent =
        "Осталось указать имя и пароль, чтобы завершить вход на сайте.";
      registerFullNameInput.placeholder = "Введите ФИО";
    }

    registerPhoneInput.placeholder = "Телефон подтвержден через Telegram";
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
          body: JSON.stringify({ phone: normalizedPhone, password }),
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

    try {
      const response = await fetch(`${HOME_API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password, displayName: fullName, referralCode }),
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

    try {
      if (telegramSetupState.active) {
        if (
          !telegramSetupState.requestId ||
          !isPhoneComplete(registerPhoneInput.value) ||
          !phone
        ) {
          setStatus("Введите корректный номер телефона для завершения Telegram-входа.", "error");
          setPending(registerForm, false);
          return;
        }
        if (telegramSetupState.mode === "register" && !fullName) {
          setStatus("Введите ФИО для создания аккаунта.", "error");
          setPending(registerForm, false);
          return;
        }
        const response = await fetch(HOME_TELEGRAM_AUTH_COMPLETE_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            requestId: telegramSetupState.requestId,
            password,
            phone,
            displayName: telegramSetupState.mode === "register" ? fullName : fullName || "",
            referralCode,
          }),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
          setStatus(
            payload?.message || "Не удалось завершить вход через Telegram.",
            "error",
          );
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
        resetTelegramSetupState();
        redirectToHome();
        return;
      }

      if (!fullName || !isPhoneComplete(registerPhoneInput.value) || !phone) {
        setStatus("Заполните все поля регистрации.", "error");
        setPending(registerForm, false);
        return;
      }
      const response = await fetch(`${HOME_API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password, displayName: fullName, referralCode }),
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

  const resetTelegramSetupState = () => {
    telegramSetupState = {
      active: false,
      requestId: "",
      mode: "",
      phone: "",
      displayName: "",
    };
    registerPhoneInput.readOnly = false;
    registerFullNameInput.required = true;
    registerFullNameInput.readOnly = false;
    renderTelegramSetupUi();
  };

  const applyTelegramSetupState = (payload = {}) => {
    telegramSetupState = {
      active: true,
      requestId: normalizeText(payload.requestId),
      mode: normalizeText(payload.setupMode || "register"),
      phone: normalizePhone(payload.phone),
      displayName: normalizeText(payload.displayName),
    };
    if (telegramSetupState.phone) {
      registerPhoneInput.value = formatPhoneMasked(extractPhoneDigits(telegramSetupState.phone));
    }
    registerFullNameInput.value = resolveTelegramSetupName(
      telegramSetupState.displayName,
      telegramSetupState.phone,
    );
    registerPasswordInput.value = "";
    registerPasswordRepeatInput.value = "";
    renderTelegramSetupUi();
    switchTab("register");
  };

  const setTelegramPending = (isPending) => {
    const pending = Boolean(isPending);
    telegramButton.disabled = pending;
    telegramButton.style.opacity = pending ? "0.72" : "1";
    telegramButton.style.cursor = pending ? "not-allowed" : "pointer";
    telegramButton.classList.toggle("is-pending", pending);
  };

  const stopTelegramPolling = () => {
    if (telegramPollTimer) {
      window.clearTimeout(telegramPollTimer);
      telegramPollTimer = null;
    }
  };

  const finishTelegramFlow = () => {
    stopTelegramPolling();
    telegramAuthFinished = true;
    telegramAuthRequestId = "";
    telegramPollAttempt = 0;
    telegramPollInFlight = false;
    setTelegramPending(false);
  };

  const resolveTelegramPollDelay = () =>
    telegramPollAttempt < TELEGRAM_AUTH_POLL_FAST_ATTEMPTS
      ? TELEGRAM_AUTH_POLL_FAST_INTERVAL_MS
      : TELEGRAM_AUTH_POLL_SLOW_INTERVAL_MS;

  const scheduleTelegramPolling = (delayMs) => {
    stopTelegramPolling();
    if (!telegramAuthRequestId || telegramAuthFinished) return;
    telegramPollTimer = window.setTimeout(() => {
      void pollTelegramAuthStatus();
    }, Number.isFinite(delayMs) ? Math.max(0, delayMs) : resolveTelegramPollDelay());
  };

  const pollTelegramAuthStatus = async () => {
    if (!telegramAuthRequestId || telegramAuthFinished || telegramPollInFlight) return;
    telegramPollInFlight = true;
    try {
      const response = await fetch(
        `${HOME_TELEGRAM_AUTH_STATUS_API_URL}?requestId=${encodeURIComponent(telegramAuthRequestId)}`,
      );
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus(
          normalizeText(payload?.message) || "Ошибка проверки Telegram-авторизации.",
          "error",
        );
        finishTelegramFlow();
        return;
      }
      if (!payload?.done) {
        telegramPollAttempt += 1;
        setStatus("Проверяем подтверждение входа в Telegram...", "waiting");
        scheduleTelegramPolling();
        return;
      }
      if (payload?.success && payload?.needsSetup && payload?.requestId) {
        finishTelegramFlow();
        applyTelegramSetupState(payload);
        setStatus("");
        return;
      }
      if (payload?.success && payload?.token && payload?.user) {
        const sessionPayload = buildSessionPayload({
          token: payload.token,
          user: payload.user,
        });
        clearLogoutMarker();
        clearBarberSessionPayload();
        persistRememberChoice(true);
        persistSessionPayload(sessionPayload, true);
        finishTelegramFlow();
        redirectToHome();
        return;
      }
      setStatus(
        normalizeText(payload?.message) || "Telegram-авторизация не завершена.",
        "error",
      );
      finishTelegramFlow();
    } catch {
      telegramPollAttempt += 1;
      scheduleTelegramPolling();
    } finally {
      telegramPollInFlight = false;
    }
  };

  const triggerTelegramStatusRefresh = () => {
    if (!telegramAuthRequestId || telegramAuthFinished) return;
    stopTelegramPolling();
    void pollTelegramAuthStatus();
  };

  const handleTelegramLogin = async () => {
    setStatus("");
    resetTelegramSetupState();
    setTelegramPending(true);
    telegramAuthFinished = false;
    telegramAuthRequestId = "";
    telegramPollAttempt = 0;
    telegramPollInFlight = false;
    stopTelegramPolling();
    try {
      const response = await fetch(HOME_TELEGRAM_AUTH_START_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success || !payload?.requestId || !payload?.code) {
        setStatus(
          normalizeText(payload?.message) || "Не удалось запустить Telegram-авторизацию.",
          "error",
        );
        setTelegramPending(false);
        return;
      }
      telegramAuthRequestId = normalizeText(payload.requestId);
      setStatus("Подтвердите вход в Telegram. Ожидаем ответ...", "waiting");
      if (normalizeText(payload.botLink)) {
        window.open(payload.botLink, "_blank", "noopener,noreferrer");
      } else {
        setStatus("Не удалось открыть Telegram-бота. Попробуйте позже.", "error");
        setTelegramPending(false);
        return;
      }
      scheduleTelegramPolling(TELEGRAM_AUTH_INITIAL_POLL_DELAY_MS);
    } catch {
      setStatus("Сервер недоступен. Попробуйте позже.", "error");
      setTelegramPending(false);
    }
  };

  const handleTogglePassword = () => {
    const nextType = loginPasswordInput.type === "password" ? "text" : "password";
    loginPasswordInput.type = nextType;
    togglePasswordButton.setAttribute(
      "aria-label",
      nextType === "password" ? "Показать пароль" : "Скрыть пароль",
    );
  };

  const init = async () => {
    resetTelegramSetupState();
    tabsRoot.setAttribute("data-active", "login");
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
    telegramButton.addEventListener("click", handleTelegramLogin);
    togglePasswordButton.addEventListener("click", handleTogglePassword);
    window.addEventListener("beforeunload", stopTelegramPolling);
    window.addEventListener("focus", triggerTelegramStatusRefresh);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        triggerTelegramStatusRefresh();
      }
    });

    const restoredHomeSession = await tryRestoreSession();
    if (restoredHomeSession) {
      redirectToHome();
      return;
    }
    document.body.classList.remove("checking");
    setStatus("");
  };

  init();
})();
