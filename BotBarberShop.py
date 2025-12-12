import logging
import json
import datetime
import io
import re
import sqlite3
import uuid
import time
import sys
import base64
from pathlib import Path
from collections import defaultdict
from urllib.parse import urlparse
from urllib.request import urlopen

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
DB_PATH = BASE_DIR / "prisma" / "dev.db"  # CRM SQLite database
TGBOT_IMAGE_DIR = BASE_DIR / "Image" / "tgbot"

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
) = range(12)

# ---
# --- Помощник для работы с БД ---

def get_db_connection():
    """Устанавливает соединение с базой данных SQLite."""
    try:
        conn = sqlite3.connect(DB_PATH, check_same_thread=False)
        conn.row_factory = sqlite3.Row  # Доступ к колонкам по имени
        global _SCHEMA_INITIALIZED
        if not _SCHEMA_INITIALIZED:
            try:
                ensure_schema(conn)
            except sqlite3.Error as e:
                logger.error(f"Ошибка обновления схемы базы данных: {e}")
            else:
                _SCHEMA_INITIALIZED = True
        return conn
    except sqlite3.Error as e:
        logger.error(f"Ошибка подключения к базе данных: {e}")
        return None

def ensure_schema(conn: sqlite3.Connection) -> None:
    """Гарантирует наличие служебных колонок, необходимых боту."""
    cursor = conn.cursor()
    cursor.execute("PRAGMA table_info(Users)")
    columns = {row["name"] for row in cursor.fetchall()}
    if "LastHaircutReminderSent" not in columns:
        cursor.execute("ALTER TABLE Users ADD COLUMN LastHaircutReminderSent TEXT")
        conn.commit()

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
        with get_db_connection() as conn:
            if not conn:
                return None
            cursor = conn.cursor()
            cursor.execute("SELECT id FROM Users WHERE TelegramID = ?", (telegram_id,))
            row = cursor.fetchone()
            return str(row["id"]) if row and row["id"] else None
    except Exception as exc:
        logger.warning("Не удалось получить id пользователя по TelegramID: %s", exc)
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

_SCHEMA_INITIALIZED = False

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
    with get_db_connection() as conn:
        if conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM BotSettings LIMIT 1")
            row = cursor.fetchone()
            if row:
                base_settings.update(dict(row))
    SETTINGS_CACHE["data"] = base_settings
    SETTINGS_CACHE["ts"] = now_ts
    return base_settings

def load_barbers(include_inactive: bool = False, force: bool = False) -> list[dict]:
    """Возвращает список барберов из таблицы Barbers (без фильтров)."""
    now_ts = time.time()
    cache_entry = BARBER_CACHE[include_inactive]
    conn = get_db_connection()
    if not conn:
        return cache_entry["data"]
    barbers: list[dict] = []
    version_token: str | None = None
    try:
        cursor = conn.cursor()
        try:
            cursor.execute(
                "SELECT MAX(updatedAt) as version, COUNT(*) as total FROM Barbers"
            )
            version_meta = dict(cursor.fetchone() or {})
            version_token = (
                f"{version_meta.get('version') or 'none'}|"
                f"{version_meta.get('total') or 0}"
            )
        except sqlite3.Error as meta_error:
            logger.warning(f"Не удалось получить версию списка барберов: {meta_error}")
        if (
            not force
            and version_token
            and cache_entry["data"]
            and cache_entry.get("version") == version_token
        ):
            cache_entry["ts"] = now_ts
            return cache_entry["data"]
        if (
            not force
            and not version_token
            and cache_entry["data"]
            and _cached(now_ts, cache_entry)
        ):
            return cache_entry["data"]
        query = (
            "SELECT id, name, nickname, description, rating, avatarUrl, color, "
            "isActive, telegramId FROM Barbers "
        )
        if not include_inactive:
            query += "WHERE isActive = 1 "
        query += "ORDER BY orderIndex, name"
        cursor.execute(query)
        barbers = [dict(row) for row in cursor.fetchall()]
    finally:
        conn.close()
    cache_entry["data"] = barbers
    cache_entry["ts"] = now_ts
    cache_entry["version"] = version_token
    return barbers

