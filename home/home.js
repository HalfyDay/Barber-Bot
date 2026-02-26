(function () {
  const HOME_API_BASE_URL = `${window.location.origin}/api/home/auth`;
  const HOME_BARBERS_API_URL = `${window.location.origin}/api/home/barbers`;
  const HOME_FALLBACK_BARBERS_API_URL = `${window.location.origin}/api/login/options`;
  const SESSION_STORAGE_KEY = "home-user-session";
  const LOGIN_PAGE_URL = "/login/";
  const FALLBACK_BARBER_IMAGE = "/Image/card/Barber_photo.png";

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

  const isReady =
    bookingScreen &&
    logoutButton &&
    barberNameElement &&
    barberMainImage &&
    bookingSubtitle &&
    bookingStatus &&
    dotsRoot &&
    thumbsRoot &&
    prevBarberButton &&
    nextBarberButton &&
    bookButton;

  if (!isReady) {
    document.body.classList.remove("checking");
    return;
  }

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

  const setBookingStatus = (text, type = "default") => {
    bookingStatus.textContent = text || "";
    bookingStatus.classList.remove("is-error");
    if (type === "error") bookingStatus.classList.add("is-error");
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
    return nextPayload;
  };

  const setAuthenticatedView = async (sessionPayload) => {
    bookingState.session = sessionPayload;
    bookingScreen.hidden = false;
    document.body.classList.add("authenticated");
    document.body.classList.remove("checking");
    await refreshBarbers();
  };

  const handleLogout = () => {
    clearSessionPayload();
    setBookingStatus("");
    redirectToLogin();
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
    logoutButton.addEventListener("click", handleLogout);
    prevBarberButton.addEventListener("click", handlePrevBarber);
    nextBarberButton.addEventListener("click", handleNextBarber);
    bookButton.addEventListener("click", handleBook);

    const restoredSession = await tryRestoreSession();
    if (!restoredSession) {
      redirectToLogin();
      return;
    }

    await setAuthenticatedView(restoredSession);
  };

  init();
})();
