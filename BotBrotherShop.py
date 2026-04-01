import logging
import json
import datetime
import io
import pickle
import re
import uuid
import time
import sys
import base64
import os
from pathlib import Path
from collections import defaultdict
from urllib.parse import urlparse, urlencode
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

from telegram import (
    Update,
    InputMediaPhoto,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    ReplyKeyboardMarkup,
    KeyboardButton,
)
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    filters,
    ContextTypes,
    ConversationHandler,
    CallbackQueryHandler,
    PicklePersistence,
)
from telegram.error import BadRequest
import config  # Предполагается, что config.py содержит TOKEN и ADMIN_IDS
import asyncio
from datetime import time as dt_time
from zoneinfo import ZoneInfo

# ---------- Настройки ----------
TOKEN = config.TOKEN

BASE_DIR = Path(__file__).parent
TGBOT_IMAGE_DIR = BASE_DIR / "Image" / "tgbot"
BOT_INTERNAL_API_BASE_URL = (
    os.getenv("BOT_INTERNAL_API_BASE_URL")
    or f"http://127.0.0.1:{os.getenv('PORT', '3000')}/api/bot-internal"
).rstrip("/")
BOT_INTERNAL_API_TOKEN = os.getenv("BOT_INTERNAL_API_TOKEN") or (
    f"{os.getenv('JWT_SECRET', 'change-me-secret')}:bot-internal"
)
BOT_INTERNAL_API_TIMEOUT_SECONDS = max(
    1.0, float(os.getenv("BOT_INTERNAL_API_TIMEOUT_SECONDS", "5"))
)
USER_SUMMARY_CACHE: dict[str, dict] = {}

# Медиа-ресурсы и кэш
IMAGE_FILE = BASE_DIR / "Image" / "bot.jpg"
MENU_IMAGE_PATH = BASE_DIR / "Image" / "menu_barber.jpg"
CACHE_TTL_SECONDS = 120
BARBER_CACHE = {
    True: {"data": [], "ts": 0.0, "version": None},
    False: {"data": [], "ts": 0.0, "version": None},
}
SERVICE_CACHE = {"data": [], "ts": 0.0, "version": None}
SETTINGS_CACHE = {"data": None, "ts": 0.0}
STATUS_ACTIVE_TOKENS = ("актив", "active")
STATUS_BLOCK_TOKENS = ("блок", "block")

# Базовая картинка для сообщений
with open(IMAGE_FILE, "rb") as f:
    IMAGE_BYTES = f.read()

# --- Константы состояний диалога ---
(
    REG_NAME,
    REG_PHONE,
    MENU,
    BOOK_BARBER,
    SELECT_SERVICES,
    BOOK_DATE,
    BOOK_TIME,
    BOOK_CONFIRM,
    SHOW_RECORDS,
    CANCEL_CONFIRM,
    CHANGE_PHONE,
    CHANGE_NAME,
    SITE_AUTH_PHONE,
) = range(13)

def load_blocked_user_ids() -> set[str]:
    """Читает список вручную заблокированных клиентов из веб-панели."""
    try:
        payload = json.loads(BLOCKLIST_FILE.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return set()
    except Exception as exc:
        logger.warning("Не удалось прочитать блоклист: %s", exc)
        return set()
    if isinstance(payload, dict):
        payload = payload.get("blocked") or payload.get("ids") or []
    if not isinstance(payload, list):
        return set()
    return {str(item) for item in payload if item is not None}

def get_user_record_id_by_telegram(telegram_id: int | str) -> str | None:
    """Возвращает id записи Users по TelegramID, если она есть."""
    try:
        summary = get_bot_user_summary(telegram_id)
        if summary and summary.get("userRecordId"):
            return str(summary["userRecordId"])
    except BotApiError as exc:
        logger.warning("User summary API error in get_user_record_id_by_telegram: %s", exc)
    return None

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)


def _patch_telegram_updater_for_py313() -> None:
    """Work around python-telegram-bot 20.x on Python 3.13 (missing cleanup slot)."""
    if sys.version_info < (3, 13):
        return
    try:
        from telegram.ext import _applicationbuilder, _updater

        base_updater = _updater.Updater
        base_slots = tuple(getattr(base_updater, "__slots__", ()))

        class PatchedUpdater(base_updater):  # type: ignore[misc]
            __slots__ = base_slots + ("__dict__", "_Updater__polling_cleanup_cb")

        _updater.Updater = PatchedUpdater
        _applicationbuilder.Updater = PatchedUpdater
        logger.info("Patched python-telegram-bot Updater for Python 3.13 compatibility.")
    except Exception as exc:  # pragma: no cover - defensive fallback
        logger.warning("Failed to patch python-telegram-bot Updater: %s", exc)


_patch_telegram_updater_for_py313()

CACHE_EPSILON = 1e-9

def status_is_active(status: str | None) -> bool:
    text = (status or "").lower()
    return any(token in text for token in STATUS_ACTIVE_TOKENS)

def status_is_blocking(status: str | None) -> bool:
    text = (status or "").lower()
    return status_is_active(status) or any(
        token in text for token in STATUS_BLOCK_TOKENS
    )

def _cached(now_ts: float, cache_entry: dict) -> bool:
    return cache_entry["ts"] and (
        now_ts - cache_entry["ts"] < CACHE_TTL_SECONDS - CACHE_EPSILON
    )

def load_bot_settings(force: bool = False) -> dict:
    """Загружает настройки бота из таблицы BotSettings с кешированием."""
    now_ts = time.time()
    if (
        not force
        and SETTINGS_CACHE["data"] is not None
        and _cached(now_ts, SETTINGS_CACHE)
    ):
        return SETTINGS_CACHE["data"]
    base_settings = {
        "botDescription": "CRM Bot",
        "aboutText": "",
        "bookingLimit": 2,
        "minLeadHours": 2,
        "maxDaysAhead": 14,
        "isBotEnabled": True,
    }
    try:
        payload = bot_api_request("GET", "/settings")
        if payload:
            base_settings.update(payload)
            SETTINGS_CACHE["data"] = base_settings
            SETTINGS_CACHE["ts"] = now_ts
            return base_settings
    except BotApiError as exc:
        logger.warning("Bot settings API error: %s", exc)
        if SETTINGS_CACHE["data"] is not None:
            return SETTINGS_CACHE["data"]
    SETTINGS_CACHE["data"] = base_settings
    SETTINGS_CACHE["ts"] = now_ts
    return base_settings

def load_barbers(include_inactive: bool = False, force: bool = False) -> list[dict]:
    """Возвращает запись пользователя из backend API с кешированием."""
    now_ts = time.time()
    cache_entry = BARBER_CACHE[include_inactive]
    if not force and cache_entry["data"] and _cached(now_ts, cache_entry):
        return cache_entry["data"]
    try:
        payload = bot_api_request(
            "GET",
            "/barbers",
            query={"includeInactive": "1" if include_inactive else "0"},
        )
        barbers_payload = payload.get("barbers") or []
        if isinstance(barbers_payload, list):
            cache_entry["data"] = barbers_payload
            cache_entry["ts"] = now_ts
            cache_entry["version"] = f"api|{len(barbers_payload)}"
            return barbers_payload
    except BotApiError as exc:
        logger.warning("Barbers API error: %s", exc)
    return cache_entry["data"] or []

def load_services(force: bool = False) -> tuple[list[dict], str | None]:
    """Load service list with price map for the Telegram bot."""
    now_ts = time.time()
    version_token = SERVICE_CACHE.get("version")
    if not force and SERVICE_CACHE["data"] and _cached(now_ts, SERVICE_CACHE):
        return SERVICE_CACHE["data"], version_token
    try:
        payload = bot_api_request("GET", "/services")
        services_payload = payload.get("services") or []
        if isinstance(services_payload, list):
            version_token = f"api|{len(services_payload)}"
            SERVICE_CACHE["data"] = services_payload
            SERVICE_CACHE["ts"] = now_ts
            SERVICE_CACHE["version"] = version_token
            return services_payload, version_token
    except BotApiError as exc:
        logger.warning("Services API error: %s", exc)
        if SERVICE_CACHE["data"]:
            return SERVICE_CACHE["data"], SERVICE_CACHE.get("version")
    return [], version_token

def get_menu_photo_bytes() -> bytes:
    source = MENU_IMAGE_PATH if MENU_IMAGE_PATH.exists() else IMAGE_FILE
    try:
        return source.read_bytes()
    except Exception:
        return IMAGE_BYTES

def _load_image_bytes(source: str | Path | None) -> bytes | None:
    if not source:
        return None
    text = str(source).strip()
    if not text:
        return None
    if text.startswith("data:image"):
        try:
            _, encoded = text.split(",", 1)
            return base64.b64decode(encoded)
        except Exception as exc:
            logger.warning("Failed to decode inline image: %s", exc)
            return None
    parsed = urlparse(text)
    if parsed.scheme in ("http", "https"):
        try:
            with urlopen(text, timeout=5) as resp:
                return resp.read()
        except Exception as exc:
            logger.warning("Failed to fetch remote image %s: %s", text, exc)
            return None
    candidate = Path(text)
    if not candidate.is_absolute():
        candidate = BASE_DIR / text.lstrip("/\\")
    if candidate.exists():
        try:
            return candidate.read_bytes()
        except Exception as exc:
            logger.warning("Failed to read image file %s: %s", candidate, exc)
            return None
    return None