def load_services(force: bool = False) -> tuple[list[dict], str | None]:
    """Load service list with price map for the Telegram bot."""
    now_ts = time.time()
    services: list[dict] = []
    version_token = SERVICE_CACHE.get("version")
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT MAX(updatedAt) as version, COUNT(*) as total FROM Services"
            )
            services_meta_row = cursor.fetchone()
            services_meta = dict(services_meta_row or {})
            cursor.execute("SELECT MAX(createdAt) as version FROM ServicePrices")
            price_meta_row = cursor.fetchone()
            price_meta = dict(price_meta_row or {})
            version_token = (
                f"{services_meta.get('version') or 'none'}|"
                f"{services_meta.get('total') or 0}|"
                f"{price_meta.get('version') or 'none'}"
            )
            if (
                not force
                and SERVICE_CACHE["data"]
                and SERVICE_CACHE.get("version") == version_token
            ):
                SERVICE_CACHE["ts"] = now_ts
                return SERVICE_CACHE["data"], SERVICE_CACHE["version"]
            cursor.execute(
                "SELECT id, name, description, duration, isActive, orderIndex "
                "FROM Services ORDER BY orderIndex, name"
            )
            rows = cursor.fetchall()
            has_records = bool(rows)
            if rows:
                prices_map: dict[str, dict[str, float]] = defaultdict(dict)
                cursor.execute(
                    "SELECT sp.serviceId, sp.price, b.name as BarberName "
                    "FROM ServicePrices sp LEFT JOIN Barbers b ON b.id = sp.barberId"
                )
                for price_row in cursor.fetchall():
                    barber_name = price_row["BarberName"]
                    if not barber_name:
                        continue
                    prices_map[price_row["serviceId"]][barber_name] = price_row["price"]
                for row in rows:
                    if not row["isActive"]:
                        continue
                    services.append(
                        {
                            "id": row["id"],
                            "name": row["name"],
                            "duration": int(row["duration"] or 0),
                            "isActive": True,
                            "prices": prices_map.get(row["id"], {}),
                        }
                    )
            if not services and not has_records:
                cursor.execute(
                    """
                    SELECT
                        "Услуги" as Uslugi,
                        "Длительность" as Dlitelnost,
                        "Тимур" as Timur,
                        "Владимир" as Vladimir,
                        "Алина" as Alina,
                        "Алексей" as Aleksey
                    FROM Cost
                """
                )
                cost_rows = cursor.fetchall()
                barbers_lookup = {}
                for barber in load_barbers(include_inactive=True):
                    for key in (
                        barber.get("name"),
                        barber.get("nickname"),
                        barber.get("login"),
                    ):
                        norm = normalize_token(key)
                        if norm and barber.get("name"):
                            barbers_lookup[norm] = barber["name"]
                excluded_fields = {"Uslugi", "Dlitelnost", "id", "Id", "ID"}
                for row in cost_rows:
                    duration_match = re.search(r"(\\d+)", str(row["Dlitelnost"] or "0"))
                    duration = int(duration_match.group(1)) if duration_match else 0
                    prices = {}
                    for field, value in dict(row).items():
                        if field in excluded_fields or value is None:
                            continue
                        barber_name = barbers_lookup.get(normalize_token(field))
                        if not barber_name:
                            continue
                        try:
                            prices[barber_name] = int(value)
                        except (TypeError, ValueError):
                            continue
                    services.append(
                        {
                            "id": str(uuid.uuid4()),
                            "name": row["Uslugi"],
                            "duration": duration,
                            "isActive": True,
                            "prices": prices,
                        }
                    )
        finally:
            conn.close()
    SERVICE_CACHE["data"] = services
    SERVICE_CACHE["ts"] = now_ts
    SERVICE_CACHE["version"] = version_token
    return services, version_token


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
PHONE_PATTERN = re.compile(r"^\+?\d{10,15}$")

def normalize_token(value: str | None) -> str:
    return (value or "").strip().lower()

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
    with get_db_connection() as conn:
        if conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT id, name, telegramId FROM Barbers WHERE telegramId = ?",
                (identifier,),
            )
            row = cursor.fetchone()
            if row:
                return dict(row)
    return None

