(function () {
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_BARBERS_API_URL = `${window.location.origin}/api/home/barbers`;
  const HOME_FALLBACK_BARBERS_API_URL = `${window.location.origin}/api/login/options`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const REMEMBER_STORAGE_KEY = "home-user-remember";
  const FALLBACK_BARBER_IMAGE = "/Image/card/Barber_photo.png";

  const loginTab = document.getElementById("tab-login");
  const registerTab = document.getElementById("tab-register");
  const tabsRoot = document.querySelector(".tabs");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginPhoneInput = document.getElementById("login-phone");
  const registerFullNameInput = document.getElementById("register-fullname");
  const registerPhoneInput = document.getElementById("register-phone");
  const loginPasswordInput = document.getElementById("login-password");
  const togglePasswordButton = document.getElementById("toggle-password");
  const statusElement = document.getElementById("status");
  const forgotLink = document.getElementById("forgot-link");
  const telegramButton = document.getElementById("telegram-login");

  const bookingScreen = document.getElementById("booking-screen");
  const logoutButton = document.getElementById("logout-button");
  const barberNameElement = document.getElementById("barber-name");
  const barberMainImage = document.getElementById("barber-main-image");
  const bookingSubtitle = document.getElementById("booking-subtitle");
  const bookingStatus = document.getElementById("booking-status");
  const dotsRoot = document.getElementById("barber-dots");
  const thumbsRoot = document.getElementById("barber-thumbs");
  const prevBarberButton = document.getElementById("prev-barber");
  const nextBarberButton = document.getElementById("next-barber");
  const bookButton = document.getElementById("book-button");

  const bookingState = {
    session: null,
    barbers: [],
    activeIndex: 0,
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
    if (digits.startsWith("7") || digits.startsWith("8")) {
      digits = digits.slice(1);
    }
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
    if (!input) return false;
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
    if (!input) return;
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
    if (!input) return;
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
    },
  });

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

  const persistRememberChoice = (remember) => {
    safeStorageSet(getStorageArea("local"), REMEMBER_STORAGE_KEY, remember ? "1" : "0");
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

  const clearSessionPayload = () => {
    safeStorageRemove(getStorageArea("local"), SESSION_STORAGE_KEY);
    safeStorageRemove(getStorageArea("session"), SESSION_STORAGE_KEY);
  };

  const setStatus = (text, type = "default") => {
    statusElement.textContent = text || "";
    statusElement.classList.remove("is-error", "is-ok");
    if (type === "error") statusElement.classList.add("is-error");
    if (type === "ok") statusElement.classList.add("is-ok");
  };

  const setBookingStatus = (text, type = "default") => {
    bookingStatus.textContent = text || "";
    bookingStatus.classList.remove("is-error");
    if (type === "error") bookingStatus.classList.add("is-error");
  };

  const setPending = (formElement, isPending) => {
    const submitButton = formElement?.querySelector('button[type="submit"]');
    if (!submitButton) return;
    submitButton.disabled = isPending;
    submitButton.style.opacity = isPending ? "0.72" : "1";
    submitButton.style.cursor = isPending ? "not-allowed" : "pointer";
  };

  const switchTab = (tab) => {
    const showLogin = tab === "login";
    tabsRoot?.setAttribute("data-active", showLogin ? "login" : "register");
    loginTab.classList.toggle("is-active", showLogin);
    registerTab.classList.toggle("is-active", !showLogin);
    loginTab.setAttribute("aria-selected", showLogin ? "true" : "false");
    registerTab.setAttribute("aria-selected", showLogin ? "false" : "true");
    loginForm.classList.toggle("is-active", showLogin);
    registerForm.classList.toggle("is-active", !showLogin);
    setStatus("");
  };

  const resolveImageSource = (value) => normalizeText(value) || FALLBACK_BARBER_IMAGE;
  const mapBarberPayload = (item, index, forceImage = "") => {
    const displayName =
      normalizeText(item?.name) ||
      normalizeText(item?.fullName) ||
      normalizeText(item?.label) ||
      normalizeText(item?.login) ||
      normalizeText(item?.phone) ||
      `Барбер ${index + 1}`;
    const imageCandidate = forceImage || item?.imageUrl || item?.thumbnailUrl;
    return {
      id: normalizeText(item?.id) || `barber-${index + 1}`,
      name: displayName,
      fullName: normalizeText(item?.fullName) || displayName,
      description: normalizeText(item?.description),
      color: normalizeText(item?.color),
      imageUrl: resolveImageSource(imageCandidate),
      thumbnailUrl: resolveImageSource(item?.thumbnailUrl || imageCandidate),
    };
  };

  const getCurrentBarber = () => {
    if (!bookingState.barbers.length) return null;
    const safeIndex = Math.min(
      Math.max(bookingState.activeIndex, 0),
      bookingState.barbers.length - 1,
    );
    bookingState.activeIndex = safeIndex;
    return bookingState.barbers[safeIndex];
  };

  const renderBarberDots = () => {
    dotsRoot.innerHTML = "";
    bookingState.barbers.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `barber-dot${index === bookingState.activeIndex ? " is-active" : ""}`;
      dot.setAttribute("aria-label", `Барбер ${index + 1}`);
      dot.addEventListener("click", () => {
        bookingState.activeIndex = index;
        renderBooking();
      });
      dotsRoot.appendChild(dot);
    });
  };

  const renderBarberThumbs = () => {
    thumbsRoot.innerHTML = "";
    bookingState.barbers.forEach((barber, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `barber-thumb${index === bookingState.activeIndex ? " is-active" : ""}`;
      button.setAttribute("aria-label", barber.fullName || barber.name || `Барбер ${index + 1}`);
      button.addEventListener("click", () => {
        bookingState.activeIndex = index;
        renderBooking();
      });

      const image = document.createElement("img");
      image.src = resolveImageSource(barber.thumbnailUrl || barber.imageUrl);
      image.alt = barber.fullName || barber.name || "Барбер";
      image.loading = "lazy";

      button.appendChild(image);
      thumbsRoot.appendChild(button);
    });
  };

  const renderBooking = () => {
    const current = getCurrentBarber();
    if (!current) {
      barberNameElement.textContent = "БАРБЕР СКОРО";
      barberMainImage.src = FALLBACK_BARBER_IMAGE;
      barberMainImage.alt = "Барбер";
      bookingSubtitle.textContent = "Список барберов временно пуст.";
      dotsRoot.innerHTML = "";
      thumbsRoot.innerHTML = "";
      bookButton.disabled = true;
      return;
    }

    barberNameElement.textContent = (current.name || "Барбер").toUpperCase();
    barberMainImage.src = resolveImageSource(current.imageUrl);
    barberMainImage.alt = current.fullName || current.name || "Барбер";
    bookingSubtitle.textContent = current.description || current.fullName || "";
    bookButton.disabled = false;

    renderBarberDots();
    renderBarberThumbs();
  };

  const fetchHomeBarbers = async (token) => {
    const response = await fetch(HOME_BARBERS_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const payload = await response.json();
      const list = Array.isArray(payload?.barbers) ? payload.barbers : [];
      return {
        source: "home",
        barbers: list.map((item, index) => mapBarberPayload(item, index)),
      };
    }
    if (response.status !== 404) {
      throw new Error("BARBERS_FETCH_FAILED");
    }

    const fallbackResponse = await fetch(HOME_FALLBACK_BARBERS_API_URL);
    if (!fallbackResponse.ok) {
      throw new Error("BARBERS_FETCH_FAILED");
    }
    const fallbackPayload = await fallbackResponse.json().catch(() => []);
    const fallbackList = Array.isArray(fallbackPayload)
      ? fallbackPayload.filter(
          (item) => normalizeText(item?.id).toLowerCase() !== "creator",
        )
      : [];

    return {
      source: "legacy",
      barbers: fallbackList.map((item, index) =>
        mapBarberPayload(item, index, FALLBACK_BARBER_IMAGE),
      ),
    };
  };

  const refreshBarbers = async () => {
    const token = normalizeText(bookingState.session?.token);
    if (!token) {
      bookingState.barbers = [];
      renderBooking();
      return;
    }
    try {
      const { barbers, source } = await fetchHomeBarbers(token);
      bookingState.barbers = barbers;
      if (bookingState.activeIndex >= barbers.length) bookingState.activeIndex = 0;
      if (source === "legacy") {
        setBookingStatus("Загружен базовый список барберов. Обновите сервер для карточек.");
      } else {
        setBookingStatus("");
      }
      renderBooking();
    } catch {
      bookingState.barbers = [];
      setBookingStatus("Не удалось загрузить список барберов.", "error");
      renderBooking();
    }
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

  const tryRestoreSession = async () => {
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

  const setAuthenticatedView = async (sessionPayload) => {
    bookingState.session = sessionPayload;
    bookingScreen.hidden = false;
    document.body.classList.add("authenticated");
    document.body.classList.remove("checking");
    await refreshBarbers();
  };

  const setGuestView = () => {
    bookingState.session = null;
    bookingState.barbers = [];
    bookingState.activeIndex = 0;
    bookingScreen.hidden = true;
    document.body.classList.remove("authenticated");
    document.body.classList.remove("checking");
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
      const response = await fetch(`${HOME_API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalizedPhone, password }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.success || !payload?.token || !payload?.user) {
        setStatus(payload?.message || "Не удалось выполнить вход.", "error");
        setPending(loginForm, false);
        return;
      }
      const sessionPayload = buildSessionPayload({
        token: payload.token,
        user: payload.user,
      });
      persistRememberChoice(true);
      persistSessionPayload(sessionPayload, true);
      setPending(loginForm, false);
      await setAuthenticatedView(sessionPayload);
    } catch {
      setStatus("Сервер недоступен. Попробуйте позже.", "error");
      setPending(loginForm, false);
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
    const password = normalizeText(document.getElementById("register-password").value);
    const passwordRepeat = normalizeText(document.getElementById("register-password-repeat").value);

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
        body: JSON.stringify({ phone, password, displayName: fullName }),
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
      persistRememberChoice(true);
      persistSessionPayload(sessionPayload, true);
      setPending(registerForm, false);
      await setAuthenticatedView(sessionPayload);
    } catch {
      setStatus("Сервер недоступен. Попробуйте позже.", "error");
      setPending(registerForm, false);
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setStatus("Восстановление пароля пока не подключено.", "error");
  };

  const handleTelegramLogin = () => {
    setStatus("Вход через Telegram пока не подключен.", "error");
  };

  const handleTogglePassword = () => {
    const nextType = loginPasswordInput.type === "password" ? "text" : "password";
    loginPasswordInput.type = nextType;
    togglePasswordButton.setAttribute(
      "aria-label",
      nextType === "password" ? "Показать пароль" : "Скрыть пароль",
    );
  };

  const handleLogout = () => {
    clearSessionPayload();
    setBookingStatus("");
    setGuestView();
  };

  const handlePrevBarber = () => {
    if (!bookingState.barbers.length) return;
    bookingState.activeIndex =
      (bookingState.activeIndex - 1 + bookingState.barbers.length) % bookingState.barbers.length;
    renderBooking();
  };

  const handleNextBarber = () => {
    if (!bookingState.barbers.length) return;
    bookingState.activeIndex = (bookingState.activeIndex + 1) % bookingState.barbers.length;
    renderBooking();
  };

  const handleBook = () => {
    const current = getCurrentBarber();
    if (!current) return;
    setBookingStatus(`Запись к ${current.fullName} скоро будет доступна в этом разделе.`);
  };

  const init = async () => {
    tabsRoot?.setAttribute("data-active", "login");
    attachPhoneMask(loginPhoneInput);
    attachPhoneMask(registerPhoneInput);

    loginTab.addEventListener("click", () => switchTab("login"));
    registerTab.addEventListener("click", () => switchTab("register"));
    loginForm.addEventListener("submit", handleLogin);
    registerForm.addEventListener("submit", handleRegister);
    forgotLink.addEventListener("click", handleForgotPassword);
    telegramButton.addEventListener("click", handleTelegramLogin);
    togglePasswordButton.addEventListener("click", handleTogglePassword);
    logoutButton.addEventListener("click", handleLogout);
    prevBarberButton.addEventListener("click", handlePrevBarber);
    nextBarberButton.addEventListener("click", handleNextBarber);
    bookButton.addEventListener("click", handleBook);

    const restoredSession = await tryRestoreSession();
    if (restoredSession) {
      await setAuthenticatedView(restoredSession);
      return;
    }

    setGuestView();
  };

  init();
})();
