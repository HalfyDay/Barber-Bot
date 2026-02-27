(function () {
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_BARBERS_API_URL = `${window.location.origin}/api/home/barbers`;
  const HOME_FALLBACK_BARBERS_API_URL = `${window.location.origin}/api/login/options`;
  const HOME_BOOKING_SERVICES_API_URL = `${window.location.origin}/api/home/booking/services`;
  const HOME_BOOKING_DATES_API_URL = `${window.location.origin}/api/home/booking/dates`;
  const HOME_BOOKING_TIMES_API_URL = `${window.location.origin}/api/home/booking/times`;
  const HOME_BOOKING_APPOINTMENTS_API_URL = `${window.location.origin}/api/home/booking/appointments`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const LOGIN_PAGE_URL = "/login/";
  const FALLBACK_BARBER_IMAGE = "/Image/card/Barber_photo.png";
  const WEEKDAY_LABELS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const MONTH_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  });
  const DATE_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const bookingScreen = document.getElementById("booking-screen");
  const logoutButton = document.getElementById("logout-button");
  const barberNameElement = document.getElementById("barber-name");
  const barberMainImage = document.getElementById("barber-main-image");
  const barberLayerImage = document.getElementById("barber-layer-image");
  const barberLayerName = document.getElementById("barber-layer-name");
  const barberLayerPhrase = document.getElementById("barber-layer-phrase");
  const barberLayerServices = document.getElementById("barber-layer-services");
  const bookingSubtitle = document.getElementById("booking-subtitle");
  const bookingStatus = document.getElementById("booking-status");
  const dotsRoot = document.getElementById("barber-dots");
  const barberCounter = document.getElementById("barber-counter");
  const thumbsRoot = document.getElementById("barber-thumbs");
  const prevBarberButton = document.getElementById("prev-barber");
  const nextBarberButton = document.getElementById("next-barber");
  const bookButton = document.getElementById("book-button");
  const bookButtonDark = document.getElementById("book-button-dark");
  const bookingLayerDark = document.querySelector(".booking-layer-dark");
  const bookingFlowRoot = document.getElementById("booking-flow");
  const bookingFlowBackButton = document.getElementById("booking-flow-back");
  const bookingFlowStep = document.getElementById("booking-flow-step");
  const bookingFlowTitle = document.getElementById("booking-flow-title");
  const bookingFlowMeta = document.getElementById("booking-flow-meta");
  const bookingFlowContent = document.getElementById("booking-flow-content");
  const bookingFlowStatus = document.getElementById("booking-flow-status");
  const bookingFlowConfirmButton = document.getElementById("booking-flow-confirm");
  const bookingServicesActionsExternal = document.getElementById(
    "booking-services-actions-external",
  );

  const isReady =
    bookingScreen &&
    logoutButton &&
    barberNameElement &&
    barberMainImage &&
    barberLayerImage &&
    barberLayerName &&
    barberLayerPhrase &&
    barberLayerServices &&
    bookingSubtitle &&
    bookingStatus &&
    dotsRoot &&
    barberCounter &&
    thumbsRoot &&
    prevBarberButton &&
    nextBarberButton &&
    bookButton &&
    bookButtonDark &&
    bookingLayerDark &&
    bookingFlowRoot &&
    bookingFlowBackButton &&
    bookingFlowStep &&
    bookingFlowTitle &&
    bookingFlowMeta &&
    bookingFlowContent &&
    bookingFlowStatus &&
    bookingFlowConfirmButton &&
    bookingServicesActionsExternal;

  if (!isReady) {
    document.body.classList.remove("checking");
    return;
  }

  const bookingState = {
    session: null,
    barbers: [],
    activeIndex: 0,
    remember: false,
  };

  const bookingFlowState = {
    active: false,
    loading: false,
    step: "idle",
    barber: null,
    services: [],
    selectedServices: [],
    availableDates: [],
    selectedDate: "",
    availableTimes: [],
    selectedTime: null,
    totalDuration: 0,
    calendarMonthIndex: 0,
    requestNonce: 0,
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
    return { session: null, remember: false };
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

  const updateSessionTokenFromHeader = (response) => {
    const refreshedToken = normalizeText(response?.headers?.get("x-home-session-token"));
    if (!refreshedToken || !bookingState.session) return;
    bookingState.session.token = refreshedToken;
    persistSessionPayload(bookingState.session, bookingState.remember);
  };

  const parseApiError = async (response, fallbackMessage) => {
    const fallback = normalizeText(fallbackMessage) || "Не удалось выполнить запрос.";
    try {
      const payload = await response.json();
      return normalizeText(payload?.error || payload?.message) || fallback;
    } catch {
      return fallback;
    }
  };

  const setBookingStatus = (text, type = "default") => {
    bookingStatus.textContent = text || "";
    bookingStatus.classList.remove("is-error");
    if (type === "error") bookingStatus.classList.add("is-error");
  };

  const setFlowStatus = (text, type = "default") => {
    bookingFlowStatus.textContent = normalizeText(text);
    bookingFlowStatus.classList.remove("is-error", "is-ok");
    if (type === "error") bookingFlowStatus.classList.add("is-error");
    if (type === "ok") bookingFlowStatus.classList.add("is-ok");
  };

  const setFlowHeader = (stepText, titleText, metaText = "") => {
    bookingFlowStep.textContent = normalizeText(stepText);
    bookingFlowTitle.textContent = normalizeText(titleText);
    bookingFlowMeta.textContent = normalizeText(metaText);
  };

  const setFlowBackDisabled = (isDisabled) => {
    bookingFlowBackButton.disabled = Boolean(isDisabled);
  };

  const renderFlowPlaceholder = (text) => {
    resetServiceActionsExternal();
    bookingFlowContent.className = "booking-flow-content";
    bookingFlowContent.innerHTML = "";
    const placeholder = document.createElement("p");
    placeholder.className = "booking-flow-placeholder";
    placeholder.textContent = normalizeText(text);
    bookingFlowContent.appendChild(placeholder);
  };

  const resetFlowConfirmButton = () => {
    bookingFlowConfirmButton.hidden = true;
    bookingFlowConfirmButton.disabled = false;
    bookingFlowConfirmButton.textContent = "ПОДТВЕРДИТЬ ЗАПИСЬ";
    bookingFlowConfirmButton.onclick = null;
  };

  const resetServiceActionsExternal = () => {
    bookingServicesActionsExternal.hidden = true;
    bookingServicesActionsExternal.innerHTML = "";
  };

  const beginFlowRequest = () => {
    bookingFlowState.loading = true;
    bookingFlowState.requestNonce += 1;
    setFlowBackDisabled(true);
    return bookingFlowState.requestNonce;
  };

  const finishFlowRequest = (nonce) => {
    if (bookingFlowState.requestNonce !== nonce) return false;
    bookingFlowState.loading = false;
    setFlowBackDisabled(false);
    return true;
  };

  const parseIsoDate = (isoDate) => {
    const match = normalizeText(isoDate).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const parsed = new Date(year, month - 1, day);
    if (Number.isNaN(parsed.getTime())) return null;
    if (
      parsed.getFullYear() !== year ||
      parsed.getMonth() + 1 !== month ||
      parsed.getDate() !== day
    ) {
      return null;
    }
    return parsed;
  };

  const toIsoDate = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDateLabel = (isoDate) => {
    const parsed = parseIsoDate(isoDate);
    if (!parsed) return normalizeText(isoDate);
    return DATE_FORMATTER.format(parsed);
  };

  const formatMonthLabel = (monthKey) => {
    const parsed = parseIsoDate(`${monthKey}-01`);
    if (!parsed) return normalizeText(monthKey);
    const formatted = MONTH_FORMATTER.format(parsed);
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const formatPrice = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric) || numeric <= 0) return "Цена уточняется";
    return `${Math.round(numeric)} ₽`;
  };

  const buildMonthList = (dates = []) =>
    Array.from(new Set(dates.map((date) => normalizeText(date).slice(0, 7)).filter(Boolean))).sort(
      (a, b) => a.localeCompare(b),
    );

  const resolveImageSource = (value) => normalizeText(value) || FALLBACK_BARBER_IMAGE;
  const stripEmoji = (value) =>
    normalizeText(value)
      .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, "")
      .replace(/\s{2,}/g, " ")
      .trim();

  const mapBarberPayload = (item, index, forceImage = "") => {
    const displayName =
      normalizeText(item?.name) ||
      normalizeText(item?.fullName) ||
      normalizeText(item?.label) ||
      normalizeText(item?.login) ||
      normalizeText(item?.phone) ||
      `Барбер ${index + 1}`;
    const imageCandidate = forceImage || item?.imageUrl || item?.thumbnailUrl;
    const originalCandidate =
      forceImage || item?.originalImageUrl || item?.avatarUrl || item?.thumbnailUrl || item?.imageUrl;
    return {
      id: normalizeText(item?.id) || `barber-${index + 1}`,
      name: displayName,
      fullName: normalizeText(item?.fullName) || displayName,
      description: normalizeText(item?.description),
      phrase: normalizeText(item?.phrase || item?.cardPhrase || item?.description),
      servicesCount: Math.max(0, Number(item?.servicesCount) || 0),
      color: normalizeText(item?.color),
      imageUrl: resolveImageSource(imageCandidate),
      thumbnailUrl: resolveImageSource(item?.thumbnailUrl || imageCandidate),
      originalImageUrl: resolveImageSource(originalCandidate),
    };
  };

  const renderBarberLayerInfo = (barber) => {
    const safeName = stripEmoji(barber?.fullName || barber?.name || "Барбер") || "Барбер";
    const phrase = normalizeText(barber?.phrase) || "—";
    const servicesCount = Math.max(0, Number(barber?.servicesCount) || 0);
    barberLayerName.textContent = safeName.toUpperCase();
    barberLayerPhrase.textContent = phrase;
    barberLayerServices.textContent = `Количество услуг: ${servicesCount}`;
  };

  const hydrateBarberOverlayData = async (barber) => {
    const barberId = normalizeText(barber?.id);
    if (!barberId) return;
    if (barber._overlayHydrating) return;
    const hasPhrase = Boolean(normalizeText(barber?.phrase));
    const currentCount = Number(barber?.servicesCount);
    const hasCount = Number.isFinite(currentCount) && currentCount > 0;
    if (hasPhrase && hasCount) return;
    barber._overlayHydrating = true;
    try {
      const payload = await fetchBookingServices(barberId);
      const services = Array.isArray(payload?.services) ? payload.services : [];
      if (!hasPhrase) {
        barber.phrase =
          normalizeText(payload?.barber?.phrase || payload?.barber?.description || barber?.description) ||
          "—";
      }
      if (!hasCount) {
        barber.servicesCount = services.length;
      }
      const current = getCurrentBarber();
      if (current && normalizeText(current.id) === barberId) {
        renderBarberLayerInfo(current);
      }
    } catch {
      // ignore background overlay hydration failures
    } finally {
      barber._overlayHydrating = false;
    }
  };

  const hydrateAllBarbersOverlayData = async () => {
    if (!Array.isArray(bookingState.barbers) || !bookingState.barbers.length) return;
    await Promise.all(
      bookingState.barbers.map(async (barber) => {
        await hydrateBarberOverlayData(barber);
      }),
    );
    const current = getCurrentBarber();
    if (current) renderBarberLayerInfo(current);
  };

  const resolveOriginalBarberImage = (barber) =>
    resolveImageSource(
      barber?.originalImageUrl || barber?.thumbnailUrl || barber?.imageUrl || FALLBACK_BARBER_IMAGE,
    );

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
        if (bookingFlowState.active) return;
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
        if (bookingFlowState.active) return;
        bookingState.activeIndex = index;
        renderBooking();
      });

      const image = document.createElement("img");
      image.src = resolveOriginalBarberImage(barber);
      image.alt = barber.fullName || barber.name || "Барбер";
      image.loading = "lazy";

      button.appendChild(image);
      thumbsRoot.appendChild(button);
    });
  };

  const closeBookingFlow = () => {
    bookingFlowState.active = false;
    bookingFlowState.loading = false;
    bookingFlowState.step = "idle";
    bookingFlowState.barber = null;
    bookingFlowState.services = [];
    bookingFlowState.selectedServices = [];
    bookingFlowState.availableDates = [];
    bookingFlowState.selectedDate = "";
    bookingFlowState.availableTimes = [];
    bookingFlowState.selectedTime = null;
    bookingFlowState.totalDuration = 0;
    bookingFlowState.calendarMonthIndex = 0;
    bookingFlowState.requestNonce += 1;
    bookingLayerDark.classList.remove("is-booking-flow");
    bookingFlowRoot.hidden = true;
    bookingFlowContent.innerHTML = "";
    resetFlowConfirmButton();
    resetServiceActionsExternal();
    setFlowStatus("");
    setFlowBackDisabled(false);
  };

  const renderBooking = () => {
    const current = getCurrentBarber();
    if (!current) {
      barberNameElement.textContent = "БАРБЕР СКОРО";
      barberMainImage.src = FALLBACK_BARBER_IMAGE;
      barberMainImage.alt = "Барбер";
      barberLayerImage.src = FALLBACK_BARBER_IMAGE;
      barberLayerImage.alt = "Барбер";
      renderBarberLayerInfo(null);
      bookingSubtitle.textContent = "Список барберов временно пуст.";
      dotsRoot.innerHTML = "";
      barberCounter.textContent = "0/0";
      thumbsRoot.innerHTML = "";
      bookButton.disabled = true;
      bookButtonDark.disabled = true;
      closeBookingFlow();
      return;
    }

    const currentImage = resolveOriginalBarberImage(current);
    barberNameElement.textContent = (current.name || "Барбер").toUpperCase();
    barberMainImage.src = currentImage;
    barberMainImage.alt = current.fullName || current.name || "Барбер";
    barberLayerImage.src = currentImage;
    barberLayerImage.alt = current.fullName || current.name || "Барбер";
    renderBarberLayerInfo(current);
    hydrateBarberOverlayData(current);
    bookingSubtitle.textContent = current.description || current.fullName || "";
    barberCounter.textContent = `${bookingState.activeIndex + 1}/${bookingState.barbers.length}`;
    bookButton.disabled = false;
    bookButtonDark.disabled = false;

    renderBarberDots();
    renderBarberThumbs();
  };

  const fetchHomeBarbers = async (token) => {
    const response = await fetch(HOME_BARBERS_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    updateSessionTokenFromHeader(response);
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

  const homeAuthorizedRequest = async (url, options = {}, fallbackMessage = "") => {
    const token = normalizeText(bookingState.session?.token);
    if (!token) throw new Error("Сессия истекла. Войдите снова.");
    const headers = {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    };
    const response = await fetch(url, { ...options, headers });
    updateSessionTokenFromHeader(response);
    if (response.status === 401) {
      clearSessionPayload();
      redirectToLogin();
      throw new Error("Требуется повторный вход.");
    }
    if (!response.ok) {
      throw new Error(await parseApiError(response, fallbackMessage));
    }
    return response.json().catch(() => ({}));
  };

  const fetchBookingServices = async (barberId) =>
    homeAuthorizedRequest(
      `${HOME_BOOKING_SERVICES_API_URL}?barberId=${encodeURIComponent(barberId)}`,
      {},
      "Не удалось загрузить услуги.",
    );

  const fetchAvailableDates = async (barberId, serviceIds) =>
    homeAuthorizedRequest(
      `${HOME_BOOKING_DATES_API_URL}?barberId=${encodeURIComponent(
        barberId,
      )}&serviceIds=${encodeURIComponent(serviceIds.join(","))}`,
      {},
      "Не удалось загрузить доступные даты.",
    );

  const fetchAvailableTimes = async (barberId, serviceIds, date) =>
    homeAuthorizedRequest(
      `${HOME_BOOKING_TIMES_API_URL}?barberId=${encodeURIComponent(
        barberId,
      )}&serviceIds=${encodeURIComponent(serviceIds.join(","))}&date=${encodeURIComponent(date)}`,
      {},
      "Не удалось загрузить свободное время.",
    );

  const createAppointment = async ({ barberId, serviceIds, date, startTime }) =>
    homeAuthorizedRequest(
      HOME_BOOKING_APPOINTMENTS_API_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ barberId, serviceIds, date, startTime }),
      },
      "Не удалось создать запись.",
    );

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
      hydrateAllBarbersOverlayData();
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

  const redirectToLogin = () => {
    document.body.classList.remove("authenticated", "checking");
    window.location.replace(LOGIN_PAGE_URL);
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
    return { payload: nextPayload, remember: persisted.remember };
  };

  const setAuthenticatedView = async (sessionPayload, remember) => {
    bookingState.session = sessionPayload;
    bookingState.remember = Boolean(remember);
    bookingScreen.hidden = false;
    document.body.classList.add("authenticated");
    document.body.classList.remove("checking");
    await refreshBarbers();
  };

  const getFlowServiceNames = () =>
    bookingFlowState.selectedServices.map((service) => service.name).filter(Boolean);

  const getSelectedServicesDuration = () =>
    bookingFlowState.selectedServices.reduce(
      (sum, service) => sum + Math.max(0, Number(service?.duration) || 0),
      0,
    );

  const isServiceSelected = (serviceId) =>
    bookingFlowState.selectedServices.some(
      (service) => normalizeText(service?.id) === normalizeText(serviceId),
    );

  const toggleSelectedService = (service) => {
    const serviceId = normalizeText(service?.id);
    if (!serviceId) return;
    if (isServiceSelected(serviceId)) {
      bookingFlowState.selectedServices = bookingFlowState.selectedServices.filter(
        (item) => normalizeText(item?.id) !== serviceId,
      );
      return;
    }
    bookingFlowState.selectedServices = bookingFlowState.selectedServices.concat(service);
  };

  const renderServicesStep = () => {
    bookingFlowState.step = "services";
    resetFlowConfirmButton();
    const barberName =
      bookingFlowState.barber?.fullName || bookingFlowState.barber?.name || "Выбранный барбер";
    const selectedCount = bookingFlowState.selectedServices.length;
    const totalDuration = getSelectedServicesDuration();
    const metaText = selectedCount
      ? `${barberName} • Выбрано: ${selectedCount} • ${totalDuration} мин`
      : barberName;
    setFlowHeader("Шаг 1", "Выберите услуги", metaText);
    bookingFlowContent.className = "booking-flow-content is-services";
    bookingFlowContent.innerHTML = "";
    resetServiceActionsExternal();
    setFlowStatus("");

    const services = Array.isArray(bookingFlowState.services) ? bookingFlowState.services : [];
    barberLayerServices.textContent = `Количество услуг: ${services.length}`;
    if (!services.length) {
      renderFlowPlaceholder("У этого барбера сейчас нет услуг для онлайн-записи.");
      return;
    }

    const list = document.createElement("div");
    list.className = "booking-service-list";

    services.forEach((service) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "booking-service-tile";
      const selected = isServiceSelected(service.id);
      if (selected) tile.classList.add("is-selected");
      tile.setAttribute("aria-pressed", selected ? "true" : "false");
      tile.setAttribute("aria-label", service.name || "Услуга");

      const check = document.createElement("span");
      check.className = "booking-service-check";
      check.textContent = selected ? "✓" : "";

      const main = document.createElement("span");
      main.className = "booking-service-main";
      const title = document.createElement("strong");
      title.className = "booking-service-title";
      title.textContent = service.name || "Услуга";
      const meta = document.createElement("span");
      meta.className = "booking-service-meta";
      meta.textContent = normalizeText(service.description) || "Услуга барбера";
      main.append(title, meta);

      const side = document.createElement("span");
      side.className = "booking-service-side";
      const duration = document.createElement("small");
      duration.textContent = `${service.duration || 0} мин`;
      const price = document.createElement("small");
      price.textContent = formatPrice(service.price);
      side.append(duration, price);

      tile.append(check, main, side);
      tile.addEventListener("click", () => {
        if (bookingFlowState.loading) return;
        toggleSelectedService(service);
        bookingFlowState.selectedDate = "";
        bookingFlowState.selectedTime = null;
        renderServicesStep();
      });
      list.appendChild(tile);
    });

    const actions = document.createElement("div");
    actions.className = "booking-service-actions";

    const counter = document.createElement("p");
    counter.className = "booking-services-counter";
    counter.textContent = `Выбрано услуг: ${selectedCount}\nДлительность: ${totalDuration} мин`;

    const continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.className = "booking-services-continue";
    continueButton.disabled = selectedCount === 0;
    continueButton.textContent = "Продолжить";
    continueButton.addEventListener("click", async () => {
      if (bookingFlowState.loading || selectedCount === 0) return;
      await loadDatesStep();
    });

    actions.append(counter, continueButton);
    bookingFlowContent.appendChild(list);
    bookingServicesActionsExternal.appendChild(actions);
    bookingServicesActionsExternal.hidden = false;
  };

  const renderDateStep = () => {
    bookingFlowState.step = "dates";
    resetFlowConfirmButton();
    const selectedNames = getFlowServiceNames().join(", ");
    setFlowHeader(
      "Шаг 2",
      "Выберите дату",
      selectedNames
        ? `${selectedNames} • ${bookingFlowState.totalDuration || 0} мин`
        : `${bookingFlowState.totalDuration || 0} мин`,
    );
    bookingFlowContent.className = "booking-flow-content";
    bookingFlowContent.innerHTML = "";
    setFlowStatus("");

    const availableDates = Array.isArray(bookingFlowState.availableDates)
      ? bookingFlowState.availableDates
      : [];
    if (!availableDates.length) {
      renderFlowPlaceholder("Свободных дат на ближайшие дни нет.");
      setFlowStatus("Попробуйте выбрать другую услугу.", "error");
      return;
    }

    const months = buildMonthList(availableDates);
    if (!months.length) {
      renderFlowPlaceholder("Календарь недоступен.");
      return;
    }

    if (bookingFlowState.calendarMonthIndex < 0) bookingFlowState.calendarMonthIndex = 0;
    if (bookingFlowState.calendarMonthIndex > months.length - 1) {
      bookingFlowState.calendarMonthIndex = months.length - 1;
    }

    const currentMonthKey = months[bookingFlowState.calendarMonthIndex];
    const year = Number(currentMonthKey.slice(0, 4));
    const month = Number(currentMonthKey.slice(5, 7));
    const firstDay = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const offset = (firstDay.getDay() + 6) % 7;
    const availableSet = new Set(availableDates);

    const calendar = document.createElement("div");
    calendar.className = "booking-calendar";

    const head = document.createElement("div");
    head.className = "booking-calendar-head";
    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.className = "booking-calendar-nav";
    prevButton.textContent = "‹";
    prevButton.disabled = bookingFlowState.calendarMonthIndex <= 0;
    prevButton.addEventListener("click", () => {
      if (bookingFlowState.loading || bookingFlowState.calendarMonthIndex <= 0) return;
      bookingFlowState.calendarMonthIndex -= 1;
      renderDateStep();
    });
    const monthLabel = document.createElement("strong");
    monthLabel.textContent = formatMonthLabel(currentMonthKey);
    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "booking-calendar-nav";
    nextButton.textContent = "›";
    nextButton.disabled = bookingFlowState.calendarMonthIndex >= months.length - 1;
    nextButton.addEventListener("click", () => {
      if (bookingFlowState.loading || bookingFlowState.calendarMonthIndex >= months.length - 1) return;
      bookingFlowState.calendarMonthIndex += 1;
      renderDateStep();
    });
    head.append(prevButton, monthLabel, nextButton);

    const weekdays = document.createElement("div");
    weekdays.className = "booking-calendar-weekdays";
    WEEKDAY_LABELS.forEach((label) => {
      const node = document.createElement("span");
      node.textContent = label;
      weekdays.appendChild(node);
    });

    const grid = document.createElement("div");
    grid.className = "booking-calendar-grid";

    for (let i = 0; i < offset; i += 1) {
      const empty = document.createElement("div");
      empty.className = "booking-calendar-empty";
      grid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month - 1, day);
      const isoDate = toIsoDate(date);
      const isAvailable = availableSet.has(isoDate);
      const dayButton = document.createElement("button");
      dayButton.type = "button";
      dayButton.className = "booking-calendar-day";
      dayButton.textContent = String(day);
      if (isAvailable) {
        dayButton.classList.add("is-available");
      } else {
        dayButton.disabled = true;
      }
      if (bookingFlowState.selectedDate === isoDate) {
        dayButton.classList.add("is-selected");
      }
      dayButton.addEventListener("click", async () => {
        if (bookingFlowState.loading || !isAvailable) return;
        bookingFlowState.selectedDate = isoDate;
        await loadTimesStep(isoDate);
      });
      grid.appendChild(dayButton);
    }

    calendar.append(head, weekdays, grid);
    bookingFlowContent.appendChild(calendar);
  };

  const renderTimeStep = () => {
    bookingFlowState.step = "times";
    resetFlowConfirmButton();
    setFlowHeader(
      "Шаг 3",
      "Выберите время",
      `${formatDateLabel(bookingFlowState.selectedDate)} • ${bookingFlowState.totalDuration || 0} мин`,
    );
    bookingFlowContent.className = "booking-flow-content";
    bookingFlowContent.innerHTML = "";
    setFlowStatus("");

    const times = Array.isArray(bookingFlowState.availableTimes) ? bookingFlowState.availableTimes : [];
    if (!times.length) {
      renderFlowPlaceholder("На выбранную дату свободных окон нет.");
      setFlowStatus("Выберите другую дату.", "error");
      return;
    }

    const list = document.createElement("div");
    list.className = "booking-time-list";
    times.forEach((time) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "booking-time-btn";
      const startText = normalizeText(time?.start);
      const endText = normalizeText(time?.end);
      button.innerHTML = `${startText}<small>до ${endText}</small>`;
      button.addEventListener("click", () => {
        if (bookingFlowState.loading) return;
        bookingFlowState.selectedTime = time;
        renderConfirmStep();
      });
      list.appendChild(button);
    });

    bookingFlowContent.appendChild(list);
  };

  const renderSuccessStep = (appointment) => {
    bookingFlowState.step = "success";
    resetFlowConfirmButton();
    setFlowHeader("Готово", "Вы записаны", formatDateLabel(appointment?.date || bookingFlowState.selectedDate));
    bookingFlowContent.className = "booking-flow-content";
    bookingFlowContent.innerHTML = "";
    setFlowStatus("Запись успешно создана.", "ok");

    const content = document.createElement("div");
    content.className = "booking-confirm";

    const summary = document.createElement("p");
    summary.className = "booking-confirm-details";
    summary.innerHTML = [
      `<strong>Барбер:</strong> ${normalizeText(appointment?.barberName) || normalizeText(
        bookingFlowState.barber?.fullName || bookingFlowState.barber?.name,
      )}`,
      `<strong>Услуга:</strong> ${normalizeText(appointment?.services) || getFlowServiceNames().join(", ")}`,
      `<strong>Дата:</strong> ${formatDateLabel(appointment?.date || bookingFlowState.selectedDate)}`,
      `<strong>Время:</strong> ${normalizeText(appointment?.time) || normalizeText(
        bookingFlowState.selectedTime?.label,
      )}`,
    ].join("<br />");

    const restartButton = document.createElement("button");
    restartButton.type = "button";
    restartButton.className = "booking-confirm-submit";
    restartButton.textContent = "Новая запись";
    restartButton.addEventListener("click", async () => {
      if (bookingFlowState.loading) return;
      await loadServicesStep();
    });

    content.append(summary, restartButton);
    bookingFlowContent.appendChild(content);
  };

  const renderConfirmStep = () => {
    bookingFlowState.step = "confirm";
    setFlowHeader("Шаг 4", "Подтвердите запись");
    bookingFlowContent.className = "booking-flow-content";
    bookingFlowContent.innerHTML = "";
    setFlowStatus("");

    const confirmRoot = document.createElement("div");
    confirmRoot.className = "booking-confirm";

    const details = document.createElement("p");
    details.className = "booking-confirm-details";
    const barberName =
      bookingFlowState.barber?.fullName || bookingFlowState.barber?.name || "Барбер";
    const servicesList = getFlowServiceNames().join(", ") || "Услуга не выбрана";
    const timeLabel =
      normalizeText(bookingFlowState.selectedTime?.label) ||
      `${normalizeText(bookingFlowState.selectedTime?.start)} - ${normalizeText(
        bookingFlowState.selectedTime?.end,
      )}`;
    details.innerHTML = [
      `<strong>Барбер:</strong> ${barberName}`,
      `<strong>Услуга:</strong> ${servicesList}`,
      `<strong>Дата:</strong> ${formatDateLabel(bookingFlowState.selectedDate)}`,
      `<strong>Время:</strong> ${timeLabel}`,
    ].join("<br />");

    confirmRoot.appendChild(details);
    bookingFlowContent.appendChild(confirmRoot);

    bookingFlowConfirmButton.hidden = false;
    bookingFlowConfirmButton.disabled = false;
    bookingFlowConfirmButton.textContent = "ПОДТВЕРДИТЬ ЗАПИСЬ";
    bookingFlowConfirmButton.onclick = async () => {
      if (bookingFlowState.loading) return;
      const nonce = beginFlowRequest();
      bookingFlowConfirmButton.disabled = true;
      setFlowStatus("Сохраняем запись...");
      try {
        const payload = await createAppointment({
          barberId: bookingFlowState.barber?.id,
          serviceIds: bookingFlowState.selectedServices.map((service) => service.id),
          date: bookingFlowState.selectedDate,
          startTime: bookingFlowState.selectedTime?.start,
        });
        if (!finishFlowRequest(nonce)) return;
        renderSuccessStep(payload?.appointment || {});
        await refreshBarbers();
      } catch (error) {
        if (!finishFlowRequest(nonce)) return;
        bookingFlowConfirmButton.disabled = false;
        setFlowStatus(
          normalizeText(error?.message) || "Не удалось создать запись. Попробуйте снова.",
          "error",
        );
      }
    };
  };

  const loadServicesStep = async () => {
    if (!bookingFlowState.active || !bookingFlowState.barber?.id) return;
    const nonce = beginFlowRequest();
    setFlowHeader("Шаг 1", "Загружаем услуги...");
    setFlowStatus("");
    renderFlowPlaceholder("Подбираем услуги для выбранного барбера.");
    try {
      const payload = await fetchBookingServices(bookingFlowState.barber.id);
      if (!finishFlowRequest(nonce)) return;
      bookingFlowState.services = Array.isArray(payload?.services) ? payload.services : [];
      if (bookingFlowState.barber) {
        bookingFlowState.barber.servicesCount = bookingFlowState.services.length;
        const phrase = normalizeText(
          payload?.barber?.phrase || payload?.barber?.description || bookingFlowState.barber?.phrase,
        );
        if (phrase) bookingFlowState.barber.phrase = phrase;
        renderBarberLayerInfo(bookingFlowState.barber);
      }
      bookingFlowState.selectedServices = [];
      bookingFlowState.availableDates = [];
      bookingFlowState.selectedDate = "";
      bookingFlowState.availableTimes = [];
      bookingFlowState.selectedTime = null;
      bookingFlowState.totalDuration = 0;
      bookingFlowState.calendarMonthIndex = 0;
      if (payload?.canBook === false) {
        bookingFlowState.services = [];
        renderServicesStep();
        setFlowStatus(
          normalizeText(payload?.message) || "Достигнут лимит активных записей.",
          "error",
        );
        return;
      }
      renderServicesStep();
    } catch (error) {
      if (!finishFlowRequest(nonce)) return;
      renderServicesStep();
      setFlowStatus(
        normalizeText(error?.message) || "Не удалось загрузить услуги. Повторите попытку.",
        "error",
      );
    }
  };

  const loadDatesStep = async () => {
    if (!bookingFlowState.active || !bookingFlowState.barber?.id) return;
    const selectedServices = bookingFlowState.selectedServices
      .map((service) => normalizeText(service.id))
      .filter(Boolean);
    if (!selectedServices.length) {
      renderServicesStep();
      setFlowStatus("Сначала выберите одну или несколько услуг.", "error");
      return;
    }
    bookingFlowState.totalDuration = getSelectedServicesDuration();
    const nonce = beginFlowRequest();
    setFlowHeader("Шаг 2", "Подбираем свободные даты...");
    setFlowStatus("");
    renderFlowPlaceholder("Проверяем расписание барбера.");
    try {
      const payload = await fetchAvailableDates(bookingFlowState.barber.id, selectedServices);
      if (!finishFlowRequest(nonce)) return;
      bookingFlowState.totalDuration = Number(payload?.totalDuration) || 0;
      bookingFlowState.availableDates = Array.isArray(payload?.dates) ? payload.dates : [];
      bookingFlowState.selectedDate = "";
      bookingFlowState.availableTimes = [];
      bookingFlowState.selectedTime = null;
      const monthKeys = buildMonthList(bookingFlowState.availableDates);
      bookingFlowState.calendarMonthIndex = monthKeys.length ? 0 : -1;
      renderDateStep();
    } catch (error) {
      if (!finishFlowRequest(nonce)) return;
      renderDateStep();
      setFlowStatus(
        normalizeText(error?.message) || "Не удалось подобрать свободные даты.",
        "error",
      );
    }
  };

  const loadTimesStep = async (date) => {
    if (!bookingFlowState.active || !bookingFlowState.barber?.id) return;
    const selectedServices = bookingFlowState.selectedServices
      .map((service) => normalizeText(service.id))
      .filter(Boolean);
    if (!selectedServices.length || !normalizeText(date)) {
      renderDateStep();
      setFlowStatus("Выберите услуги и дату.", "error");
      return;
    }
    const nonce = beginFlowRequest();
    setFlowHeader("Шаг 3", "Загружаем свободное время...");
    setFlowStatus("");
    renderFlowPlaceholder("Ищем свободные интервалы.");
    try {
      const payload = await fetchAvailableTimes(
        bookingFlowState.barber.id,
        selectedServices,
        date,
      );
      if (!finishFlowRequest(nonce)) return;
      bookingFlowState.selectedDate = date;
      bookingFlowState.availableTimes = Array.isArray(payload?.times) ? payload.times : [];
      bookingFlowState.selectedTime = null;
      renderTimeStep();
    } catch (error) {
      if (!finishFlowRequest(nonce)) return;
      renderDateStep();
      setFlowStatus(
        normalizeText(error?.message) || "Не удалось загрузить свободное время.",
        "error",
      );
    }
  };

  const handleFlowBack = () => {
    if (!bookingFlowState.active || bookingFlowState.loading) return;
    switch (bookingFlowState.step) {
      case "services":
      case "success":
        closeBookingFlow();
        break;
      case "dates":
        renderServicesStep();
        break;
      case "times":
        renderDateStep();
        break;
      case "confirm":
        renderTimeStep();
        break;
      default:
        closeBookingFlow();
        break;
    }
  };

  const handleLogout = () => {
    closeBookingFlow();
    clearSessionPayload();
    setBookingStatus("");
    redirectToLogin();
  };

  const handlePrevBarber = () => {
    if (!bookingState.barbers.length || bookingFlowState.active) return;
    bookingState.activeIndex =
      (bookingState.activeIndex - 1 + bookingState.barbers.length) % bookingState.barbers.length;
    renderBooking();
  };

  const handleNextBarber = () => {
    if (!bookingState.barbers.length || bookingFlowState.active) return;
    bookingState.activeIndex = (bookingState.activeIndex + 1) % bookingState.barbers.length;
    renderBooking();
  };

  const handleBook = async () => {
    const current = getCurrentBarber();
    if (!current || bookingFlowState.loading) return;
    bookingFlowState.active = true;
    bookingFlowState.barber = current;
    bookingFlowState.step = "services";
    bookingLayerDark.classList.add("is-booking-flow");
    bookingFlowRoot.hidden = false;
    setFlowBackDisabled(false);
    setFlowStatus("");
    await loadServicesStep();
  };

  const init = async () => {
    logoutButton.addEventListener("click", handleLogout);
    prevBarberButton.addEventListener("click", handlePrevBarber);
    nextBarberButton.addEventListener("click", handleNextBarber);
    bookButton.addEventListener("click", handleBook);
    bookButtonDark.addEventListener("click", handleBook);
    bookingFlowBackButton.addEventListener("click", handleFlowBack);

    const restoredSession = await tryRestoreSession();
    if (!restoredSession?.payload) {
      redirectToLogin();
      return;
    }

    await setAuthenticatedView(restoredSession.payload, restoredSession.remember);
  };

  init();
})();
