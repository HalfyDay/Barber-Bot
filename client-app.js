(function () {
  const ROOT = document.getElementById("app");
  const API_ROOT = `${window.location.origin}/api/home`;
  const LOGIN_PAGE_URL = "/login/";
  const SESSION_STORAGE_KEY = "home-user-session";
  const LOGOUT_MARKER_STORAGE_KEY = "home-user-logout-marker";
  const SITE_PRESENCE_SESSION_KEY = "home-site-presence-session-id";
  const SITE_PRESENCE_PING_INTERVAL_MS = 30000;
  const CONTACT_PHONE = "+7 964 659-92-96";
  const SEO_HOME_TITLE = "BrotherShop | Барбершоп в Братске, мужские стрижки и оформление бороды";
  const APP_HOME_TITLE = "BrotherShop • Главная";
  const SEO_HOME_DESCRIPTION =
    "BrotherShop, барбершоп в Братске. Мужские стрижки, оформление бороды и онлайн-запись. Адрес: улица Гагарина, 10, 1 этаж, Центральный район, Братск. Телефон: +7 964 659-92-96.";
  const SEO_HOME_OG_DESCRIPTION =
    "BrotherShop в Братске: мужские стрижки, оформление бороды, удобная онлайн-запись и барберы в Центральном районе.";
  const IS_ANDROID_APP_SHELL = /BrotherShopAndroidApp/i.test(window.navigator?.userAgent || "");
  const IS_DESKTOP_SHEET_DISMISS = Boolean(window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches);
  const REFERRAL_TRANSFER_QUICK_AMOUNTS = [10, 25, 50, 100];
  const BOOKING_NAV_ICON = '<img src="/Image/site/menu/booking.svg" alt="" aria-hidden="true" data-no-wave="1" />';
  const BOOKING_NAV_ICON_ACTIVE = '<img src="/Image/site/menu/sel_booking.svg" alt="" aria-hidden="true" data-no-wave="1" />';
  const loadedImageUrls = new Set();
  const loadedBackgroundUrls = new Set();

  if (document.documentElement) document.documentElement.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);
  if (document.body) document.body.classList.toggle("android-app-shell", IS_ANDROID_APP_SHELL);
  if (!ROOT) return;

  const state = {
    currentPage: "home",
    navIndicatorIndex: 0,
    routeTransitionActive: false,
    session: null,
    payload: null,
    bootstrapError: "",
    sheet: null,
    sheetState: "closed",
    pendingBookingCancellationId: "",
    referralTransferDraft: null,
    referralQuickAmount: null,
    referralLinkCopied: false,
    transferHistoryFilter: "all",
    profileHistoryFilter: "all",
    telegramLinkRequestId: "",
    booking: {
      barberId: "",
      services: [],
      selectedServices: [],
      appliedBs: 0,
      bsCoverExpanded: false,
      dates: [],
      selectedDate: "",
      times: [],
      selectedTime: "",
      comment: "",
      canBook: true,
      limitMessage: "",
      bookingLimit: 0,
      activeAppointmentsCount: 0,
      loading: false,
      submitting: false,
      stepAnimationsEnabled: true,
    },
  };
  let referralCopyFeedbackTimer = null;
  let sheetCloseTimer = null;
  let sheetOpenFrame = null;
  let renderFrame = null;
  let pendingRenderApp = true;
  let pendingRenderSheet = true;
  let suppressSheetHistoryBack = false;
  let referralQrScannerStream = null;
  let referralQrScannerFrame = null;
  let referralQrScannerSession = 0;
  let delegatedHandlersBound = false;
  let sitePresenceTimer = null;
  let promoMarqueeAutoScroll = null;
  const derivedDataCache = {
    profileHistory: { visitHistoryRef: null, operationsRef: null, items: [] },
    filteredProfileHistory: { itemsRef: null, filter: "", filtered: [] },
    referralOperations: { operationsRef: null, transferOut: [], transferIn: [] },
    filteredReferralActivity: { operationsRef: null, filter: "", filtered: [] },
    renderedFragments: new Map(),
  };
  const lastRenderedHtml = {
    app: "",
    sheet: "",
  };

  const normalizeText = (value) => (value == null ? "" : String(value).trim());
  const areMemoDepsEqual = (left = [], right = []) =>
    left.length === right.length && left.every((value, index) => value === right[index]);
  const memoizeRenderedFragment = (key, deps, renderFactory) => {
    const cached = derivedDataCache.renderedFragments.get(key);
    if (cached && areMemoDepsEqual(cached.deps, deps)) return cached.html;
    const html = renderFactory();
    derivedDataCache.renderedFragments.set(key, { deps: deps.slice(), html });
    return html;
  };
  const normalizePhone = (value) => normalizeText(value).replace(/[^\d+]/g, "");
  const buildReferralQrPayload = (user = {}) => {
    const phone = normalizePhone(user.phone || "");
    if (!phone) return "";
    const url = new URL("brothershop://bs-transfer");
    url.searchParams.set("phone", phone);
    if (normalizeText(user.displayName)) url.searchParams.set("name", normalizeText(user.displayName));
    return url.toString();
  };
  const parseReferralQrPayload = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return null;
    if (/^[+\d()\s-]+$/.test(safeValue)) {
      const phone = normalizePhone(safeValue);
      return phone ? { phone, name: "" } : null;
    }
    try {
      const parsed = new URL(safeValue);
      const phone = normalizePhone(parsed.searchParams.get("phone"));
      if (!phone) return null;
      return {
        phone,
        name: normalizeText(parsed.searchParams.get("name")),
      };
    } catch {
      return null;
    }
  };
  const extractBackgroundImageUrl = (value) => {
    const match = /url\((['"]?)(.*?)\1\)/.exec(normalizeText(value));
    return normalizeText(match?.[2]);
  };
  const teardownPromoMarqueeAutoScroll = () => {
    if (!promoMarqueeAutoScroll) return;
    if (promoMarqueeAutoScroll.frame) window.cancelAnimationFrame(promoMarqueeAutoScroll.frame);
    if (Array.isArray(promoMarqueeAutoScroll.cleanupHandlers)) {
      promoMarqueeAutoScroll.cleanupHandlers.forEach((cleanup) => {
        try {
          cleanup();
        } catch {}
      });
    }
    promoMarqueeAutoScroll = null;
  };
  const setupPromoMarqueeAutoScroll = (scope = ROOT) => {
    const marquee = scope.querySelector(".promo-marquee.is-animated");
    if (!marquee) {
      teardownPromoMarqueeAutoScroll();
      return;
    }
    const track = marquee.querySelector(".promo-track.is-animated");
    const firstLane = marquee.querySelector(".promo-lane");
    if (!track || !firstLane) {
      teardownPromoMarqueeAutoScroll();
      return;
    }
    if (promoMarqueeAutoScroll?.marquee === marquee) return;
    teardownPromoMarqueeAutoScroll();
    const isTouchDevice = "ontouchstart" in window || Number(window.navigator?.maxTouchPoints || 0) > 0;
    const hasScrollableOverflow = track.scrollWidth > marquee.clientWidth + 8;
    if (!isTouchDevice || !hasScrollableOverflow) return;
    const autoScrollState = {
      marquee,
      track,
      frame: null,
      lastTimestamp: window.performance.now(),
      pauseUntil: 0,
      isDragging: false,
      dragStartX: 0,
      dragStartOffset: 0,
      dragLastX: 0,
      dragLastTime: 0,
      recentMoves: [],
      velocity: 0,
      offset: 0,
      cleanupHandlers: [],
    };
    const getLoopWidth = () => {
      const trackGap = Number.parseFloat(window.getComputedStyle(track).gap || "0") || 0;
      return firstLane.scrollWidth + trackGap;
    };
    const applyOffset = () => {
      track.style.transform = `translate3d(${-autoScrollState.offset}px, 0, 0)`;
    };
    const pauseAutoScroll = (duration = 2200) => {
      autoScrollState.pauseUntil = window.performance.now() + duration;
    };
    const normalizeOffset = () => {
      const loopWidth = getLoopWidth();
      if (!loopWidth) return;
      while (autoScrollState.offset >= loopWidth) autoScrollState.offset -= loopWidth;
      while (autoScrollState.offset < 0) autoScrollState.offset += loopWidth;
    };
    const tick = (timestamp) => {
      if (promoMarqueeAutoScroll !== autoScrollState) return;
      if (!document.body.contains(marquee)) {
        teardownPromoMarqueeAutoScroll();
        return;
      }
      const now = Number.isFinite(timestamp) ? timestamp : window.performance.now();
      const delta = Math.min(34, Math.max(0, now - autoScrollState.lastTimestamp));
      autoScrollState.lastTimestamp = now;
      if (!autoScrollState.isDragging) {
        if (Math.abs(autoScrollState.velocity) > 0.001) {
          autoScrollState.offset += autoScrollState.velocity * delta;
          autoScrollState.velocity *= Math.pow(0.996, delta);
        } else if (now >= autoScrollState.pauseUntil) {
          autoScrollState.velocity = 0;
          autoScrollState.offset += delta * 0.05;
        }
        normalizeOffset();
        applyOffset();
      }
      autoScrollState.frame = window.requestAnimationFrame(tick);
    };
    const bindEvent = (target, eventName, handler, options) => {
      target.addEventListener(eventName, handler, options);
      autoScrollState.cleanupHandlers.push(() => target.removeEventListener(eventName, handler, options));
    };
    const startDrag = (clientX) => {
      autoScrollState.isDragging = true;
      autoScrollState.dragStartX = clientX;
      autoScrollState.dragStartOffset = autoScrollState.offset;
      autoScrollState.dragLastX = clientX;
      autoScrollState.dragLastTime = window.performance.now();
      autoScrollState.recentMoves = [{ x: clientX, time: autoScrollState.dragLastTime }];
      autoScrollState.velocity = 0;
      pauseAutoScroll(2600);
    };
    const moveDrag = (clientX) => {
      if (!autoScrollState.isDragging) return;
      const now = window.performance.now();
      const timeDelta = Math.max(1, now - autoScrollState.dragLastTime);
      const positionDelta = clientX - autoScrollState.dragLastX;
      autoScrollState.velocity = (-positionDelta / timeDelta) * 0.9;
      autoScrollState.dragLastX = clientX;
      autoScrollState.dragLastTime = now;
      autoScrollState.recentMoves.push({ x: clientX, time: now });
      autoScrollState.recentMoves = autoScrollState.recentMoves.filter((item) => now - item.time <= 120);
      autoScrollState.offset = autoScrollState.dragStartOffset - (clientX - autoScrollState.dragStartX);
      normalizeOffset();
      applyOffset();
    };
    const endDrag = () => {
      if (!autoScrollState.isDragging) return;
      autoScrollState.isDragging = false;
      const recentMoves = autoScrollState.recentMoves;
      if (recentMoves.length >= 2) {
        const firstMove = recentMoves[0];
        const lastMove = recentMoves[recentMoves.length - 1];
        const elapsed = Math.max(1, lastMove.time - firstMove.time);
        autoScrollState.velocity = (-(lastMove.x - firstMove.x) / elapsed) * 1.15;
      }
      if (Math.abs(autoScrollState.velocity) < 0.002) autoScrollState.velocity = 0;
      autoScrollState.recentMoves = [];
      pauseAutoScroll(1800);
    };
    bindEvent(marquee, "pointerdown", (event) => {
      startDrag(event.clientX);
    }, { passive: true });
    bindEvent(window, "pointermove", (event) => {
      moveDrag(event.clientX);
    }, { passive: true });
    bindEvent(window, "pointerup", () => {
      endDrag();
    }, { passive: true });
    bindEvent(window, "pointercancel", () => {
      endDrag();
    }, { passive: true });
    bindEvent(marquee, "touchstart", (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      startDrag(touch.clientX);
    }, { passive: true });
    bindEvent(window, "touchmove", (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      moveDrag(touch.clientX);
    }, { passive: true });
    bindEvent(window, "touchend", () => {
      endDrag();
    }, { passive: true });
    bindEvent(window, "touchcancel", () => {
      endDrag();
    }, { passive: true });
    promoMarqueeAutoScroll = autoScrollState;
    track.style.willChange = "transform";
    autoScrollState.cleanupHandlers.push(() => {
      track.style.transform = "";
      track.style.willChange = "";
    });
    applyOffset();
    autoScrollState.frame = window.requestAnimationFrame(tick);
  };
  const resolveMediaAssetUrl = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    try {
      return new URL(safeValue, window.location.origin).toString();
    } catch {
      return safeValue;
    }
  };
  const queryById = (root, id) => {
    if (!root || !id) return null;
    return root.querySelector(`#${id}`);
  };
  const setupMediaWaveLoading = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    container.querySelectorAll("img:not([data-no-wave='1'])").forEach((img) => {
      if (img.dataset.waveBound === "1") return;
      img.dataset.waveBound = "1";
      img.classList.add("media-wave");
      const imageUrl = resolveMediaAssetUrl(img.currentSrc || img.getAttribute("src") || "");
      const markReady = () => {
        if (imageUrl) loadedImageUrls.add(imageUrl);
        img.classList.add("is-ready");
      };
      if ((imageUrl && loadedImageUrls.has(imageUrl)) || (img.complete && (img.naturalWidth || img.width))) {
        markReady();
        return;
      }
      img.addEventListener("load", markReady, { once: true });
      img.addEventListener("error", () => img.classList.add("is-ready"), { once: true });
    });
    container.querySelectorAll("[style*='background-image']").forEach((node) => {
      if (node.dataset.waveBound === "1") return;
      const url = extractBackgroundImageUrl(node.style.backgroundImage);
      if (!url) return;
      const backgroundUrl = resolveMediaAssetUrl(url);
      node.dataset.waveBound = "1";
      node.classList.add("media-wave-surface");
      const markReady = () => {
        if (backgroundUrl) loadedBackgroundUrls.add(backgroundUrl);
        node.classList.add("is-ready");
      };
      if (backgroundUrl && loadedBackgroundUrls.has(backgroundUrl)) {
        markReady();
        return;
      }
      const preload = new Image();
      preload.onload = markReady;
      preload.onerror = () => node.classList.add("is-ready");
      preload.src = backgroundUrl || url;
    });
  };
  const setupTransferRecipientCarousels = (scope = ROOT) => {
    const container = scope instanceof Element ? scope : ROOT;
    if (!container) return;
    container.querySelectorAll(".referral-transfer-recipient-carousel").forEach((carousel) => {
      const strip = carousel.querySelector("[data-transfer-recipient-strip]");
      const prevButton = carousel.querySelector(".referral-transfer-scroll-btn-prev");
      const nextButton = carousel.querySelector(".referral-transfer-scroll-btn-next");
      if (!strip || !prevButton || !nextButton) return;
      const syncButtons = () => {
        const itemWidths = Array.from(strip.querySelectorAll(".referral-transfer-recipient")).reduce(
          (total, item) => total + item.getBoundingClientRect().width,
          0,
        );
        const computedGap = Number.parseFloat(window.getComputedStyle(strip).columnGap || window.getComputedStyle(strip).gap || "0") || 0;
        const itemsCount = strip.querySelectorAll(".referral-transfer-recipient").length;
        const contentWidth = itemWidths + Math.max(0, itemsCount - 1) * computedGap;
        const maxScroll = Math.max(0, strip.scrollWidth - strip.clientWidth);
        const hasOverflow = maxScroll > 8 && contentWidth - strip.clientWidth > 8;
        const currentScroll = Math.max(0, strip.scrollLeft);
        carousel.classList.toggle("has-overflow", hasOverflow);
        prevButton.classList.toggle("is-hidden", !hasOverflow || currentScroll <= 8);
        nextButton.classList.toggle("is-hidden", !hasOverflow || currentScroll >= maxScroll - 8);
      };
      if (carousel.dataset.carouselBound !== "1") {
        carousel.dataset.carouselBound = "1";
        strip.addEventListener("scroll", syncButtons, { passive: true });
      }
      syncButtons();
      window.requestAnimationFrame(syncButtons);
    });
  };
  const getPageFromPath = (pathname) => {
    const normalized = normalizeText(pathname || window.location.pathname).replace(/\/+$/, "") || "/";
    if (normalized === "/" || normalized === "/home") return "home";
    if (normalized === "/referral") return "referral";
    if (normalized === "/booking") return "booking";
    if (normalized === "/shop") return "shop";
    if (normalized === "/achievements") return "achievements";
    if (normalized === "/profile") return "profile";
    return "";
  };
  const syncPageFromLocation = () => {
    state.currentPage = getPageFromPath(window.location.pathname) || "home";
  };

  const getStorage = (type) => {
    try {
      return type === "session" ? window.sessionStorage : window.localStorage;
    } catch {
      return null;
    }
  };

  const readStorage = (storage, key) => {
    try {
      return storage?.getItem ? storage.getItem(key) : null;
    } catch {
      return null;
    }
  };

  const writeStorage = (storage, key, value) => {
    try {
      if (storage?.setItem) storage.setItem(key, value);
    } catch {
      // ignore
    }
  };

  const removeStorage = (storage, key) => {
    try {
      if (storage?.removeItem) storage.removeItem(key);
    } catch {
      // ignore
    }
  };

  const isAuthenticated = () => Boolean(normalizeText(state.session?.token));

  const buildLoginUrl = (nextPath = "") => {
    const loginUrl = new URL(LOGIN_PAGE_URL, window.location.origin);
    const safeNextPath = normalizeText(nextPath);
    if (safeNextPath) loginUrl.searchParams.set("next", safeNextPath);
    return `${loginUrl.pathname}${loginUrl.search}${loginUrl.hash}`;
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

  const loadSession = () => {
    const raw = readStorage(getStorage("local"), SESSION_STORAGE_KEY) || readStorage(getStorage("session"), SESSION_STORAGE_KEY);
    if (!raw) return null;
    try {
      return buildSessionPayload(JSON.parse(raw));
    } catch {
      return null;
    }
  };

  const persistSession = (payload) => {
    const serialized = JSON.stringify(buildSessionPayload(payload));
    writeStorage(getStorage("local"), SESSION_STORAGE_KEY, serialized);
    writeStorage(getStorage("session"), SESSION_STORAGE_KEY, serialized);
  };

  const clearSession = () => {
    removeStorage(getStorage("local"), SESSION_STORAGE_KEY);
    removeStorage(getStorage("session"), SESSION_STORAGE_KEY);
  };

  const redirectToLogin = (nextPath = "", options = {}) => {
    const fallbackPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const targetUrl = buildLoginUrl(normalizeText(nextPath) || fallbackPath);
    if (options.replace === false) {
      window.location.assign(targetUrl);
      return;
    }
    window.location.replace(targetUrl);
  };

  const setLogoutMarker = () => {
    const marker = String(Date.now());
    writeStorage(getStorage("local"), LOGOUT_MARKER_STORAGE_KEY, marker);
    writeStorage(getStorage("session"), LOGOUT_MARKER_STORAGE_KEY, marker);
  };

  const formatPhone = (value) => {
    const digits = normalizePhone(value).replace(/^\+7/, "").replace(/^8/, "");
    if (digits.length !== 10) return normalizeText(value) || "Не указан";
    return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 10)}`;
  };

  const extractPhoneDigits = (value) => {
    const rawDigits = normalizeText(value).replace(/\D/g, "");
    if (!rawDigits) return "";
    let digits = rawDigits;
    if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
    return digits.slice(0, 10);
  };

  const formatPhoneInputValue = (digits) => {
    const safeDigits = extractPhoneDigits(digits);
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
    input.value = formatPhoneInputValue(nextDigits);
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
    input.value = formatPhoneInputValue(digits);
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

  const formatDateOnly = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "Без даты";
    const parsed = new Date(`${safeValue}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleDateString("ru-RU", { day: "2-digit", month: "long", weekday: "short" });
  };

  const formatDateTime = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "Без даты";
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleString("ru-RU", { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" });
  };

  const formatShortDate = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleDateString("ru-RU", { day: "2-digit", month: "short" });
  };
  const formatShortDateTime = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return "";
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return safeValue;
    return parsed.toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  };

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(normalizeText(reader.result));
      reader.onerror = () => reject(new Error("Не удалось прочитать файл."));
      reader.readAsDataURL(file);
    });

  const cropImageFileToSquareDataUrl = async (file, outputSize = 720) => {
    const source = await readFileAsDataUrl(file);
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const side = Math.min(image.naturalWidth || image.width, image.naturalHeight || image.height);
        const sx = Math.max(0, Math.round(((image.naturalWidth || image.width) - side) / 2));
        const sy = Math.max(0, Math.round(((image.naturalHeight || image.height) - side) / 2));
        const canvas = document.createElement("canvas");
        canvas.width = outputSize;
        canvas.height = outputSize;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Не удалось обработать изображение."));
          return;
        }
        context.drawImage(image, sx, sy, side, side, 0, 0, outputSize, outputSize);
        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      image.onerror = () => reject(new Error("Не удалось обработать изображение."));
      image.src = source;
    });
  };

  const buildProfileHistoryItems = (visitHistory = [], operations = []) => {
    const visitItems = visitHistory.map((visit) => ({
      id: `visit-${normalizeText(visit.id)}`,
      type: "visit",
      visitId: normalizeText(visit.id),
      barber: normalizeText(visit.barber),
      services: Array.isArray(visit.services) ? visit.services : [],
      createdAt: normalizeText(visit.when || `${visit.date || ""}T00:00:00`),
      title: normalizeText(visit.barber) || "Визит",
      subtitle: visit.services?.length ? normalizeText(visit.services.join(", ")) : "Детали визита",
      amountRub: -Math.abs(Number(visit.amountRub) || 0),
      amountBs: 0,
      status: normalizeText(visit.status),
      dateLabel: formatDateTime(visit.when || `${visit.date || ""}T${visit.time || "00:00:00"}`),
    }));
    const operationItems = operations
      .filter((operation) => normalizeText(operation.type) !== "visit" && !Number(operation.amountBs))
      .map((operation) => ({
        id: `operation-${normalizeText(operation.id)}`,
        type: "payment",
        createdAt: normalizeText(operation.createdAt),
        title: normalizeText(operation.title) || "Операция",
        subtitle: normalizeText(operation.description),
        amountRub: Number(operation.amountRub) || 0,
        amountBs: Number(operation.amountBs) || 0,
        status: normalizeText(operation.status),
        dateLabel: formatDateTime(operation.createdAt),
    }));
    return [...visitItems, ...operationItems].sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));
  };
  const getProfileHistoryItems = (visitHistory = [], operations = []) => {
    if (
      derivedDataCache.profileHistory.visitHistoryRef === visitHistory &&
      derivedDataCache.profileHistory.operationsRef === operations
    ) {
      return derivedDataCache.profileHistory.items;
    }
    const items = buildProfileHistoryItems(visitHistory, operations);
    derivedDataCache.profileHistory = {
      visitHistoryRef: visitHistory,
      operationsRef: operations,
      items,
    };
    derivedDataCache.filteredProfileHistory = { itemsRef: null, filter: "", filtered: [] };
    return items;
  };

  const matchesProfileHistoryFilter = (item, filter) => {
    if (filter === "visits") return item.type === "visit";
    if (filter === "payments") return item.type === "payment";
    return true;
  };
  const getFilteredProfileHistoryItems = (items = [], filter = "all") => {
    if (derivedDataCache.filteredProfileHistory.itemsRef === items && derivedDataCache.filteredProfileHistory.filter === filter) {
      return derivedDataCache.filteredProfileHistory.filtered;
    }
    const filtered = items.filter((item) => matchesProfileHistoryFilter(item, filter));
    derivedDataCache.filteredProfileHistory = {
      itemsRef: items,
      filter,
      filtered,
    };
    return filtered;
  };

  const renderProfileHistoryRow = (item) => `
    <div class="timeline-item bank-row history-row">
      <div class="history-row-main">
        <div class="history-row-head">
          <div class="history-row-meta">
            <span class="status-badge ${item.type === "visit" ? "status-green" : "status-red"}">${item.type === "visit" ? "Визит" : "Оплата"}</span>
            <span class="subtitle">${normalizeText(item.dateLabel)}</span>
          </div>
          ${item.amountRub ? `<div class="amount-rub history-row-amount ${item.amountRub < 0 ? "negative" : ""}">${item.amountRub > 0 ? "+" : ""}${formatRub(Math.abs(item.amountRub))}</div>` : ""}
        </div>
        <p class="list-title">${normalizeText(item.title)}</p>
        <p class="subtitle">${normalizeText(item.subtitle)}</p>
      </div>
    </div>
  `;

  const formatRub = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return "0 ₽";
    return `${numeric.toLocaleString("ru-RU")} ₽`;
  };

  const getBookingPricingSummary = (bookingState = state.booking, referral = state.payload?.referral || {}) => {
    const selectedServices = (Array.isArray(bookingState?.services) ? bookingState.services : []).filter((service) =>
      (bookingState?.selectedServices || []).includes(service.id),
    );
    const totalRub = Math.max(
      0,
      Math.round(selectedServices.reduce((total, service) => total + (Number(service.price) || 0), 0)),
    );
    const bsToRubRate = Math.max(1, Number(referral?.program?.bsToRubRate) || 1);
    const balanceBs = Math.max(0, Math.trunc(Number(referral?.bsBalance) || 0));
    const maxCoverBs = Math.max(0, Math.min(balanceBs, Math.floor(totalRub / bsToRubRate)));
    const appliedBs = Math.max(0, Math.min(maxCoverBs, Math.trunc(Number(bookingState?.appliedBs) || 0)));
    const coveredRub = appliedBs * bsToRubRate;
    return {
      selectedServices,
      totalRub,
      bsToRubRate,
      balanceBs,
      maxCoverBs,
      appliedBs,
      coveredRub,
      payableRub: Math.max(0, totalRub - coveredRub),
    };
  };

  const syncBookingBsCover = () => {
    const pricing = getBookingPricingSummary();
    state.booking.appliedBs = pricing.appliedBs;
    if (pricing.appliedBs > 0) state.booking.bsCoverExpanded = true;
    return pricing;
  };

  const avatarMarkup = (user, size) => {
    const avatarUrl = normalizeText(user?.avatarUrl);
    const title = normalizeText(user?.displayName || user?.fullName || "U");
    const initials = title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "U";
    if (avatarUrl) {
      return `<div class="profile-avatar" style="width:${size}px;height:${size}px;"><img src="${avatarUrl}" alt="${title}" /></div>`;
    }
    return `<div class="profile-avatar" style="width:${size}px;height:${size}px;display:grid;place-items:center;background:linear-gradient(135deg,var(--md-sys-color-primary),#0b6662);color:#fff;font:700 1rem/1 var(--font-display);">${initials}</div>`;
  };

  const statusColorClass = (value) => (value === "green" ? "green" : value === "yellow" ? "yellow" : "red");
  const referralColorLabel = (value) => {
    if (value === "green") return "Активный";
    if (value === "yellow") return "Редкий";
    return "Неактивный";
  };
  const humanizeReferralTransferError = (error) => {
    const message = normalizeText(error?.message).toLowerCase();
    if (!message) return "Не удалось выполнить перевод BS. Попробуйте еще раз.";
    if (message.includes("телефон")) return "Укажите номер телефона получателя.";
    if (message.includes("получател") || message.includes("найден")) return "Клиент с таким номером не найден.";
    if (message.includes("самому себе") || message.includes("самом")) return "Нельзя переводить BS самому себе.";
    if (message.includes("сумм")) return "Укажите корректную сумму BS.";
    if (message.includes("недостат")) return "На балансе недостаточно BS для перевода.";
    return "Не удалось выполнить перевод BS. Проверьте номер и попробуйте снова.";
  };
  const getReferralLevelName = (referralProgram = {}, activeReferralsCount = 0) => {
    const currentLevelName = normalizeText(referralProgram.currentLevel?.name);
    if (currentLevelName) return currentLevelName;
    return Number(activeReferralsCount || referralProgram.activeReferralsCount || 0) > 0 ? "Не определен" : "Гость";
  };
  const iconMarkup = (name) => {
    if (name === "settings") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.1"></circle><path d="M19.14 12.94a7.8 7.8 0 0 0 .05-.94 7.8 7.8 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.35 7.35 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.49-.42h-3.84a.5.5 0 0 0-.49.42l-.36 2.54c-.58.22-1.13.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.8 7.8 0 0 0-.05.94c0 .32.02.63.05.94L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.84a.5.5 0 0 0 .49-.42l.36-2.54c.58-.22 1.13-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58Z"></path></svg>';
    }
    if (name === "telegram") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.5 4.5-3 14.2c-.2 1-1 1.2-1.8.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.7 8.7-7.8c.4-.3-.1-.5-.5-.2l-10.8 6.8-4.7-1.5c-1-.3-1-1 .2-1.4L20 3.8c.9-.3 1.7.2 1.5 1.7Z"></path></svg>';
    }
    if (name === "whatsapp") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7l-3.2.9.9-3.1A8 8 0 1 1 20 11.5Z"></path><path d="M9.1 8.4c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1 1-.9 2.4 0 1.4 1 2.8 1.2 3 .2.2 2.1 3.3 5.1 4.4 2.5 1 3 1 3.5.9.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4-.1-.2-.4-.3-.9-.5l-1.5-.7c-.4-.2-.7-.1-.9.2l-.7.9c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-.7-.7-1.2-1.5-1.4-1.9-.1-.4 0-.6.1-.8l.3-.3.3-.4c.1-.2.2-.4.3-.6 0-.2 0-.4-.1-.6l-.7-1.7Z"></path></svg>';
    }
    if (name === "mail") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>';
    }
    if (name === "phone") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7A2 2 0 0 1 22 16.9Z"></path></svg>';
    }
    if (name === "copy") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path></svg>';
    }
    if (name === "transfer") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10"></path><path d="m13 3 4 4-4 4"></path><path d="M17 17H7"></path><path d="m11 21-4-4 4-4"></path></svg>';
    }
    if (name === "receive") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12"></path><path d="m7 11 5 5 5-5"></path><path d="M5 20h14"></path></svg>';
    }
    if (name === "reward") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.6 6.7 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"></path></svg>';
    }
    if (name === "trophy") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v2h2a1 1 0 0 1 1 1v1a5 5 0 0 1-4.5 4.97A5.5 5.5 0 0 1 13 15.7V18h3v2H8v-2h3v-2.3a5.5 5.5 0 0 1-1.5-2.73A5 5 0 0 1 5 8V7a1 1 0 0 1 1-1h2V4Zm-1 4a3 3 0 0 0 2.1 2.87A8.2 8.2 0 0 1 8.03 8H7Zm10 0a8.2 8.2 0 0 1-1.07 2.87A3 3 0 0 0 18 8h-1Z"></path></svg>';
    }
    if (name === "wallet") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5.5A2.5 2.5 0 0 1 3 16.5v-9Z"></path><path d="M16 12h5"></path><circle cx="16.5" cy="12" r="1"></circle></svg>';
    }
    if (name === "qr") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"></path><path d="M15 15h2v2h-2zM17 17h3v3h-3zM14 19h2v1h-2zM19 14h1v2h-1z"></path></svg>';
    }
    if (name === "scan") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7V5a1 1 0 0 1 1-1h2M20 7V5a1 1 0 0 0-1-1h-2M4 17v2a1 1 0 0 0 1 1h2M20 17v2a1 1 0 0 1-1 1h-2"></path><path d="M7 12h10"></path></svg>';
    }
    if (name === "chevron-left") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6"></path></svg>';
    }
    if (name === "chevron-right") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6"></path></svg>';
    }
    if (name === "close") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18"></path><path d="M18 6 6 18"></path></svg>';
    }
    return "";
  };

  const apiRequest = async (path, options) => {
    const token = normalizeText(state.session?.token);
    if (!token) {
      clearSession();
      redirectToLogin();
      throw new Error("Сессия недоступна.");
    }
    const response = await fetch(`${API_ROOT}${path}`, {
      method: options?.method || "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options?.body ? { "Content-Type": "application/json" } : {}),
      },
      body: options?.body,
    });
    const refreshedToken = normalizeText(response.headers.get("x-home-session-token"));
    if (refreshedToken) {
      state.session.token = refreshedToken;
      persistSession(state.session);
    }
    if (response.status === 401 || response.status === 403) {
      clearSession();
      redirectToLogin();
      throw new Error("Сессия истекла.");
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(normalizeText(payload.message || payload.error) || "Ошибка запроса.");
    return payload;
  };

  const publicApiRequest = async (path) => {
    const response = await fetch(`${API_ROOT}${path}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(normalizeText(payload.message || payload.error) || "Ошибка запроса.");
    return payload;
  };

  const ensureSitePresenceSessionId = () => {
    const existing = normalizeText(window.sessionStorage.getItem(SITE_PRESENCE_SESSION_KEY));
    if (existing) return existing;
    const nextValue =
      typeof window.crypto?.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `presence-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
    window.sessionStorage.setItem(SITE_PRESENCE_SESSION_KEY, nextValue);
    return nextValue;
  };

  const sendSitePresence = async (mode = "online") => {
    const token = normalizeText(state.session?.token);
    if (!token) return;
    const sessionId = ensureSitePresenceSessionId();
    const endpoint = mode === "offline" ? "/presence/offline" : "/presence";
    try {
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
        keepalive: mode === "offline",
      });
    } catch {
      // Best-effort presence sync.
    }
  };

  const stopSitePresenceLoop = () => {
    if (!sitePresenceTimer) return;
    window.clearInterval(sitePresenceTimer);
    sitePresenceTimer = null;
  };

  const startSitePresenceLoop = () => {
    stopSitePresenceLoop();
    void sendSitePresence("online");
    sitePresenceTimer = window.setInterval(() => {
      if (document.visibilityState === "hidden") return;
      void sendSitePresence("online");
    }, SITE_PRESENCE_PING_INTERVAL_MS);
  };

  const buildBookingStatusSheet = (label) => `
    <div class="booking-status-sheet" aria-live="polite">
      <div class="booking-status-icon" aria-hidden="true">
        <span class="booking-status-icon-ring"></span>
        <span class="booking-status-icon-check"></span>
      </div>
      <div class="booking-status-title">${normalizeText(label)}</div>
    </div>
  `;

  const stopReferralQrScanner = () => {
    referralQrScannerSession += 1;
    if (referralQrScannerFrame) {
      window.cancelAnimationFrame(referralQrScannerFrame);
      referralQrScannerFrame = null;
    }
    if (referralQrScannerStream) {
      referralQrScannerStream.getTracks().forEach((track) => track.stop());
      referralQrScannerStream = null;
    }
  };

  const buildHistoryState = (sheet = null) => ({
    page: state.currentPage,
    sheet: sheet
      ? {
          title: normalizeText(sheet.title),
          bodyHtml: sheet.bodyHtml || "",
          footerHtml: sheet.footerHtml || "",
          className: normalizeText(sheet.className),
        }
      : null,
  });

  const applySheetStateToDom = (sheetState) => {
    const backdrop = ROOT.querySelector("#sheet-backdrop");
    const sheet = backdrop?.querySelector(".sheet");
    if (!backdrop || !sheet) return;
    const nextClass = sheetState === "closing" ? "is-closing" : sheetState === "open" ? "is-open" : "is-entering";
    backdrop.classList.remove("is-entering", "is-open", "is-closing");
    sheet.classList.remove("is-entering", "is-open", "is-closing");
    backdrop.classList.add(nextClass);
    sheet.classList.add(nextClass);
  };
  const ensureRenderHosts = () => {
    let appHost = ROOT.querySelector("[data-render-host='app']");
    let sheetHost = ROOT.querySelector("[data-render-host='sheet']");
    if (appHost && sheetHost) return { appHost, sheetHost };
    ROOT.innerHTML = `<div data-render-host="app"></div><div data-render-host="sheet"></div>`;
    appHost = ROOT.querySelector("[data-render-host='app']");
    sheetHost = ROOT.querySelector("[data-render-host='sheet']");
    return { appHost, sheetHost };
  };

  const openSheet = (title, bodyHtml, footerHtml, className = "", options = {}) => {
    stopReferralQrScanner();
    if (sheetCloseTimer) {
      window.clearTimeout(sheetCloseTimer);
      sheetCloseTimer = null;
    }
    if (sheetOpenFrame) {
      window.cancelAnimationFrame(sheetOpenFrame);
      sheetOpenFrame = null;
    }
    state.sheet = { title, bodyHtml, footerHtml: footerHtml || "", className: normalizeText(className) };
    state.sheetState = "entering";
    if (options.syncHistory !== false) {
      window.history.pushState(buildHistoryState(state.sheet), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
    render({ app: false });
    sheetOpenFrame = window.requestAnimationFrame(() => {
      state.sheetState = "open";
      sheetOpenFrame = null;
      applySheetStateToDom("open");
    });
  };

  const closeSheet = (options = {}) => {
    if (!state.sheet) return;
    if (options.syncHistory !== false && window.history.state?.sheet && !suppressSheetHistoryBack) {
      window.history.back();
      return;
    }
    stopReferralQrScanner();
    if (sheetCloseTimer) {
      window.clearTimeout(sheetCloseTimer);
      sheetCloseTimer = null;
    }
    if (sheetOpenFrame) {
      window.cancelAnimationFrame(sheetOpenFrame);
      sheetOpenFrame = null;
    }
    state.sheetState = "closing";
    applySheetStateToDom("closing");
    sheetCloseTimer = window.setTimeout(() => {
      state.sheet = null;
      state.sheetState = "closed";
      sheetCloseTimer = null;
      render({ app: false });
    }, 280);
  };

  const dismissSheet = () => {
    if (!state.sheet) return;
    suppressSheetHistoryBack = true;
    window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    closeSheet({ syncHistory: false });
    window.setTimeout(() => {
      suppressSheetHistoryBack = false;
    }, 0);
  };

  const scrollToBookingStep = (stepName) => {
    if (state.currentPage !== "booking") return;
    window.requestAnimationFrame(() => {
      const target = document.querySelector(`[data-booking-step="${normalizeText(stepName)}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const logout = () => {
    setLogoutMarker();
    clearSession();
    redirectToLogin();
  };

  const renderTopbar = () => {
    const user = state.payload?.user || {};
    const siteHome = state.payload?.site?.home || {};
    const authenticated = isAuthenticated();
    return memoizeRenderedFragment("topbar", [user, siteHome, authenticated], () => `
      <header class="topbar">
        <div class="brand">
          <span class="brand-title">${normalizeText(siteHome.logoText || "BrotherShop")}</span>
        </div>
        <div class="topbar-side">
          ${authenticated
            ? `<div class="chip">${avatarMarkup(user, 44)}<span>${normalizeText(user.displayName || "Клиент")}</span></div>`
            : `<a class="ghost-btn" href="${buildLoginUrl("/booking/")}">Войти</a>`}
        </div>
      </header>
    `);
  };

  const renderBottomNav = () => {
    if (!isAuthenticated()) return "";
    const items = [
      {
        id: "home",
        label: "Home",
        href: "/home/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8.74 4.06a4.5 4.5 0 0 1 6.52 0l3.75 3.88A4.5 4.5 0 0 1 20.3 11.07v5.98A2.95 2.95 0 0 1 17.35 20H6.65A2.95 2.95 0 0 1 3.7 17.05v-5.98a4.5 4.5 0 0 1 1.29-3.13l3.75-3.88ZM10.78 12.3c0-.66.54-1.2 1.2-1.2h.04c.66 0 1.2.54 1.2 1.2V20h-2.44v-7.7Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "referral",
        label: "BS",
        href: "/referral/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M6.9 4.1c1.68 0 3.04 1.36 3.04 3.04S8.58 10.2 6.9 10.2 3.86 8.82 3.86 7.14 5.22 4.1 6.9 4.1ZM17.1 4.1c1.68 0 3.04 1.36 3.04 3.04s-1.36 3.04-3.04 3.04-3.04-1.36-3.04-3.04 1.36-3.04 3.04-3.04ZM9.15 12.1c2.8 0 5.08 2.28 5.08 5.08A2.82 2.82 0 0 1 11.4 20H4.77a2.82 2.82 0 0 1-2.83-2.82c0-2.8 2.28-5.08 5.09-5.08h2.12ZM18.94 12.62c1.72 0 3.12 1.4 3.12 3.12A2.26 2.26 0 0 1 19.8 18h-2.65c.13-.43.2-.88.2-1.34 0-1.44-.56-2.75-1.47-3.73.54-.2 1.12-.31 1.66-.31Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "booking",
        label: "Booking",
        href: "/booking/",
        icon: BOOKING_NAV_ICON,
        activeIcon: BOOKING_NAV_ICON_ACTIVE,
        className: "nav-pill-booking",
      },
      {
        id: "shop",
        label: "Shop",
        href: "/shop/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7.35 4.1A2.85 2.85 0 0 1 10.2 1.25h3.6a2.85 2.85 0 0 1 2.85 2.85v.7h1.5A2.85 2.85 0 0 1 21 7.65v8.2a3.15 3.15 0 0 1-3.15 3.15H6.15A3.15 3.15 0 0 1 3 15.85v-8.2A2.85 2.85 0 0 1 5.85 4.8h1.5v-.7Zm2.1 0v.7h5.1v-.7a.75.75 0 0 0-.75-.75H10.2a.75.75 0 0 0-.75.75Zm-1.8 5.15c0-.58.47-1.05 1.05-1.05h6.6a1.05 1.05 0 1 1 0 2.1H8.7c-.58 0-1.05-.47-1.05-1.05Z" clip-rule="evenodd"></path></svg>',
      },
      {
        id: "profile",
        label: "Profile",
        href: "/profile/",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M12 3.25A4.75 4.75 0 1 0 12 12.75A4.75 4.75 0 1 0 12 3.25ZM6.77 14.25a4.52 4.52 0 0 0-4.52 4.52c0 1.1.9 1.98 1.98 1.98h15.54c1.09 0 1.98-.89 1.98-1.98a4.52 4.52 0 0 0-4.52-4.52H6.77Z" clip-rule="evenodd"></path></svg>',
      },
    ];
    const navPage = state.currentPage === "achievements" ? "profile" : state.currentPage;
    const activeIndex = Math.max(0, items.findIndex((item) => item.id === navPage));
    const indicatorIndex = Number.isFinite(Number(state.navIndicatorIndex)) ? Number(state.navIndicatorIndex) : activeIndex;
    return memoizeRenderedFragment("bottom-nav", [state.currentPage, activeIndex, indicatorIndex], () => `
      <nav class="bottom-nav" data-active-index="${activeIndex}" style="--indicator-index:${indicatorIndex}; --nav-count:${items.length};">
        <div class="bottom-nav-indicator" aria-hidden="true"></div>
        ${items
          .map(
            (item) =>
              `<a class="nav-pill nav-link ${normalizeText(item.className)} ${item.id === state.currentPage ? "active" : ""}" href="${item.href}" aria-label="${item.label}" title="${item.label}"><span class="nav-icon-wrap">${item.id === state.currentPage && item.activeIcon ? item.activeIcon : item.icon}</span></a>`,
          )
          .join("")}
      </nav>
    `);
  };

  const renderHomePage = () => {
    const siteHome = state.payload?.site?.home || {};
    const activeAppointments = Array.isArray(state.payload?.booking?.activeAppointments) ? state.payload.booking.activeAppointments : [];
    const barbers = Array.isArray(state.payload?.booking?.barbers) ? state.payload.booking.barbers.slice(0, 4) : [];
    return memoizeRenderedFragment("page-home", [siteHome, activeAppointments, barbers], () => {
      const promos = Array.isArray(siteHome.promos) ? siteHome.promos : [];
      const promoLaneItems = (() => {
        const indexedPromos = promos.map((promo, index) => ({ ...promo, _promoIndex: index }));
        if (indexedPromos.length <= 1) return indexedPromos;
        const repeated = [];
        while (repeated.length < Math.max(6, indexedPromos.length * 2)) {
          repeated.push(...indexedPromos);
        }
        return repeated.slice(0, Math.max(6, indexedPromos.length * 2));
      })();
      const promoCards = promoLaneItems.length
        ? promoLaneItems
            .map(
              (promo) => `
                <button class="promo-thumb" data-action="open-promo" data-id="${normalizeText(promo.id)}" data-index="${Number.isInteger(promo._promoIndex) ? promo._promoIndex : ""}" style="${normalizeText(promo.imageUrl) ? `background-image:url('${normalizeText(promo.imageUrl)}');` : ""}">
                  <span class="promo-thumb-overlay">
                    <strong>${normalizeText(promo.title)}</strong>
                    <small>${normalizeText(promo.subtitle)}</small>
                  </span>
                </button>`,
            )
            .join("")
        : "";
      const nextAppointment = activeAppointments[0] || null;
      const appointmentBarber = nextAppointment
        ? barbers.find((barber) =>
            normalizeText(barber.id) === normalizeText(nextAppointment.barberId) ||
            normalizeText(barber.name) === normalizeText(nextAppointment.barber),
          ) || null
        : null;
      const appointmentBarberAvatar = normalizeText(
        nextAppointment?.barberAvatarUrl ||
        nextAppointment?.avatarUrl ||
        appointmentBarber?.avatarUrl,
      );
      const mapLink = normalizeText(siteHome.mapLink) || "https://go.2gis.com/fPKd6";
      const bookingButtonText = normalizeText(siteHome.bookingButtonText) || "Записаться";
      return `
      <section class="page home-page home-mobile-layout">
        <section class="home-frame home-promo-strip">
          <section class="promo-marquee${promos.length > 1 ? " is-animated" : ""}" aria-label="Акции">
            <div class="promo-track${promos.length > 1 ? " is-animated" : ""}">
            ${promos.length
              ? promos.length > 1
                ? `<div class="promo-lane">${promoCards}</div><div class="promo-lane" aria-hidden="true">${promoCards}</div>`
                : `<div class="promo-lane">${promoCards}</div>`
              : `<div class="empty-state promo-empty">Скоро здесь появятся актуальные предложения и акции.</div>`}
            </div>
          </section>
        </section>
        <article class="appointment-card">
          ${nextAppointment ? `
            <div class="section-head">
              <div>
                <div class="section-eyebrow">Моя запись</div>
              </div>
            </div>
            <button class="appointment-overview" type="button" data-action="open-sheet" data-sheet="manage-booking" data-id="${normalizeText(nextAppointment?.id)}">
              <div class="appointment-grid">
                <div class="appointment-meta">
                  <span class="field-label">Дата</span>
                  <strong>${nextAppointment ? formatDateOnly(nextAppointment.date) : "Выберите день"}</strong>
                </div>
                <div class="appointment-meta">
                  <span class="field-label">Время</span>
                  <strong>${nextAppointment ? normalizeText(nextAppointment.time) : "Выберите слот"}</strong>
                </div>
              </div>
              <div class="appointment-barber">
                ${nextAppointment
                  ? avatarMarkup({ avatarUrl: appointmentBarberAvatar, displayName: nextAppointment.barber }, 56)
                  : avatarMarkup({ displayName: "BS" }, 56)}
                <div>
                  <p class="list-title">${nextAppointment ? normalizeText(nextAppointment.barber || "BrotherShop") : "BrotherShop"}</p>
                  <p class="subtitle">${nextAppointment ? normalizeText((nextAppointment.services || []).join(", ") || "Детали записи доступны в booking") : "Открой booking и собери удобный слот."}</p>
                </div>
              </div>
            </button>
            <div class="appointment-cta-wrap">
              <a class="primary-btn booking-cta booking-cta-compact" href="/booking/">${bookingButtonText}</a>
            </div>
          ` : ``}
          ${nextAppointment ? "" : `<div class="appointment-cta-wrap"><a class="primary-btn booking-cta" href="/booking/">${bookingButtonText}</a></div>`}
        </article>
        <article class="content-card home-about-card">
          <div>
            <h2 class="section-title">${normalizeText(siteHome.aboutTitle || "BrotherShop")}</h2>
            <p class="section-text">${normalizeText(siteHome.aboutText || "")}</p>
          </div>
          <div class="about-image-frame" style="${normalizeText(siteHome.aboutImageUrl) ? `background-image:url('${normalizeText(siteHome.aboutImageUrl)}');` : ""}"></div>
        </article>
        <article class="content-card map-card">
          <h2 class="map-title">${normalizeText(siteHome.mapTitle || "Карта")}</h2>
          <a class="map-link-card" href="${mapLink}" target="_blank" rel="noopener noreferrer">
            <div class="map-image" style="${normalizeText(siteHome.mapImageUrl) ? `background-image:url('${normalizeText(siteHome.mapImageUrl)}');` : ""}">
              <div class="map-overlay-card">
                <div class="map-overlay-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="6.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="16.5" r="2.5"></circle><path d="M8.6 8.9 19 3.5"></path><path d="M8.6 15.1 19 20.5"></path><path d="m11.2 12 7.8-8.5"></path><path d="m11.2 12 7.8 8.5"></path></svg>
                </div>
                <div class="map-overlay-copy">
                  <strong>${normalizeText(siteHome.logoText || "BrotherShop")}</strong>
                  <span>${normalizeText(siteHome.mapCaption || "Открыть маршрут и посмотреть локацию")}</span>
                </div>
                <span class="map-overlay-action">На карте</span>
              </div>
            </div>
          </a>
        </article>
        <article class="content-card contacts-card">
          <h2 class="section-title">${normalizeText(siteHome.contactsTitle || "Контакты")}</h2>
          <div class="contact-actions">
            <a class="ghost-btn square-btn icon-btn contacts-phone phone-link" href="tel:${normalizePhone(siteHome.phone || CONTACT_PHONE)}" aria-label="Телефон">${iconMarkup("phone")}<span>${normalizeText(siteHome.phone || CONTACT_PHONE)}</span></a>
            ${normalizeText(siteHome.telegramUrl) ? `<a class="ghost-btn square-btn icon-btn" href="${normalizeText(siteHome.telegramUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Telegram">${iconMarkup("telegram")}<span>Telegram</span></a>` : ""}
            ${normalizeText(siteHome.whatsappUrl) ? `<a class="ghost-btn square-btn icon-btn" href="${normalizeText(siteHome.whatsappUrl)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${iconMarkup("whatsapp")}<span>WhatsApp</span></a>` : ""}
            ${normalizeText(siteHome.email) ? `<a class="ghost-btn square-btn icon-btn" href="mailto:${normalizeText(siteHome.email)}" aria-label="Email">${iconMarkup("mail")}<span>Email</span></a>` : ""}
          </div>
          ${!normalizeText(siteHome.telegramUrl) && !normalizeText(siteHome.whatsappUrl) && !normalizeText(siteHome.email) ? `<p class="app-note">Сейчас доступен звонок по телефону. Остальные способы связи можно добавить в CRM.</p>` : ""}
        </article>
        <article class="content-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Барберы</div>
              <h2 class="section-title">Мастера BrotherShop</h2>
            </div>
          </div>
          <div class="barber-grid">
            ${barbers.length
              ? barbers
              .map(
                (barber) => `
                  <div class="barber-card home-barber-card">
                    <div class="booking-barber-surface home-barber-surface">
                      <div class="home-barber-head">
                        <p class="barber-name">${normalizeText(barber.name)}</p>
                      </div>
                      ${normalizeText(barber.cardDescription || barber.description) ? `<p class="subtitle home-barber-description">${normalizeText(barber.cardDescription || barber.description)}</p>` : ""}
                      <div class="home-barber-bottom">
                        ${normalizeText(barber.phrase) ? `<p class="subtitle home-barber-phrase">${normalizeText(barber.phrase)}</p>` : ""}
                      </div>
                      <div class="booking-barber-visual">
                        <div class="booking-barber-visual-frame">
                          ${normalizeText(barber.avatarUrl)
                            ? `<img class="booking-barber-photo" src="${normalizeText(barber.avatarUrl)}" alt="${normalizeText(barber.name)}" />`
                            : avatarMarkup({ avatarUrl: barber.avatarUrl, displayName: barber.name }, 154)}
                        </div>
                      </div>
                    </div>
                  </div>`,
              )
              .join("")
              : `<div class="empty-state">Список мастеров скоро обновится. Откройте запись, чтобы увидеть доступных специалистов.</div>`}
          </div>
        </article>
      </section>
    `;
    });
  };

  const renderReferralPage = () => {
    const referral = state.payload?.referral || {};
    const referrals = Array.isArray(referral.referrals) ? referral.referrals : [];
    const referralProgram = referral.program || {};
    const transferRecipients = Array.isArray(referral.recentTransferRecipients) ? referral.recentTransferRecipients : [];
    const levels = Array.isArray(referralProgram.levels) ? referralProgram.levels : [];
    const operations = Array.isArray(referral.operations) ? referral.operations : [];
    return memoizeRenderedFragment("page-referral", [referral, state.transferHistoryFilter, state.referralLinkCopied], () => {
      const referralPreview = referrals.slice(0, 4);
      const { transferOut: transferOutOperations, transferIn: transferInOperations } = getReferralOperationGroups(operations);
      const filteredBsActivity = getFilteredReferralActivity(operations, state.transferHistoryFilter);
      const activityPreview = filteredBsActivity.slice(0, 5);
      const outgoingTransfers = transferOutOperations.length;
      const sentTotal = transferOutOperations.reduce((total, operation) => total + Math.abs(Number(operation.amountBs) || 0), 0);
      const receivedTotal = transferInOperations.reduce((total, operation) => total + Math.max(0, Number(operation.amountBs) || 0), 0);
      const averageTransfer = outgoingTransfers ? Math.round(sentTotal / outgoingTransfers) : 0;
      const levelProgress = Math.max(0, Math.min(100, Number(referral.scale?.progress || 0)));
      const nextReferralTarget = Math.max(0, Number(referral.scale?.next || 0));
      const currentReferralCount = Math.max(0, Number(referral.program?.activeReferralsCount || referral.stats?.green || referral.scale?.current || 0));
      const referralLevelName = getReferralLevelName(referralProgram, currentReferralCount);
      const now = new Date();
      const topReferralThisMonth =
        referrals
          .filter((item) => {
            const date = normalizeText(item.lastVisitAt);
            if (!date) return false;
            const parsed = new Date(date);
            return !Number.isNaN(parsed.getTime()) && parsed.getMonth() === now.getMonth() && parsed.getFullYear() === now.getFullYear();
          })
          .sort((left, right) => (Number(right.rewardedVisits || 0) - Number(left.rewardedVisits || 0)) || (Number(right.completedVisits || 0) - Number(left.completedVisits || 0)))[0] ||
        referrals
          .slice()
          .sort((left, right) => (Number(right.rewardedVisits || 0) - Number(left.rewardedVisits || 0)) || (Number(right.completedVisits || 0) - Number(left.completedVisits || 0)))[0] ||
        null;
      return `
      <section class="page referral-page">
        <article class="hero-card referral-wallet-card">
          <div class="referral-wallet-sheen"></div>
          <div class="referral-wallet-head">
            <div>
              <div class="hero-eyebrow">BS Wallet</div>
              <h1 class="hero-title">Бонусы и переводы</h1>
            </div>
            <div class="referral-wallet-mark">${iconMarkup("wallet")}</div>
          </div>
          <div class="referral-wallet-balance">
            <span class="field-label referral-wallet-balance-label">Баланс BS</span>
            <div class="referral-wallet-balance-number">${referral.bsBalance || 0}</div>
            <button class="referral-wallet-balance-note referral-wallet-level-link" type="button" data-action="open-sheet" data-sheet="referral-levels">Уровень: ${referralLevelName}</button>
          </div>
          <div class="referral-wallet-progress">
            <div class="referral-wallet-progress-head">
              <span class="field-label">Прогресс до следующего уровня</span>
              <strong>${referral.scale?.isMaxLevel ? "MAX" : `${currentReferralCount}/${nextReferralTarget}`}</strong>
            </div>
            <div class="progress-track referral-wallet-progress-track"><div class="progress-bar referral-wallet-progress-bar" style="width:${levelProgress}%"></div></div>
          </div>
          <div class="referral-wallet-footer">
            <div class="referral-wallet-actions">
              <button class="referral-wallet-action referral-copy-btn ${state.referralLinkCopied ? "is-copied" : ""}" type="button" data-action="copy-referral">${iconMarkup("copy")}<span>${state.referralLinkCopied ? "Ссылка скопирована" : "Реферальная ссылка"}</span></button>
              <button class="referral-wallet-action" type="button" data-action="open-sheet" data-sheet="transfer-bs">${iconMarkup("transfer")}<span>Перевести BS</span></button>
              <button class="referral-wallet-action" type="button" data-action="open-sheet" data-sheet="my-transfer-qr">${iconMarkup("qr")}<span>Мой QR</span></button>
              <button class="referral-wallet-action referral-wallet-action-scan" type="button" data-action="open-sheet" data-sheet="scan-transfer-qr">${iconMarkup("scan")}<span>Сканировать QR</span></button>
            </div>
          </div>
        </article>
        <article class="list-card referral-transfer-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Переводы</div>
              <h2 class="section-title">Быстрые отправки</h2>
            </div>
          </div>
          <button class="referral-transfer-hub" type="button" data-action="open-sheet" data-sheet="transfer-bs">
            <div>
              <p class="list-title">Отправить BS клиенту</p>
              <p class="subtitle">Перевод по номеру телефона с моментальным подтверждением.</p>
            </div>
            <span class="referral-transfer-hub-arrow">${iconMarkup("transfer")}</span>
          </button>
          ${transferRecipients.length
            ? `<div class="referral-transfer-recipient-carousel">
                <button class="ghost-btn icon-only-btn referral-transfer-scroll-btn referral-transfer-scroll-btn-prev" type="button" data-action="scroll-transfer-recipients" data-direction="prev" aria-label="Прокрутить получателей влево">${iconMarkup("chevron-left")}</button>
                <div class="referral-transfer-recipient-strip" data-transfer-recipient-strip>
                ${transferRecipients
                  .map(
                    (recipient) => `
                      <button
                        class="referral-transfer-recipient"
                        type="button"
                        data-action="open-quick-transfer"
                        data-phone="${normalizeText(recipient.phone)}"
                        data-name="${normalizeText(recipient.fullName)}"
                        data-short-name="${normalizeText(recipient.shortName || recipient.fullName)}"
                      >
                        ${avatarMarkup({ displayName: recipient.shortName || recipient.fullName }, 56)}
                        <span class="referral-transfer-recipient-name">${normalizeText(recipient.shortName || recipient.fullName)}</span>
                      </button>`,
                  )
                  .join("")}
                </div>
                <button class="ghost-btn icon-only-btn referral-transfer-scroll-btn referral-transfer-scroll-btn-next" type="button" data-action="scroll-transfer-recipients" data-direction="next" aria-label="Прокрутить получателей вправо">${iconMarkup("chevron-right")}</button>
              </div>`
            : ``}
          <div class="referral-inline-insights">
            <div class="referral-inline-insight">
              <span class="field-label">Отправлено</span>
              <strong>${sentTotal} BS</strong>
              <span class="subtitle">${outgoingTransfers} переводов</span>
            </div>
            <div class="referral-inline-insight">
              <span class="field-label">Получено</span>
              <strong>${receivedTotal} BS</strong>
              <span class="subtitle">${transferInOperations.length} входящих</span>
            </div>
            <div class="referral-inline-insight">
              <span class="field-label">Средний перевод</span>
              <strong>${averageTransfer} BS</strong>
              <span class="subtitle">${transferRecipients.length} получателей</span>
            </div>
          </div>
        </article>
        <article class="list-card referral-transfer-history-card">
          <div class="referral-subsection">
            <div class="section-head">
              <div>
                <div class="section-eyebrow">История переводов</div>
                <h2 class="section-title">Последние движения BS</h2>
              </div>
              <span class="status-badge">${filteredBsActivity.length}</span>
            </div>
            <div class="filter-row referral-history-filter-row">
              <button class="nav-pill ${state.transferHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="all">Все</button>
              <button class="nav-pill ${state.transferHistoryFilter === "transfers" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="transfers">Переводы</button>
              <button class="nav-pill ${state.transferHistoryFilter === "rewards" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="rewards">Награды</button>
            </div>
            <div class="referral-activity-list">
              ${activityPreview.length
                ? activityPreview.map((operation) => renderReferralOperationCard(operation)).join("")
                : `<div class="empty-state">Пока нет движений BS.</div>`}
            </div>
            <div class="profile-history-more referral-panel-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="referral-history">Показать все</button></div>
          </div>
        </article>
        <article class="list-card referral-panel-card">
          <div class="section-head">
            <div>
              <div class="section-eyebrow">Реферальная сеть</div>
              <h2 class="section-title">Рефералы</h2>
            </div>
            <span class="status-badge">${referral.stats?.green || 0}</span>
          </div>
          ${topReferralThisMonth
            ? `<div class="referral-spotlight-card referral-spotlight-embedded">
                <div class="referral-spotlight-kicker">Лучший в этом месяце</div>
                <div class="referral-spotlight-body">
                  <div class="referral-spotlight-avatar">${avatarMarkup({ displayName: topReferralThisMonth.fullName }, 72)}</div>
                  <div class="referral-spotlight-copy">
                    <p class="list-title">${normalizeText(topReferralThisMonth.fullName)}</p>
                    <p class="subtitle">${topReferralThisMonth.phone ? formatPhone(topReferralThisMonth.phone) : "Телефон скрыт"}</p>
                  </div>
                  <div class="referral-spotlight-stats">
                    <div class="referral-spotlight-stat">
                      <span class="field-label">BS</span>
                      <strong>${topReferralThisMonth.rewardedVisits || 0}</strong>
                    </div>
                    <div class="referral-spotlight-stat">
                      <span class="field-label">Визиты</span>
                      <strong>${topReferralThisMonth.completedVisits || 0}</strong>
                    </div>
                  </div>
                </div>
                <p class="subtitle referral-spotlight-note">${topReferralThisMonth.lastVisitAt ? `Последний визит ${formatDateTime(topReferralThisMonth.lastVisitAt)}` : "Новый лидер по текущим начислениям."}</p>
              </div>`
            : ""}
          <div class="list">
            ${referralPreview.length
              ? referralPreview
                  .map(
                    (item) => `
                      <div class="list-item referral-referral-card">
                        <div class="section-head">
                          <div><p class="list-title">${normalizeText(item.fullName)}</p><p class="subtitle">${item.phone ? formatPhone(item.phone) : "Телефон скрыт"}</p></div>
                          <span class="status-badge ${statusColorClass(item.color)}">${referralColorLabel(item.color)}</span>
                        </div>
                        <div class="referral-referral-metrics">
                          <div class="referral-referral-metric">
                            <span class="field-label">Визиты</span>
                            <strong>${item.completedVisits || 0}</strong>
                          </div>
                          <div class="referral-referral-metric">
                            <span class="field-label">Принес BS</span>
                            <strong>${item.rewardedVisits || 0}</strong>
                          </div>
                        </div>
                        <div class="muted-text">Последний визит: ${item.lastVisitAt ? formatDateTime(item.lastVisitAt) : "Нет данных"}</div>
                      </div>`,
                  )
                  .join("")
              : `<div class="referral-referrals-onboarding">
                  <div class="referral-transfer-onboarding-copy">
                    <div class="section-eyebrow">Старт</div>
                    <p class="list-title">Пригласите первого клиента</p>
                    <p class="subtitle">Отправьте персональную ссылку и после первого визита здесь появятся ваши рефералы и их активность.</p>
                  </div>
                  <button class="primary-btn referral-transfer-onboarding-cta" type="button" data-action="copy-referral">
                    ${iconMarkup("copy")}
                    <span>${state.referralLinkCopied ? "Ссылка скопирована" : "Пригласить первого клиента"}</span>
                  </button>
                </div>`}
          </div>
          <div class="profile-history-more referral-panel-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="referrals">Показать все</button></div>
        </article>
      </section>
    `;
    });
  };

  const buildQuickTransferSheet = (recipient = {}) => {
    const fullName = normalizeText(recipient.fullName || recipient.shortName || "Клиент");
    const shortName = normalizeText(recipient.shortName || recipient.fullName || "Клиент");
    const phone = normalizeText(recipient.phone || recipient.targetPhone);
    return `
      <form class="referral-quick-transfer" id="quick-transfer-form" data-phone="${phone}" data-name="${fullName}" data-short-name="${shortName}">
        <div class="referral-transfer-confirm-card referral-quick-transfer-recipient">
          <div class="referral-quick-transfer-user">
            ${avatarMarkup({ displayName: shortName }, 62)}
            <div>
              <span class="field-label">Получатель</span>
              <strong>${fullName}</strong>
              <span class="subtitle">${phone ? formatPhone(phone) : "Телефон не указан"}</span>
            </div>
          </div>
        </div>
        <div class="referral-transfer-confirm-card">
          <span class="field-label">Выберите сумму</span>
          <div class="referral-quick-transfer-amounts">
              ${REFERRAL_TRANSFER_QUICK_AMOUNTS
                .map(
                (amount) => `
                  <button
                    class="referral-quick-amount"
                    type="button"
                    data-action="quick-transfer-amount"
                    data-phone="${phone}"
                    data-name="${fullName}"
                    data-short-name="${shortName}"
                    data-amount="${amount}"
                  >
                    ${amount} BS
                  </button>`,
              )
              .join("")}
          </div>
          <label class="field referral-quick-transfer-manual">
            <span class="field-label">Своя сумма</span>
            <input type="number" name="amountBs" min="1" step="1" placeholder="Введите сумму BS" />
          </label>
          <div class="inline-actions">
            <button class="primary-btn referral-quick-transfer-custom" type="submit">Продолжить</button>
          </div>
        </div>
      </form>
    `;
  };

  const buildReferralQrSheet = () => {
    const user = state.payload?.user || {};
    const phone = normalizePhone(user.phone);
    const qrPayload = buildReferralQrPayload(user);
    if (!phone || !qrPayload) {
      return `<div class="empty-state">Для QR-перевода в профиле должен быть указан телефон.</div>`;
    }
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=16&data=${encodeURIComponent(qrPayload)}`;
    return `
      <div class="referral-qr-sheet">
        <div class="referral-transfer-confirm-card referral-qr-card">
          <span class="field-label">Получатель BS</span>
          <strong>${normalizeText(user.displayName || "Клиент")}</strong>
          <span class="subtitle">${formatPhone(phone)}</span>
        </div>
        <div class="referral-qr-image-wrap">
          <img class="referral-qr-image" src="${qrImageUrl}" alt="QR для перевода BS" />
        </div>
        <p class="subtitle referral-qr-note">Покажите этот QR отправителю. После сканирования номер получателя подставится автоматически.</p>
      </div>
    `;
  };

  const buildReferralQrScannerSheet = () => `
    <div class="referral-qr-sheet">
      <div class="referral-transfer-confirm-card referral-qr-card">
        <span class="field-label">Сканирование QR</span>
        <strong>Наведите камеру на QR получателя</strong>
        <span class="subtitle" id="referral-qr-scan-status">Ожидание доступа к камере...</span>
      </div>
      <div class="referral-qr-scanner-wrap">
        <video id="referral-qr-video" class="referral-qr-video" autoplay playsinline muted></video>
      </div>
      <p class="subtitle referral-qr-note">Если QR считан, форма перевода откроется автоматически с заполненным получателем.</p>
    </div>
  `;

  const startReferralQrScanner = async () => {
    const video = document.getElementById("referral-qr-video");
    const status = document.getElementById("referral-qr-scan-status");
    if (!video || !status) return;
    const scannerSession = referralQrScannerSession + 1;
    referralQrScannerSession = scannerSession;
    if (!("BarcodeDetector" in window) || !window.isSecureContext) {
      status.textContent = "Сканирование доступно только в защищённом браузере с поддержкой QR API.";
      return;
    }
    try {
      const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
      const stream = await window.navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      referralQrScannerStream = stream;
      video.srcObject = stream;
      await video.play();
      if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
        stopReferralQrScanner();
        return;
      }
      status.textContent = "Ищем QR-код...";
      const scan = async () => {
        if (scannerSession !== referralQrScannerSession || normalizeText(state.sheet?.title) !== "Сканировать QR") {
          stopReferralQrScanner();
          return;
        }
        if (!video.videoWidth || !video.videoHeight) {
          referralQrScannerFrame = window.requestAnimationFrame(scan);
          return;
        }
        try {
          const barcodes = await detector.detect(video);
          const match = Array.isArray(barcodes)
            ? barcodes.map((item) => parseReferralQrPayload(item?.rawValue)).find(Boolean)
            : null;
          if (match?.phone) {
            stopReferralQrScanner();
            state.referralTransferDraft = {
              ...(state.referralTransferDraft || {}),
              targetPhone: match.phone,
              fullName: match.name || "",
              recipientShortName: match.name || "",
            };
            openNamedSheet("transfer-bs");
            return;
          }
        } catch {
          // ignore detector frame errors
        }
        referralQrScannerFrame = window.requestAnimationFrame(scan);
      };
      referralQrScannerFrame = window.requestAnimationFrame(scan);
    } catch (error) {
      status.textContent = normalizeText(error?.message || "Не удалось получить доступ к камере.");
      stopReferralQrScanner();
    }
  };

  const getReferralOperationIconName = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "transfer";
    if (type === "transfer_in") return "receive";
    if (type === "reward") return "reward";
    return "wallet";
  };

  const getReferralOperationToneClass = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "is-outgoing";
    if (type === "transfer_in") return "is-incoming";
    if (type === "reward") return "is-reward";
    return "";
  };

  const getReferralOperationStatusLabel = (operation = {}) => {
    const type = normalizeText(operation.type);
    if (type === "transfer_out") return "Отправка";
    if (type === "transfer_in") return "Поступление";
    if (type === "reward") return "Награда";
    return "Операция";
  };
  const getReferralOperationMetaLabel = (operation = {}) => {
    const type = normalizeText(operation.type);
    const counterpartName = normalizeText(operation.counterpartName);
    const timestamp = formatShortDateTime(operation.createdAt);
    if (type === "transfer_out" || type === "transfer_in") {
      return [counterpartName, timestamp].filter(Boolean).join(" · ");
    }
    return timestamp;
  };
  const getReferralOperationComment = (operation = {}) => {
    const type = normalizeText(operation.type);
    const explicitComment = normalizeText(operation.comment);
    if (explicitComment) return explicitComment;
    const description = normalizeText(operation.description);
    if (!description) return "";
    if (type === "transfer_out" || type === "transfer_in") {
      const transferComment = description.split(" · ").slice(1).join(" · ").trim();
      return transferComment;
    }
    if (type === "manual_adjust" || type === "manual_set") {
      const adminMarker = /\.?\s*Админ:[^.]*\.\s*/i;
      const normalizedDescription = description.replace(adminMarker, " ").trim();
      const manualPrefix = /^(Баланс изменён с .*? BS до .*? BS\.?|Начислено \d+ BS\.?|Списано \d+ BS\.?)/i;
      const manualComment = normalizedDescription.replace(manualPrefix, "").trim();
      return manualComment;
    }
    return "";
  };

  const renderReferralOperationCard = (operation = {}) => `
    <div class="referral-activity-row ${getReferralOperationToneClass(operation)}">
      <div class="referral-activity-icon ${normalizeText(operation.counterpartName) || normalizeText(operation.counterpartAvatarUrl) ? "has-avatar" : ""}">
        ${normalizeText(operation.counterpartName) || normalizeText(operation.counterpartAvatarUrl)
          ? avatarMarkup({ avatarUrl: normalizeText(operation.counterpartAvatarUrl), displayName: operation.counterpartName }, 46)
          : iconMarkup(getReferralOperationIconName(operation))}
      </div>
      <div class="referral-activity-copy">
        <p class="list-title">${normalizeText(operation.title)}</p>
        <p class="subtitle">${getReferralOperationMetaLabel(operation)}</p>
        ${getReferralOperationComment(operation) ? `<p class="subtitle referral-activity-comment">${getReferralOperationComment(operation)}</p>` : ""}
      </div>
      <div class="referral-activity-meta">
        <div class="amount-bs ${Number(operation.amountBs) < 0 ? "negative" : ""}">${Number(operation.amountBs) > 0 ? "+" : ""}${Number(operation.amountBs) || 0} BS</div>
        <span class="referral-activity-status">${getReferralOperationStatusLabel(operation)}</span>
      </div>
    </div>
  `;

  const matchesTransferHistoryFilter = (operation, filter) => {
    const type = normalizeText(operation?.type);
    if (filter === "transfers") return type === "transfer_out" || type === "transfer_in";
    if (filter === "rewards") return type === "reward";
    return true;
  };
  const getReferralOperationGroups = (operations = []) => {
    if (derivedDataCache.referralOperations.operationsRef === operations) {
      return {
        transferOut: derivedDataCache.referralOperations.transferOut,
        transferIn: derivedDataCache.referralOperations.transferIn,
      };
    }
    const transferOut = operations.filter((operation) => normalizeText(operation.type) === "transfer_out");
    const transferIn = operations.filter((operation) => normalizeText(operation.type) === "transfer_in");
    derivedDataCache.referralOperations = {
      operationsRef: operations,
      transferOut,
      transferIn,
    };
    derivedDataCache.filteredReferralActivity = { operationsRef: null, filter: "", filtered: [] };
    return { transferOut, transferIn };
  };
  const getFilteredReferralActivity = (operations = [], filter = "all") => {
    if (derivedDataCache.filteredReferralActivity.operationsRef === operations && derivedDataCache.filteredReferralActivity.filter === filter) {
      return derivedDataCache.filteredReferralActivity.filtered;
    }
    const filtered = operations
      .filter((operation) => matchesTransferHistoryFilter(operation, filter))
      .sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));
    derivedDataCache.filteredReferralActivity = {
      operationsRef: operations,
      filter,
      filtered,
    };
    return filtered;
  };

  const buildReferralLevelsSheet = () => {
    const referral = state.payload?.referral || {};
    const referralProgram = referral.program || {};
    const levels = Array.isArray(referralProgram.levels) ? referralProgram.levels : [];
    const currentLevelId = normalizeText(referralProgram.currentLevel?.id);
    if (!levels.length) {
      return `<div class="empty-state">Уровни программы еще не настроены.</div>`;
    }
    return `
      <div class="referral-levels-sheet">
        <div class="referral-levels-sheet-hero">
          <div class="referral-levels-sheet-summary">
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Текущий уровень</span>
              <strong>${getReferralLevelName(referralProgram, referralProgram.activeReferralsCount || referral.stats?.green || 0)}</strong>
            </div>
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Скидка другу</span>
              <strong>${Number(referralProgram.friendDiscountRub || 0)} ₽</strong>
            </div>
            <div class="referral-levels-sheet-stat">
              <span class="field-label">Курс BS</span>
              <strong>1 BS = ${Number(referralProgram.bsToRubRate || 1)} ₽</strong>
            </div>
          </div>
          ${normalizeText(referral.description?.participationText) ? `<p class="muted-text referral-levels-sheet-note">${normalizeText(referral.description?.participationText)}</p>` : ""}
        </div>
        <div class="referral-levels-sheet-list">
        ${levels
          .map(
            (level) => `
              <div class="referral-level-card referral-level-card-compact ${normalizeText(level.id) === currentLevelId ? "is-current" : ""}">
                <div class="referral-level-card-top">
                  <div class="referral-level-card-main">
                    <p class="list-title">${normalizeText(level.name)}</p>
                    <div class="referral-level-card-range">
                      <span class="tag">${Number(level.minReferrals || 0)}-${level.maxReferrals === null || level.maxReferrals === "" ? "∞" : Number(level.maxReferrals)} рефералов</span>
                    </div>
                  </div>
                  ${normalizeText(level.id) === currentLevelId ? `<span class="status-badge status-green">Текущий</span>` : ""}
                </div>
                <div class="referral-level-rewards referral-level-rewards-compact">
                  ${(Array.isArray(level.serviceRewards) ? level.serviceRewards : [])
                    .map(
                      (reward) => `
                        <div class="referral-level-reward referral-level-reward-compact">
                          <span class="referral-level-reward-label">${normalizeText(reward.label)}</span>
                          <strong class="referral-level-reward-value">${Number(reward.bsAmount || 0)} BS</strong>
                        </div>`,
                    )
                    .join("") || `<div class="empty-state">Награды для уровня еще не заданы.</div>`}
                </div>
              </div>`,
          )
          .join("")}
        </div>
      </div>
    `;
  };

  const buildAccountAchievements = () => {
    const user = state.payload?.user || {};
    const referral = state.payload?.referral || {};
    const profile = state.payload?.profile || {};
    const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
    const transferOperations = (Array.isArray(referral.operations) ? referral.operations : []).filter((operation) => {
      const type = normalizeText(operation?.type);
      return type === "transfer_out" || type === "transfer_in";
    });
    const sentTransfers = transferOperations.filter((operation) => normalizeText(operation.type) === "transfer_out").length;
    const activeReferrals = Number(referral.program?.activeReferralsCount || referral.stats?.green || 0);
    const profileFieldsFilled = [
      normalizeText(user.avatarUrl),
      normalizeText(user.displayName),
      normalizeText(user.phone),
      normalizeText(user.birthDate),
      normalizeText(user.gender),
      normalizeText(user.telegramId),
    ].filter(Boolean).length;
    const profileFieldTarget = 6;
    return [
      {
        id: "first-visit",
        title: "Первый визит",
        description: "Завершите первую запись в BrotherShop.",
        current: visitHistory.length,
        target: 1,
        progressLabel: `${visitHistory.length}/1`,
      },
      {
        id: "regular-guest",
        title: "Постоянный гость",
        description: "Наберите 5 завершённых визитов.",
        current: visitHistory.length,
        target: 5,
        progressLabel: `${visitHistory.length}/5 визитов`,
      },
      {
        id: "referral-start",
        title: "Первый реферал",
        description: "Пригласите первого активного реферала.",
        current: activeReferrals,
        target: 1,
        progressLabel: `${activeReferrals}/1`,
      },
      {
        id: "referral-brother",
        title: "Старший брат",
        description: "Доведите сеть до 5 активных рефералов.",
        current: activeReferrals,
        target: 5,
        progressLabel: `${activeReferrals}/5 рефералов`,
      },
      {
        id: "transfer-first",
        title: "Первый перевод",
        description: "Сделайте первый перевод BS другому клиенту.",
        current: sentTransfers,
        target: 1,
        progressLabel: `${sentTransfers}/1`,
      },
      {
        id: "profile-complete",
        title: "Профиль собран",
        description: "Заполните профиль полностью и добавьте фото.",
        current: profileFieldsFilled,
        target: profileFieldTarget,
        progressLabel: `${profileFieldsFilled}/${profileFieldTarget}`,
      },
    ].map((item) => ({
      ...item,
      unlocked: item.current >= item.target,
      progress: Math.max(0, Math.min(100, Math.round((item.current / Math.max(1, item.target)) * 100))),
    }));
  };

  const renderAchievementsPage = () => {
    return memoizeRenderedFragment("page-achievements", [state.payload?.user, state.payload?.profile, state.payload?.referral], () => {
      const achievements = buildAccountAchievements();
      const unlockedCount = achievements.filter((item) => item.unlocked).length;
      return `
      <section class="page profile-page achievements-page">
        <article class="hero-card page-hero achievements-hero">
          <div class="hero-eyebrow">Аккаунт</div>
          <h1 class="hero-title">Достижения</h1>
          <p class="subtitle achievements-hero-copy">Прогресс аккаунта, визитов, рефералов и переводов BS.</p>
          <div class="profile-summary-strip achievements-summary-strip">
            <div class="profile-summary-cell"><span class="field-label">Открыто</span><strong>${unlockedCount}</strong></div>
            <div class="profile-summary-cell"><span class="field-label">Всего</span><strong>${achievements.length}</strong></div>
          </div>
        </article>
        <div class="achievements-grid">
          ${achievements.map((item) => `
            <article class="list-card achievement-card ${item.unlocked ? "is-unlocked" : ""}">
              <div class="section-head">
                <div>
                  <div class="section-eyebrow">${item.unlocked ? "Открыто" : "В процессе"}</div>
                  <h2 class="section-title">${item.title}</h2>
                </div>
                <span class="status-badge ${item.unlocked ? "green" : "yellow"}">${item.progressLabel}</span>
              </div>
              <p class="subtitle achievement-description">${item.description}</p>
              <div class="progress-track"><div class="progress-bar" style="width:${item.progress}%"></div></div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
    });
  };

  const renderBookingPage = () => {
    const booking = state.booking;
    const bookingStepClass = booking.stepAnimationsEnabled ? "booking-step-active" : "";
    const barbers = Array.isArray(state.payload?.booking?.barbers) ? state.payload.booking.barbers : [];
    const selectedBarber = barbers.find((item) => normalizeText(item.id) === normalizeText(booking.barberId)) || null;
    const isBookingBlocked = booking.canBook === false;
    const bookingLimitMessage = normalizeText(booking.limitMessage);
    const bookingPricing = getBookingPricingSummary(booking, state.payload?.referral || {});
    const selectedServices = bookingPricing.selectedServices;
    const selectedTotal = bookingPricing.totalRub;
    const completedSteps = [
      Boolean(selectedBarber),
      Boolean(booking.selectedServices.length),
      Boolean(booking.selectedDate),
      Boolean(booking.selectedTime),
      Boolean(normalizeText(booking.comment)),
    ].filter(Boolean).length;
    const showServicesStep = Boolean(selectedBarber);
    const showDateStep = Boolean(selectedBarber && booking.selectedServices.length && !isBookingBlocked);
    const showTimeStep = Boolean(showDateStep && booking.selectedDate);
    const showCommentStep = Boolean(showTimeStep && booking.selectedTime);
    const showSummaryStep = Boolean(showCommentStep);
    return `
      <section class="page booking-page">
        <div class="booking-hero booking-hero-floating">
          <h1 class="booking-hero-title">Онлайн-запись</h1>
        </div>
        <div class="booking-grid booking-flow">
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="barber">
            <div class="booking-step-head"><div class="section-eyebrow">1. Барбер</div><div class="step-badge">${selectedBarber ? "Выбран" : "Шаг"}</div></div>
            <div class="barber-grid">
              ${barbers
                .map(
                  (barber) => `
                    <button class="barber-card ${normalizeText(booking.barberId) === normalizeText(barber.id) ? "is-selected" : ""}" data-action="select-barber" data-id="${normalizeText(barber.id)}">
                      <div class="booking-barber-surface">
                        <div class="booking-barber-copy">
                          <p class="barber-name">${normalizeText(barber.name)}</p>
                          ${normalizeText(barber.phrase || barber.description) ? `<p class="subtitle">${normalizeText(barber.phrase || barber.description)}</p>` : ""}
                          <div class="booking-barber-meta">
                            <span class="booking-barber-pill">Услуг: ${Number.isFinite(Number(barber.servicesCount)) ? Number(barber.servicesCount) : 0}</span>
                          </div>
                        </div>
                        <div class="booking-barber-visual">
                          <div class="booking-barber-visual-frame">
                            ${normalizeText(barber.avatarUrl)
                              ? `<img class="booking-barber-photo" src="${normalizeText(barber.avatarUrl)}" alt="${normalizeText(barber.name)}" />`
                              : avatarMarkup({ avatarUrl: barber.avatarUrl, displayName: barber.name }, 154)}
                          </div>
                        </div>
                      </div>
                    </button>`,
                )
                .join("")}
            </div>
          </article>
          ${showServicesStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="services">
            <div class="booking-step-head"><div class="section-eyebrow">2. Услуги</div><div class="step-badge">${booking.selectedServices.length || 0}</div></div>
            ${isBookingBlocked && bookingLimitMessage ? `<div class="booking-step-alert status-red"><p class="list-title">Лимит активных записей достигнут</p><p class="subtitle">${bookingLimitMessage}</p></div>` : ""}
            <div class="list">
              ${booking.services.length
                ? booking.services
                    .map((service) => {
                      const selected = booking.selectedServices.includes(service.id);
                      return `<button class="service-item ${selected ? "is-selected" : ""}" data-action="toggle-service" data-id="${service.id}"><div class="section-head"><div><p class="list-title">${normalizeText(service.name)}</p><p class="subtitle">${normalizeText(service.description || "")}</p></div><strong>${formatRub(service.price)}</strong></div><div class="muted-text">${service.duration || 0} мин</div></button>`;
                    })
                    .join("")
                : `<div class="empty-state">${isBookingBlocked && bookingLimitMessage ? bookingLimitMessage : selectedBarber ? "Подбираем доступные услуги..." : "Выберите мастера, чтобы увидеть услуги."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showDateStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="date">
            <div class="booking-step-head"><div class="section-eyebrow">3. Дата</div><div class="step-badge">${booking.selectedDate ? "Выбрана" : "Шаг"}</div></div>
            <div class="list">
              ${booking.dates.length
                ? booking.dates
                    .map((date) => `<button class="slot-item ${booking.selectedDate === date ? "is-selected" : ""}" data-action="select-date" data-id="${date}"><span class="list-title">${formatDateOnly(date)}</span></button>`)
                    .join("")
                : `<div class="empty-state">${booking.selectedServices.length ? "Подбираем ближайшие даты..." : "Добавьте услуги, чтобы увидеть свободные даты."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showTimeStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="time">
            <div class="booking-step-head"><div class="section-eyebrow">4. Время</div><div class="step-badge">${booking.selectedTime ? "Выбрано" : "Шаг"}</div></div>
            <div class="list">
              ${booking.times.length
                ? booking.times
                    .map((time) => `<button class="slot-item ${booking.selectedTime === normalizeText(time.start) ? "is-selected" : ""}" data-action="select-time" data-id="${normalizeText(time.start)}"><span class="list-title">${normalizeText(time.label || `${time.start} - ${time.end}`)}</span></button>`)
                    .join("")
                : `<div class="empty-state">${booking.selectedDate ? "На эту дату свободных окон пока нет." : "Выберите дату, чтобы увидеть свободное время."}</div>`}
            </div>
          </article>
          ` : ""}
          ${showCommentStep ? `
          <article class="booking-panel booking-step ${bookingStepClass}" data-booking-step="comment">
            <div class="booking-step-head"><div class="section-eyebrow">5. Комментарий</div><div class="step-badge">${normalizeText(booking.comment) ? "Добавлен" : "Необязательно"}</div></div>
            <label class="field booking-comment-field">
              <span class="field-label">Комментарий для мастера</span>
              <textarea id="booking-comment-input" placeholder="Например: хочу покороче по бокам, оставить длину сверху или удобно после 18:00.">${normalizeText(booking.comment)}</textarea>
            </label>
          </article>
          ` : ""}
        </div>
        <article class="hero-card booking-summary ${bookingStepClass} ${showSummaryStep ? "is-ready" : "is-preview"}" data-booking-step="summary">
          <div class="booking-step-head"><div class="section-eyebrow">Подтверждение</div></div>
          <h2 class="section-title">${selectedBarber ? "Проверьте детали записи" : "Соберите запись по шагам"}</h2>
          <div class="booking-summary-status">
            <div>
              <span class="field-label">Готовность</span>
              <strong>${showSummaryStep ? "Можно подтверждать запись" : "Заполните шаги слева"}</strong>
            </div>
            <span class="status-badge ${showSummaryStep ? "green" : "yellow"}">${completedSteps}/5</span>
          </div>
          ${selectedBarber ? `<div class="summary-master-row">${avatarMarkup({ avatarUrl: selectedBarber.avatarUrl, displayName: selectedBarber.name }, 68)}<div><p class="list-title">${normalizeText(selectedBarber.name)}</p><p class="subtitle">${normalizeText(selectedBarber.description || "Выбранный мастер")}</p></div></div>` : `<div class="summary-master-row summary-placeholder"><div><p class="list-title">Мастер еще не выбран</p><p class="subtitle">Сначала выберите барбера, чтобы начать запись.</p></div></div>`}
          <div class="summary-grid">
            <div class="summary-item"><span class="field-label">Дата</span><strong>${booking.selectedDate ? formatDateOnly(booking.selectedDate) : "не выбрана"}</strong></div>
            <div class="summary-item"><span class="field-label">Время</span><strong>${booking.selectedTime || "не выбрано"}</strong></div>
            <div class="summary-item"><span class="field-label">Сумма</span><strong>${formatRub(selectedTotal)}</strong></div>
          </div>
          ${bookingPricing.maxCoverBs > 0 ? `
            <div class="booking-bs-cover-card ${booking.bsCoverExpanded ? "is-expanded" : "is-collapsed"}">
              <button class="booking-bs-cover-toggle" type="button" data-action="toggle-booking-bs">
                <div class="booking-bs-cover-head">
                  <div>
                    <strong>${bookingPricing.appliedBs > 0 ? `Списать ${bookingPricing.appliedBs} BS` : "Использовать BS"}</strong>
                  </div>
                  <div class="booking-bs-cover-side">
                    <span class="status-badge green">${bookingPricing.maxCoverBs} BS</span>
                    <span class="booking-bs-chevron" aria-hidden="true">${iconMarkup(booking.bsCoverExpanded ? "chevron-left" : "chevron-right")}</span>
                  </div>
                </div>
              </button>
              ${booking.bsCoverExpanded ? `
                <label class="field booking-bs-field">
                  <input id="booking-bs-input" type="number" min="0" max="${bookingPricing.maxCoverBs}" step="1" value="${bookingPricing.appliedBs || ""}" placeholder="0" />
                </label>
                <p class="subtitle booking-bs-note">К оплате после списания: <strong>${formatRub(bookingPricing.payableRub)}</strong></p>
              ` : ""}
            </div>
          ` : ""}
          <div class="service-chip-row">
            ${selectedServices.length ? selectedServices.map((service) => `<span class="service-chip">${normalizeText(service.name)}</span>`).join("") : `<span class="muted-text">Добавьте хотя бы одну услугу, чтобы увидеть итог записи.</span>`}
          </div>
          ${isBookingBlocked && bookingLimitMessage ? `<div class="booking-step-alert status-red"><p class="list-title">Новая запись пока недоступна</p><p class="subtitle">${bookingLimitMessage}</p></div>` : ""}
          ${normalizeText(booking.comment) ? `<div class="summary-note"><span class="field-label">Комментарий</span><p class="subtitle">${normalizeText(booking.comment)}</p></div>` : `<div class="summary-note summary-note-muted"><span class="field-label">Комментарий</span><p class="subtitle">Комментарий не добавлен. Этот шаг необязателен.</p></div>`}
          <div class="hero-actions booking-submit-wrap"><button class="primary-btn" data-action="submit-booking" ${!selectedBarber || !booking.selectedServices.length || !booking.selectedDate || !booking.selectedTime || booking.submitting || isBookingBlocked ? "disabled" : ""}>${booking.submitting ? "Отправляем..." : "Подтвердить запись"}</button></div>
        </article>
      </section>
    `;
  };

  const renderShopPage = () => {
    const shop = state.payload?.site?.shop || {};
    return `<section class="page shop-page"><article class="soon-card clean-soon-card shop-coming-card"><div class="shop-coming-shell"><div class="hero-eyebrow">Магазин</div><h1 class="hero-title">${normalizeText(shop.teaserTitle || "Скоро.")}</h1><div class="shop-teaser-grid"><div class="teaser-block"></div><div class="teaser-block"></div><div class="teaser-block"></div></div></div></article></section>`;
  };

  const renderProfilePage = () => {
    const user = state.payload?.user || {};
    const profile = state.payload?.profile || {};
    const booking = state.payload?.booking || {};
    const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
    const operations = Array.isArray(profile.operations) ? profile.operations : [];
    const notices = Array.isArray(profile.notices) ? profile.notices : [];
    const activeAppointments = Array.isArray(booking.activeAppointments) ? booking.activeAppointments : [];
    return memoizeRenderedFragment("page-profile", [user, profile, booking, state.profileHistoryFilter], () => {
      const historyItems = getProfileHistoryItems(visitHistory, operations);
      const filteredHistory = getFilteredProfileHistoryItems(historyItems, state.profileHistoryFilter);
      const historyPreview = filteredHistory.slice(0, 3);
      const genderLabel = user.gender === "male" ? "Мужской" : user.gender === "female" ? "Женский" : user.gender === "other" ? "Другой" : "Не указан";
      const profileBio = [normalizeText(user.birthDate), normalizeText(user.gender) ? genderLabel : ""].filter(Boolean).join(" · ");
      const noticeLabel = user.noticeCount || 0;
      const completionFields = [
        normalizeText(user.avatarUrl),
        normalizeText(user.displayName),
        normalizeText(user.phone),
        normalizeText(user.birthDate),
        normalizeText(user.gender),
        normalizeText(user.telegramId),
      ];
      const profileCompletion = Math.round((completionFields.filter(Boolean).length / completionFields.length) * 100);
      return `
      <section class="page profile-page">
        <article class="hero-card page-hero profile-hero">
          <div class="profile-cover"></div>
          <div class="profile-cover-actions">
            <button class="ghost-btn profile-cover-action icon-only-btn" type="button" data-action="navigate" data-href="/achievements/" aria-label="Достижения">${iconMarkup("trophy")}</button>
            <button class="ghost-btn profile-cover-action profile-cover-settings icon-only-btn" type="button" data-action="open-sheet" data-sheet="profile-menu" aria-label="Настройки">${iconMarkup("settings")}</button>
          </div>
          <div class="profile-social-head">
            <div class="profile-avatar-trigger">${avatarMarkup(user, 108)}</div>
            <div class="profile-social-copy">
              <div class="profile-title-row">
                <div>
                  <div class="hero-eyebrow">Личный кабинет</div>
                  <h1 class="hero-title">${normalizeText(user.displayName || "Клиент")}</h1>
                </div>
              </div>
              ${profileBio ? `<p class="profile-bio">${profileBio}</p>` : ""}
              <div class="profile-hero-phone-line">${formatPhone(user.phone)}</div>
            </div>
          </div>
          ${profileCompletion < 100 ? `<div class="profile-progress-card"><div class="section-head"><div><div class="section-eyebrow">Прогресс профиля</div><h2 class="section-title">Профиль заполнен на ${profileCompletion}%</h2></div><span class="status-badge status-green">${completionFields.filter(Boolean).length}/${completionFields.length}</span></div><div class="progress-track"><div class="progress-bar" style="width:${profileCompletion}%"></div></div></div>` : ""}
          <div class="profile-summary-strip">
            <div class="profile-summary-cell"><span class="field-label">Визиты</span><strong>${visitHistory.length}</strong></div>
            <div class="profile-summary-cell"><span class="field-label">Замечания</span><button class="metric-trigger" type="button" data-action="open-sheet" data-sheet="profile-notices"><strong>${noticeLabel}</strong></button></div>
          </div>
        </article>
        <article class="list-card profile-next-booking-card">
          <div class="section-head">
            <div><div class="section-eyebrow">Активные записи</div><h2 class="section-title">${activeAppointments.length ? `Всего ${activeAppointments.length}` : "Записей пока нет"}</h2></div>
          </div>
          ${activeAppointments.length
            ? `<div class="profile-active-bookings-list">${activeAppointments
                .map(
                  (appointment) => `<button class="profile-next-booking-surface" type="button" data-action="open-sheet" data-sheet="manage-booking" data-id="${normalizeText(appointment.id)}">
                    <div class="profile-next-booking-main">
                      <p class="list-title">${normalizeText(appointment.barber || "BrotherShop")}</p>
                      <p class="subtitle">${normalizeText((appointment.services || []).join(", ") || "Детали доступны в booking")}</p>
                    </div>
                    <div class="profile-next-booking-meta">
                      <div class="profile-summary-cell">
                        <span class="field-label">Дата</span>
                        <strong>${formatDateOnly(appointment.date)}</strong>
                      </div>
                      <div class="profile-summary-cell">
                        <span class="field-label">Время</span>
                        <strong>${normalizeText(appointment.time)}</strong>
                      </div>
                    </div>
                  </button>`,
                )
                .join("")}</div>`
            : `<div class="empty-state">Когда появятся активные записи, они будут отображаться здесь.</div>`}
        </article>
        <article class="list-card profile-history-card" data-action="open-sheet" data-sheet="profile-history">
          <div class="section-head">
            <div><div class="section-eyebrow">История посещений</div><h2 class="section-title">Последние движения</h2></div>
          </div>
          <div class="filter-row">
            <button class="nav-pill ${state.profileHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="all">Все</button>
            <button class="nav-pill ${state.profileHistoryFilter === "visits" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="visits">Визиты</button>
            <button class="nav-pill ${state.profileHistoryFilter === "payments" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="payments">Оплата</button>
          </div>
          <div class="timeline">${historyPreview.length ? historyPreview.map(renderProfileHistoryRow).join("") : `<div class="empty-state">История пока пуста.</div>`}</div>
          <div class="profile-history-more"><button class="ghost-btn history-more-btn" type="button" data-action="open-sheet" data-sheet="profile-history">Вся история</button></div>
        </article>
      </section>
    `;
    });
  };

  const renderSheet = () => {
    if (!state.sheet) return `<div class="sheet-backdrop" id="sheet-backdrop"></div>`;
    const sheetStateClass = state.sheetState === "closing" ? "is-closing" : state.sheetState === "open" ? "is-open" : "is-entering";
    const className = normalizeText(state.sheet.className);
    const isSuccessSheet = className.includes("sheet-success");
    const isPromoSheet = className.includes("promo-sheet-shell");
    return `<div class="sheet-backdrop ${sheetStateClass}" id="sheet-backdrop"><div class="sheet ${sheetStateClass} ${className}">${isSuccessSheet || isPromoSheet ? `<button class="ghost-btn icon-only-btn sheet-close-btn ${isSuccessSheet ? "sheet-success-close" : "promo-sheet-close"}" type="button" data-action="dismiss-sheet" aria-label="Закрыть">${iconMarkup("close")}</button>` : `<div class="sheet-head"><h3 class="section-title sheet-title">${state.sheet.title}</h3><button class="ghost-btn icon-only-btn sheet-close-btn" type="button" data-action="dismiss-sheet" aria-label="Закрыть">${iconMarkup("close")}</button></div>`}<div>${state.sheet.bodyHtml || ""}</div>${state.sheet.footerHtml ? `<div style="margin-top:16px;">${state.sheet.footerHtml}</div>` : ""}</div></div>`;
  };

  const renderCurrentPage = () => {
    if (state.bootstrapError) {
      return `
        <section class="app-bootstrap-error loading-state">
          <p class="list-title">Не удалось загрузить приложение</p>
          <p>${normalizeText(state.bootstrapError)}</p>
          <div class="sheet-actions app-bootstrap-error-actions">
            ${isAuthenticated() ? `<button class="secondary-btn" type="button" data-action="logout">Выйти</button>` : ""}
            <button class="primary-btn" type="button" data-action="reload-app">Повторить</button>
          </div>
        </section>
      `;
    }
    if (!state.payload) return `<div class="loading-state">Загрузка приложения...</div>`;
    if (state.currentPage === "referral") return renderReferralPage();
    if (state.currentPage === "booking") return renderBookingPage();
    if (state.currentPage === "shop") return renderShopPage();
    if (state.currentPage === "achievements") return renderAchievementsPage();
    if (state.currentPage === "profile") return renderProfilePage();
    return renderHomePage();
  };

  const syncDocumentMeta = () => {
    const titles = {
      home:
        normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? APP_HOME_TITLE
          : SEO_HOME_TITLE,
      referral: "BrotherShop • Бонусы",
      booking: "BrotherShop • Запись",
      shop: "BrotherShop • Магазин",
      achievements: "BrotherShop • Достижения",
      profile: "BrotherShop • Профиль",
    };
    document.title = titles[state.currentPage] || "BrotherShop";
    const ensureHeadTag = (selector, factory) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = factory();
        document.head.appendChild(node);
      }
      return node;
    };
    const setMetaContent = (selector, attributeName, attributeValue, content) => {
      const node = ensureHeadTag(selector, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attributeName, attributeValue);
        return meta;
      });
      node.setAttribute("content", content);
    };
    const canonicalHref =
      state.currentPage === "home" && normalizeText(window.location.pathname).replace(/\/+$/, "") === ""
        ? `${window.location.origin}/`
        : `${window.location.origin}${window.location.pathname}`;
    const canonical = ensureHeadTag("link[rel='canonical']", () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", canonicalHref);
    setMetaContent(
      "meta[name='description']",
      "name",
      "description",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? "Клиентское приложение BrotherShop."
          : SEO_HOME_DESCRIPTION
        : "BrotherShop",
    );
    setMetaContent(
      "meta[name='robots']",
      "name",
      "robots",
      state.currentPage === "home" && normalizeText(window.location.pathname).replace(/\/+$/, "") === ""
        ? "index,follow,max-image-preview:large"
        : "noindex,nofollow",
    );
    setMetaContent(
      "meta[property='og:title']",
      "property",
      "og:title",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? APP_HOME_TITLE
          : SEO_HOME_TITLE
        : document.title,
    );
    setMetaContent(
      "meta[property='og:description']",
      "property",
      "og:description",
      state.currentPage === "home"
        ? normalizeText(window.location.pathname).replace(/\/+$/, "") === "/home"
          ? "Клиентское приложение BrotherShop."
          : SEO_HOME_OG_DESCRIPTION
        : "BrotherShop",
    );
    setMetaContent("meta[property='og:url']", "property", "og:url", canonicalHref);
  };

  const navigateTo = (href, options = {}) => {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) {
      window.location.assign(url.toString());
      return;
    }
    const nextPage = getPageFromPath(url.pathname);
    if (!nextPage) {
      window.location.assign(url.toString());
      return;
    }
    if (!isAuthenticated()) {
      const normalizedPath = normalizeText(url.pathname).replace(/\/+$/, "") || "/";
      if (nextPage === "home" && normalizedPath === "/") {
        if (options.replace) {
          window.history.replaceState(buildHistoryState(), "", url.pathname + url.search + url.hash);
        } else if (`${url.pathname}${url.search}${url.hash}` !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
          window.history.pushState(buildHistoryState(), "", url.pathname + url.search + url.hash);
        }
        state.currentPage = "home";
        state.routeTransitionActive = true;
        render();
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      redirectToLogin(`${url.pathname}${url.search}${url.hash}`, {
        replace: !(state.currentPage === "home" && (normalizeText(window.location.pathname).replace(/\/+$/, "") || "/") === "/"),
      });
      return;
    }
    if (!options.replace && `${url.pathname}${url.search}${url.hash}` === `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      return;
    }
    if (options.replace) {
      window.history.replaceState(buildHistoryState(), "", url.pathname + url.search + url.hash);
    } else {
      window.history.pushState(buildHistoryState(), "", url.pathname + url.search + url.hash);
    }
    state.navIndicatorIndex = Math.max(0, ["home", "referral", "booking", "shop", "profile"].findIndex((item) => item === state.currentPage));
    state.currentPage = nextPage;
    state.booking.stepAnimationsEnabled = nextPage === "booking";
    state.routeTransitionActive = true;
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const renderNow = () => {
    renderFrame = null;
    syncDocumentMeta();
    const { appHost, sheetHost } = ensureRenderHosts();
    let appChanged = false;
    let sheetChanged = false;
    if (pendingRenderApp) {
      const appHtml = `<div class="client-app"><div class="app-shell ${state.routeTransitionActive ? "route-transition" : ""}">${renderTopbar()}${renderCurrentPage()}${renderBottomNav()}</div></div>`;
      appChanged = lastRenderedHtml.app !== appHtml;
      if (appChanged) {
        appHost.innerHTML = appHtml;
        lastRenderedHtml.app = appHtml;
      }
    }
    if (pendingRenderSheet) {
      const sheetHtml = renderSheet();
      sheetChanged = lastRenderedHtml.sheet !== sheetHtml;
      if (sheetChanged) {
        sheetHost.innerHTML = sheetHtml;
        lastRenderedHtml.sheet = sheetHtml;
      }
    }
    pendingRenderApp = false;
    pendingRenderSheet = false;
    document.documentElement.classList.toggle("sheet-open", Boolean(state.sheet));
    document.body.classList.toggle("sheet-open", Boolean(state.sheet));
    state.routeTransitionActive = false;
    bindEvents({
      appRoot: appChanged ? appHost : null,
      sheetRoot: sheetChanged ? sheetHost : null,
    });
    const renderScope = appHost.querySelector(".client-app") || appHost;
    const sheetScope = sheetHost.querySelector(".sheet-backdrop");
    if (appChanged) setupMediaWaveLoading(renderScope);
    if (sheetChanged && sheetScope) setupMediaWaveLoading(sheetScope);
    setupPromoMarqueeAutoScroll(renderScope);
    if (
      state.currentPage === "referral" ||
      ["Быстрый перевод", "Перевести BS"].includes(normalizeText(state.sheet?.title))
    ) {
      setupTransferRecipientCarousels(sheetChanged && sheetScope ? sheetScope : renderScope);
    }
    const nav = appHost.querySelector(".bottom-nav");
    if (nav) {
      const targetIndex = Number(nav.dataset.activeIndex || 0);
      window.requestAnimationFrame(() => {
        nav.style.setProperty("--indicator-index", String(targetIndex));
      });
      state.navIndicatorIndex = targetIndex;
    }
    if (state.currentPage === "booking" && state.booking.stepAnimationsEnabled) {
      state.booking.stepAnimationsEnabled = false;
    }
  };

  const render = (options = {}) => {
    pendingRenderApp = options.app === false ? pendingRenderApp : true;
    pendingRenderSheet = options.sheet === false ? pendingRenderSheet : true;
    if (renderFrame !== null) return;
    renderFrame = window.requestAnimationFrame(renderNow);
  };

  const loadServices = async () => {
    if (!state.booking.barberId) return;
    state.booking.loading = true;
    const payload = await apiRequest(`/booking/services?barberId=${encodeURIComponent(state.booking.barberId)}`);
    state.booking.canBook = payload?.canBook !== false;
    state.booking.limitMessage = normalizeText(payload?.message);
    state.booking.bookingLimit = Math.max(0, Number(payload?.bookingLimit) || 0);
    state.booking.activeAppointmentsCount = Math.max(0, Number(payload?.activeAppointments) || 0);
    state.booking.services = state.booking.canBook && Array.isArray(payload.services) ? payload.services : [];
    state.booking.selectedServices = [];
    state.booking.appliedBs = 0;
    state.booking.bsCoverExpanded = false;
    state.booking.dates = [];
    state.booking.selectedDate = "";
    state.booking.times = [];
    state.booking.selectedTime = "";
    state.booking.comment = "";
    state.booking.loading = false;
    render();
  };

  const loadDates = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length) {
      state.booking.dates = [];
      state.booking.selectedDate = "";
      state.booking.times = [];
      state.booking.selectedTime = "";
      state.booking.comment = "";
      render();
      return;
    }
    const payload = await apiRequest(`/booking/dates?barberId=${encodeURIComponent(state.booking.barberId)}&serviceIds=${encodeURIComponent(state.booking.selectedServices.join(","))}`);
    state.booking.dates = Array.isArray(payload.dates) ? payload.dates : [];
    syncBookingBsCover();
    state.booking.selectedDate = "";
    state.booking.times = [];
    state.booking.selectedTime = "";
    state.booking.comment = "";
    render();
  };

  const loadTimes = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length || !state.booking.selectedDate) return;
    const payload = await apiRequest(`/booking/times?barberId=${encodeURIComponent(state.booking.barberId)}&serviceIds=${encodeURIComponent(state.booking.selectedServices.join(","))}&date=${encodeURIComponent(state.booking.selectedDate)}`);
    state.booking.times = Array.isArray(payload.times) ? payload.times : [];
    syncBookingBsCover();
    state.booking.selectedTime = "";
    state.booking.comment = "";
    render();
  };

  const submitBooking = async () => {
    if (!state.booking.barberId || !state.booking.selectedServices.length || !state.booking.selectedDate || !state.booking.selectedTime) return;
    state.booking.submitting = true;
    render();
    try {
      await apiRequest("/booking/appointments", {
        method: "POST",
        body: JSON.stringify({
          barberId: state.booking.barberId,
          serviceIds: state.booking.selectedServices,
          date: state.booking.selectedDate,
          startTime: state.booking.selectedTime,
          comment: normalizeText(state.booking.comment),
          coverBsAmount: Math.max(0, Math.trunc(Number(state.booking.appliedBs) || 0)),
        }),
      });
      state.payload = await apiRequest("/app");
      state.booking = {
        barberId: "",
        services: [],
        selectedServices: [],
        appliedBs: 0,
        bsCoverExpanded: false,
        dates: [],
        selectedDate: "",
        times: [],
        selectedTime: "",
        comment: "",
        canBook: true,
        limitMessage: "",
        bookingLimit: 0,
        activeAppointmentsCount: 0,
        loading: false,
        submitting: false,
        stepAnimationsEnabled: false,
      };
      render({ sheet: false });
      openSheet("Запись создана", buildBookingStatusSheet("Запись создана"), "", "sheet-success");
    } catch (error) {
      state.booking.submitting = false;
      openSheet("Ошибка записи", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось создать запись.")}</p></div>`);
      return;
    }
  };

  const cancelHomeBooking = async (appointmentId) => {
    const safeId = normalizeText(appointmentId);
    if (!safeId) throw new Error("Не удалось определить запись.");
    await apiRequest(`/booking/appointments/${encodeURIComponent(safeId)}/cancel`, {
      method: "POST",
    });
    state.payload = await apiRequest("/app");
    render({ sheet: false });
    closeSheet();
    openSheet("Запись отменена", buildBookingStatusSheet("Запись отменена"), "", "sheet-success");
  };

  const requestReferralTransferPreview = async (draft) => {
    const payload = await apiRequest("/referral/transfer/preview", {
      method: "POST",
      body: JSON.stringify({
        targetPhone: normalizePhone(draft?.targetPhone),
      }),
    });
    return payload?.recipient || null;
  };

  const submitReferralTransfer = async (draft) => {
    const payload = await apiRequest("/referral/transfer", {
      method: "POST",
      body: JSON.stringify({
        targetPhone: normalizePhone(draft?.targetPhone),
        amountBs: Number(draft?.amountBs || 0),
        comment: normalizeText(draft?.comment),
      }),
    });
    state.referralTransferDraft = null;
    if (payload?.referral) {
      state.payload = {
        ...(state.payload || {}),
        referral: payload.referral,
      };
    } else {
      state.payload = await apiRequest("/app");
    }
    render({ sheet: false });
    closeSheet();
    openSheet("Перевод выполнен", buildBookingStatusSheet("Перевод выполнен"), "", "sheet-success");
  };

  const openNamedSheet = (sheetId) => {
    if (sheetId === "bs") {
      const referral = state.payload?.referral || {};
      openSheet("BS баланс", `<div class="metric-card"><div class="section-eyebrow">Сейчас</div><div class="metric-value">${referral.bsBalance || 0} BS</div><p class="muted-text">Следующая цель: ${referral.scale?.next || 0} BS</p></div>`);
      return;
    }
    if (sheetId === "referral-levels") {
      openSheet("Уровни и награды", buildReferralLevelsSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "referrals") {
      const items = Array.isArray(state.payload?.referral?.referrals) ? state.payload.referral.referrals : [];
      openSheet(
        "Мои рефералы",
        items.length
          ? `<div class="list referral-sheet-list">${items
              .map(
                (item) => `<div class="list-item referral-sheet-item"><div class="section-head"><div><p class="list-title">${normalizeText(item.fullName)}</p><p class="subtitle">${item.phone ? formatPhone(item.phone) : "Телефон скрыт"}</p></div><span class="status-badge ${statusColorClass(item.color)}">${referralColorLabel(item.color)}</span></div><div class="referral-sheet-meta"><span>Выполненных записей: <strong>${item.completedVisits || 0}</strong></span><span>Начисляемых BS: <strong>${item.rewardedVisits || 0}</strong></span><span>Последний визит: <strong>${item.lastVisitAt ? formatDateTime(item.lastVisitAt) : "Нет данных"}</strong></span></div></div>`,
              )
              .join("")}</div>`
          : `<div class="empty-state">Рефералов пока нет.</div>`,
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "referral-history") {
      const operations = Array.isArray(state.payload?.referral?.operations) ? state.payload.referral.operations : [];
      const filteredOperations = getFilteredReferralActivity(operations, state.transferHistoryFilter);
      openSheet(
        "История BS",
        operations.length
          ? `<div class="filter-row sheet-filter-row referral-history-filter-row">
              <button class="nav-pill ${state.transferHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="all">Все</button>
              <button class="nav-pill ${state.transferHistoryFilter === "transfers" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="transfers">Переводы</button>
              <button class="nav-pill ${state.transferHistoryFilter === "rewards" ? "active" : ""}" type="button" data-action="set-transfer-filter" data-filter="rewards">Награды</button>
            </div>
            <div class="referral-activity-list referral-history-list">${filteredOperations.length
              ? filteredOperations.map((operation) => renderReferralOperationCard(operation)).join("")
              : `<div class="empty-state">По этому фильтру пока нет движений BS.</div>`}</div>`
          : `<div class="empty-state">Пока нет начислений и списаний.</div>`,
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "transfer-bs") {
      const draft = state.referralTransferDraft || {};
      const selectedQuickAmount = Number(draft.amountBs || state.referralQuickAmount || 0);
      openSheet(
        "Перевести BS",
        `<form class="form-grid referral-transfer-form" id="referral-transfer-form"><div class="referral-transfer-balance"><span class="field-label">Доступно сейчас</span><strong>${Number(state.payload?.referral?.bsBalance || 0)} BS</strong></div><label class="field"><span class="field-label">Телефон получателя</span><input type="tel" inputmode="tel" autocomplete="tel" name="targetPhone" placeholder="+7..." value="${formatPhoneInputValue(draft.targetPhone)}" required /></label><label class="field"><span class="field-label">Сумма BS</span><input type="number" name="amountBs" min="1" step="1" value="${normalizeText(draft.amountBs)}" required /></label><div class="referral-transfer-form-presets"><span class="field-label">Быстрые суммы</span><div class="referral-quick-transfer-amounts">${REFERRAL_TRANSFER_QUICK_AMOUNTS
          .map(
            (amount) => `
              <button
                class="referral-quick-amount ${selectedQuickAmount === amount ? "is-selected" : ""}"
                type="button"
                data-action="transfer-preset"
                data-amount="${amount}"
              >
                ${amount} BS
              </button>`,
          )
          .join("")}</div></div><label class="field"><span class="field-label">Комментарий</span><input name="comment" placeholder="Необязательно" value="${normalizeText(draft.comment)}" /></label><div class="inline-actions"><button class="primary-btn" type="submit">Продолжить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`,
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "my-transfer-qr") {
      openSheet("Мой QR для BS", buildReferralQrSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "scan-transfer-qr") {
      openSheet("Сканировать QR", buildReferralQrScannerSheet(), "", "sheet-wide");
      return;
    }
    if (sheetId === "quick-transfer") {
      const draft = state.referralTransferDraft || {};
      openSheet("Быстрый перевод", buildQuickTransferSheet(draft), "", "sheet-wide");
      return;
    }
    if (sheetId === "confirm-transfer-bs") {
      const draft = state.referralTransferDraft || {};
      openSheet(
        "Подтверждение перевода",
        `<div class="referral-transfer-confirm"><div class="referral-transfer-confirm-card"><span class="field-label">Получатель</span><strong>${normalizeText(draft.recipientShortName || "Не найден")}</strong><span class="subtitle">${draft.targetPhone ? formatPhone(draft.targetPhone) : ""}</span></div><div class="referral-transfer-confirm-card"><span class="field-label">Сумма</span><strong>${Number(draft.amountBs || 0)} BS</strong><span class="subtitle">${normalizeText(draft.comment) ? normalizeText(draft.comment) : "Без комментария"}</span></div><div class="inline-actions"><button class="primary-btn" type="button" data-action="confirm-referral-transfer">Отправить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="transfer-bs">Назад</button></div></div>`,
        "",
        "sheet-wide",
      );
      return;
    }
    if (sheetId === "manage-booking") {
      const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
        ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === normalizeText(state.pendingBookingCancellationId))
        : null;
      const targetId = normalizeText(state.pendingBookingCancellationId || appointment?.id || "");
      openSheet(
        "Управление записью",
        `<div class="list appointment-sheet-list"><div class="list-item"><p class="list-title">${normalizeText(appointment?.barber || "Текущая запись")}</p><p class="subtitle">${appointment?.date ? formatDateOnly(appointment.date) : ""}${appointment?.time ? ` · ${normalizeText(appointment.time)}` : ""}</p></div><div class="list-item"><p class="list-title">Услуги</p><p class="subtitle">${normalizeText((appointment?.services || []).join(", ") || "Детали доступны в booking.")}</p></div></div><div class="inline-actions"><button class="ghost-btn danger-surface" type="button" data-action="open-sheet" data-sheet="cancel-booking" data-id="${targetId}">Отменить запись</button></div>`,
      );
      return;
    }
    if (sheetId === "cancel-booking") {
      const appointment = Array.isArray(state.payload?.booking?.activeAppointments)
        ? state.payload.booking.activeAppointments.find((item) => normalizeText(item.id) === normalizeText(state.pendingBookingCancellationId))
        : null;
      const targetId = normalizeText(state.pendingBookingCancellationId || appointment?.id || "");
      openSheet(
        "Отменить запись",
        `<div class="list-item"><p class="list-title">Отменить текущую запись?</p><p class="subtitle">Запись будет отменена без возможности вернуть её автоматически.${appointment?.date ? ` · ${formatDateOnly(appointment.date)}` : ""}${appointment?.time ? ` · ${normalizeText(appointment.time)}` : ""}</p></div><div class="inline-actions"><button class="danger-btn" type="button" data-action="confirm-cancel-booking" data-id="${targetId}">Отменить запись</button><button class="ghost-btn" type="button" data-action="close-sheet">Назад</button></div>`,
      );
      return;
    }
    if (sheetId === "profile-menu") {
      openSheet("Настройки", `<div class="list"><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-edit"><p class="list-title">Редактировать профиль</p><p class="subtitle">Имя, телефон, дата рождения, пол и фото.</p></button><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-security"><p class="list-title">Безопасность</p><p class="subtitle">Смена пароля, Telegram и защита доступа.</p></button><button class="list-item menu-action" type="button" data-action="open-sheet" data-sheet="profile-notifications"><p class="list-title">Настройки уведомлений</p><p class="subtitle">Управление уведомлениями о записях на сайте.</p></button><button class="list-item menu-action danger-surface" type="button" data-action="open-sheet" data-sheet="profile-logout-confirm"><p class="list-title">Выход</p><p class="subtitle">Завершить текущую сессию.</p></button></div>`);
      return;
    }
    if (sheetId === "profile-logout-confirm") {
      openSheet("Подтвердите выход", `<div class="list-item"><p class="list-title">Выйти из аккаунта?</p><p class="subtitle">Текущая сессия на этом устройстве будет завершена.</p></div><div class="inline-actions"><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button><button class="danger-btn" type="button" data-action="logout">Завершить сессию</button></div>`);
      return;
    }
    if (sheetId === "profile-edit") {
      const user = state.payload?.user || {};
      openSheet("Редактировать профиль", `<form class="form-grid profile-edit-form-layout" id="profile-edit-form"><label class="field"><span class="field-label">ФИО</span><input name="displayName" value="${normalizeText(user.displayName)}" required /></label><label class="field"><span class="field-label">Телефон</span><input name="phone" value="${normalizeText(user.phone)}" required /></label><label class="field"><span class="field-label">Дата рождения</span><input type="date" name="birthDate" value="${normalizeText(user.birthDate)}" /></label><label class="field"><span class="field-label">Пол</span><select name="gender"><option value="">Не указан</option><option value="male" ${user.gender === "male" ? "selected" : ""}>Мужской</option><option value="female" ${user.gender === "female" ? "selected" : ""}>Женский</option><option value="other" ${user.gender === "other" ? "selected" : ""}>Другой</option></select></label><div class="field profile-avatar-field"><span class="field-label">Фото профиля</span><div class="profile-avatar-upload-card" id="profile-avatar-upload-card"><div class="profile-avatar-upload-preview" id="profile-avatar-upload-preview">${avatarMarkup(user, 84)}</div><div class="profile-avatar-upload-copy"><strong>Загрузить новое фото</strong><span class="muted-text" id="profile-avatar-upload-status">Файл до 5 МБ. Изображение автоматически обрежется по центру.</span><div class="inline-actions"><label class="ghost-btn file-select-btn" for="profile-avatar-input">Выбрать фото</label></div></div><input id="profile-avatar-input" class="visually-hidden-input" type="file" name="avatarFile" accept="image/*" /></div></div><div class="inline-actions profile-edit-submit"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`, "", "sheet-wide");
      return;
    }
    if (sheetId === "profile-security") {
      const user = state.payload?.user || {};
      openSheet("Безопасность", `<form class="form-grid" id="profile-password-form"><div class="telegram-sheet-card profile-edit-telegram profile-security-telegram"><div class="profile-security-row-copy"><p class="list-title">${user.telegramId ? "Telegram привязан" : "Telegram не подключен"}</p><p class="subtitle">${user.telegramId ? "Быстрый вход через Telegram уже доступен." : "Подключите Telegram для быстрого входа в личный кабинет."}</p></div><div class="inline-actions"><button class="tonal-btn" type="button" data-action="${user.telegramId ? "unlink-telegram" : "link-telegram"}">${user.telegramId ? "Отвязать Telegram" : "Привязать Telegram"}</button></div></div><div class="security-password-toggle"><button class="security-password-trigger" type="button" data-action="show-password-change"><div class="profile-security-row-copy"><p class="list-title">Сменить пароль</p><p class="subtitle">Задайте новый пароль для входа на сайте.</p></div><span class="security-password-trigger-action">Изменить</span></button></div><div id="security-password-fields" hidden><label class="field"><span class="field-label">Новый пароль</span><input type="password" name="password" /></label></div><div class="inline-actions"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`);
      return;
    }
    if (sheetId === "profile-notifications") {
      const user = state.payload?.user || {};
      openSheet("Уведомления", `<form class="form-grid" id="profile-notifications-form"><label class="toggle-card"><div><p class="list-title">Уведомления о записях</p><p class="subtitle">Показывать уведомления на сайте о создании и изменениях записи к барберу.</p></div><input type="checkbox" name="bookingNotificationsEnabled" ${user.bookingNotificationsEnabled !== false ? "checked" : ""} /></label><div class="inline-actions"><button class="primary-btn" type="submit" disabled>Сохранить</button><button class="ghost-btn" type="button" data-action="open-sheet" data-sheet="profile-menu">Назад</button></div></form>`);
      return;
    }
    if (sheetId === "profile-notices") {
      const notices = Array.isArray(state.payload?.profile?.notices) ? state.payload.profile.notices : [];
      openSheet("Замечания", notices.length ? `<div class="list">${notices.map((notice) => `<div class="list-item"><p class="list-title">${normalizeText(notice.title)}</p><p class="subtitle">${normalizeText(notice.description)} · ${formatDateTime(notice.createdAt)}</p></div>`).join("")}</div>` : `<div class="empty-state">Замечаний нет.</div>`);
      return;
    }
    if (sheetId === "profile-name") {
      const user = state.payload?.user || {};
      openSheet("ФИО", `<form class="form-grid" id="profile-name-form"><label class="field"><span class="field-label">ФИО</span><input name="displayName" value="${normalizeText(user.displayName)}" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-phone") {
      const user = state.payload?.user || {};
      openSheet("Телефон", `<form class="form-grid" id="profile-phone-form"><label class="field"><span class="field-label">Телефон</span><input name="phone" value="${normalizeText(user.phone)}" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-birthdate") {
      const user = state.payload?.user || {};
      openSheet("Дата рождения", `<form class="form-grid" id="profile-birthdate-form"><label class="field"><span class="field-label">Дата рождения</span><input type="date" name="birthDate" value="${normalizeText(user.birthDate)}" /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-gender") {
      const user = state.payload?.user || {};
      openSheet("Пол", `<form class="form-grid" id="profile-gender-form"><label class="field"><span class="field-label">Пол</span><select name="gender"><option value="">Не указан</option><option value="male" ${user.gender === "male" ? "selected" : ""}>Мужской</option><option value="female" ${user.gender === "female" ? "selected" : ""}>Женский</option><option value="other" ${user.gender === "other" ? "selected" : ""}>Другой</option></select></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-avatar") {
      openSheet("Фото профиля", `<form class="form-grid" id="profile-avatar-form"><label class="field"><span class="field-label">Загрузить фото</span><input type="file" name="avatarFile" accept="image/*" /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-password") {
      openSheet("Новый пароль", `<form class="form-grid" id="profile-password-form"><label class="field"><span class="field-label">Новый пароль</span><input type="password" name="password" required /></label><div class="inline-actions"><button class="primary-btn" type="submit">Сохранить</button><button class="ghost-btn" type="button" data-action="close-sheet">Отмена</button></div></form>`);
      return;
    }
    if (sheetId === "profile-history") {
      const profile = state.payload?.profile || {};
      const visitHistory = Array.isArray(profile.visitHistory) ? profile.visitHistory : [];
      const operations = Array.isArray(profile.operations) ? profile.operations : [];
      const historyItems = getProfileHistoryItems(visitHistory, operations);
      const filteredHistory = getFilteredProfileHistoryItems(historyItems, state.profileHistoryFilter);
      openSheet("Вся история", `<div class="filter-row sheet-filter-row"><button class="nav-pill ${state.profileHistoryFilter === "all" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="all">Все</button><button class="nav-pill ${state.profileHistoryFilter === "visits" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="visits">Визиты</button><button class="nav-pill ${state.profileHistoryFilter === "payments" ? "active" : ""}" type="button" data-action="set-history-filter" data-filter="payments">Оплата</button></div><div class="timeline">${filteredHistory.length ? filteredHistory.map(renderProfileHistoryRow).join("") : `<div class="empty-state">История пока пуста.</div>`}</div>`);
      return;
    }
  };

  const saveProfilePatch = async (patch) => {
    const safePatch = patch || {};
    if (state.payload?.user) {
      state.payload = {
        ...state.payload,
        user: {
          ...state.payload.user,
          ...Object.fromEntries(Object.entries(safePatch).filter(([, value]) => value !== undefined && value !== "")),
        },
      };
    }
    closeSheet();
    try {
      await apiRequest("/profile", {
        method: "PUT",
        body: JSON.stringify(safePatch),
      });
      state.payload = await apiRequest("/app");
      render();
    } catch (error) {
      state.payload = await apiRequest("/app").catch(() => state.payload);
      render();
      throw error;
    }
  };

  const startTelegramLink = async () => {
    const payload = await apiRequest("/profile/telegram/start", { method: "POST" });
    state.telegramLinkRequestId = normalizeText(payload.requestId);
    openSheet(
      "Привязать Telegram",
      `<div class="list-item"><p class="list-title">Откройте Telegram и подтвердите привязку.</p><p class="subtitle">${normalizeText(payload.botUsername) ? `Бот: @${normalizeText(payload.botUsername)}` : "Бот недоступен."}</p></div>${normalizeText(payload.botLink) ? `<a class="primary-btn" href="${normalizeText(payload.botLink)}" target="_blank" rel="noopener noreferrer">Открыть Telegram</a>` : ""}<div class="inline-actions"><button class="ghost-btn" type="button" data-action="check-telegram-link">Проверить статус</button></div>`,
    );
  };

  const checkTelegramLink = async () => {
    if (!state.telegramLinkRequestId) return;
    const payload = await apiRequest(`/profile/telegram/status?requestId=${encodeURIComponent(state.telegramLinkRequestId)}`);
    if (payload?.done && payload?.success && payload?.user) {
      state.payload = await apiRequest("/app");
      state.telegramLinkRequestId = "";
      render({ sheet: false });
      openSheet("Telegram привязан", `<div class="list-item"><p class="list-title">Аккаунт успешно привязан.</p></div>`);
      return;
    }
    if (payload?.done && !payload?.success) {
      state.telegramLinkRequestId = "";
      openSheet("Привязка не завершена", `<div class="list-item"><p class="list-title">${normalizeText(payload.message || "Не удалось завершить привязку.")}</p></div>`);
      return;
    }
    openSheet("Привязать Telegram", `<div class="list-item"><p class="list-title">Привязка еще не завершена.</p><p class="subtitle">Вернитесь в Telegram и подтвердите вход, затем проверьте статус снова.</p></div><div class="inline-actions"><button class="ghost-btn" type="button" data-action="check-telegram-link">Проверить статус</button></div>`);
  };

  const unlinkTelegram = async () => {
    await apiRequest("/profile/telegram/unlink", { method: "POST" });
    state.payload = await apiRequest("/app");
    render({ sheet: false });
  };

  const syncReferralCopyButtons = () => {
    document.querySelectorAll("[data-action='copy-referral']").forEach((button) => {
      const copied = state.referralLinkCopied === true;
      button.classList.toggle("is-copied", copied);
      const label = button.querySelector("span:last-child");
      if (!label) return;
      if (button.classList.contains("referral-wallet-action")) {
        label.textContent = copied ? "Ссылка скопирована" : "Реферальная ссылка";
      } else {
        label.textContent = copied ? "Ссылка скопирована" : "Пригласить первого клиента";
      }
    });
  };

  const openPromoSheet = (promoId, promoIndex) => {
    const promos = Array.isArray(state.payload?.site?.home?.promos) ? state.payload.site.home.promos : [];
    const numericPromoIndex = Number.parseInt(promoIndex, 10);
    const promo =
      (Number.isInteger(numericPromoIndex) && numericPromoIndex >= 0 && numericPromoIndex < promos.length
        ? promos[numericPromoIndex]
        : null) ||
      promos.find((item) => normalizeText(item.id) === normalizeText(promoId));
    if (!promo) return;
    openSheet(
      normalizeText(promo.title || "Акция"),
      `<article class="promo-sheet-card">
        ${normalizeText(promo.imageUrl) ? `<div class="promo-sheet-hero" style="background-image:url('${normalizeText(promo.imageUrl)}');"><div class="promo-sheet-hero-glow"></div><div class="promo-sheet-hero-copy"><strong>${normalizeText(promo.title)}</strong></div></div>` : `<div class="promo-sheet-hero promo-sheet-hero-empty"><div class="promo-sheet-hero-copy"><strong>${normalizeText(promo.title)}</strong></div></div>`}
        <div class="promo-sheet-body">
          ${normalizeText(promo.subtitle) ? `<div class="promo-sheet-summary"><p class="list-title">${normalizeText(promo.subtitle)}</p></div>` : ""}
          <div class="promo-sheet-copy">
            <p>${normalizeText(promo.details) || "Подробности акции скоро появятся."}</p>
          </div>
        </div>
      </article>`,
      "",
      "sheet-wide promo-sheet-shell",
    );
  };

  const installDelegatedHandlers = () => {
    if (delegatedHandlersBound) return;
    delegatedHandlersBound = true;

    ROOT.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (link && ROOT.contains(link)) {
        const href = normalizeText(link.getAttribute("href"));
        if (
          href &&
          !href.startsWith("#") &&
          !link.hasAttribute("download") &&
          (!link.target || link.target === "_self") &&
          !(/^(mailto:|tel:|https?:)/i.test(href) && !href.startsWith("/"))
        ) {
          if (!(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) {
            event.preventDefault();
            navigateTo(href);
            return;
          }
        }
      }

      const actionNode = event.target.closest("[data-action]");
      if (!actionNode || !ROOT.contains(actionNode)) return;
      const action = normalizeText(actionNode.dataset.action);
      if (!action) return;

      switch (action) {
        case "logout":
          event.preventDefault();
          logout();
          return;
        case "reload-app":
          event.preventDefault();
          window.location.reload();
          return;
        case "link-telegram":
          event.preventDefault();
          void startTelegramLink();
          return;
        case "unlink-telegram":
          event.preventDefault();
          void unlinkTelegram();
          return;
        case "check-telegram-link":
          event.preventDefault();
          void checkTelegramLink();
          return;
        case "show-password-change": {
          event.preventDefault();
          const passwordFields = document.getElementById("security-password-fields");
          if (!passwordFields) return;
          passwordFields.hidden = false;
          actionNode.hidden = true;
          const passwordInput = passwordFields.querySelector("input[name='password']");
          if (passwordInput) passwordInput.focus();
          passwordInput?.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }
        case "close-sheet":
          event.preventDefault();
          closeSheet();
          return;
        case "dismiss-sheet":
          event.preventDefault();
          dismissSheet();
          return;
        case "open-sheet":
          event.preventDefault();
          if (["cancel-booking", "manage-booking"].includes(normalizeText(actionNode.dataset.sheet))) {
            state.pendingBookingCancellationId = normalizeText(actionNode.dataset.id);
          }
          openNamedSheet(actionNode.dataset.sheet);
          return;
        case "navigate": {
          event.preventDefault();
          const href = normalizeText(actionNode.dataset.href);
          if (!href) return;
          navigateTo(href);
          return;
        }
        case "set-history-filter":
          event.preventDefault();
          event.stopPropagation();
          {
            const nextFilter = normalizeText(actionNode.dataset.filter) || "all";
            if (state.profileHistoryFilter === nextFilter) return;
            state.profileHistoryFilter = nextFilter;
          }
          if (actionNode.closest("[data-render-host='sheet']")) {
            openNamedSheet("profile-history");
            return;
          }
          render();
          return;
        case "set-transfer-filter":
          event.preventDefault();
          event.stopPropagation();
          {
            const nextFilter = normalizeText(actionNode.dataset.filter) || "all";
            if (state.transferHistoryFilter === nextFilter) return;
            state.transferHistoryFilter = nextFilter;
          }
          if (actionNode.closest("[data-render-host='sheet']")) {
            openNamedSheet("referral-history");
            return;
          }
          render();
          return;
        case "open-promo":
          event.preventDefault();
          openPromoSheet(actionNode.dataset.id, actionNode.dataset.index);
          return;
        case "copy-referral":
          event.preventDefault();
          void (async () => {
            const linkValue = `${window.location.origin}${normalizeText(state.payload?.referral?.referralLink || "/login/")}`;
            try {
              await navigator.clipboard.writeText(linkValue);
              state.referralLinkCopied = true;
              syncReferralCopyButtons();
              if (referralCopyFeedbackTimer) window.clearTimeout(referralCopyFeedbackTimer);
              referralCopyFeedbackTimer = window.setTimeout(() => {
                state.referralLinkCopied = false;
                syncReferralCopyButtons();
              }, 1600);
            } catch {
              openSheet("Скопируйте ссылку", `<div class="list-item"><p class="list-title">${linkValue}</p><p class="subtitle">Не удалось скопировать автоматически. Скопируйте ссылку вручную.</p></div>`);
            }
          })();
          return;
        case "open-quick-transfer":
          event.preventDefault();
          state.referralTransferDraft = {
            targetPhone: normalizeText(actionNode.dataset.phone),
            recipientShortName: normalizeText(actionNode.dataset.shortName || actionNode.dataset.name),
            fullName: normalizeText(actionNode.dataset.name),
          };
          openNamedSheet("quick-transfer");
          return;
        case "scroll-transfer-recipients": {
          event.preventDefault();
          const carousel = actionNode.closest(".referral-transfer-recipient-carousel");
          const strip = carousel?.querySelector("[data-transfer-recipient-strip]");
          if (!strip) return;
          const firstCard = strip.querySelector(".referral-transfer-recipient");
          const step = Math.max(strip.clientWidth * 0.82, (firstCard?.clientWidth || 160) + 12);
          const direction = normalizeText(actionNode.dataset.direction) === "prev" ? -1 : 1;
          strip.scrollBy({ left: step * direction, behavior: "smooth" });
          return;
        }
        case "transfer-preset":
          event.preventDefault();
          state.referralQuickAmount = Number(actionNode.dataset.amount || 0);
          state.referralTransferDraft = {
            ...(state.referralTransferDraft || {}),
            amountBs: Number(actionNode.dataset.amount || 0),
          };
          openNamedSheet("transfer-bs");
          return;
        case "quick-transfer-amount":
          event.preventDefault();
          void (async () => {
            try {
              const draft = {
                targetPhone: normalizeText(actionNode.dataset.phone),
                amountBs: Number(actionNode.dataset.amount || 0),
                recipientShortName: normalizeText(actionNode.dataset.shortName || actionNode.dataset.name),
                fullName: normalizeText(actionNode.dataset.name),
                comment: "",
              };
              const recipient = await requestReferralTransferPreview(draft);
              state.referralTransferDraft = {
                ...draft,
                recipientId: normalizeText(recipient?.id),
                recipientShortName: normalizeText(recipient?.shortName || draft.recipientShortName || draft.fullName),
              };
              openNamedSheet("confirm-transfer-bs");
            } catch (error) {
              openSheet("Ошибка перевода", `<div class="list-item"><p class="list-title">${humanizeReferralTransferError(error)}</p></div>`);
            }
          })();
          return;
        case "select-barber":
          event.preventDefault();
          void (async () => {
            state.booking.barberId = normalizeText(actionNode.dataset.id);
            await loadServices();
            scrollToBookingStep("services");
          })();
          return;
        case "toggle-service":
          event.preventDefault();
          void (async () => {
            const id = normalizeText(actionNode.dataset.id);
            state.booking.selectedServices = state.booking.selectedServices.includes(id)
              ? state.booking.selectedServices.filter((item) => item !== id)
              : [...state.booking.selectedServices, id];
            await loadDates();
            syncBookingBsCover();
            if (state.booking.selectedServices.length) scrollToBookingStep("date");
          })();
          return;
        case "select-date":
          event.preventDefault();
          void (async () => {
            state.booking.selectedDate = normalizeText(actionNode.dataset.id);
            await loadTimes();
            scrollToBookingStep("time");
          })();
          return;
        case "select-time":
          event.preventDefault();
          {
            const nextTime = normalizeText(actionNode.dataset.id);
            if (state.booking.selectedTime === nextTime) {
              scrollToBookingStep("comment");
              return;
            }
            state.booking.selectedTime = nextTime;
          }
          render();
          scrollToBookingStep("comment");
          return;
        case "toggle-booking-bs":
          event.preventDefault();
          state.booking.bsCoverExpanded = !state.booking.bsCoverExpanded;
          render();
          return;
        case "submit-booking":
          event.preventDefault();
          void submitBooking();
          return;
        case "confirm-referral-transfer":
          event.preventDefault();
          void (async () => {
            try {
              await submitReferralTransfer(state.referralTransferDraft || {});
            } catch (error) {
              openSheet("Ошибка перевода", `<div class="list-item"><p class="list-title">${humanizeReferralTransferError(error)}</p></div>`);
            }
          })();
          return;
        case "confirm-cancel-booking":
          event.preventDefault();
          void (async () => {
            try {
              await cancelHomeBooking(actionNode.dataset.id);
            } catch (error) {
              openSheet("Ошибка отмены", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось отменить запись.")}</p></div>`);
            }
          })();
          return;
        default:
          break;
      }
    });

    ROOT.addEventListener("click", (event) => {
      const backdrop = event.target.closest("#sheet-backdrop");
      if (backdrop && event.target === backdrop) {
        if (IS_DESKTOP_SHEET_DISMISS) {
          dismissSheet();
          return;
        }
        closeSheet();
      }
    });
  };

  const bindEvents = ({ appRoot = null, sheetRoot = null } = {}) => {
    const quickTransferForm = queryById(sheetRoot, "quick-transfer-form");
    if (quickTransferForm) {
      quickTransferForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const amountInput = quickTransferForm.elements?.amountBs;
        try {
          const draft = {
            targetPhone: normalizeText(quickTransferForm.dataset.phone),
            amountBs: Number(amountInput?.value || 0),
            recipientShortName: normalizeText(quickTransferForm.dataset.shortName || quickTransferForm.dataset.name),
            fullName: normalizeText(quickTransferForm.dataset.name),
            comment: "",
          };
          const recipient = await requestReferralTransferPreview(draft);
          state.referralTransferDraft = {
            ...draft,
            recipientId: normalizeText(recipient?.id),
            recipientShortName: normalizeText(recipient?.shortName || draft.recipientShortName || draft.fullName),
          };
          openNamedSheet("confirm-transfer-bs");
        } catch (error) {
          openSheet("Ошибка перевода", `<div class="list-item"><p class="list-title">${humanizeReferralTransferError(error)}</p></div>`);
        }
      });
    }
    const bookingCommentInput = queryById(appRoot, "booking-comment-input");
    if (bookingCommentInput) {
      bookingCommentInput.addEventListener("input", () => {
        state.booking.comment = normalizeText(bookingCommentInput.value);
      });
      bookingCommentInput.addEventListener("blur", () => {
        render();
        scrollToBookingStep("summary");
      });
    }
    const bookingBsInput = queryById(appRoot, "booking-bs-input");
    if (bookingBsInput) {
      bookingBsInput.addEventListener("input", () => {
        state.booking.appliedBs = Math.max(0, Math.trunc(Number(bookingBsInput.value) || 0));
        if (state.booking.appliedBs > 0) state.booking.bsCoverExpanded = true;
      });
      bookingBsInput.addEventListener("blur", () => {
        syncBookingBsCover();
        render();
      });
    }
    const setupProfileFormDirtyState = (form, hasChanges) => {
      if (!form || typeof hasChanges !== "function") return;
      const submitButton = form.querySelector("button[type='submit']");
      if (!submitButton) return;
      const syncState = () => {
        submitButton.disabled = !hasChanges();
      };
      form.addEventListener("input", syncState);
      form.addEventListener("change", syncState);
      syncState();
    };

    const bindProfileForm = (root, id, buildPatch) => {
      const form = queryById(root, id);
      if (!form) return;
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
          const patch = await buildPatch(new FormData(form), form);
          await saveProfilePatch(patch);
        } catch (error) {
          openSheet("Ошибка сохранения", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось сохранить профиль.")}</p></div>`);
        }
      });
    };
    bindProfileForm(sheetRoot, "profile-name-form", async (formData) => ({ displayName: normalizeText(formData.get("displayName")) }));
    bindProfileForm(sheetRoot, "profile-phone-form", async (formData) => ({ phone: normalizeText(formData.get("phone")) }));
    bindProfileForm(sheetRoot, "profile-birthdate-form", async (formData) => ({ birthDate: normalizeText(formData.get("birthDate")) }));
    bindProfileForm(sheetRoot, "profile-gender-form", async (formData) => ({ gender: normalizeText(formData.get("gender")) }));
    bindProfileForm(sheetRoot, "profile-password-form", async (formData) => ({ password: normalizeText(formData.get("password")) }));
    bindProfileForm(sheetRoot, "profile-notifications-form", async (formData) => ({
      bookingNotificationsEnabled: formData.get("bookingNotificationsEnabled") === "on",
    }));
    const profilePasswordForm = queryById(sheetRoot, "profile-password-form");
    setupProfileFormDirtyState(profilePasswordForm, () => {
      const passwordField = profilePasswordForm?.elements?.password;
      return normalizeText(passwordField?.value).length > 0;
    });
    const profileNotificationsForm = queryById(sheetRoot, "profile-notifications-form");
    if (profileNotificationsForm) {
      const initialNotificationsEnabled = state.payload?.user?.bookingNotificationsEnabled !== false;
      setupProfileFormDirtyState(profileNotificationsForm, () => {
        const currentValue = profileNotificationsForm.elements?.bookingNotificationsEnabled?.checked === true;
        return currentValue !== initialNotificationsEnabled;
      });
    }
    const referralTransferForm = queryById(sheetRoot, "referral-transfer-form");
    if (referralTransferForm) {
      const targetPhoneInput = referralTransferForm.elements?.targetPhone;
      if (targetPhoneInput) {
        applyPhoneMask(targetPhoneInput);
        attachPhoneMask(targetPhoneInput);
      }
      referralTransferForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new window.FormData(referralTransferForm);
        try {
          const draft = {
            targetPhone: normalizePhone(formData.get("targetPhone")),
            amountBs: Number(formData.get("amountBs") || 0),
            comment: normalizeText(formData.get("comment")),
          };
          const recipient = await requestReferralTransferPreview(draft);
          state.referralTransferDraft = {
            ...draft,
            recipientId: normalizeText(recipient?.id),
            recipientShortName: normalizeText(recipient?.shortName || recipient?.fullName),
          };
          openNamedSheet("confirm-transfer-bs");
        } catch (error) {
          openSheet(
            "Ошибка перевода",
            `<div class="list-item"><p class="list-title">${humanizeReferralTransferError(error)}</p></div>`,
          );
        }
      });
    }
    if (normalizeText(state.sheet?.title) === "Сканировать QR") {
      startReferralQrScanner();
    }
    bindProfileForm(sheetRoot, "profile-edit-form", async (formData) => {
      const patch = {
        displayName: normalizeText(formData.get("displayName")),
        phone: normalizeText(formData.get("phone")),
        birthDate: normalizeText(formData.get("birthDate")),
        gender: normalizeText(formData.get("gender")),
        avatarUrl: normalizeText(state.payload?.user?.avatarUrl || ""),
      };
      const file = formData.get("avatarFile");
      if (file instanceof File && file.name) {
        if (!normalizeText(file.type).startsWith("image/")) {
          throw new Error("Нужен файл изображения.");
        }
        if (Number(file.size) > 5 * 1024 * 1024) {
          throw new Error("Файл должен быть не больше 5 МБ.");
        }
        patch.avatarUrl = await cropImageFileToSquareDataUrl(file);
      }
      return patch;
    });
    const profileEditForm = queryById(sheetRoot, "profile-edit-form");
    if (profileEditForm) {
      const initialUser = state.payload?.user || {};
      setupProfileFormDirtyState(profileEditForm, () => {
        const currentDisplayName = normalizeText(profileEditForm.elements?.displayName?.value);
        const currentPhone = normalizeText(profileEditForm.elements?.phone?.value);
        const currentBirthDate = normalizeText(profileEditForm.elements?.birthDate?.value);
        const currentGender = normalizeText(profileEditForm.elements?.gender?.value);
        const hasAvatarFile = Boolean(profileEditForm.elements?.avatarFile?.files?.length);
        return (
          currentDisplayName !== normalizeText(initialUser.displayName) ||
          currentPhone !== normalizeText(initialUser.phone) ||
          currentBirthDate !== normalizeText(initialUser.birthDate) ||
          currentGender !== normalizeText(initialUser.gender) ||
          hasAvatarFile
        );
      });
    }
    const avatarInput = queryById(sheetRoot, "profile-avatar-input");
    const avatarPreview = queryById(sheetRoot, "profile-avatar-upload-preview");
    const avatarCard = queryById(sheetRoot, "profile-avatar-upload-card");
    const avatarStatus = queryById(sheetRoot, "profile-avatar-upload-status");
    if (avatarInput && avatarPreview && avatarCard && avatarStatus) {
      avatarInput.addEventListener("change", async () => {
        const file = avatarInput.files && avatarInput.files[0];
        if (!file) {
          avatarCard.classList.remove("is-loading", "is-ready");
          avatarStatus.textContent = "Файл до 5 МБ. Изображение автоматически обрежется по центру.";
          return;
        }
        if (!normalizeText(file.type).startsWith("image/")) {
          openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">Нужен файл изображения.</p></div>`);
          avatarInput.value = "";
          return;
        }
        if (Number(file.size) > 5 * 1024 * 1024) {
          openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">Файл должен быть не больше 5 МБ.</p></div>`);
          avatarInput.value = "";
          return;
        }
        avatarCard.classList.add("is-loading");
        avatarCard.classList.remove("is-ready");
        avatarStatus.textContent = "Подготавливаем новое фото...";
        try {
          const previewUrl = await cropImageFileToSquareDataUrl(file, 320);
          avatarPreview.classList.remove("avatar-preview-ready");
          avatarPreview.innerHTML = `<div class="profile-avatar avatar-preview-enter" style="width:84px;height:84px;"><img src="${previewUrl}" alt="Новое фото профиля" /></div>`;
          requestAnimationFrame(() => {
            avatarPreview.classList.add("avatar-preview-ready");
          });
          avatarStatus.textContent = "Новое фото готово. Сохраните профиль, чтобы применить изменения.";
          avatarCard.classList.remove("is-loading");
          avatarCard.classList.add("is-ready");
        } catch (error) {
          avatarCard.classList.remove("is-loading", "is-ready");
          avatarStatus.textContent = "Файл до 5 МБ. Изображение автоматически обрежется по центру.";
          openSheet("Ошибка изображения", `<div class="list-item"><p class="list-title">${normalizeText(error.message || "Не удалось обработать изображение.")}</p></div>`);
        }
      });
    }
    bindProfileForm(sheetRoot, "profile-avatar-form", async (formData) => {
      const file = formData.get("avatarFile");
      if (!(file instanceof File) || !file.name) {
        throw new Error("Выберите изображение.");
      }
      if (!normalizeText(file.type).startsWith("image/")) {
        throw new Error("Нужен файл изображения.");
      }
      if (Number(file.size) > 5 * 1024 * 1024) {
        throw new Error("Файл должен быть не больше 5 МБ.");
      }
      const avatarUrl = await cropImageFileToSquareDataUrl(file);
      return { avatarUrl };
    });
  };

  const init = async () => {
    syncPageFromLocation();
    installDelegatedHandlers();
    state.session = loadSession();
    const normalizedPath = normalizeText(window.location.pathname).replace(/\/+$/, "") || "/";
    if (isAuthenticated() && normalizedPath === "/") {
      window.location.replace("/home/");
      return;
    }
    if (!isAuthenticated()) {
      if (state.currentPage === "home" && normalizedPath === "/") {
        window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
      } else {
        redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
        return;
      }
    }
    if (isAuthenticated()) {
      window.history.replaceState(buildHistoryState(), "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
    window.addEventListener("popstate", (event) => {
      suppressSheetHistoryBack = true;
      stopReferralQrScanner();
      state.navIndicatorIndex = Math.max(0, ["home", "referral", "booking", "shop", "profile"].findIndex((item) => item === state.currentPage));
      syncPageFromLocation();
      if (!isAuthenticated()) {
        const normalizedPath = normalizeText(window.location.pathname).replace(/\/+$/, "") || "/";
        if (!(state.currentPage === "home" && normalizedPath === "/")) {
          redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
          return;
        }
      }
      state.booking.stepAnimationsEnabled = state.currentPage === "booking";
      state.routeTransitionActive = true;
      if (event.state?.sheet && isAuthenticated()) {
        state.sheet = {
          title: normalizeText(event.state.sheet.title),
          bodyHtml: event.state.sheet.bodyHtml || "",
          footerHtml: event.state.sheet.footerHtml || "",
          className: normalizeText(event.state.sheet.className),
        };
        state.sheetState = "open";
      } else {
        state.sheet = null;
        state.sheetState = "closed";
      }
      render();
      suppressSheetHistoryBack = false;
    });
    if (!isAuthenticated()) {
      if (!(state.currentPage === "home" && normalizedPath === "/")) {
        redirectToLogin(`${window.location.pathname}${window.location.search}${window.location.hash}`);
        return;
      }
      try {
        state.payload = await publicApiRequest("/public");
        state.bootstrapError = "";
        render();
      } catch (error) {
        state.bootstrapError =
          normalizeText(error?.message) || "Не удалось загрузить данные приложения.";
        render();
      }
      return;
    }
    try {
      state.payload = await apiRequest("/app");
      state.bootstrapError = "";
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          void sendSitePresence("online");
        }
      });
      window.addEventListener("resize", () => {
        setupPromoMarqueeAutoScroll();
      }, { passive: true });
      window.addEventListener("beforeunload", () => {
        void sendSitePresence("offline");
      });
      startSitePresenceLoop();
      render();
    } catch (error) {
      stopSitePresenceLoop();
      state.bootstrapError =
        normalizeText(error?.message) || "Не удалось загрузить данные приложения.";
      render();
    }
  };

  init();
})();