def get_barber_photo_bytes(barber_info: dict | None) -> bytes:
    avatar_url = (barber_info or {}).get("avatarUrl") or ""
    barber_id = (barber_info or {}).get("id") or ""
    if barber_id:
        for ext in (".png", ".jpg", ".jpeg"):
            card_path = TGBOT_IMAGE_DIR / f"card-{barber_id}{ext}"
            if card_path.exists():
                try:
                    return card_path.read_bytes()
                except Exception as exc:
                    logger.warning("Failed to read card image %s: %s", card_path, exc)
    image_bytes = _load_image_bytes(avatar_url)
    if not image_bytes and MENU_IMAGE_PATH.exists():
        image_bytes = _load_image_bytes(MENU_IMAGE_PATH)
    return image_bytes or IMAGE_BYTES

def invalidate_services_cache():
    SERVICE_CACHE["data"] = []
    SERVICE_CACHE["ts"] = 0.0
    SERVICE_CACHE["version"] = None

def get_booking_limit() -> int:
    settings = load_bot_settings()
    try:
        return max(1, int(settings.get("bookingLimit") or 2))
    except (TypeError, ValueError):
        return 2

def get_min_lead_hours() -> int:
    settings = load_bot_settings()
    try:
        return max(1, int(settings.get("minLeadHours") or 2))
    except (TypeError, ValueError):
        return 2

def get_max_days_ahead() -> int:
    settings = load_bot_settings()
    try:
        return max(1, min(30, int(settings.get("maxDaysAhead") or 14)))
    except (TypeError, ValueError):
        return 14

# ЗМЕНЕНЕ: Автоматически определяем часовой пояс системы
try:
    ZONE = datetime.datetime.now().astimezone().tzinfo
except Exception:
    # Запасной вариант, если автоматическое определение не сработает
    ZONE = ZoneInfo("Europe/Chisinau")
DEFAULT_TIMEZONE = (
    os.getenv("APP_TIMEZONE")
    or os.getenv("BACKUP_CRON_TIMEZONE")
    or os.getenv("TZ")
    or "Europe/Moscow"
).strip() or "Europe/Moscow"
try:
    ZONE = ZoneInfo(DEFAULT_TIMEZONE)
except Exception:
    pass
PHONE_PATTERN = re.compile(r"^\+?\d{10,15}$")
SITE_LOGIN_CODE_PATTERN = re.compile(r"^\d{6}$")
TELEGRAM_AUTH_STATUS_PENDING = "pending"
TELEGRAM_AUTH_STATUS_COMPLETED = "completed"
TELEGRAM_AUTH_STATUS_FAILED = "failed"
TELEGRAM_AUTH_STATUS_EXPIRED = "expired"
TELEGRAM_AUTH_FLOW_LOGIN = "login"
TELEGRAM_AUTH_FLOW_PROFILE_LINK = "profile_link"

def zoned_now() -> datetime.datetime:
    return datetime.datetime.now(tz=ZONE)

def zoned_today() -> datetime.date:
    return zoned_now().date()

def normalize_token(value: str | None) -> str:
    return (value or "").strip().lower()

def normalize_phone(value: str | None) -> str:
    raw = re.sub(r"[^\d+]", "", (value or "").strip())
    if not raw:
        return ""
    digits = raw[1:] if raw.startswith("+") else raw
    if not digits:
        return ""
    if len(digits) == 10:
        return f"+7{digits}"
    if len(digits) == 11:
        if digits.startswith("8"):
            return f"+7{digits[1:]}"
        if digits.startswith("7"):
            return f"+{digits}"
    if digits.startswith("7"):
        return f"+{digits}"
    return f"+{digits}"

def normalize_telegram_id(value) -> str:
    """Приводит Telegram ID к канонической строке, например '12345'."""
    if value is None:
        return ""
    if isinstance(value, bool):
        return ""
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        if value.is_integer():
            return str(int(value))
        return ""
    text = str(value).strip()
    if not text:
        return ""
    if text.startswith("+"):
        text = text[1:]
    if re.fullmatch(r"-?\d+", text):
        try:
            return str(int(text))
        except ValueError:
            return ""
    if re.fullmatch(r"-?\d+\.0+", text):
        return text.split(".", 1)[0]
    try:
        numeric = float(text)
    except (ValueError, TypeError):
        return ""
    if numeric.is_integer():
        return str(int(numeric))
    return ""

def telegram_ids_equal(left, right) -> bool:
    left_id = normalize_telegram_id(left)
    right_id = normalize_telegram_id(right)
    return bool(left_id and right_id and left_id == right_id)

def now_iso() -> str:
    return (
        datetime.datetime.now(datetime.timezone.utc)
        .isoformat(timespec="milliseconds")
        .replace("+00:00", "Z")
    )

class BotApiError(Exception):
    def __init__(self, message: str, status: int | None = None, payload: dict | None = None):
        super().__init__(message)
        self.status = status
        self.payload = payload or {}
        self.code = str((self.payload or {}).get("code") or "").strip()

def bot_internal_api_available() -> bool:
    return bool(BOT_INTERNAL_API_BASE_URL and BOT_INTERNAL_API_TOKEN)

def bot_api_request(method: str, path: str, *, payload: dict | None = None, query: dict | None = None) -> dict:
    if not bot_internal_api_available():
        raise BotApiError("Bot internal API is not configured.")
    url = f"{BOT_INTERNAL_API_BASE_URL}/{path.lstrip('/')}"
    if query:
        query_string = urlencode(
            {
                key: value
                for key, value in query.items()
                if value is not None and value != ""
            }
        )
        if query_string:
            url = f"{url}?{query_string}"
    body = None
    headers = {"x-bot-internal-token": BOT_INTERNAL_API_TOKEN}
    if payload is not None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        headers["Content-Type"] = "application/json"
    request = Request(url, data=body, method=method.upper(), headers=headers)
    try:
        with urlopen(request, timeout=BOT_INTERNAL_API_TIMEOUT_SECONDS) as response:
            raw = response.read().decode("utf-8") if response else ""
            return json.loads(raw) if raw else {}
    except HTTPError as exc:
        raw = exc.read().decode("utf-8", errors="ignore") if exc.fp else ""
        payload_data = {}
        if raw:
            try:
                payload_data = json.loads(raw)
            except json.JSONDecodeError:
                payload_data = {"error": raw}
        message = payload_data.get("error") or payload_data.get("message") or f"HTTP {exc.code}"
        raise BotApiError(str(message), status=exc.code, payload=payload_data) from exc
    except URLError as exc:
        raise BotApiError(f"Bot API unavailable: {exc.reason}") from exc

def get_bot_user_summary(telegram_id: int | str, force: bool = False) -> dict | None:
    safe_id = normalize_telegram_id(telegram_id)
    if not safe_id:
        return None
    cache_entry = USER_SUMMARY_CACHE.get(safe_id)
    now_ts = time.time()
    if not force and cache_entry and now_ts - cache_entry.get("ts", 0) < 15:
        return cache_entry.get("data")
    payload = bot_api_request("GET", f"/users/by-telegram/{safe_id}/summary")
    USER_SUMMARY_CACHE[safe_id] = {"ts": now_ts, "data": payload}
    return payload

def register_bot_user(telegram_id: int | str, name: str, phone: str) -> dict:
    safe_id = normalize_telegram_id(telegram_id)
    payload = bot_api_request(
        "POST",
        "/users/register",
        payload={
            "telegramId": safe_id,
            "name": (name or "").strip(),
            "phone": (phone or "").strip(),
        },
    )
    if safe_id:
        USER_SUMMARY_CACHE[safe_id] = {"ts": time.time(), "data": payload}
    return payload

def update_bot_user_name(telegram_id: int | str, name: str) -> dict:
    safe_id = normalize_telegram_id(telegram_id)
    payload = bot_api_request(
        "POST",
        f"/users/by-telegram/{safe_id}/name",
        payload={"name": (name or "").strip()},
    )
    if safe_id:
        USER_SUMMARY_CACHE[safe_id] = {"ts": time.time(), "data": payload}
    return payload

def update_bot_user_phone(telegram_id: int | str, phone: str) -> dict:
    safe_id = normalize_telegram_id(telegram_id)
    payload = bot_api_request(
        "POST",
        f"/users/by-telegram/{safe_id}/phone",
        payload={"phone": (phone or "").strip()},
    )
    if safe_id:
        USER_SUMMARY_CACHE[safe_id] = {"ts": time.time(), "data": payload}
    return payload