def get_barber_chat_id_by_name(barber_name: str) -> int | None:
    if not barber_name:
        return None
    with get_db_connection() as conn:
        if conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT telegramId FROM Barbers WHERE name = ?", (barber_name,)
            )
            row = cursor.fetchone()
            if row:
                return parse_chat_id(row["telegramId"])
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


# --- Логика напоминаний ---

async def reminder_checker_job(context: ContextTypes.DEFAULT_TYPE):
    """Проверяет предстоящие записи и отправляет напоминания."""
    conn = get_db_connection()
    if not conn:
        return
    try:
        now = datetime.datetime.now(tz=ZONE)
        today_str = now.strftime("%Y-%m-%d")
        logger.info(
            f"Проверка напоминаний на {today_str}, текущее время: {now.isoformat()}"
        )
        # Проверяем, не пора ли напомнить клиентам о новой стрижке
        monthly_cursor = conn.cursor()
        monthly_cursor.execute(
            "SELECT TelegramID, LastHaircutReminderSent FROM Users WHERE TelegramID IS NOT NULL"
        )
        monthly_users = monthly_cursor.fetchall()
        for user_row in monthly_users:
            telegram_id = user_row["TelegramID"]
            if not telegram_id:
                continue
            last_cursor = conn.cursor()
            last_cursor.execute(
                "SELECT MAX(Date) FROM Appointments WHERE UserID = ? AND Status = 'Выполнена'",
                (str(telegram_id),),
            )
            last_row = last_cursor.fetchone()
            last_haircut_raw = last_row[0] if last_row and last_row[0] else None
            if not last_haircut_raw:
                continue
            try:
                last_haircut_date = datetime.date.fromisoformat(last_haircut_raw)
            except ValueError:
                continue
            last_sent_raw = user_row["LastHaircutReminderSent"]
            last_sent_date = None
            if last_sent_raw:
                try:
                    last_sent_date = datetime.date.fromisoformat(last_sent_raw)
                except ValueError:
                    last_sent_date = None
            if last_sent_date and last_sent_date >= last_haircut_date:
                continue
            if now.date() >= last_haircut_date + datetime.timedelta(days=30):
                try:
                    await context.bot.send_message(
                        telegram_id,
                        "Вы достаточно сильно обросли, предлагаем вам записаться на стрижку.",
                    )
                    update_cursor = conn.cursor()
                    update_cursor.execute(
                        "UPDATE Users SET LastHaircutReminderSent = ? WHERE TelegramID = ?",
                        (last_haircut_raw, telegram_id),
                    )
                    conn.commit()
                    logger.info(
                        f"Отправлено ежемесячное напоминание пользователю {telegram_id}"
                    )
                except Exception as e:
                    logger.error(
                        f"Не удалось отправить ежемесячное напоминание пользователю {telegram_id}: {e}"
                    )
        cursor = conn.cursor()
        # звлекаем только релевантные записи: активные и на СЕГОДНЯ
        cursor.execute(
            "SELECT * FROM Appointments WHERE Status = 'Активная' AND Date = ?",
            (today_str,),
        )
        appts = [dict(row) for row in cursor.fetchall()]
        for appt in appts:
            rec_id = appt.get("id")
            date_s = appt.get("Date")
            time_s = appt.get("Time", "")
            if not time_s or "-" not in time_s:
                continue
            start_time_str = time_s.split("-")[0].strip()
            try:
                dt_str = f"{date_s}T{start_time_str}"
                appt_dt_naive = datetime.datetime.fromisoformat(dt_str)
                appt_dt = appt_dt_naive.replace(tzinfo=ZONE)
                delta = appt_dt - now
            except (ValueError, TypeError) as e:
                logger.error(f"Ошибка парсинга даты для записи {rec_id}: {e}")
                continue
            # Отправка напоминаний, если до записи 2 часа или меньше (и она еще не прошла)
            if datetime.timedelta(0) <= delta <= datetime.timedelta(hours=2):
                # Напоминание клиенту
                if not appt.get("Reminder2hClientSent"):
                    user_id = appt.get("UserID")
                    if user_id:
                        try:
                            msg = (
                                f"⏰ Напоминание: \nУ вас сегодня в {start_time_str} запись к барберу "
                                f"<b>{appt.get('Barber')}</b>."
                            )
                            await context.bot.send_message(
                                user_id, msg, parse_mode="HTML"
                            )
                            # спользуем новый курсор для этого обновления, чтобы не мешать основному циклу
                            update_cursor = conn.cursor()
                            update_cursor.execute(
                                "UPDATE Appointments SET Reminder2hClientSent = 1 WHERE id = ?",
                                (rec_id,),
                            )
                            conn.commit()
                            logger.info(
                                f"Отправлено напоминание клиенту для записи {rec_id}"
                            )
                        except Exception as e:
                            logger.error(
                                f"Не удалось отправить напоминание клиенту {user_id}: {e}"
                            )
                # Напоминание барберу
                if not appt.get("Reminder2hBarberSent"):
                    barber_name = appt.get("Barber")
                    barber_cursor = conn.cursor()
                    barber_cursor.execute(
                        "SELECT telegramId FROM Barbers WHERE name = ?", (barber_name,)
                    )
                    barber_user = barber_cursor.fetchone()
                    barber_chat_id = (
                        parse_chat_id(barber_user["telegramId"])
                        if barber_user
                        else None
                    )
                    if barber_chat_id:
                        try:
                            msg = (
                                f"⏰ Напоминание: \nУ вас сегодня в {start_time_str} запись.\n"
                                f"Клиент: <b>{appt.get('CustomerName')}</b>\n"
                                f"Телефон: {appt.get('Phone')}"
                            )
                            await context.bot.send_message(
                                barber_chat_id, msg, parse_mode="HTML"
                            )
                            # спользуем новый курсор для этого обновления
                            update_cursor = conn.cursor()
                            update_cursor.execute(
                                "UPDATE Appointments SET Reminder2hBarberSent = 1 WHERE id = ?",
                                (rec_id,),
                            )
                            conn.commit()
                            logger.info(
                                f"Отправлено напоминание барберу {barber_name} для записи {rec_id}"
                            )
                        except Exception as e:
                            logger.error(
                                f"Не удалось отправить напоминание барберу {barber_name}: {e}"
                            )
    except sqlite3.Error as e:
        logger.error(f"Ошибка БД в reminder_checker_job: {e}")
    finally:
        if conn:
            conn.close()