def begin_bot_site_login(code: str, telegram_id: int | str, display_name: str = "") -> dict:
    return bot_api_request(
        "POST",
        "/telegram-auth/begin",
        payload={
            "code": str(code or "").strip(),
            "telegramId": normalize_telegram_id(telegram_id),
            "displayName": str(display_name or "").strip(),
        },
    )

def complete_bot_site_login_phone(request_id: str, telegram_id: int | str, phone: str) -> dict:
    return bot_api_request(
        "POST",
        "/telegram-auth/phone",
        payload={
            "requestId": str(request_id or "").strip(),
            "telegramId": normalize_telegram_id(telegram_id),
            "phone": str(phone or "").strip(),
        },
    )

def get_bot_barber_by_telegram(telegram_id: int | str) -> dict | None:
    safe_id = normalize_telegram_id(telegram_id)
    if not safe_id:
        return None
    payload = bot_api_request("GET", f"/barbers/by-telegram/{safe_id}")
    barber = payload.get("barber")
    return barber if isinstance(barber, dict) else None

def list_bot_appointments(telegram_id: int | str, *, mode: str = "client", active_only: bool = True) -> list[dict]:
    safe_id = normalize_telegram_id(telegram_id)
    if not safe_id:
        return []
    payload = bot_api_request(
        "GET",
        "/appointments",
        query={
            "telegramId": safe_id,
            "mode": mode,
            "activeOnly": "1" if active_only else "0",
        },
    )
    appointments = payload.get("appointments") or []
    return appointments if isinstance(appointments, list) else []

def get_bot_appointment(appointment_id: str) -> dict | None:
    safe_id = str(appointment_id or "").strip()
    if not safe_id:
        return None
    payload = bot_api_request("GET", f"/appointments/{safe_id}")
    appointment = payload.get("appointment")
    return appointment if isinstance(appointment, dict) else None

def create_bot_appointment(payload: dict) -> dict:
    return bot_api_request("POST", "/appointments", payload=payload)

def cancel_bot_appointment(appointment_id: str) -> dict:
    safe_id = str(appointment_id or "").strip()
    if not safe_id:
        raise BotApiError("Appointment id is required.")
    return bot_api_request("POST", f"/appointments/{safe_id}/cancel")

def get_bot_available_dates(barber_name: str, duration_min: int) -> list[str]:
    safe_barber_name = str(barber_name or "").strip()
    safe_duration = max(int(duration_min or 0), 15)
    if not safe_barber_name:
        return []
    payload = bot_api_request(
        "GET",
        "/availability/dates",
        query={
            "barberName": safe_barber_name,
            "duration": str(safe_duration),
        },
    )
    dates = payload.get("dates") or []
    return dates if isinstance(dates, list) else []

def get_bot_available_times(barber_name: str, date_key: str, duration_min: int) -> list[dict]:
    safe_barber_name = str(barber_name or "").strip()
    safe_date_key = str(date_key or "").strip()
    safe_duration = max(int(duration_min or 0), 15)
    if not safe_barber_name or not safe_date_key:
        return []
    payload = bot_api_request(
        "GET",
        "/availability/times",
        query={
            "barberName": safe_barber_name,
            "date": safe_date_key,
            "duration": str(safe_duration),
        },
    )
    times = payload.get("times") or []
    return times if isinstance(times, list) else []

def get_service_price_for_barber(service: dict, barber: dict | None) -> float:
    prices = service.get("prices") or {}
    if not isinstance(prices, dict):
        return 0
    barber_info = barber or {}
    for key in (
        barber_info.get("id"),
        barber_info.get("name"),
        barber_info.get("nickname"),
    ):
        if key in prices and prices.get(key) not in (None, 0):
            try:
                return float(prices.get(key) or 0)
            except (TypeError, ValueError):
                return 0
    return 0

def parse_site_login_code(raw_value: str | None) -> str:
    code = (raw_value or "").strip()
    if not code:
        return ""
    if code.startswith("site_login_"):
        code = code.split("_", 2)[-1].strip()
    return code

def format_rating_stars(value) -> str:
    if value is None:
        return ""
    try:
        rating = float(str(value).replace(",", "."))
    except (ValueError, TypeError):
        return ""
    rating = int(round(max(0.0, min(5.0, rating))))
    stars = "★" * rating
    return stars or ""

def parse_chat_id(raw_value) -> int | None:
    if raw_value is None:
        return None
    text = str(raw_value).strip()
    if not text or text.startswith("@"):
        return None
    if text.startswith("+"):
        text = text[1:]
    if text.lstrip("-").isdigit():
        try:
            return int(text)
        except ValueError:
            return None
    return None

def get_barber_by_telegram_id(telegram_id: int | str) -> dict | None:
    identifier = str(telegram_id or "").strip()
    if not identifier:
        return None
    try:
        barber = get_bot_barber_by_telegram(identifier)
        if barber:
            return barber
    except BotApiError as exc:
        logger.warning("Barber lookup API error: %s", exc)
    for barber in load_barbers(include_inactive=True):
        if str(barber.get("telegramId") or "").strip() == identifier:
            return barber
    return None

def get_barber_chat_id_by_name(barber_name: str) -> int | None:
    if not barber_name:
        return None
    for barber in load_barbers(include_inactive=True):
        if str(barber.get("name") or "").strip() == str(barber_name).strip():
            return parse_chat_id(barber.get("telegramId"))
    return None

def parse_appointment_start(
    date_str: str | None, time_str: str | None
) -> datetime.datetime | None:
    """Возвращает datetime начала записи из значений БД."""
    if not date_str or not time_str:
        return None
    start_part = time_str.split("-", 1)[0].strip()
    if not start_part:
        return None
    try:
        candidate = datetime.datetime.fromisoformat(f"{date_str}T{start_part}")
    except ValueError:
        try:
            candidate = datetime.datetime.strptime(
                f"{date_str} {start_part}", "%Y-%m-%d %H:%M"
            )
        except ValueError:
            return None
    if candidate.tzinfo is None:
        return candidate.replace(tzinfo=ZONE) if ZONE else candidate
    return candidate.astimezone(ZONE) if ZONE else candidate

async def safe_upsert_menu(
    ctx, chat_id, msg_id, photo_bytes: bytes, caption: str, reply_markup
):
    """Safely updates the bot message or sends a new one if editing fails."""
    target = (chat_id, msg_id)
    try:
        media = InputMediaPhoto(
            io.BytesIO(photo_bytes), caption=caption, parse_mode="HTML"
        )
        await ctx.bot.edit_message_media(
            chat_id=chat_id, message_id=msg_id, media=media, reply_markup=reply_markup
        )
    except BadRequest as e:
        if "message to edit not found" in str(e) or "Message is not modified" in str(e):
            try:
                await ctx.bot.delete_message(chat_id, msg_id)
            except Exception:
                pass
            msg = await ctx.bot.send_photo(
                chat_id,
                photo_bytes,
                caption=caption,
                parse_mode="HTML",
                reply_markup=reply_markup,
            )
            target = (chat_id, msg.message_id)
        else:
            logger.error(f"Failed to update menu: {e}")
    ctx.user_data["bot_msg"] = target
    return target


# ---------- Вспомогательные функции ----------

def is_barber(user_id: int) -> bool:
    """Проверяет, является ли пользователь барбером."""
    return get_barber_by_telegram_id(user_id) is not None

def count_active_appts(user_id: str) -> int:
    try:
        summary = get_bot_user_summary(user_id)
        if summary is not None:
            return int(summary.get("activeAppointments") or 0)
    except BotApiError as exc:
        logger.warning("Active appointments API error: %s", exc)
    return 0

def get_last_haircut_date(user_id: str) -> str | None:
    try:
        summary = get_bot_user_summary(user_id)
        if summary is not None:
            return summary.get("lastHaircutDate") or None
    except BotApiError as exc:
        logger.warning("Last haircut API error: %s", exc)
    return None

def count_no_shows(user_id: str) -> int:
    try:
        summary = get_bot_user_summary(user_id)
        if summary is not None:
            return int(summary.get("noShows") or 0)
    except BotApiError as exc:
        logger.warning("No-shows API error: %s", exc)
    return 0

def main_menu_kb(user_id: int):
    """Генерирует клавиатуру главного меню в зависимости от состояния пользователя."""
    book_button = InlineKeyboardButton("✂️ Записаться", callback_data="menu_book")
    limit = get_booking_limit()
    if not is_barber(user_id) and count_active_appts(str(user_id)) >= limit:
        book_button = InlineKeyboardButton(
            "✂️ Лимит записей", callback_data="book_unavailable"
        )
    return InlineKeyboardMarkup(
        [
            [
                book_button,
                InlineKeyboardButton("📅 Мои записи", callback_data="menu_show"),
            ],
            [
                InlineKeyboardButton("👤 Профиль", callback_data="menu_profile"),
                InlineKeyboardButton("ℹ️ О нас", callback_data="menu_about"),
            ],
        ]
    )

async def book_unavailable_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Сообщает пользователю, почему запись недоступна."""
    query = update.callback_query
    limit = get_booking_limit()
    await query.answer(
        f"❌ У вас уже есть {limit} активных записей. Отмените одну, чтобы записаться снова.",
        show_alert=True,
    )
    return MENU

def contact_kb():
    return ReplyKeyboardMarkup(
        [[KeyboardButton("📲 Поделиться контактом", request_contact=True)]],
        resize_keyboard=True,
        one_time_keyboard=True,
    )

def clear_site_auth_state(ctx: ContextTypes.DEFAULT_TYPE) -> None:
    ctx.user_data.pop("site_auth", None)

async def begin_site_login_flow(
    update: Update,
    ctx: ContextTypes.DEFAULT_TYPE,
    code_raw: str | None,
):
    code = parse_site_login_code(code_raw)
    if not SITE_LOGIN_CODE_PATTERN.match(code):
        await update.message.reply_text(
            "Неверный код. Запросите вход на сайте и отправьте /site_login <код>."
        )
        return MENU
    user_id = update.effective_user.id
    try:
        telegram_display_name = (
            (update.effective_user.full_name if update.effective_user else "")
            or (update.effective_user.first_name if update.effective_user else "")
            or ""
        )
        response = begin_bot_site_login(code, user_id, telegram_display_name)
        status = str(response.get("status") or "").strip()
        flow = str(response.get("flow") or TELEGRAM_AUTH_FLOW_LOGIN).strip() or TELEGRAM_AUTH_FLOW_LOGIN
        request_id = str(response.get("requestId") or "").strip()
        if status == "completed_profile_link":
            clear_site_auth_state(ctx)
            await update.message.reply_text(
                "Привязка Telegram подтверждена. Возвращайтесь на сайт."
            )
            return MENU
        if status == "completed_login":
            clear_site_auth_state(ctx)
            await update.message.reply_text(
                "Авторизация подтверждена. Возвращайтесь на сайт."
            )
            return MENU
        if status == "need_contact" and request_id:
            ctx.user_data["site_auth"] = {
                "request_id": request_id,
                "code": code,
                "flow": flow,
            }
            await update.message.reply_text(
                "Поделитесь контактом через кнопку ниже для подтверждения номера.",
                reply_markup=contact_kb(),
            )
            return SITE_AUTH_PHONE
        logger.warning("Unexpected bot site login response: %s", response)
    except BotApiError as exc:
        handled_codes = {
            "INVALID_CODE": "Неверный код. Запросите вход на сайте и отправьте /site_login <код>.",
            "REQUEST_NOT_FOUND": "Код не найден или уже использован. Запросите новый код на сайте.",
            "REQUEST_NOT_ACTIVE": "Этот код уже завершён. Запросите новый код на сайте.",
            "REQUEST_EXPIRED": "Код истек. Нажмите Telegram-вход на сайте ещё раз.",
            "TELEGRAM_MISMATCH": "Этот код уже привязан к другому Telegram аккаунту.",
            "REQUEST_CORRUPT": "Запрос привязки поврежден. Начните привязку снова на сайте.",
            "TELEGRAM_ALREADY_LINKED": "Этот Telegram уже привязан к другому аккаунту.",
        }
        message = handled_codes.get(exc.code)
        if message:
            clear_site_auth_state(ctx)
            await update.message.reply_text(message)
            return MENU
        logger.warning("Site login API error: %s", exc)
        clear_site_auth_state(ctx)
        await update.message.reply_text("Сервис временно недоступен. Попробуйте позже.")
        return MENU

async def site_login_cmd(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    code = parse_site_login_code(ctx.args[0] if ctx.args else "")
    return await begin_site_login_flow(update, ctx, code)

async def site_auth_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    auth_state = ctx.user_data.get("site_auth") or {}
    request_id = str(auth_state.get("request_id") or "").strip()
    flow = str(auth_state.get("flow") or TELEGRAM_AUTH_FLOW_LOGIN).strip() or TELEGRAM_AUTH_FLOW_LOGIN
    if not request_id:
        clear_site_auth_state(ctx)
        await update.message.reply_text("Сессия входа не найдена. Запросите код на сайте.")
        return MENU
    if flow != TELEGRAM_AUTH_FLOW_LOGIN:
        clear_site_auth_state(ctx)
        await update.message.reply_text(
            "Этот код не требует отправки контакта. Вернитесь на сайт."
        )
        return MENU
    if not update.message.contact:
        await update.message.reply_text('Используйте кнопку "Поделиться контактом".')
        return SITE_AUTH_PHONE
    contact = update.message.contact
    contact_user_id = contact.user_id
    if contact_user_id is not None and str(contact_user_id) != str(update.effective_user.id):
        await update.message.reply_text("Нужно отправить контакт текущего Telegram аккаунта.")
        return SITE_AUTH_PHONE
    raw_phone = contact.phone_number
    safe_phone = normalize_phone(raw_phone)
    if not PHONE_PATTERN.match(safe_phone):
        await update.message.reply_text("Неверный номер. Пример: +79991234567.")
        return SITE_AUTH_PHONE

    user_id = update.effective_user.id
    try:
        complete_bot_site_login_phone(request_id, user_id, safe_phone)
        clear_site_auth_state(ctx)
        await update.message.reply_text(
            "Контакт подтвержден. Вернитесь на сайт, чтобы завершить вход.",
            reply_markup=main_menu_kb(user_id),
        )
        return MENU
    except BotApiError as exc:
        handled_codes = {
            "REQUEST_NOT_FOUND": ("Сессия входа не найдена. Запросите новый код.", MENU),
            "REQUEST_FLOW_MISMATCH": ("Этот код не требует отправки контакта. Вернитесь на сайт.", MENU),
            "TELEGRAM_MISMATCH": ("Этот код уже использует другой Telegram аккаунт.", MENU),
            "REQUEST_NOT_ACTIVE": ("Код уже неактивен. Запросите новый на сайте.", MENU),
            "REQUEST_EXPIRED": ("Код истек. Запросите новый в форме входа.", MENU),
            "INVALID_PHONE": ("Неверный номер. Пример: +79991234567.", SITE_AUTH_PHONE),
        }
        handled = handled_codes.get(exc.code)
        if handled:
            if handled[1] == MENU:
                clear_site_auth_state(ctx)
            await update.message.reply_text(handled[0])
            return handled[1]
        logger.warning("Site auth phone API error: %s", exc)
        await update.message.reply_text("Сервис временно недоступен. Попробуйте позже.")
        return SITE_AUTH_PHONE

# ---------- Обработчики ----------

async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Приветствие и точка входа /start."""
    deep_link_code = parse_site_login_code(ctx.args[0] if ctx.args else "")
    if deep_link_code:
        return await begin_site_login_flow(update, ctx, deep_link_code)
    user_id = update.effective_user.id
    registered = False
    settings = load_bot_settings()
    description = settings.get("botDescription") or "Добро пожаловать в BrotherShop!"
    try:
        summary = get_bot_user_summary(user_id)
        registered = bool(summary and summary.get("user"))
    except BotApiError as exc:
        logger.exception("User summary API error in start: %s", exc)
        await update.message.reply_text("Сервис временно недоступен. Попробуйте позже.")
        return MENU
    caption = (
        description if registered else f"{description}\n\nСначала отправьте свои Фамилию и Имя."
    )
    msg = await update.message.reply_photo(
        IMAGE_BYTES,
        caption=caption,
        parse_mode="HTML",
        reply_markup=main_menu_kb(user_id) if registered else None,
    )
    ctx.user_data["bot_msg"] = (update.effective_chat.id, msg.message_id)
    await update.message.delete()
    return MENU if registered else REG_NAME

async def reg_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    name = update.message.text.strip()
    if len(name.split()) < 2:
        await update.message.reply_text("Пожалуйста, введите имя и фамилию.")
        return REG_NAME
    ctx.user_data["name"] = name
    chat_id, msg_id = ctx.user_data["bot_msg"]
    await safe_upsert_menu(
        ctx, chat_id, msg_id, IMAGE_BYTES, "<b>2️⃣ Укажите ваш номер телефона:</b>", None
    )
    await update.message.delete()
    sent = await ctx.bot.send_message(
        chat_id,
        "Нажмите на кнопку ниже или введите номер вручную:",
        reply_markup=contact_kb(),
    )
    ctx.user_data["last_prompt"] = sent.message_id
    return REG_PHONE