# ---------- Вспомогательные функции (переписано для SQLite) ----------

def is_barber(user_id: int) -> bool:
    """Проверяет, является ли пользователь барбером."""
    return get_barber_by_telegram_id(user_id) is not None

def count_active_appts(user_id: str) -> int:
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT Status FROM Appointments WHERE UserID = ?", (str(user_id),)
        )
        rows = cursor.fetchall()
        return sum(1 for row in rows if status_is_active(row["Status"]))
    return 0

def get_last_haircut_date(user_id: str) -> str | None:
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT MAX(Date) FROM Appointments WHERE UserID = ? AND Status = 'Выполнена'",
            (str(user_id),),
        )
        result = cursor.fetchone()
        return result[0] if result and result[0] else None
    return None

def count_no_shows(user_id: str) -> int:
    with get_db_connection() as conn:
        threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT COUNT(*) FROM Appointments WHERE UserID = ? AND Status = 'Неявка' AND Date >= ?",
            (str(user_id), threshold),
        )
        return cursor.fetchone()[0]
    return 0

def purge_old_appts():
    with get_db_connection() as conn:
        threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Appointments WHERE Date < ?", (threshold,))
        conn.commit()
        logger.info("purge_old_appts: Старые записи удалены.")

def get_working_hours(barber: str, date_str: str) -> tuple[int, int] | None:
    """Получает рабочие часы барбера на КОНКРЕТНУЮ дату."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        # Поиск строго по точной дате. Запасной вариант по дню недели убран.
        cursor.execute(
            "SELECT Week FROM Schedules WHERE Barber = ? AND Date = ?",
            (barber, date_str),
        )
        row = cursor.fetchone()
        if row and row["Week"] and row["Week"] != "0":
            return _parse_working_hours(row["Week"])
    # Если на конкретную дату ничего не найдено, значит барбер не работает.
    return None

def get_busy_intervals(barber: str, date_str: str) -> list[tuple[int, int]]:
    intervals = []
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT Time, Status FROM Appointments WHERE Barber = ? AND Date = ?",
            (barber, date_str),
        )
        rows = cursor.fetchall()
        for row in rows:
            status = row["Status"]
            if not status_is_blocking(status):
                continue
            tf = (row["Time"] or "").strip()
            if "-" in tf:
                parsed = _parse_working_hours(tf)
                if parsed:
                    intervals.append(parsed)
    return intervals

def _get_working_hours_from_cursor(cursor: sqlite3.Cursor, barber: str, date_str: str) -> tuple[int, int] | None:
    cursor.execute(
        "SELECT Week FROM Schedules WHERE Barber = ? AND Date = ?",
        (barber, date_str),
    )
    row = cursor.fetchone()
    if row and row["Week"] and row["Week"] != "0":
        return _parse_working_hours(row["Week"])
    return None

def _get_busy_intervals_from_cursor(cursor: sqlite3.Cursor, barber: str, date_str: str) -> list[tuple[int, int]]:
    intervals: list[tuple[int, int]] = []
    cursor.execute(
        "SELECT Time, Status FROM Appointments WHERE Barber = ? AND Date = ?",
        (barber, date_str),
    )
    rows = cursor.fetchall()
    for row in rows:
        status = row["Status"]
        if not status_is_blocking(status):
            continue
        tf = (row["Time"] or "").strip()
        if "-" in tf:
            parsed = _parse_working_hours(tf)
            if parsed:
                intervals.append(parsed)
    return intervals

def _parse_working_hours(wh: str) -> tuple[int, int] | None:
    if not wh or "-" not in wh:
        return None
    try:
        s, e = [p.strip() for p in wh.split("-", 1)]
        h1, m1 = map(int, s.split(":"))
        h2, m2 = map(int, e.split(":"))
        return (h1 * 60 + m1, h2 * 60 + m2)
    except Exception:
        return None

def can_fit(start_min: int, duration: int, intervals: list[tuple[int, int]]) -> bool:
    end_min = start_min + duration
    for b_s, b_e in intervals:
        if start_min < b_e and end_min > b_s:
            return False
    return end_min <= 24 * 60

def has_future_slots(barber_name: str, duration_min: int) -> bool:
    """Проверяет, есть ли у барбера свободные окна в ближайшие дни."""
    duration = max(int(duration_min or 0), 15)
    today = datetime.date.today()
    now = datetime.datetime.now(tz=ZONE)
    min_allowed = now + datetime.timedelta(hours=get_min_lead_hours())
    max_days = get_max_days_ahead()
    for offset in range(max_days):
        date_obj = today + datetime.timedelta(days=offset)
        date_str = date_obj.isoformat()
        working_hours = get_working_hours(barber_name, date_str)
        if not working_hours:
            continue
        start_day, end_day = working_hours
        if end_day - start_day < duration:
            continue
        busy = get_busy_intervals(barber_name, date_str)
        for minute in range(start_day, end_day - duration + 1, 60):
            slot_dt_naive = datetime.datetime.fromisoformat(
                f"{date_str}T{minute//60:02d}:{minute%60:02d}"
            )
            slot_dt = slot_dt_naive.replace(tzinfo=ZONE)
            if slot_dt >= min_allowed and can_fit(minute, duration, busy):
                return True
    return False

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

# ---------- Обработчики ----------

async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Приветствие и точка входа /start."""
    user_id = update.effective_user.id
    registered = False
    settings = load_bot_settings()
    description = settings.get("botDescription") or "Добро пожаловать в HalfTime!"
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT 1 FROM Users WHERE TelegramID = ?", (user_id,))
        if cursor.fetchone():
            registered = True
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
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM Users WHERE TelegramID = ?", (user_id,))
        existing = cursor.fetchone()
        if existing:
            cursor.execute(
                "UPDATE Users SET Name = ?, Phone = ? WHERE id = ?",
                (name, phone, existing["id"]),
            )
        else:
            cursor.execute(
                "INSERT INTO Users (id, TelegramID, Name, Phone) VALUES (?, ?, ?, ?)",
                (str(uuid.uuid4()), user_id, name, phone),
            )
        conn.commit()
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
    user_data = None
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Name, Phone FROM Users WHERE TelegramID = ?", (user_id,))
        rec = cursor.fetchone()
        if rec:
            user_data = dict(rec)
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
    last = get_last_haircut_date(str(user_id)) or "—"
    active = count_active_appts(str(user_id))
    warns = count_no_shows(str(user_id))
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
    with get_db_connection() as conn:
        cursor = conn.cursor()
        # Сценарий для БАРБЕРА
        if barber_record:
            barber_name = barber_record.get("name")
            cursor.execute(
                "SELECT * FROM Appointments WHERE Barber = ? AND Status = 'Активная' ORDER BY Date, Time",
                (barber_name,),
            )
            recs = cursor.fetchall()
            if not recs:
                await safe_upsert_menu(
                    ctx,
                    chat_id,
                    msg_id,
                    IMAGE_BYTES,
                    "У вас нет предстоящих записей.",
                    main_menu_kb(user_id),
                )
                return MENU
            text = f"<b>Записи для барбера {barber_name}:</b>\n"
            kb = []
            for i, r in enumerate(recs, 1):
                f = dict(r)
                text += (
                    f"\n{i}. <b>{f['Date']} {f['Time']}</b>\n"
                    f"   Клиент: {f.get('CustomerName', 'не указан')}\n"
                    f"   Телефон: {f.get('Phone', 'не указан')}\n"
                    f"   Услуги: {f.get('Services', 'не указаны')}\n"
                )
                kb.append([
                    InlineKeyboardButton(
                        f"❌ Отменить запись №{i}",
                        callback_data=f"cancel|{f['id']}",
                    )
                ])
            kb.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])
            await safe_upsert_menu(
                ctx, chat_id, msg_id, IMAGE_BYTES, text, InlineKeyboardMarkup(kb)
            )
            return SHOW_RECORDS
        # Сценарий для КЛЕНТА (существующая логика)
        else:
            cursor.execute(
                "SELECT * FROM Appointments WHERE UserID = ? AND Status = 'Активная' ORDER BY Date, Time",
                (str(user_id),),
            )
            recs = cursor.fetchall()
            if not recs:
                await safe_upsert_menu(
                    ctx,
                    chat_id,
                    msg_id,
                    IMAGE_BYTES,
                    "У вас нет активных записей.",
                    main_menu_kb(user_id),
                )
                return MENU
            text = "<b>Ваши активные записи:</b>\n"
            kb = []
            for i, r in enumerate(recs, 1):
                f = dict(r)
                text += f"\n{i}. {f['Date']} {f['Time']} к <b>{f['Barber']}</b>\n  Услуги: {f.get('Services', 'не указаны')}"
                kb.append(
                    [
                        InlineKeyboardButton(
                            f"❌ Отменить запись №{i}",
                            callback_data=f"cancel|{f['id']}",
                        )
                    ]
                )
            kb.append(
                [InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")]
            )
            await safe_upsert_menu(
                ctx, chat_id, msg_id, IMAGE_BYTES, text, InlineKeyboardMarkup(kb)
            )
            return SHOW_RECORDS

async def cancel_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    rec_id = query.data.split("|", 1)[1]
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Appointments WHERE id = ?", (rec_id,))
        rec = cursor.fetchone()
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
        deny_text = "Запись нельзя отменить менее чем за 2 часа до времени приема."
        with get_db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Appointments WHERE id = ?", (rec_id,))
            rec = cursor.fetchone()
            if not rec:
                res_text = "Запись не найдена."
            else:
                appt_start = parse_appointment_start(rec["Date"], rec["Time"])
                now = datetime.datetime.now(tz=ZONE)
                if appt_start and appt_start - now < datetime.timedelta(hours=2):
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
                cursor.execute(
                    "UPDATE Appointments SET Status = 'Отмена' WHERE id = ?",
                    (rec_id,),
                )
                if cursor.rowcount:
                    conn.commit()
                    res_text = "Готово: запись отменена."
                else:
                    res_text = "Запись уже отменена или не найдена."
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
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE Users SET Name = ?, LastNameChanged = ? WHERE TelegramID = ?",
            (new_name, datetime.date.today().isoformat(), update.effective_user.id),
        )
        conn.commit()
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
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE Users SET Phone = ? WHERE TelegramID = ?",
            (phone, update.effective_user.id),
        )
        conn.commit()
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
        price = svc["prices"].get(barber_name, 0)
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
        svc for svc in services if (svc["prices"].get(selected["name"]) or 0) > 0
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
    if not has_future_slots(selected["name"], min_duration):
        await query.answer(
            f"⚠️ У барбера {selected['name']} нет свободных слотов в ближайшие дни.",
            show_alert=True,
        )
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
    today = datetime.date.today()
    now = datetime.datetime.now(tz=ZONE)
    min_allowed = now + datetime.timedelta(hours=get_min_lead_hours())
    max_days = get_max_days_ahead()
    available_dates: list[str] = []
    for offset in range(max_days):
        date_obj = today + datetime.timedelta(days=offset)
        date_str = date_obj.isoformat()
        working_hours = get_working_hours(barber["name"], date_str)
        if not working_hours:
            continue
        start_day, end_day = working_hours
        busy = get_busy_intervals(barber["name"], date_str)
        has_slot = False
        for minute in range(start_day, end_day - total_min + 1, 60):
            slot_dt_naive = datetime.datetime.fromisoformat(
                f"{date_str}T{minute//60:02d}:{minute%60:02d}"
            )
            slot_dt = slot_dt_naive.replace(tzinfo=ZONE)
            if slot_dt >= min_allowed and can_fit(minute, total_min, busy):
                has_slot = True
                break
        if has_slot:
            available_dates.append(date_str)
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
    working_hours = get_working_hours(barber["name"], date)
    if not working_hours:
        await query.answer("На эту дату нет расписания.", show_alert=True)
        return BOOK_DATE
    start_day, end_day = working_hours
    busy = get_busy_intervals(barber["name"], date)
    buttons: list[InlineKeyboardButton] = []
    now = datetime.datetime.now(tz=ZONE)
    min_allowed = now + datetime.timedelta(hours=get_min_lead_hours())
    for minute in range(start_day, end_day - total + 1, 60):
        slot_dt_naive = datetime.datetime.fromisoformat(
            f"{date}T{minute//60:02d}:{minute%60:02d}"
        )
        slot_dt = slot_dt_naive.replace(tzinfo=ZONE)
        if slot_dt >= min_allowed and can_fit(minute, total, busy):
            t = f"{minute//60:02d}:{minute%60:02d}"
            buttons.append(InlineKeyboardButton(t, callback_data=f"book_time|{t}"))
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
        with get_db_connection() as conn:
            conn.execute("PRAGMA busy_timeout = 5000")
            cursor = conn.cursor()
            if "name" not in ctx.user_data or "phone" not in ctx.user_data:
                cursor.execute(
                    "SELECT Name, Phone FROM Users WHERE TelegramID = ?", (user_id,)
                )
                user_rec = cursor.fetchone()
                if user_rec:
                    ctx.user_data["name"] = user_rec["Name"]
                    ctx.user_data["phone"] = user_rec["Phone"]
                else:
                    fatal_caption = "Ошибка: ваш профиль не найден. Пожалуйста, пройдите регистрацию командой /start."

            if not fatal_caption:
                try:
                    conn.execute("BEGIN IMMEDIATE")
                    parsed_range = _parse_working_hours(time_range)
                    if not parsed_range:
                        redirect_target = "times"
                        redirect_alert = "Не удалось распознать выбранное время. Пожалуйста, выберите слот заново."
                    else:
                        start_min, end_min = parsed_range
                        if end_min <= start_min:
                            redirect_target = "times"
                            redirect_alert = "Некорректный интервал времени. Пожалуйста, выберите слот заново."
                        else:
                            start_label = (
                                time_range.split(" - ")[0].strip()
                                if " - " in time_range
                                else time_range.split("-")[0].strip()
                            )
                            try:
                                dt_start_naive = datetime.datetime.fromisoformat(
                                    f"{appointment_date}T{start_label}"
                                )
                                dt_start = dt_start_naive.replace(tzinfo=ZONE)
                            except Exception:
                                dt_start = None
                            min_allowed = datetime.datetime.now(tz=ZONE) + datetime.timedelta(
                                hours=get_min_lead_hours()
                            )
                            if not dt_start or dt_start < min_allowed:
                                redirect_target = "times"
                                redirect_alert = "Это время уже недоступно (слишком близко или прошло). Выберите другое."
                            else:
                                working_hours = _get_working_hours_from_cursor(cursor, barber_name, appointment_date)
                                if not working_hours:
                                    redirect_target = "dates"
                                    redirect_alert = "Барбер не работает в выбранную дату. Выберите другую дату."
                                else:
                                    day_start, day_end = working_hours
                                    if start_min < day_start or end_min > day_end:
                                        redirect_target = "times"
                                        redirect_alert = "Выбранное время больше не входит в рабочие часы. Выберите другое время."
                                    else:
                                        busy = _get_busy_intervals_from_cursor(cursor, barber_name, appointment_date)
                                        duration = end_min - start_min
                                        if not can_fit(start_min, duration, busy):
                                            redirect_target = "times"
                                            redirect_alert = "К сожалению, это время уже занято. Выберите другое время."

                    if redirect_target:
                        conn.rollback()
                    else:
                        record_tuple = (
                            new_id,
                            str(user_id),
                            ctx.user_data.get("name"),
                            ctx.user_data.get("phone"),
                            barber_name,
                            appointment_date,
                            time_range,
                            "Активная",
                            services_str,
                            False,
                            False,
                        )
                        cursor.execute(
                            "INSERT INTO Appointments (id, UserID, CustomerName, Phone, Barber, Date, Time, Status, Services, Reminder2hClientSent, Reminder2hBarberSent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                            record_tuple,
                        )
                        conn.commit()
                        if not barber_chat_id:
                            barber_cursor = conn.cursor()
                            barber_cursor.execute(
                                "SELECT telegramId FROM Barbers WHERE name = ?", (barber_name,)
                            )
                            barber_record = barber_cursor.fetchone()
                            if barber_record:
                                barber_chat_id = parse_chat_id(barber_record["telegramId"])
                except sqlite3.Error as exc:
                    logger.warning("Booking confirm failed: %s", exc)
                    try:
                        conn.rollback()
                    except sqlite3.Error:
                        pass
                    fatal_caption = "Не удалось оформить запись. Попробуйте еще раз."

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
        if barber_notified:
            with get_db_connection() as conn:
                update_cursor = conn.cursor()
                update_cursor.execute(
                    "UPDATE Appointments SET Reminder2hBarberSent = 1 WHERE id = ?",
                    (new_id,),
                )
                conn.commit()
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
    # Создаем объект для сохранения состояния, чтобы кнопки работали после перезапуска
    persistence = PicklePersistence(filepath=BASE_DIR / "bot_persistence.pickle")
    # Передаем его в ApplicationBuilder
    app = ApplicationBuilder().token(TOKEN).persistence(persistence).build()
    try:
        # При запуске удаляем старые записи, которым больше 90 дней
        purge_old_appts()
    except Exception as e:
        logger.exception(f"Ошибка при первичной очистке старых записей: {e}")
    # Планируем задачу для отправки напоминаний
    if app.job_queue:
        # Запускаем задачу каждые 10 минут (600 секунд)
        app.job_queue.run_repeating(
            reminder_checker_job, interval=600, first=10, name="reminder_checker"
        )
        logger.info("Задача для проверки напоминаний запланирована (каждые 10 минут).")
    conv = ConversationHandler(
        entry_points=[CommandHandler("start", start)],
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
        },
        fallbacks=[CommandHandler("start", start)],
        allow_reentry=True,
        # ЗМЕНЕНЕ: Явно указываем, что состояние диалога нужно сохранять
        persistent=True,
        name="bot_conversation",
    )
    app.add_handler(conv)
    app.run_polling()

if __name__ == "__main__":
    main()