async def reg_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Сохраняет телефон и завершает регистрацию пользователя."""
    phone = (
        update.message.contact.phone_number
        if update.message.contact
        else update.message.text.strip()
    )
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("Неверный формат, например +71234567890.")
        return REG_PHONE
    user_id = update.effective_user.id
    name = ctx.user_data.get("name")
    normalized_phone = normalize_phone(phone)
    try:
        register_bot_user(user_id, name or "", phone)
    except BotApiError as exc:
        logger.exception("User register API error in reg_phone: %s", exc)
        await update.message.reply_text("Не удалось сохранить контакт. Попробуйте позже.")
        return REG_PHONE
    chat_id, msg_id = ctx.user_data["bot_msg"]
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        IMAGE_BYTES,
        "🎉 Контакт сохранён!\n\nВыберите действие:",
        main_menu_kb(user_id),
    )
    await update.message.delete()
    if "last_prompt" in ctx.user_data:
        try:
            await ctx.bot.delete_message(chat_id, ctx.user_data.get("last_prompt"))
        except BadRequest:
            pass
    return MENU

async def show_profile(
    ctx: ContextTypes.DEFAULT_TYPE, chat_id: int, msg_id: int, user_id: int
):
    summary = None
    user_data = None
    try:
        summary = get_bot_user_summary(user_id, force=True)
        user_data = (summary or {}).get("user")
    except BotApiError as exc:
        logger.exception("User summary API error in show_profile: %s", exc)
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "Сервис временно недоступен. Попробуйте позже.",
            main_menu_kb(user_id),
        )
        return
    if not user_data:
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "❌ Не удалось найти ваш профиль. Попробуйте /start.",
            main_menu_kb(user_id),
        )
        return
    last = (
        ((summary or {}).get("lastHaircutDate") if summary else None)
        or "—"
    )
    active = (
        int((summary or {}).get("activeAppointments") or 0)
        if summary
        else 0
    )
    warns = (
        int((summary or {}).get("noShows") or 0)
        if summary
        else 0
    )
    text = (
        f"<b>👤 Профиль</b>\n\n"
        f"<b>Имя:</b> {user_data.get('Name','—')}\n"
        f"<b>Телефон:</b> {user_data.get('Phone','—')}\n\n"
        f"<b>Последняя стрижка:</b> {last}\n"
        f"<b>Активных записей:</b> {active}\n"
        f"<b>Предупреждения:</b> {warns}\n\n"
        f"<i>❗ 3 предупреждения — блокировка записи.</i>"
    )
    kb = InlineKeyboardMarkup(
        [
            [
                InlineKeyboardButton(
                    "✏️ Сменить имя", callback_data="profile_change_name"
                ),
                InlineKeyboardButton("✏️ Сменить номер", callback_data="profile_change"),
            ],
            [InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")],
        ]
    )
    await safe_upsert_menu(
        ctx, chat_id, msg_id, photo_bytes=IMAGE_BYTES, caption=text, reply_markup=kb
    )

async def menu_book_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает нажатие кнопки 'Записаться'."""
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    msg_id = query.message.message_id
    user_id = query.from_user.id
    user_id_str = str(user_id)
    user_is_barber = is_barber(user_id)
    limit = get_booking_limit()
    blocked_users = load_blocked_user_ids()
    user_record_id = get_user_record_id_by_telegram(user_id)
    if (user_record_id and user_record_id in blocked_users) or user_id_str in blocked_users:
        await query.answer(
            "❌ Запись заблокирована. Обратитесь в салон.", show_alert=True
        )
        return MENU
    if not user_is_barber:
        no_shows = count_no_shows(user_id_str)
        if no_shows >= 3:
            await query.answer(
                f"❌ Запись заблокирована. У вас {no_shows} предупреждения за неявку.",
                show_alert=True,
            )
            return MENU
        if count_active_appts(user_id_str) >= limit:
            await query.answer(
                f"❌ У вас уже есть {limit} активные записи. Отмените одну, чтобы записаться снова.",
                show_alert=True,
            )
            return MENU
    active_barbers = [b for b in load_barbers() if b.get("isActive", True)]
    if not active_barbers:
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "❗ Нет активных барберов. Добавьте барберов в панели.",
            main_menu_kb(user_id),
        )
        return MENU
    ctx.user_data["barbers_lookup"] = {
        barber["id"]: barber for barber in load_barbers(include_inactive=True)
    }
    kb = [
        [
            InlineKeyboardButton(
                f"{barber['name']} {format_rating_stars(barber.get('rating'))}".strip(),
                callback_data=f"book_barber|{barber['id']}",
            )
        ]
        for barber in active_barbers
    ]
    kb.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        photo_bytes=get_menu_photo_bytes(),
        caption="<b>1-й шаг: выберите барбера:</b>",
        reply_markup=InlineKeyboardMarkup(kb),
    )
    return BOOK_BARBER

async def menu_profile_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает нажатие кнопки 'Профиль'."""
    query = update.callback_query
    await query.answer()
    await show_profile(
        ctx, query.message.chat_id, query.message.message_id, query.from_user.id
    )
    return MENU

async def menu_about_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Показывает раздел "О нас" на основе данных с сайта."""
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    msg_id = query.message.message_id
    settings = load_bot_settings()
    about_text = (
        settings.get("aboutText")
        or "Информацию о салоне можно изменить через панель CRM."
    )
    about_img_path = BASE_DIR / "Image" / "about.jpg"
    try:
        about_bytes = about_img_path.read_bytes()
    except Exception:
        about_bytes = IMAGE_BYTES
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        photo_bytes=about_bytes,
        caption=about_text,
        reply_markup=main_menu_kb(query.from_user.id),
    )
    return MENU

async def menu_main_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Возвращает пользователя в главное меню."""
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    msg_id = query.message.message_id
    description = load_bot_settings().get("botDescription") or "Главное меню"
    caption = f"<b>{description}</b>\n\nВыберите нужный раздел:"
    await safe_upsert_menu(
        ctx, chat_id, msg_id, IMAGE_BYTES, caption, main_menu_kb(query.from_user.id)
    )
    return MENU

async def show_records(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Отображает записи для клиента или для барбера."""
    query = update.callback_query
    await query.answer()
    user_id = query.from_user.id
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    barber_record = get_barber_by_telegram_id(user_id)
    try:
        recs = list_bot_appointments(
            user_id,
            mode="barber" if barber_record else "client",
            active_only=True,
        )
    except BotApiError as exc:
        logger.warning("Appointments API error in show_records: %s", exc)
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "Сервис записей временно недоступен. Попробуйте позже.",
            main_menu_kb(user_id),
        )
        return MENU
    if not recs:
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "У вас нет предстоящих записей." if barber_record else "У вас нет активных записей.",
            main_menu_kb(user_id),
        )
        return MENU
    text = (
        f"<b>Записи для барбера {barber_record.get('name')}:</b>\n"
        if barber_record
        else "<b>Ваши активные записи:</b>\n"
    )
    kb = []
    for i, rec in enumerate(recs, 1):
        if barber_record:
            text += (
                f"\n{i}. <b>{rec['Date']} {rec['Time']}</b>\n"
                f"   Клиент: {rec.get('CustomerName', 'не указан')}\n"
                f"   Телефон: {rec.get('Phone', 'не указан')}\n"
                f"   Услуги: {rec.get('Services', 'не указаны')}\n"
            )
        else:
            text += (
                f"\n{i}. {rec['Date']} {rec['Time']} к <b>{rec['Barber']}</b>\n"
                f"   Услуги: {rec.get('Services', 'не указаны')}"
            )
        kb.append(
            [
                InlineKeyboardButton(
                    f"❌ Отменить запись №{i}",
                    callback_data=f"cancel|{rec['id']}",
                )
            ]
        )
    kb.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
    await safe_upsert_menu(
        ctx, chat_id, msg_id, IMAGE_BYTES, text, InlineKeyboardMarkup(kb)
    )
    return SHOW_RECORDS

async def cancel_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    rec_id = query.data.split("|", 1)[1]
    try:
        rec = get_bot_appointment(rec_id)
    except BotApiError as exc:
        logger.warning("Appointment read API error in cancel_cb: %s", exc)
        await safe_upsert_menu(
            ctx,
            query.message.chat_id,
            query.message.message_id,
            IMAGE_BYTES,
            "Сервис записей временно недоступен. Попробуйте позже.",
            main_menu_kb(query.from_user.id),
        )
        return MENU
    if not rec:
        await query.answer("Запись не найдена.", show_alert=True)
        return SHOW_RECORDS
    appt_start = parse_appointment_start(rec["Date"], rec["Time"])
    if appt_start:
        now = datetime.datetime.now(tz=ZONE)
        if appt_start - now < datetime.timedelta(hours=2):
            warning_text = (
                "Запись нельзя отменить менее чем за 2 часа до времени приема."
            )
            await query.answer(warning_text, show_alert=True)
            await safe_upsert_menu(
                ctx,
                query.message.chat_id,
                query.message.message_id,
                IMAGE_BYTES,
                warning_text,
                main_menu_kb(query.from_user.id),
            )
            return MENU
    caption = f"Отменить запись у <b>{rec['Barber']}</b>\n{rec['Date']} {rec['Time']}?"
    kb = InlineKeyboardMarkup(
        [
            [
                InlineKeyboardButton(
                    "✅ Да, отменить", callback_data=f"cancel_confirm|{rec_id}|yes"
                )
            ],
            [InlineKeyboardButton("⬅️ Назад", callback_data="menu_show")],
        ]
    )
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return CANCEL_CONFIRM

async def cancel_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, rec_id, choice = query.data.split("|")
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    if choice == "yes":
        try:
            cancel_bot_appointment(rec_id)
        except BotApiError as exc:
            if exc.code == "TOO_LATE_TO_CANCEL":
                deny_text = "Запись нельзя отменить менее чем за 2 часа до времени приема."
                await query.answer(deny_text, show_alert=True)
                await safe_upsert_menu(
                    ctx,
                    chat_id,
                    msg_id,
                    IMAGE_BYTES,
                    deny_text,
                    main_menu_kb(query.from_user.id),
                )
                return MENU
            if exc.status == 404:
                res_text = "Запись не найдена."
                await safe_upsert_menu(
                    ctx, chat_id, msg_id, IMAGE_BYTES, res_text, main_menu_kb(query.from_user.id)
                )
                return MENU
            logger.warning("Appointment cancel API error in cancel_confirm_cb: %s", exc)
            res_text = "Сервис записей временно недоступен. Попробуйте позже."
            await safe_upsert_menu(
                ctx, chat_id, msg_id, IMAGE_BYTES, res_text, main_menu_kb(query.from_user.id)
            )
            return MENU
        res_text = "Готово: запись отменена."
    else:
        res_text = "Отмена отменена."
    await safe_upsert_menu(
        ctx, chat_id, msg_id, IMAGE_BYTES, res_text, main_menu_kb(query.from_user.id)
    )
    return MENU

async def profile_change_name_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id, msg_id = ctx.user_data.get(
        "bot_msg", (query.message.chat_id, query.message.message_id)
    )
    ctx.user_data["bot_msg"] = (chat_id, msg_id)
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        photo_bytes=IMAGE_BYTES,
        caption=(
            "<b>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0424\u0418\u041e:</b>\n\n"
            "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u043e\u0434\u043d\u0438\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u043c.\n"
            "\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u0430\u043b\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c."
        ),
        reply_markup=InlineKeyboardMarkup(
            [[InlineKeyboardButton("\u274c \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c", callback_data="cancel_change_name")]]
        ),
    )
    return CHANGE_NAME

async def change_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    new_name = update.message.text.strip()
    if len(new_name.split()) < 2:
        await update.message.reply_text("Введите полное ФО (имя и фамилия).")
        return CHANGE_NAME
    try:
        update_bot_user_name(update.effective_user.id, new_name)
    except BotApiError as exc:
        logger.exception("User name API error in change_name: %s", exc)
        await update.message.reply_text("Не удалось обновить имя. Попробуйте позже.")
        return CHANGE_NAME
    chat_id, msg_id = ctx.user_data["bot_msg"]
    await update.message.delete()
    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU

async def cancel_change_name_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Отменяет смену имени и возвращает профиль."""
    query = update.callback_query
    await query.answer("Изменение имени отменено.")
    fallback_target = (query.message.chat_id, query.message.message_id)
    chat_id, msg_id = ctx.user_data.get("bot_msg", fallback_target)
    await show_profile(ctx, chat_id, msg_id, query.from_user.id)
    return MENU

async def profile_change_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    ctx.user_data["bot_msg"] = (chat_id, msg_id)
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        IMAGE_BYTES,
        (
            "<b>Сменить номер</b>\nПоделитесь контактом или введите вручную.\n"
            "Если передумали, нажмите кнопку Отменить."
        ),
        InlineKeyboardMarkup(
            [[InlineKeyboardButton("❌ Отменить", callback_data="cancel_change_phone")]]
        ),
    )
    sent = await ctx.bot.send_message(
        chat_id, "Введите новый номер:", reply_markup=contact_kb()
    )
    ctx.user_data["last_prompt"] = sent.message_id
    return CHANGE_PHONE

async def change_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    phone = (
        update.message.contact.phone_number
        if update.message.contact
        else update.message.text.strip()
    )
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("Неверный формат, например +71234567890.")
        return CHANGE_PHONE
    try:
        update_bot_user_phone(update.effective_user.id, phone)
    except BotApiError as exc:
        logger.exception("User phone API error in change_phone: %s", exc)
        await update.message.reply_text("Не удалось обновить номер. Попробуйте позже.")
        return CHANGE_PHONE
    chat_id = update.effective_chat.id
    await update.message.delete()
    if "last_prompt" in ctx.user_data:
        await ctx.bot.delete_message(chat_id, ctx.user_data.get("last_prompt"))
    chat_id, msg_id = ctx.user_data["bot_msg"]
    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU

async def cancel_change_phone_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Отменяет смену номера телефона."""
    query = update.callback_query
    await query.answer("Изменение номера отменено.")
    chat_id = query.message.chat_id
    prompt_id = ctx.user_data.pop("last_prompt", None)
    if prompt_id:
        try:
            await ctx.bot.delete_message(chat_id, prompt_id)
        except BadRequest:
            pass
    fallback_target = (chat_id, query.message.message_id)
    target_chat, target_msg = ctx.user_data.get("bot_msg", fallback_target)
    await show_profile(ctx, target_chat, target_msg, query.from_user.id)
    return MENU

def build_services_view(ctx) -> tuple[str, InlineKeyboardMarkup]:
    """Формирует текст и клавиатуру выбора услуг для выбранного барбера."""
    services, services_version = load_services()
    ctx.user_data["all_services"] = services
    ctx.user_data["services_version"] = services_version
    barber = ctx.user_data.get("barber") or {}
    barber_name = barber.get("name")
    selected = ctx.user_data.setdefault("selected_services", set())
    if selected:
        valid_names = {svc["name"] for svc in services}
        selected.intersection_update(valid_names)
    buttons: list[list[InlineKeyboardButton]] = []
    total_min = 0
    for svc in services:
        price = get_service_price_for_barber(svc, barber)
        if price in (None, 0):
            continue
        name = svc["name"]
        duration = svc.get("duration", 0)
        mark = "✅" if name in selected else "◻️"
        if name in selected:
            total_min += duration
        buttons.append(
            [
                InlineKeyboardButton(
                    f"{mark} {name} ({duration} мин) — {price}₽",
                    callback_data=f"svc_toggle|{name}",
                )
            ]
        )
    buttons.append(
        [
            InlineKeyboardButton("⬅ Назад", callback_data="book_back_barber"),
            InlineKeyboardButton("✅ Готово", callback_data="svc_done"),
        ]
    )
    buttons.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
    caption = "<b>2-й шаг: выберите услуги:</b>"
    if not services:
        caption += "\n\n❗ Для выбранного барбера нет услуг."
    elif total_min:
        caption += f"\n\nДлительность: <b>{total_min} мин</b>"
    else:
        caption += "\n\nВыберите минимум одну услугу."
    return caption, InlineKeyboardMarkup(buttons)

async def book_barber_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    _, barber_token = query.data.split("|", 1)
    barbers_lookup = ctx.user_data.get("barbers_lookup")
    if not barbers_lookup:
        barbers_lookup = {
            barber["id"]: barber for barber in load_barbers(include_inactive=True)
        }
        ctx.user_data["barbers_lookup"] = barbers_lookup
    selected = barbers_lookup.get(barber_token)
    if not selected:
        # fallback по имени (на случай старых callback_data)
        for barber in barbers_lookup.values():
            if barber.get("name") == barber_token:
                selected = barber
                break
    if not selected:
        await query.answer("Барбер не найден. Обновите панель.", show_alert=True)
        return MENU
    ctx.user_data.pop("barber", None)
    services, services_version = load_services(force=True)
    ctx.user_data["all_services"] = services
    ctx.user_data["services_version"] = services_version
    ctx.user_data["selected_services"] = set()
    ctx.user_data.pop("services_list", None)
    ctx.user_data.pop("total_duration", None)
    ctx.user_data.pop("date", None)
    ctx.user_data.pop("time_range", None)
    available_services = [
        svc for svc in services if get_service_price_for_barber(svc, selected) > 0
    ]
    if not available_services:
        chat_id, msg_id = ctx.user_data.get(
            "bot_msg", (query.message.chat_id, query.message.message_id)
        )
        ctx.user_data["bot_msg"] = (chat_id, msg_id)
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            photo_bytes=IMAGE_BYTES,
            caption=f"❗ У барбера {selected['name']} пока нет доступных услуг.",
            reply_markup=main_menu_kb(query.from_user.id),
        )
        await query.answer()
        return MENU
    durations = [
        int(svc.get("duration") or 0)
        for svc in available_services
        if int(svc.get("duration") or 0) > 0
    ]
    min_duration = min(durations, default=0) or 30
    try:
        if not get_bot_available_dates(selected["name"], min_duration):
            await query.answer(
                f"⚠️ У барбера {selected['name']} нет свободных слотов в ближайшие дни.",
                show_alert=True,
            )
            return BOOK_BARBER
    except BotApiError as exc:
        logger.exception("Availability API error in book_barber_cb: %s", exc)
        await query.answer("Не удалось проверить доступность. Попробуйте позже.", show_alert=True)
        return BOOK_BARBER
    ctx.user_data["barber"] = selected
    caption, markup = build_services_view(ctx)
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    img_bytes = get_barber_photo_bytes(selected)
    await query.answer()
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        photo_bytes=img_bytes,
        caption=caption,
        reply_markup=markup,
    )
    return SELECT_SERVICES

async def svc_toggle_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, svc_name = query.data.split("|", 1)
    selected = ctx.user_data.setdefault("selected_services", set())
    if svc_name in selected:
        selected.remove(svc_name)
    else:
        selected.add(svc_name)
    caption, markup = build_services_view(ctx)
    await query.edit_message_caption(caption, reply_markup=markup, parse_mode="HTML")
    return SELECT_SERVICES

async def book_back_barber_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    for key in (
        "barber",
        "all_services",
        "selected_services",
        "services_version",
        "services_list",
        "total_duration",
        "date",
        "time_range",
    ):
        ctx.user_data.pop(key, None)
    return await menu_book_cb(update, ctx)

async def book_back_services_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    ctx.user_data.pop("services_list", None)
    ctx.user_data.pop("total_duration", None)
    ctx.user_data.pop("date", None)
    ctx.user_data.pop("time_range", None)
    caption, markup = build_services_view(ctx)
    await query.edit_message_caption(caption, reply_markup=markup, parse_mode="HTML")
    return SELECT_SERVICES

async def show_available_dates(query, ctx) -> int:
    total_min = ctx.user_data.get("total_duration")
    if not total_min:
        await query.answer("Сначала выберите услуги.", show_alert=True)
        return SELECT_SERVICES
    barber = ctx.user_data.get("barber")
    if not barber:
        await query.answer("Сначала выберите барбера.", show_alert=True)
        return MENU
    now = zoned_now()
    today = now.date()
    min_allowed = now + datetime.timedelta(hours=get_min_lead_hours())
    max_days = get_max_days_ahead()
    try:
        available_dates = get_bot_available_dates(barber["name"], total_min)
    except BotApiError as exc:
        logger.exception("Availability dates API error in show_available_dates: %s", exc)
        await query.answer("Не удалось загрузить доступные даты. Попробуйте позже.", show_alert=True)
        return SELECT_SERVICES
    if not available_dates:
        await query.answer()
        chat_id, msg_id = ctx.user_data.get(
            "bot_msg", (query.message.chat_id, query.message.message_id)
        )
        ctx.user_data["bot_msg"] = (chat_id, msg_id)
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            photo_bytes=IMAGE_BYTES,
            caption="❌ На ближайшие дни свободных слотов нет.",
            reply_markup=main_menu_kb(query.from_user.id),
        )
        return MENU
    rows: list[list[InlineKeyboardButton]] = []
    for i in range(0, len(available_dates), 4):
        chunk = available_dates[i : i + 4]
        rows.append(
            [
                InlineKeyboardButton(
                    f"{d[8:]}.{d[5:7]}", callback_data=f"book_date|{d}"
                )
                for d in chunk
            ]
        )
    rows.append([InlineKeyboardButton("⬅ Назад", callback_data="book_back_services")])
    rows.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
    caption = f"<b>3-й шаг: выберите дату:</b>\n\nДлительность: <b>{total_min} мин</b>"
    flash_notice = ctx.user_data.pop("flash_notice", None)
    if flash_notice:
        caption = f"<b>Внимание:</b> {flash_notice}\n\n{caption}"
    await query.answer()
    await ctx.bot.edit_message_caption(
        chat_id=query.message.chat_id,
        message_id=query.message.message_id,
        caption=caption,
        reply_markup=InlineKeyboardMarkup(rows),
        parse_mode="HTML",
    )
    return BOOK_DATE

async def show_available_times(query, ctx) -> int:
    total = ctx.user_data.get("total_duration")
    date = ctx.user_data.get("date")
    barber = ctx.user_data.get("barber")
    if not total or not date or not barber:
        await query.answer("Сначала выберите дату и услуги.", show_alert=True)
        return BOOK_DATE
    buttons: list[InlineKeyboardButton] = []
    try:
        time_slots = get_bot_available_times(barber["name"], date, total)
        for slot in time_slots:
            start_value = str(slot.get("start") or "").strip()
            if start_value:
                buttons.append(
                    InlineKeyboardButton(
                        start_value, callback_data=f"book_time|{start_value}"
                    )
                )
    except BotApiError as exc:
        logger.exception("Availability times API error in show_available_times: %s", exc)
        await query.answer("Не удалось загрузить доступное время. Попробуйте позже.", show_alert=True)
        return BOOK_DATE
    if not buttons:
        await query.answer("Нет свободных окон на выбранный день.", show_alert=True)
        return BOOK_DATE
    rows = [buttons[i : i + 4] for i in range(0, len(buttons), 4)]
    rows.append([InlineKeyboardButton("⬅ Назад", callback_data="book_back_dates")])
    rows.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
    caption = "<b>4-й шаг: выберите время:</b>"
    flash_notice = ctx.user_data.pop("flash_notice", None)
    if flash_notice:
        caption = f"<b>Внимание:</b> {flash_notice}\n\n{caption}"
    await query.answer()
    await query.edit_message_caption(
        caption,
        reply_markup=InlineKeyboardMarkup(rows),
        parse_mode="HTML",
    )
    return BOOK_TIME

async def svc_done_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    selected = ctx.user_data.get("selected_services")
    if not selected:
        await query.answer("Пожалуйста, выберите хотя бы одну услугу.", show_alert=True)
        return SELECT_SERVICES
    services = ctx.user_data["all_services"]
    ctx.user_data["services_list"] = list(selected)
    total_min = sum(svc["duration"] for svc in services if svc["name"] in selected)
    ctx.user_data["total_duration"] = total_min
    await query.answer()
    await ctx.bot.edit_message_caption(
        chat_id=chat_id,
        message_id=msg_id,
        caption="⏳ Подбираем свободные даты...",
        parse_mode="HTML",
    )
    return await show_available_dates(query, ctx)

async def book_date_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    _, date = query.data.split("|", 1)
    ctx.user_data["date"] = date
    ctx.user_data.pop("time_range", None)
    return await show_available_times(query, ctx)

async def book_back_dates_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    ctx.user_data.pop("time_range", None)
    return await show_available_dates(query, ctx)

async def book_time_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, start = query.data.split("|", 1)
    dt_start = datetime.datetime.fromisoformat(f"{ctx.user_data['date']}T{start}")
    total = ctx.user_data["total_duration"]
    dt_end = dt_start + datetime.timedelta(minutes=total)
    ctx.user_data["time_range"] = f"{start} - {dt_end.time().strftime('%H:%M')}"
    barber_info = ctx.user_data.get("barber") or {}
    barber_name = barber_info.get("name", ctx.user_data.get("barber"))
    svc_text = "\n".join(f"- {s}" for s in ctx.user_data["services_list"])
    caption = (
        f"<b>5-й шаг: Подтвердите запись:</b>\n\n"
        f"<b>Барбер:</b> {barber_name}\n"
        f"<b>Услуги:</b>\n{svc_text}\n"
        f"<b>Дата:</b> {ctx.user_data['date']}\n"
        f"<b>Время:</b> {ctx.user_data['time_range']}"
    )
    kb = InlineKeyboardMarkup(
        [
            [InlineKeyboardButton("⬅ Назад", callback_data="book_back_time")],
            [InlineKeyboardButton("✅ Подтвердить", callback_data="book_confirm|yes")],
            [InlineKeyboardButton("❌ Отменить", callback_data="book_confirm|no")],
        ]
    )
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return BOOK_CONFIRM

async def book_back_time_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    ctx.user_data.pop("time_range", None)
    return await show_available_times(query, ctx)

async def book_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Подтверждает и сохраняет запись в БД."""
    query = update.callback_query
    choice = query.data.split("|", 1)[1]
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    if choice == "yes":
        services_snapshot, _ = load_services()
        active_service_names = {svc["name"] for svc in services_snapshot}
        current_list = ctx.user_data.get("services_list") or []
        invalid_services = [name for name in current_list if name not in active_service_names]
        if invalid_services:
            selection = ctx.user_data.setdefault("selected_services", set())
            selection.intersection_update(active_service_names)
            for key in ("services_list", "total_duration", "date", "time_range"):
                ctx.user_data.pop(key, None)
            ctx.user_data.pop("services_version", None)
            await query.answer(
                "\u0427\u0430\u0441\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0432\u044b\u0431\u043e\u0440.",
                show_alert=True,
            )
            caption, markup = build_services_view(ctx)
            img_bytes = get_barber_photo_bytes(ctx.user_data.get("barber"))
            await safe_upsert_menu(
                ctx,
                chat_id,
                msg_id,
                photo_bytes=img_bytes,
                caption=caption,
                reply_markup=markup,
            )
            return SELECT_SERVICES
        user_id = query.from_user.id
        barber_info = ctx.user_data.get("barber") or {}
        barber_name = barber_info.get("name", ctx.user_data.get("barber"))
        appointment_date = ctx.user_data["date"]
        time_range = ctx.user_data["time_range"]
        services_str = ", ".join(ctx.user_data["services_list"])
        barber_chat_id = parse_chat_id(barber_info.get("telegramId"))
        new_id = str(uuid.uuid4())
        redirect_target: str | None = None  # "times" | "dates"
        redirect_alert: str | None = None
        fatal_caption: str | None = None
        try:
            if "name" not in ctx.user_data or "phone" not in ctx.user_data:
                summary = get_bot_user_summary(user_id, force=True) or {}
                user_row = summary.get("user") or {}
                if user_row:
                    ctx.user_data["name"] = user_row.get("Name") or ctx.user_data.get("name")
                    ctx.user_data["phone"] = user_row.get("Phone") or ctx.user_data.get("phone")
            api_payload = {
                "telegramId": str(user_id),
                "barberName": barber_name,
                "date": appointment_date,
                "timeRange": time_range,
                "services": services_str,
                "customerName": ctx.user_data.get("name"),
                "phone": ctx.user_data.get("phone"),
            }
            api_result = create_bot_appointment(api_payload)
            created_appointment = api_result.get("appointment") or {}
            barber_payload = api_result.get("barber") or {}
            if barber_payload.get("telegramId"):
                barber_chat_id = parse_chat_id(barber_payload.get("telegramId"))
            if not barber_chat_id:
                barber_chat_id = get_barber_chat_id_by_name(barber_name)
            new_id = str(created_appointment.get("id") or new_id)
            await query.answer()
            res = "✅ Запись успешно оформлена!\nМы напомним за 2 часа до начала."
            await safe_upsert_menu(
                ctx, chat_id, msg_id, IMAGE_BYTES, res, main_menu_kb(query.from_user.id)
            )
            return MENU
        except BotApiError as exc:
            if exc.code == "NO_SCHEDULE":
                redirect_target = "dates"
                redirect_alert = "Выберите другую дату."
            elif exc.code in {"LEAD_TIME", "OUTSIDE_WORKING_HOURS", "SLOT_TAKEN", "INVALID_TIME_RANGE"}:
                redirect_target = "times"
                redirect_alert = exc.payload.get("error") or "Выбранное время недоступно. Выберите другое."
            elif exc.code == "LIMIT_REACHED":
                fatal_caption = exc.payload.get("error") or "Достигнут лимит активных записей."
            else:
                logger.exception("Booking create API error: %s", exc)
                fatal_caption = "Не удалось оформить запись. Попробуйте позже."

        if fatal_caption:
            await query.answer(fatal_caption, show_alert=True)
            await query.edit_message_caption(fatal_caption, parse_mode="HTML")
            return ConversationHandler.END

        if redirect_target:
            ctx.user_data.pop("time_range", None)
            ctx.user_data["flash_notice"] = redirect_alert or "Выбранное время недоступно. Выберите другое."
            if redirect_target == "dates":
                return await show_available_dates(query, ctx)
            return await show_available_times(query, ctx)
        await query.answer()
        barber_notified = False
        if barber_chat_id:
            start_time = (
                time_range.split(" - ")[0] if " - " in time_range else time_range
            )
            try:
                barber_message = (
                    f"Новая запись: {appointment_date} {start_time}.\n"
                    f"Клиент: <b>{ctx.user_data.get('name')}</b>\n"
                    f"Телефон: {ctx.user_data.get('phone')}\n"
                    f"Услуги: {services_str}"
                )
                await ctx.bot.send_message(
                    barber_chat_id, barber_message, parse_mode="HTML"
                )
                barber_notified = True
            except Exception as e:
                logger.error(f"Не удалось уведомить барбера {barber_name}: {e}")
        res = "✅ Запись успешно оформлена!\nМы напомним за 2 часа до начала."
        await safe_upsert_menu(
            ctx, chat_id, msg_id, IMAGE_BYTES, res, main_menu_kb(query.from_user.id)
        )
    else:
        await query.answer()
        await safe_upsert_menu(
            ctx,
            chat_id,
            msg_id,
            IMAGE_BYTES,
            "Запись отменена.",
            main_menu_kb(query.from_user.id),
        )
    return MENU

def main():
    """Запускает бота."""
    persistence_path = BASE_DIR / "bot_persistence.pickle"
    if persistence_path.exists():
        try:
            with persistence_path.open("rb") as persistence_file:
                first_bytes = persistence_file.read(3)
                persistence_file.seek(0)
                if first_bytes.startswith(b"\xef\xbb\xbf"):
                    raise ValueError("utf-8-bom-detected")
                pickle.load(persistence_file)
        except Exception as exc:
            backup_path = persistence_path.with_name(
                f"{persistence_path.stem}.broken-{int(time.time())}{persistence_path.suffix}"
            )
            try:
                persistence_path.replace(backup_path)
                logger.warning(
                    "Invalid bot persistence file detected and moved to %s: %s",
                    backup_path.name,
                    exc,
                )
            except Exception:
                logger.exception("Failed to move invalid persistence file %s", persistence_path)
                raise
    # Создаем объект для сохранения состояния, чтобы кнопки работали после перезапуска
    persistence = PicklePersistence(filepath=persistence_path)
    # Передаем его в ApplicationBuilder
    app = ApplicationBuilder().token(TOKEN).persistence(persistence).build()
    logger.info("Reminder processing is delegated to server internal API.")
    conv = ConversationHandler(
        entry_points=[
            CommandHandler("start", start),
            CommandHandler("site_login", site_login_cmd),
        ],
        states={
            REG_NAME: [MessageHandler(filters.TEXT & ~filters.COMMAND, reg_name)],
            REG_PHONE: [
                MessageHandler(
                    (filters.TEXT | filters.CONTACT) & ~filters.COMMAND, reg_phone
                )
            ],
            MENU: [
                # ЗМЕНЕНЕ: Раздельные обработчики для каждой кнопки меню
                CallbackQueryHandler(menu_book_cb, pattern="^menu_book$"),
                CallbackQueryHandler(book_unavailable_cb, pattern="^book_unavailable$"),
                CallbackQueryHandler(show_records, pattern="^menu_show$"),
                CallbackQueryHandler(menu_profile_cb, pattern="^menu_profile$"),
                CallbackQueryHandler(menu_about_cb, pattern="^menu_about$"),
                CallbackQueryHandler(profile_change_cb, pattern="^profile_change$"),
                CallbackQueryHandler(
                    profile_change_name_cb, pattern="^profile_change_name$"
                ),
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
            ],
            BOOK_BARBER: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(book_barber_cb, pattern="^book_barber"),
            ],
            SELECT_SERVICES: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(book_back_barber_cb, pattern="^book_back_barber$"),
                CallbackQueryHandler(svc_toggle_cb, pattern="^svc_toggle"),
                CallbackQueryHandler(svc_done_cb, pattern="^svc_done"),
            ],
            BOOK_DATE: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(
                    book_back_services_cb, pattern="^book_back_services$"
                ),
                CallbackQueryHandler(book_date_cb, pattern="^book_date"),
            ],
            BOOK_TIME: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(book_back_dates_cb, pattern="^book_back_dates$"),
                CallbackQueryHandler(book_time_cb, pattern="^book_time"),
            ],
            BOOK_CONFIRM: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(book_back_time_cb, pattern="^book_back_time$"),
                CallbackQueryHandler(book_confirm_cb, pattern="^book_confirm"),
            ],
            SHOW_RECORDS: [
                CallbackQueryHandler(menu_main_cb, pattern="^menu_main$"),
                CallbackQueryHandler(show_records, pattern="^menu_show$"),
                CallbackQueryHandler(cancel_cb, pattern="^cancel\\|"),
            ],
            CANCEL_CONFIRM: [
                CallbackQueryHandler(show_records, pattern="^menu_show$"),
                CallbackQueryHandler(cancel_confirm_cb, pattern="^cancel_confirm"),
            ],
            CHANGE_PHONE: [
                CallbackQueryHandler(
                    cancel_change_phone_cb, pattern="^cancel_change_phone$"
                ),
                MessageHandler(
                    (filters.TEXT | filters.CONTACT) & ~filters.COMMAND, change_phone
                )
            ],
            CHANGE_NAME: [
                CallbackQueryHandler(
                    cancel_change_name_cb, pattern="^cancel_change_name$"
                ),
                MessageHandler(filters.TEXT & ~filters.COMMAND, change_name),
            ],
            SITE_AUTH_PHONE: [
                MessageHandler(
                    (filters.TEXT | filters.CONTACT) & ~filters.COMMAND,
                    site_auth_phone,
                )
            ],
        },
        fallbacks=[
            CommandHandler("start", start),
            CommandHandler("site_login", site_login_cmd),
        ],
        allow_reentry=True,
        # ЗМЕНЕНЕ: Явно указываем, что состояние диалога нужно сохранять
        persistent=True,
        name="bot_conversation",
    )
    app.add_handler(conv)
    app.run_polling()

if __name__ == "__main__":
    main()

