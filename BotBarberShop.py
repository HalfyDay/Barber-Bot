import logging
import datetime
import io
import re
import sqlite3
import uuid
import time
from pathlib import Path
from collections import defaultdict

from telegram import (
    Update, InputMediaPhoto,
    InlineKeyboardButton, InlineKeyboardMarkup,
    ReplyKeyboardMarkup, KeyboardButton,
)
from telegram.ext import (
    ApplicationBuilder, CommandHandler, MessageHandler,
    filters, ContextTypes, ConversationHandler, CallbackQueryHandler,
    PicklePersistence,
)
from telegram.error import BadRequest
import config  # РџСЂРµРґРїРѕР»Р°РіР°РµС‚СЃСЏ, С‡С‚Рѕ config.py СЃРѕРґРµСЂР¶РёС‚ TOKEN Рё ADMIN_IDS
import asyncio
from datetime import time as dt_time
from zoneinfo import ZoneInfo

# ---------- РќР°СЃС‚СЂРѕР№РєРё ----------
TOKEN = config.TOKEN

BASE_DIR = Path(__file__).parent
DB_PATH = BASE_DIR / "prisma" / "dev.db"  # РџСѓС‚СЊ Рє Р±Р°Р·Рµ РґР°РЅРЅС‹С… SQLite

# РњРµРґРёР°-СЂРµСЃСѓСЂСЃС‹ Рё РєСЌС€
IMAGE_FILE = BASE_DIR / "Image" / "bot.jpg"
DEFAULT_BARBER_IMAGES = {
    "menu": BASE_DIR / "Image" / "menu_barber.jpg",
    "РђР»РµРєСЃРµР№рџ¦ђ": BASE_DIR / "Image" / "barber_alex.jpg",
    "РўРёРјСѓСЂрџђј": BASE_DIR / "Image" / "barber_timur.jpg",
    "Р’Р»Р°РґРёРјРёСЂрџЋ": BASE_DIR / "Image" / "barber_vlad.jpg",
    "РђР»РёРЅР°рџ’–": BASE_DIR / "Image" / "barber_alina.jpg",
}
FALLBACK_BARBERS = [
    {
        "id": "barber-alexey",
        "name": "РђР»РµРєСЃРµР№рџ¦ђ",
        "nickname": "Alex",
        "description": "РЎРїРµС†РёР°Р»РёСЃС‚ РїРѕ РєР»Р°СЃСЃРёС‡РµСЃРєРёРј РјСѓР¶СЃРєРёРј СЃС‚СЂРёР¶РєР°Рј Рё Р°РєРєСѓСЂР°С‚РЅРѕР№ Р±РѕСЂРѕРґРµ.",
        "rating": "в­ђв­ђв­ђв­ђв­ђ",
        "color": "#65a30d",
    },
    {
        "id": "barber-timur",
        "name": "РўРёРјСѓСЂрџђј",
        "nickname": "Tim",
        "description": "Р’РµРґС‘С‚ Р±СЂР°С‚СЃС‚РІРѕ Р±Р°СЂР±РµСЂРѕРІ, РґРµР»Р°РµС‚ Р°РєС†РµРЅС‚ РЅР° СѓРєР»Р°РґРєСѓ Рё Р±СЂРёС‚СЊС‘ РѕРїР°СЃРєРѕР№.",
        "rating": "в­ђв­ђв­ђв­ђв­ђ",
        "color": "#06b6d4",
    },
    {
        "id": "barber-vladimir",
        "name": "Р’Р»Р°РґРёРјРёСЂрџЋ",
        "nickname": "Vlad",
        "description": "Р›СЋР±РёС‚ РєРѕРЅС‚СЂР°СЃС‚РЅС‹Рµ РѕР±СЂР°Р·С‹ Рё СЂР°Р±РѕС‚Р°РµС‚ СЃ Р¶С‘СЃС‚РєРёРјРё С„РѕСЂРјР°РјРё.",
        "rating": "в­ђв­ђв­ђв­ђ",
        "color": "#fb923c",
    },
    {
        "id": "barber-alina",
        "name": "РђР»РёРЅР°рџ’–",
        "nickname": "Alina",
        "description": "Р­РєСЃРїРµСЂС‚ РїРѕ РѕРєСЂР°С€РёРІР°РЅРёСЏРј Рё СЃР»РѕР¶РЅС‹Рј СѓРєР»Р°РґРєР°Рј.",
        "rating": "в­ђв­ђв­ђв­ђв­ђ",
        "color": "#f472b6",
    },
]
COST_FIELD_TO_BARBER = {
    "Timur": "РўРёРјСѓСЂрџђј",
    "Vladimir": "Р’Р»Р°РґРёРјРёСЂрџЋ",
    "Alina": "РђР»РёРЅР°рџ’–",
    "Aleksey": "РђР»РµРєСЃРµР№рџ¦ђ",
}
CACHE_TTL_SECONDS = 120
BARBER_CACHE = {True: {"data": [], "ts": 0.0}, False: {"data": [], "ts": 0.0}}
SERVICE_CACHE = {"data": [], "ts": 0.0}
SETTINGS_CACHE = {"data": None, "ts": 0.0}
MESSAGE_CACHE = {"data": {}, "ts": 0.0}
STATUS_ACTIVE_TOKENS = ("Р°РєС‚РёРІ", "active")
STATUS_BLOCK_TOKENS = ("Р±Р»РѕРє", "block")

# Р‘Р°Р·РѕРІР°СЏ РєР°СЂС‚РёРЅРєР° РґР»СЏ СЃРѕРѕР±С‰РµРЅРёР№
with open(IMAGE_FILE, "rb") as f:
    IMAGE_BYTES = f.read()

# --- Константы состояний диалога ---
(REG_NAME, REG_PHONE, MENU,
 BOOK_BARBER, SELECT_SERVICES,
 BOOK_DATE, BOOK_TIME, BOOK_CONFIRM,
 SHOW_RECORDS, CANCEL_CONFIRM,
 CHANGE_PHONE, CHANGE_NAME) = range(12)

# ---
# --- РџРѕРјРѕС‰РЅРёРє РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ Р‘Р” ---
def get_db_connection():
    """РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЃРѕРµРґРёРЅРµРЅРёРµ СЃ Р±Р°Р·РѕР№ РґР°РЅРЅС‹С… SQLite."""
    try:
        conn = sqlite3.connect(DB_PATH, check_same_thread=False)
        conn.row_factory = sqlite3.Row  # Р”РѕСЃС‚СѓРї Рє РєРѕР»РѕРЅРєР°Рј РїРѕ РёРјРµРЅРё
        global _SCHEMA_INITIALIZED
        if not _SCHEMA_INITIALIZED:
            try:
                ensure_schema(conn)
            except sqlite3.Error as e:
                logger.error(f"РћС€РёР±РєР° РѕР±РЅРѕРІР»РµРЅРёСЏ СЃС…РµРјС‹ Р±Р°Р·С‹ РґР°РЅРЅС‹С…: {e}")
            else:
                _SCHEMA_INITIALIZED = True
        return conn
    except sqlite3.Error as e:
        logger.error(f"РћС€РёР±РєР° РїРѕРґРєР»СЋС‡РµРЅРёСЏ Рє Р±Р°Р·Рµ РґР°РЅРЅС‹С…: {e}")
        return None

def ensure_schema(conn: sqlite3.Connection) -> None:
    """Р“Р°СЂР°РЅС‚РёСЂСѓРµС‚ РЅР°Р»РёС‡РёРµ СЃР»СѓР¶РµР±РЅС‹С… РєРѕР»РѕРЅРѕРє, РЅРµРѕР±С…РѕРґРёРјС‹С… Р±РѕС‚Сѓ."""
    cursor = conn.cursor()
    cursor.execute("PRAGMA table_info(Users)")
    columns = {row["name"] for row in cursor.fetchall()}
    if "LastHaircutReminderSent" not in columns:
        cursor.execute("ALTER TABLE Users ADD COLUMN LastHaircutReminderSent TEXT")
        conn.commit()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

_SCHEMA_INITIALIZED = False

CACHE_EPSILON = 1e-9

def status_is_active(status: str | None) -> bool:
    text = (status or "").lower()
    return any(token in text for token in STATUS_ACTIVE_TOKENS)

def status_is_blocking(status: str | None) -> bool:
    text = (status or "").lower()
    return status_is_active(status) or any(token in text for token in STATUS_BLOCK_TOKENS)

def _cached(now_ts: float, cache_entry: dict) -> bool:
    return cache_entry["ts"] and (now_ts - cache_entry["ts"] < CACHE_TTL_SECONDS - CACHE_EPSILON)

def load_bot_settings(force: bool = False) -> dict:
    """Р—Р°РіСЂСѓР¶Р°РµС‚ РЅР°СЃС‚СЂРѕР№РєРё Р±РѕС‚Р° РёР· С‚Р°Р±Р»РёС†С‹ BotSettings СЃ РєРµС€РёСЂРѕРІР°РЅРёРµРј."""
    now_ts = time.time()
    if not force and SETTINGS_CACHE["data"] is not None and _cached(now_ts, SETTINGS_CACHE):
        return SETTINGS_CACHE["data"]

    base_settings = {
        "botDescription": "Barber Bot CRM",
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
    """Р’РѕР·РІСЂР°С‰Р°РµС‚ СЃРїРёСЃРѕРє Р±Р°СЂР±РµСЂРѕРІ РёР· С‚Р°Р±Р»РёС†С‹ Barbers (РёР»Рё Р·Р°РіР»СѓС€РєРё)."""
    now_ts = time.time()
    cache_entry = BARBER_CACHE[include_inactive]
    if not force and cache_entry["data"] and _cached(now_ts, cache_entry):
        return cache_entry["data"]

    barbers: list[dict] = []
    with get_db_connection() as conn:
        if conn:
            cursor = conn.cursor()
            query = (
                "SELECT id, name, nickname, description, rating, avatarUrl, color, isActive "
                "FROM Barbers "
            )
            if not include_inactive:
                query += "WHERE isActive = 1 "
            query += "ORDER BY orderIndex, name"
            cursor.execute(query)
            barbers = [dict(row) for row in cursor.fetchall()]

    if not barbers:
        barbers = []
        for fallback in FALLBACK_BARBERS:
            avatar_path = DEFAULT_BARBER_IMAGES.get(fallback["name"], DEFAULT_BARBER_IMAGES.get("menu"))
            barbers.append({
                **fallback,
                "avatarUrl": str(avatar_path) if avatar_path else "",
                "isActive": True,
            })

    cache_entry["data"] = barbers
    cache_entry["ts"] = now_ts
    return barbers

def load_bot_messages(force: bool = False) -> dict:
    """Р’РѕР·РІСЂР°С‰Р°РµС‚ СЃР»РѕРІР°СЂСЊ СЃРѕРѕР±С‰РµРЅРёР№ Р±РѕС‚Р° (code -> text)."""
    now_ts = time.time()
    if not force and MESSAGE_CACHE["data"] and _cached(now_ts, MESSAGE_CACHE):
        return MESSAGE_CACHE["data"]

    messages = {}
    with get_db_connection() as conn:
        if conn:
            cursor = conn.cursor()
            cursor.execute("SELECT code, text FROM BotMessages")
            messages = {row["code"]: row["text"] for row in cursor.fetchall()}

    MESSAGE_CACHE["data"] = messages
    MESSAGE_CACHE["ts"] = now_ts
    return messages

def get_bot_message(code: str, default: str = "") -> str:
    return load_bot_messages().get(code) or default

def load_services(force: bool = False) -> list[dict]:
    """Р’РѕР·РІСЂР°С‰Р°РµС‚ СЃРїРёСЃРѕРє СѓСЃР»СѓРі СЃ С†РµРЅР°РјРё РїРѕ Р±Р°СЂР±РµСЂР°Рј."""
    now_ts = time.time()
    if not force and SERVICE_CACHE["data"] and _cached(now_ts, SERVICE_CACHE):
        return SERVICE_CACHE["data"]

    services: list[dict] = []
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT id, name, description, duration FROM Services WHERE isActive = 1 ORDER BY orderIndex, name"
            )
            rows = cursor.fetchall()
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
                    services.append({
                        "id": row["id"],
                        "name": row["name"],
                        "duration": int(row["duration"] or 0),
                        "prices": prices_map.get(row["id"], {}),
                    })
            else:
                cursor.execute("""
                    SELECT
                        "пїЅ?пїЅ?пїЅ>пїЅ?пїЅ?пїЅпїЅ" as Uslugi,
                        "пїЅ"пїЅ>пїЅпїЅ'пїЅпїЅ>пїЅ?пїЅ?пїЅ?пїЅ?пїЅ'пїЅ?" as Dlitelnost,
                        "пїЅпїЅпїЅпїЅ?пїЅ?пїЅ?пїЅ???" as Timur,
                        "пїЅ'пїЅ>пїЅпїЅпїЅ?пїЅпїЅ?пїЅпїЅ?пїЅ???" as Vladimir,
                        "пїЅ?пїЅ>пїЅпїЅ?пїЅпїЅпїЅ?'-" as Alina,
                        "пїЅ?пїЅ>пїЅпїЅпїЅ?пїЅпїЅпїЅпїЅ?пїЅ?" as Aleksey
                    FROM Cost
                """)
                cost_rows = cursor.fetchall()
                for row in cost_rows:
                    duration_match = re.search(r"(\\d+)", str(row["Dlitelnost"] or "0"))
                    duration = int(duration_match.group(1)) if duration_match else 0
                    prices = {}
                    for field, barber_name in COST_FIELD_TO_BARBER.items():
                        value = row[field]
                        if value is not None:
                            try:
                                prices[barber_name] = int(value)
                            except ValueError:
                                continue
                    services.append({
                        "id": str(uuid.uuid4()),
                        "name": row["Uslugi"],
                        "duration": duration,
                        "prices": prices,
                    })
        finally:
            conn.close()

    SERVICE_CACHE["data"] = services
    SERVICE_CACHE["ts"] = now_ts
    return services

def get_menu_photo_bytes() -> bytes:
    menu_path = DEFAULT_BARBER_IMAGES.get("menu")
    if menu_path and menu_path.exists():
        return menu_path.read_bytes()
    return IMAGE_BYTES

def get_barber_photo_bytes(barber_info: dict | None) -> bytes:
    avatar_path = None
    avatar_url = (barber_info or {}).get("avatarUrl")
    if avatar_url:
        candidate = Path(avatar_url)
        if not candidate.is_absolute():
            candidate = BASE_DIR / avatar_url.lstrip("/\\")
        avatar_path = candidate if candidate.exists() else None
    if not avatar_path:
        name = (barber_info or {}).get("name")
        fallback = DEFAULT_BARBER_IMAGES.get(name) or DEFAULT_BARBER_IMAGES.get("menu")
        if fallback and fallback.exists():
            avatar_path = fallback
    if avatar_path and avatar_path.exists():
        return avatar_path.read_bytes()
    return IMAGE_BYTES

def invalidate_services_cache():
    SERVICE_CACHE["data"] = []
    SERVICE_CACHE["ts"] = 0.0

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

# РР—РњР•РќР•РќРР•: РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕРїСЂРµРґРµР»СЏРµРј С‡Р°СЃРѕРІРѕР№ РїРѕСЏСЃ СЃРёСЃС‚РµРјС‹
try:
    ZONE = datetime.datetime.now().astimezone().tzinfo
except Exception:
    # Р—Р°РїР°СЃРЅРѕР№ РІР°СЂРёР°РЅС‚, РµСЃР»Рё Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРµ РѕРїСЂРµРґРµР»РµРЅРёРµ РЅРµ СЃСЂР°Р±РѕС‚Р°РµС‚
    ZONE = ZoneInfo("Europe/Chisinau")
PHONE_PATTERN = re.compile(r'^\+?\d{10,15}$')

def parse_appointment_start(date_str: str | None, time_str: str | None) -> datetime.datetime | None:
    """Р’РѕР·РІСЂР°С‰Р°РµС‚ datetime РЅР°С‡Р°Р»Р° Р·Р°РїРёСЃРё РёР· Р·РЅР°С‡РµРЅРёР№ Р‘Р”."""
    if not date_str or not time_str:
        return None

    start_part = time_str.split("-", 1)[0].strip()
    if not start_part:
        return None

    try:
        candidate = datetime.datetime.fromisoformat(f"{date_str}T{start_part}")
    except ValueError:
        try:
            candidate = datetime.datetime.strptime(f"{date_str} {start_part}", "%Y-%m-%d %H:%M")
        except ValueError:
            return None

    if candidate.tzinfo is None:
        return candidate.replace(tzinfo=ZONE) if ZONE else candidate
    return candidate.astimezone(ZONE) if ZONE else candidate



async def safe_upsert_menu(ctx, chat_id, msg_id, photo_bytes: bytes, caption: str, reply_markup):
    """Р‘РµР·РѕРїР°СЃРЅРѕ РѕР±РЅРѕРІР»СЏРµС‚ РёР»Рё РїРµСЂРµСЃРѕР·РґР°РµС‚ СЃРѕРѕР±С‰РµРЅРёРµ СЃ РјРµРЅСЋ."""
    try:
        media = InputMediaPhoto(io.BytesIO(photo_bytes), caption=caption, parse_mode="HTML")
        await ctx.bot.edit_message_media(
            chat_id=chat_id, message_id=msg_id,
            media=media, reply_markup=reply_markup
        )
    except BadRequest as e:
        if "message to edit not found" in str(e) or "Message is not modified" in str(e):
            try:
                await ctx.bot.delete_message(chat_id, msg_id)
            except:
                pass
            msg = await ctx.bot.send_photo(
                chat_id, photo_bytes,
                caption=caption, parse_mode="HTML",
                reply_markup=reply_markup
            )
            ctx.user_data['bot_msg'] = (chat_id, msg.message_id)
        else:
            logger.error(f"РћС€РёР±РєР° РїСЂРё РѕР±РЅРѕРІР»РµРЅРёРё РјРµРЅСЋ: {e}")

# --- Р›РѕРіРёРєР° РЅР°РїРѕРјРёРЅР°РЅРёР№ ---
async def reminder_checker_job(context: ContextTypes.DEFAULT_TYPE):
    """РџСЂРѕРІРµСЂСЏРµС‚ РїСЂРµРґСЃС‚РѕСЏС‰РёРµ Р·Р°РїРёСЃРё Рё РѕС‚РїСЂР°РІР»СЏРµС‚ РЅР°РїРѕРјРёРЅР°РЅРёСЏ."""
    conn = get_db_connection()
    if not conn: return
    try:
        now = datetime.datetime.now(tz=ZONE)
        today_str = now.strftime('%Y-%m-%d')
        logger.info(f"РџСЂРѕРІРµСЂРєР° РЅР°РїРѕРјРёРЅР°РЅРёР№ РЅР° {today_str}, С‚РµРєСѓС‰РµРµ РІСЂРµРјСЏ: {now.isoformat()}")

        # РџСЂРѕРІРµСЂСЏРµРј, РЅРµ РїРѕСЂР° Р»Рё РЅР°РїРѕРјРЅРёС‚СЊ РєР»РёРµРЅС‚Р°Рј Рѕ РЅРѕРІРѕР№ СЃС‚СЂРёР¶РєРµ
        monthly_cursor = conn.cursor()
        monthly_cursor.execute("SELECT TelegramID, LastHaircutReminderSent FROM Users WHERE TelegramID IS NOT NULL")
        monthly_users = monthly_cursor.fetchall()
        for user_row in monthly_users:
            telegram_id = user_row["TelegramID"]
            if not telegram_id:
                continue
            last_cursor = conn.cursor()
            last_cursor.execute("SELECT MAX(Date) FROM Appointments WHERE UserID = ? AND Status = 'Р—Р°РІРµСЂС€РµРЅР°'", (str(telegram_id),))
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
                        "Р’С‹ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ СЃРёР»СЊРЅРѕ РѕР±СЂРѕСЃР»Рё, РїСЂРµРґР»Р°РіР°РµРј РІР°Рј Р·Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° СЃС‚СЂРёР¶РєСѓ."
                    )
                    update_cursor = conn.cursor()
                    update_cursor.execute(
                        "UPDATE Users SET LastHaircutReminderSent = ? WHERE TelegramID = ?",
                        (last_haircut_raw, telegram_id)
                    )
                    conn.commit()
                    logger.info(f"РћС‚РїСЂР°РІР»РµРЅРѕ РµР¶РµРјРµСЃСЏС‡РЅРѕРµ РЅР°РїРѕРјРёРЅР°РЅРёРµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ {telegram_id}")
                except Exception as e:
                    logger.error(f"РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ РµР¶РµРјРµСЃСЏС‡РЅРѕРµ РЅР°РїРѕРјРёРЅР°РЅРёРµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ {telegram_id}: {e}")

        cursor = conn.cursor()
        # РР·РІР»РµРєР°РµРј С‚РѕР»СЊРєРѕ СЂРµР»РµРІР°РЅС‚РЅС‹Рµ Р·Р°РїРёСЃРё: Р°РєС‚РёРІРЅС‹Рµ Рё РЅР° РЎР•Р“РћР”РќРЇ
        cursor.execute("SELECT * FROM Appointments WHERE Status = 'РђРєС‚РёРІРЅР°СЏ' AND Date = ?", (today_str,))
        appts = [dict(row) for row in cursor.fetchall()]

        for appt in appts:
            rec_id = appt.get("id")
            date_s = appt.get("Date")
            time_s = appt.get("Time", "")

            if not time_s or "-" not in time_s: continue

            start_time_str = time_s.split("-")[0].strip()
            try:
                dt_str = f"{date_s}T{start_time_str}"
                appt_dt_naive = datetime.datetime.fromisoformat(dt_str)
                appt_dt = appt_dt_naive.replace(tzinfo=ZONE)
                delta = appt_dt - now
            except (ValueError, TypeError) as e:
                logger.error(f"РћС€РёР±РєР° РїР°СЂСЃРёРЅРіР° РґР°С‚С‹ РґР»СЏ Р·Р°РїРёСЃРё {rec_id}: {e}")
                continue

            # РћС‚РїСЂР°РІРєР° РЅР°РїРѕРјРёРЅР°РЅРёР№, РµСЃР»Рё РґРѕ Р·Р°РїРёСЃРё 2 С‡Р°СЃР° РёР»Рё РјРµРЅСЊС€Рµ (Рё РѕРЅР° РµС‰Рµ РЅРµ РїСЂРѕС€Р»Р°)
            if datetime.timedelta(0) <= delta <= datetime.timedelta(hours=2):
                # РќР°РїРѕРјРёРЅР°РЅРёРµ РєР»РёРµРЅС‚Сѓ
                if not appt.get("Reminder2hClientSent"):
                    user_id = appt.get("UserID")
                    if user_id:
                        try:
                            msg = (f"вЏ° РќР°РїРѕРјРёРЅР°РЅРёРµ: Сѓ РІР°СЃ СЃРµРіРѕРґРЅСЏ РІ {start_time_str} Р·Р°РїРёСЃСЊ Рє Р±Р°СЂР±РµСЂСѓ "
                                   f"<b>{appt.get('Barber')}</b>.")
                            await context.bot.send_message(user_id, msg, parse_mode="HTML")
                            # РСЃРїРѕР»СЊР·СѓРµРј РЅРѕРІС‹Р№ РєСѓСЂСЃРѕСЂ РґР»СЏ СЌС‚РѕРіРѕ РѕР±РЅРѕРІР»РµРЅРёСЏ, С‡С‚РѕР±С‹ РЅРµ РјРµС€Р°С‚СЊ РѕСЃРЅРѕРІРЅРѕРјСѓ С†РёРєР»Сѓ
                            update_cursor = conn.cursor()
                            update_cursor.execute("UPDATE Appointments SET Reminder2hClientSent = 1 WHERE id = ?", (rec_id,))
                            conn.commit()
                            logger.info(f"РћС‚РїСЂР°РІР»РµРЅРѕ РЅР°РїРѕРјРёРЅР°РЅРёРµ РєР»РёРµРЅС‚Сѓ РґР»СЏ Р·Р°РїРёСЃРё {rec_id}")
                        except Exception as e:
                            logger.error(f"РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ РЅР°РїРѕРјРёРЅР°РЅРёРµ РєР»РёРµРЅС‚Сѓ {user_id}: {e}")

                # РќР°РїРѕРјРёРЅР°РЅРёРµ Р±Р°СЂР±РµСЂСѓ
                if not appt.get("Reminder2hBarberSent"):
                    barber_name = appt.get("Barber")
                    barber_cursor = conn.cursor()
                    barber_cursor.execute("SELECT TelegramID FROM Users WHERE Barber = ?", (barber_name,))
                    barber_user = barber_cursor.fetchone()

                    if barber_user and barber_user["TelegramID"]:
                        try:
                            msg = (f"вЏ° РќР°РїРѕРјРёРЅР°РЅРёРµ: Сѓ РІР°СЃ СЃРµРіРѕРґРЅСЏ РІ {start_time_str} Р·Р°РїРёСЃСЊ.\n"
                                   f"РљР»РёРµРЅС‚: <b>{appt.get('CustomerName')}</b>\n"
                                   f"РўРµР»РµС„РѕРЅ: {appt.get('Phone')}")
                            await context.bot.send_message(barber_user["TelegramID"], msg, parse_mode="HTML")
                            # РСЃРїРѕР»СЊР·СѓРµРј РЅРѕРІС‹Р№ РєСѓСЂСЃРѕСЂ РґР»СЏ СЌС‚РѕРіРѕ РѕР±РЅРѕРІР»РµРЅРёСЏ
                            update_cursor = conn.cursor()
                            update_cursor.execute("UPDATE Appointments SET Reminder2hBarberSent = 1 WHERE id = ?", (rec_id,))
                            conn.commit()
                            logger.info(f"РћС‚РїСЂР°РІР»РµРЅРѕ РЅР°РїРѕРјРёРЅР°РЅРёРµ Р±Р°СЂР±РµСЂСѓ {barber_name} РґР»СЏ Р·Р°РїРёСЃРё {rec_id}")
                        except Exception as e:
                            logger.error(f"РќРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РїСЂР°РІРёС‚СЊ РЅР°РїРѕРјРёРЅР°РЅРёРµ Р±Р°СЂР±РµСЂСѓ {barber_name}: {e}")

    except sqlite3.Error as e:
        logger.error(f"РћС€РёР±РєР° Р‘Р” РІ reminder_checker_job: {e}")
    finally:
        if conn: conn.close()


# ---------- Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё (РїРµСЂРµРїРёСЃР°РЅРѕ РґР»СЏ SQLite) ----------
def is_barber(user_id: int) -> bool:
    """РџСЂРѕРІРµСЂСЏРµС‚, СЏРІР»СЏРµС‚СЃСЏ Р»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ Р±Р°СЂР±РµСЂРѕРј."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        # РџСЂРѕРІРµСЂСЏРµРј, РµСЃС‚СЊ Р»Рё Р·Р°РїРёСЃСЊ СЃ С‚Р°РєРёРј TelegramID Рё РЅРµРїСѓСЃС‚С‹Рј РїРѕР»РµРј Barber
        cursor.execute("SELECT 1 FROM Users WHERE TelegramID = ? AND Barber IS NOT NULL AND Barber != ''", (user_id,))
        return cursor.fetchone() is not None
    return False

def count_active_appts(user_id: str) -> int:
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Status FROM Appointments WHERE UserID = ?", (str(user_id),))
        rows = cursor.fetchall()
        return sum(1 for row in rows if status_is_active(row["Status"]))
    return 0

def get_last_haircut_date(user_id: str) -> str | None:
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT MAX(Date) FROM Appointments WHERE UserID = ? AND Status = 'Р—Р°РІРµСЂС€РµРЅР°'", (str(user_id),))
        result = cursor.fetchone()
        return result[0] if result and result[0] else None
    return None

def count_no_shows(user_id: str) -> int:
    with get_db_connection() as conn:
        threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM Appointments WHERE UserID = ? AND Status = 'РќРµСЏРІРєР°' AND Date >= ?", (str(user_id), threshold))
        return cursor.fetchone()[0]
    return 0

def purge_old_appts():
    with get_db_connection() as conn:
        threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Appointments WHERE Date < ?", (threshold,))
        conn.commit()
        logger.info("purge_old_appts: РЎС‚Р°СЂС‹Рµ Р·Р°РїРёСЃРё СѓРґР°Р»РµРЅС‹.")

def get_working_hours(barber: str, date_str: str) -> tuple[int, int] | None:
    """РџРѕР»СѓС‡Р°РµС‚ СЂР°Р±РѕС‡РёРµ С‡Р°СЃС‹ Р±Р°СЂР±РµСЂР° РЅР° РљРћРќРљР Р•РўРќРЈР® РґР°С‚Сѓ."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        # РџРѕРёСЃРє СЃС‚СЂРѕРіРѕ РїРѕ С‚РѕС‡РЅРѕР№ РґР°С‚Рµ. Р—Р°РїР°СЃРЅРѕР№ РІР°СЂРёР°РЅС‚ РїРѕ РґРЅСЋ РЅРµРґРµР»Рё СѓР±СЂР°РЅ.
        cursor.execute("SELECT Week FROM Schedules WHERE Barber = ? AND Date = ?", (barber, date_str))
        row = cursor.fetchone()
        if row and row['Week'] and row['Week'] != '0':
            return _parse_working_hours(row['Week'])
    # Р•СЃР»Рё РЅР° РєРѕРЅРєСЂРµС‚РЅСѓСЋ РґР°С‚Сѓ РЅРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ, Р·РЅР°С‡РёС‚ Р±Р°СЂР±РµСЂ РЅРµ СЂР°Р±РѕС‚Р°РµС‚.
    return None

def get_busy_intervals(barber: str, date_str: str) -> list[tuple[int, int]]:
    intervals = []
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Time, Status FROM Appointments WHERE Barber = ? AND Date = ?", (barber, date_str))
        rows = cursor.fetchall()
        for row in rows:
            status = row['Status']
            if not status_is_blocking(status):
                continue
            tf = (row['Time'] or '').strip()
            if '-' in tf:
                parsed = _parse_working_hours(tf)
                if parsed:
                    intervals.append(parsed)
    return intervals

def _parse_working_hours(wh: str) -> tuple[int,int] | None:
    if not wh or "-" not in wh: return None
    try:
        s, e = [p.strip() for p in wh.split("-", 1)]
        h1, m1 = map(int, s.split(":")); h2, m2 = map(int, e.split(":"))
        return (h1 * 60 + m1, h2 * 60 + m2)
    except Exception: return None

def can_fit(start_min: int, duration: int, intervals: list[tuple[int,int]]) -> bool:
    end_min = start_min + duration
    for b_s,b_e in intervals:
        if start_min < b_e and end_min > b_s: return False
    return end_min <= 24*60

def main_menu_kb(user_id: int):
    """Генерирует клавиатуру главного меню в зависимости от состояния пользователя."""
    book_button = InlineKeyboardButton("✂️ Записаться", callback_data="menu_book")
    limit = get_booking_limit()

    if not is_barber(user_id) and count_active_appts(str(user_id)) >= limit:
        book_button = InlineKeyboardButton("✂️ Лимит записей", callback_data="book_unavailable")

    return InlineKeyboardMarkup([
        [book_button,
         InlineKeyboardButton("📅 Мои записи", callback_data="menu_show")],
        [InlineKeyboardButton("👤 Профиль", callback_data="menu_profile"),
         InlineKeyboardButton("ℹ️ О нас",   callback_data="menu_about")]
    ])

async def book_unavailable_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Сообщает пользователю, почему запись недоступна."""
    query = update.callback_query
    limit = get_booking_limit()
    await query.answer(f"❌ У вас уже есть {limit} активных записей. Отмените одну, чтобы записаться снова.", show_alert=True)
    return MENU

def contact_kb():
    return ReplyKeyboardMarkup(
        [[KeyboardButton("рџ“І РџРѕРґРµР»РёС‚СЊСЃСЏ РєРѕРЅС‚Р°РєС‚РѕРј", request_contact=True)]],
        resize_keyboard=True, one_time_keyboard=True
    )

# ---------- РћР±СЂР°Р±РѕС‚С‡РёРєРё ----------
async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Приветствие и точка входа /start."""
    user_id = update.effective_user.id
    registered = False
    settings = load_bot_settings()
    description = settings.get('botDescription') or "Добро пожаловать в Barber Bot!"

    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT 1 FROM Users WHERE TelegramID = ?", (user_id,))
        if cursor.fetchone():
            registered = True

    caption = description if registered else f"{description}\n\nСначала расскажите о себе."

    msg = await update.message.reply_photo(
        IMAGE_BYTES,
        caption=caption,
        parse_mode="HTML",
        reply_markup=main_menu_kb(user_id) if registered else None
    )
    ctx.user_data['bot_msg'] = (update.effective_chat.id, msg.message_id)
    await update.message.delete()
    return MENU if registered else REG_NAME

async def reg_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    name = update.message.text.strip()
    if len(name.split()) < 2:
        await update.message.reply_text("РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ РёРјСЏ Рё С„Р°РјРёР»РёСЋ.")
        return REG_NAME
    ctx.user_data['name'] = name
    chat_id, msg_id = ctx.user_data['bot_msg']
    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "<b>2пёЏвѓЈ РЈРєР°Р¶РёС‚Рµ РІР°С€ РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР°:</b>", None)
    await update.message.delete()
    sent = await ctx.bot.send_message(chat_id, "РќР°Р¶РјРёС‚Рµ РЅР° РєРЅРѕРїРєСѓ РЅРёР¶Рµ РёР»Рё РІРІРµРґРёС‚Рµ РЅРѕРјРµСЂ РІСЂСѓС‡РЅСѓСЋ:", reply_markup=contact_kb())
    ctx.user_data['last_prompt'] = sent.message_id
    return REG_PHONE

async def reg_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Сохраняет телефон и завершает регистрацию пользователя."""
    phone = update.message.contact.phone_number if update.message.contact else update.message.text.strip()
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("Неверный формат, например +71234567890.")
        return REG_PHONE

    user_id = update.effective_user.id
    name = ctx.user_data.get('name')

    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM Users WHERE TelegramID = ?", (user_id,))
        existing = cursor.fetchone()
        if existing:
            cursor.execute("UPDATE Users SET Name = ?, Phone = ? WHERE id = ?", (name, phone, existing['id']))
        else:
            cursor.execute(
                "INSERT INTO Users (id, TelegramID, Name, Phone) VALUES (?, ?, ?, ?)",
                (str(uuid.uuid4()), user_id, name, phone)
            )
        conn.commit()

    chat_id, msg_id = ctx.user_data['bot_msg']
    await safe_upsert_menu(
        ctx,
        chat_id,
        msg_id,
        IMAGE_BYTES,
        "🎉 Контакт сохранён!\n\nВыберите действие:",
        main_menu_kb(user_id)
    )
    await update.message.delete()
    if 'last_prompt' in ctx.user_data:
        try:
            await ctx.bot.delete_message(chat_id, ctx.user_data.get('last_prompt'))
        except BadRequest:
            pass
    return MENU

async def show_profile(ctx: ContextTypes.DEFAULT_TYPE, chat_id: int, msg_id: int, user_id: int):
    user_data = None
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT Name, Phone FROM Users WHERE TelegramID = ?", (user_id,))
        rec = cursor.fetchone()
        if rec:
            user_data = dict(rec)

    if not user_data:
        await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "вќЊ РќРµ СѓРґР°Р»РѕСЃСЊ РЅР°Р№С‚Рё РІР°С€ РїСЂРѕС„РёР»СЊ. РџРѕРїСЂРѕР±СѓР№С‚Рµ /start.", main_menu_kb(user_id))
        return

    last = get_last_haircut_date(str(user_id)) or "вЂ”"
    active = count_active_appts(str(user_id))
    warns = count_no_shows(str(user_id))

    text = (
        f"<b>рџ‘¤ РџСЂРѕС„РёР»СЊ</b>\n\n"
        f"<b>РРјСЏ:</b> {user_data.get('Name','вЂ”')}\n"
        f"<b>РўРµР»РµС„РѕРЅ:</b> {user_data.get('Phone','вЂ”')}\n\n"
        f"<b>РџРѕСЃР»РµРґРЅСЏСЏ СЃС‚СЂРёР¶РєР°:</b> {last}\n"
        f"<b>РђРєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№:</b> {active}\n"
        f"<b>РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ:</b> {warns}\n\n"
        f"<i>вќ— 3 РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ вЂ” Р±Р»РѕРєРёСЂРѕРІРєР° Р·Р°РїРёСЃРё.</i>"
    )
    kb = InlineKeyboardMarkup([
        [
            InlineKeyboardButton("вњЏпёЏ РЎРјРµРЅРёС‚СЊ РёРјСЏ",   callback_data="profile_change_name"),
            InlineKeyboardButton("вњЏпёЏ РЎРјРµРЅРёС‚СЊ РЅРѕРјРµСЂ", callback_data="profile_change")
        ],
        [InlineKeyboardButton("рџ”™ Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", callback_data="menu_main")]
    ])
    await safe_upsert_menu(ctx, chat_id, msg_id, photo_bytes=IMAGE_BYTES, caption=text, reply_markup=kb)

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

    if not user_is_barber:
        no_shows = count_no_shows(user_id_str)
        if no_shows >= 3:
            await query.answer(f"❌ Запись заблокирована. У вас {no_shows} предупреждения за неявку.", show_alert=True)
            return MENU

        if count_active_appts(user_id_str) >= limit:
            await query.answer(f"❌ У вас уже есть {limit} активные записи. Отмените одну, чтобы записаться снова.", show_alert=True)
            return MENU

    active_barbers = [b for b in load_barbers() if b.get('isActive', True)]
    if not active_barbers:
        await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES,
                               "❗ Нет активных барберов. Добавьте барберов в панели.",
                               main_menu_kb(user_id))
        return MENU

    ctx.user_data['barbers_lookup'] = {barber['id']: barber for barber in load_barbers(include_inactive=True)}

    kb = [
        [InlineKeyboardButton(f"{barber['name']} {barber.get('rating', '')}".strip(), callback_data=f"book_barber|{barber['id']}")]
        for barber in active_barbers
    ]
    kb.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])

    await safe_upsert_menu(
        ctx, chat_id, msg_id,
        photo_bytes=get_menu_photo_bytes(),
        caption="<b>1-й шаг: выберите барбера:</b>",
        reply_markup=InlineKeyboardMarkup(kb)
    )
    return BOOK_BARBER

async def menu_profile_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """РћР±СЂР°Р±Р°С‚С‹РІР°РµС‚ РЅР°Р¶Р°С‚РёРµ РєРЅРѕРїРєРё 'РџСЂРѕС„РёР»СЊ'."""
    query = update.callback_query
    await query.answer()
    await show_profile(ctx, query.message.chat_id, query.message.message_id, query.from_user.id)
    return MENU

async def menu_about_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Показывает раздел "О нас" на основе данных с сайта."""
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    msg_id = query.message.message_id

    settings = load_bot_settings()
    about_text = get_bot_message('menu_about', settings.get('aboutText') or "Панель Brothers Shop синхронизирована с ботом.")

    about_img_path = BASE_DIR / "Image" / "about.jpg"
    try:
        about_bytes = about_img_path.read_bytes()
    except Exception:
        about_bytes = IMAGE_BYTES

    await safe_upsert_menu(ctx, chat_id, msg_id, photo_bytes=about_bytes,
                           caption=about_text,
                           reply_markup=main_menu_kb(query.from_user.id))
    return MENU

async def menu_main_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """Возвращает пользователя в главное меню."""
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    msg_id = query.message.message_id
    description = load_bot_settings().get('botDescription') or "Главное меню"
    caption = f"<b>{description}</b>\n\nВыберите нужный раздел:"
    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, caption, main_menu_kb(query.from_user.id))
    return MENU

async def show_records(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """РћС‚РѕР±СЂР°Р¶Р°РµС‚ Р·Р°РїРёСЃРё РґР»СЏ РєР»РёРµРЅС‚Р° РёР»Рё РґР»СЏ Р±Р°СЂР±РµСЂР°."""
    query = update.callback_query
    await query.answer()
    user_id = query.from_user.id
    chat_id, msg_id = query.message.chat_id, query.message.message_id

    with get_db_connection() as conn:
        cursor = conn.cursor()

        # РџСЂРѕРІРµСЂСЏРµРј, СЏРІР»СЏРµС‚СЃСЏ Р»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ Р±Р°СЂР±РµСЂРѕРј
        cursor.execute("SELECT Barber FROM Users WHERE TelegramID = ?", (user_id,))
        barber_record = cursor.fetchone()

        # РЎС†РµРЅР°СЂРёР№ РґР»СЏ Р‘РђР Р‘Р•Р Рђ
        if barber_record and barber_record['Barber']:
            barber_name = barber_record['Barber']
            cursor.execute(
                "SELECT * FROM Appointments WHERE Barber = ? AND Status = 'РђРєС‚РёРІРЅР°СЏ' ORDER BY Date, Time",
                (barber_name,)
            )
            recs = cursor.fetchall()

            if not recs:
                await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "РЈ РІР°СЃ РЅРµС‚ РїСЂРµРґСЃС‚РѕСЏС‰РёС… Р·Р°РїРёСЃРµР№.", main_menu_kb(user_id))
                return MENU

            text = f"<b>Р—Р°РїРёСЃРё РґР»СЏ Р±Р°СЂР±РµСЂР° {barber_name}:</b>\n"
            for i, r in enumerate(recs, 1):
                f = dict(r)
                text += (f"\n{i}. <b>{f['Date']} {f['Time']}</b>\n"
                         f"   РљР»РёРµРЅС‚: {f.get('CustomerName', 'РЅРµ СѓРєР°Р·Р°РЅ')}\n"
                         f"   РўРµР»РµС„РѕРЅ: {f.get('Phone', 'РЅРµ СѓРєР°Р·Р°РЅ')}\n"
                         f"   РЈСЃР»СѓРіРё: {f.get('Services', 'РЅРµ СѓРєР°Р·Р°РЅС‹')}\n")

            kb = [[InlineKeyboardButton("рџ”™ Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", callback_data="menu_main")]]
            await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, text, InlineKeyboardMarkup(kb))
            return SHOW_RECORDS

        # РЎС†РµРЅР°СЂРёР№ РґР»СЏ РљР›РР•РќРўРђ (СЃСѓС‰РµСЃС‚РІСѓСЋС‰Р°СЏ Р»РѕРіРёРєР°)
        else:
            cursor.execute("SELECT * FROM Appointments WHERE UserID = ? AND Status = 'РђРєС‚РёРІРЅР°СЏ' ORDER BY Date, Time", (str(user_id),))
            recs = cursor.fetchall()

            if not recs:
                await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "РЈ РІР°СЃ РЅРµС‚ Р°РєС‚РёРІРЅС‹С… Р·Р°РїРёСЃРµР№.", main_menu_kb(user_id))
                return MENU

            text = "<b>Р’Р°С€Рё Р°РєС‚РёРІРЅС‹Рµ Р·Р°РїРёСЃРё:</b>\n"
            kb = []
            for i, r in enumerate(recs, 1):
                f = dict(r)
                text += f"\n{i}. {f['Date']} {f['Time']} Рє <b>{f['Barber']}</b>\n  РЈСЃР»СѓРіРё: {f.get('Services', 'РЅРµ СѓРєР°Р·Р°РЅС‹')}"
                kb.append([InlineKeyboardButton(f"вќЊ РћС‚РјРµРЅРёС‚СЊ Р·Р°РїРёСЃСЊ в„–{i}", callback_data=f"cancel|{f['id']}")])

            kb.append([InlineKeyboardButton("рџ”™ Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ", callback_data="menu_main")])
            await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, text, InlineKeyboardMarkup(kb))
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
        await query.answer("Р—Р°РїРёСЃСЊ РЅРµ РЅР°Р№РґРµРЅР°.", show_alert=True)
        return SHOW_RECORDS

    appt_start = parse_appointment_start(rec["Date"], rec["Time"])
    if appt_start:
        now = datetime.datetime.now(tz=ZONE)
        if appt_start - now < datetime.timedelta(hours=2):
            await query.answer("Р—Р°РїРёСЃСЊ РЅРµР»СЊР·СЏ РѕС‚РјРµРЅРёС‚СЊ РјРµРЅРµРµ С‡РµРј Р·Р° 2 С‡Р°СЃР° РґРѕ РІСЂРµРјРµРЅРё РїСЂРёРµРјР°.", show_alert=True)
            return SHOW_RECORDS

    caption = f"РћС‚РјРµРЅРёС‚СЊ Р·Р°РїРёСЃСЊ Сѓ <b>{rec['Barber']}</b>\n{rec['Date']} {rec['Time']}?"
    kb = InlineKeyboardMarkup([
        [InlineKeyboardButton("вњ… Р”Р°, РѕС‚РјРµРЅРёС‚СЊ", callback_data=f"cancel_confirm|{rec_id}|yes")],
        [InlineKeyboardButton("в¬…пёЏ РќР°Р·Р°Рґ", callback_data="menu_show")]
    ])
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return CANCEL_CONFIRM


async def cancel_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, rec_id, choice = query.data.split("|")
    chat_id, msg_id = query.message.chat_id, query.message.message_id

    if choice == "yes":
        deny_text = "Р—Р°РїРёСЃСЊ РЅРµР»СЊР·СЏ РѕС‚РјРµРЅРёС‚СЊ РјРµРЅРµРµ С‡РµРј Р·Р° 2 С‡Р°СЃР° РґРѕ РІСЂРµРјРµРЅРё РїСЂРёРµРјР°."
        with get_db_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Appointments WHERE id = ?", (rec_id,))
            rec = cursor.fetchone()

            if not rec:
                res_text = "Р—Р°РїРёСЃСЊ РЅРµ РЅР°Р№РґРµРЅР°."
            else:
                appt_start = parse_appointment_start(rec["Date"], rec["Time"])
                now = datetime.datetime.now(tz=ZONE)
                if appt_start and appt_start - now < datetime.timedelta(hours=2):
                    await query.answer(deny_text, show_alert=True)
                    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, deny_text, main_menu_kb(query.from_user.id))
                    return MENU
                cursor.execute("UPDATE Appointments SET Status = 'РћС‚РјРµРЅРµРЅР°' WHERE id = ?", (rec_id,))
                conn.commit()
                res_text = "Р“РѕС‚РѕРІРѕ: Р·Р°РїРёСЃСЊ РѕС‚РјРµРЅРµРЅР°."
    else:
        res_text = "РћС‚РјРµРЅР° РѕС‚РјРµРЅРµРЅР°."

    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, res_text, main_menu_kb(query.from_user.id))
    return MENU

async def profile_change_name_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    last_changed = None
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT LastNameChanged FROM Users WHERE TelegramID = ?", (query.from_user.id,))
        rec = cursor.fetchone()
        if rec:
            last_changed = rec["LastNameChanged"]
    if last_changed:
        try:
            last_date = datetime.date.fromisoformat(last_changed)
            days = (datetime.date.today() - last_date).days
            if days < 7:
                await query.answer(f"РЎРјРµРЅРёС‚СЊ РёРјСЏ РјРѕР¶РЅРѕ РЅРµ С‡Р°С‰Рµ СЂР°Р·Р° РІ РЅРµРґРµР»СЋ.\nРџСЂРѕС€Р»Рѕ С‚РѕР»СЊРєРѕ {days} РґРЅ.", show_alert=True)
                return MENU
        except (ValueError, TypeError):
             pass # РРіРЅРѕСЂРёСЂСѓРµРј РЅРµРєРѕСЂСЂРµРєС‚РЅСѓСЋ РґР°С‚Сѓ
    await safe_upsert_menu(ctx, *ctx.user_data['bot_msg'], photo_bytes=IMAGE_BYTES, caption="<b>Р’РІРµРґРёС‚Рµ РЅРѕРІРѕРµ Р¤РРћ:</b>", reply_markup=None)
    return CHANGE_NAME

async def change_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    new_name = update.message.text.strip()
    if len(new_name.split()) < 2:
        await update.message.reply_text("Р’РІРµРґРёС‚Рµ РїРѕР»РЅРѕРµ Р¤РРћ (РёРјСЏ Рё С„Р°РјРёР»РёСЏ).")
        return CHANGE_NAME
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE Users SET Name = ?, LastNameChanged = ? WHERE TelegramID = ?", (new_name, datetime.date.today().isoformat(), update.effective_user.id))
        conn.commit()
    chat_id, msg_id = ctx.user_data['bot_msg']
    await update.message.delete()
    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU

async def profile_change_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "<b>РЎРјРµРЅРёС‚СЊ РЅРѕРјРµСЂ</b>\nРџРѕРґРµР»РёС‚РµСЃСЊ РєРѕРЅС‚Р°РєС‚РѕРј РёР»Рё РІРІРµРґРёС‚Рµ РІСЂСѓС‡РЅСѓСЋ:", None)
    sent = await ctx.bot.send_message(chat_id, "Р’РІРµРґРёС‚Рµ РЅРѕРІС‹Р№ РЅРѕРјРµСЂ:", reply_markup=contact_kb())
    ctx.user_data['last_prompt'] = sent.message_id
    return CHANGE_PHONE

async def change_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    phone = update.message.contact.phone_number if update.message.contact else update.message.text.strip()
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("РќРµРІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚, РЅР°РїСЂРёРјРµСЂ +71234567890.")
        return CHANGE_PHONE
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE Users SET Phone = ? WHERE TelegramID = ?", (phone, update.effective_user.id))
        conn.commit()
    chat_id = update.effective_chat.id
    await update.message.delete()
    if 'last_prompt' in ctx.user_data:
        await ctx.bot.delete_message(chat_id, ctx.user_data.get('last_prompt'))
    chat_id, msg_id = ctx.user_data['bot_msg']
    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU



def build_services_view(ctx) -> tuple[str, InlineKeyboardMarkup]:
    """Формирует текст и клавиатуру выбора услуг для выбранного барбера."""
    services = ctx.user_data.get('all_services', [])
    barber = ctx.user_data.get('barber') or {}
    barber_name = barber.get('name')
    selected = ctx.user_data.setdefault('selected_services', set())

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
        buttons.append([
            InlineKeyboardButton(
                f"{mark} {name} ({duration} мин) — {price}₽",
                callback_data=f"svc_toggle|{name}"
            )
        ])

    buttons.append([
        InlineKeyboardButton("⬅ Назад", callback_data="book_back_barber"),
        InlineKeyboardButton("✅ Готово", callback_data="svc_done")
    ])
    buttons.append([
        InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")
    ])

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
    await query.answer()
    _, barber_token = query.data.split("|", 1)

    barbers_lookup = ctx.user_data.get('barbers_lookup')
    if not barbers_lookup:
        barbers_lookup = {barber['id']: barber for barber in load_barbers(include_inactive=True)}
        ctx.user_data['barbers_lookup'] = barbers_lookup

    selected = barbers_lookup.get(barber_token)
    if not selected:
        # fallback по имени (на случай старых callback_data)
        for barber in barbers_lookup.values():
            if barber.get('name') == barber_token:
                selected = barber
                break

    if not selected:
        await query.answer("Барбер не найден. Обновите панель.", show_alert=True)
        return MENU

    ctx.user_data['barber'] = selected

    services = load_services()
    ctx.user_data['all_services'] = services
    ctx.user_data['selected_services'] = set()
    ctx.user_data.pop('services_list', None)
    ctx.user_data.pop('total_duration', None)
    ctx.user_data.pop('date', None)
    ctx.user_data.pop('time_range', None)

    has_available = any((svc["prices"].get(selected['name']) or 0) > 0 for svc in services)
    if not has_available:
        await safe_upsert_menu(ctx, *ctx.user_data['bot_msg'], photo_bytes=IMAGE_BYTES,
                               caption=f"❗ У барбера {selected['name']} пока нет доступных услуг.",
                               reply_markup=main_menu_kb(query.from_user.id))
        return MENU

    caption, markup = build_services_view(ctx)
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    img_bytes = get_barber_photo_bytes(selected)
    await safe_upsert_menu(ctx, chat_id, msg_id, photo_bytes=img_bytes, caption=caption, reply_markup=markup)
    return SELECT_SERVICES

async def svc_toggle_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, svc_name = query.data.split("|", 1)
    selected = ctx.user_data.setdefault('selected_services', set())
    if svc_name in selected:
        selected.remove(svc_name)
    else:
        selected.add(svc_name)

    caption, markup = build_services_view(ctx)
    await query.edit_message_caption(caption, reply_markup=markup, parse_mode="HTML")
    return SELECT_SERVICES



async def book_back_barber_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    for key in ('barber', 'all_services', 'selected_services', 'services_list', 'total_duration', 'date', 'time_range'):
        ctx.user_data.pop(key, None)
    return await menu_book_cb(update, ctx)

async def book_back_services_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    ctx.user_data.pop('services_list', None)
    ctx.user_data.pop('total_duration', None)
    ctx.user_data.pop('date', None)
    ctx.user_data.pop('time_range', None)

    caption, markup = build_services_view(ctx)
    await query.edit_message_caption(caption, reply_markup=markup, parse_mode="HTML")
    return SELECT_SERVICES


async def show_available_dates(query, ctx) -> int:
    total_min = ctx.user_data.get('total_duration')
    if not total_min:
        await query.answer("Сначала выберите услуги.", show_alert=True)
        return SELECT_SERVICES

    barber = ctx.user_data.get('barber')
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
        working_hours = get_working_hours(barber['name'], date_str)
        if not working_hours:
            continue
        start_day, end_day = working_hours
        busy = get_busy_intervals(barber['name'], date_str)
        has_slot = False
        for minute in range(start_day, end_day - total_min + 1, 60):
            slot_dt_naive = datetime.datetime.fromisoformat(f"{date_str}T{minute//60:02d}:{minute%60:02d}")
            slot_dt = slot_dt_naive.replace(tzinfo=ZONE)
            if slot_dt >= min_allowed and can_fit(minute, total_min, busy):
                has_slot = True
                break
        if has_slot:
            available_dates.append(date_str)

    if not available_dates:
        await safe_upsert_menu(ctx, *ctx.user_data['bot_msg'], photo_bytes=IMAGE_BYTES,
                               caption="? На ближайшие дни свободных слотов нет.",
                               reply_markup=main_menu_kb(query.from_user.id))
        return MENU

    rows: list[list[InlineKeyboardButton]] = []
    for i in range(0, len(available_dates), 4):
        chunk = available_dates[i:i+4]
        rows.append([
            InlineKeyboardButton(f"{d[8:]}.{d[5:7]}", callback_data=f"book_date|{d}")
            for d in chunk
        ])
    rows.append([InlineKeyboardButton("? Назад", callback_data="book_back_services")])
    rows.append([InlineKeyboardButton("?? Главное меню", callback_data="menu_main")])

    caption = f"<b>3-й шаг: выберите дату:</b>\n\nДлительность: <b>{total_min} мин</b>"
    await query.answer()
    await ctx.bot.edit_message_caption(
        chat_id=query.message.chat_id,
        message_id=query.message.message_id,
        caption=caption,
        reply_markup=InlineKeyboardMarkup(rows),
        parse_mode="HTML"
    )
    return BOOK_DATE

async def show_available_times(query, ctx) -> int:
    total = ctx.user_data.get('total_duration')
    date = ctx.user_data.get('date')
    barber = ctx.user_data.get('barber')

    if not total or not date or not barber:
        await query.answer("Сначала выберите дату и услуги.", show_alert=True)
        return BOOK_DATE

    working_hours = get_working_hours(barber['name'], date)
    if not working_hours:
        await query.answer("На эту дату нет расписания.", show_alert=True)
        return BOOK_DATE

    start_day, end_day = working_hours
    busy = get_busy_intervals(barber['name'], date)

    buttons: list[InlineKeyboardButton] = []
    now = datetime.datetime.now(tz=ZONE)
    min_allowed = now + datetime.timedelta(hours=get_min_lead_hours())

    for minute in range(start_day, end_day - total + 1, 60):
        slot_dt_naive = datetime.datetime.fromisoformat(f"{date}T{minute//60:02d}:{minute%60:02d}")
        slot_dt = slot_dt_naive.replace(tzinfo=ZONE)
        if slot_dt >= min_allowed and can_fit(minute, total, busy):
            t = f"{minute//60:02d}:{minute%60:02d}"
            buttons.append(InlineKeyboardButton(t, callback_data=f"book_time|{t}"))

    if not buttons:
        await query.answer("Нет свободных окон на выбранный день.", show_alert=True)
        return BOOK_DATE

    rows = [buttons[i:i+4] for i in range(0, len(buttons), 4)]
    rows.append([InlineKeyboardButton("⬅ Назад", callback_data="book_back_dates")])
    rows.append([InlineKeyboardButton("🏠 Главное меню", callback_data="menu_main")])

    await query.answer()
    await query.edit_message_caption("<b>4-й шаг: выберите время:</b>", reply_markup=InlineKeyboardMarkup(rows), parse_mode="HTML")
    return BOOK_TIME

async def svc_done_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    chat_id, msg_id = query.message.chat_id, query.message.message_id
    selected = ctx.user_data.get('selected_services')
    if not selected:
        await query.answer("РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІС‹Р±РµСЂРёС‚Рµ С…РѕС‚СЏ Р±С‹ РѕРґРЅСѓ СѓСЃР»СѓРіСѓ.", show_alert=True)
        return SELECT_SERVICES

    services = ctx.user_data['all_services']
    ctx.user_data['services_list'] = list(selected)
    total_min = sum(svc["duration"] for svc in services if svc["name"] in selected)
    ctx.user_data['total_duration'] = total_min

    await query.answer()
    await ctx.bot.edit_message_caption(chat_id=chat_id, message_id=msg_id,
                                       caption="вЏі РџРѕРґР±РёСЂР°РµРј СЃРІРѕР±РѕРґРЅС‹Рµ РґР°С‚С‹...",
                                       parse_mode="HTML")

    return await show_available_dates(query, ctx)


async def book_date_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    _, date = query.data.split("|", 1)
    ctx.user_data['date'] = date
    ctx.user_data.pop('time_range', None)
    return await show_available_times(query, ctx)



async def book_back_dates_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    ctx.user_data.pop('time_range', None)
    return await show_available_dates(query, ctx)

async def book_time_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    _, start = query.data.split("|", 1)
    dt_start = datetime.datetime.fromisoformat(f"{ctx.user_data['date']}T{start}")
    total = ctx.user_data['total_duration']
    dt_end = dt_start + datetime.timedelta(minutes=total)
    ctx.user_data['time_range'] = f"{start} - {dt_end.time().strftime('%H:%M')}"

    barber_info = ctx.user_data.get('barber') or {}
    barber_name = barber_info.get('name', ctx.user_data.get('barber'))
    svc_text = "\n".join(f"- {s}" for s in ctx.user_data['services_list'])
    caption = (
        f"<b>5-й шаг: Подтвердите запись:</b>\n\n"
        f"<b>Барбер:</b> {barber_name}\n"
        f"<b>Услуги:</b>\n{svc_text}\n"
        f"<b>Дата:</b> {ctx.user_data['date']}\n"
        f"<b>Время:</b> {ctx.user_data['time_range']}"
    )
    kb = InlineKeyboardMarkup([
        [InlineKeyboardButton("⬅ Назад", callback_data="book_back_time")],
        [InlineKeyboardButton("✅ Подтвердить", callback_data="book_confirm|yes")],
        [InlineKeyboardButton("❌ Отменить", callback_data="book_confirm|no")],
    ])
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return BOOK_CONFIRM

async def book_back_time_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    ctx.user_data.pop('time_range', None)
    return await show_available_times(query, ctx)

async def book_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """РџРѕРґС‚РІРµСЂР¶РґР°РµС‚ Рё СЃРѕС…СЂР°РЅСЏРµС‚ Р·Р°РїРёСЃСЊ РІ Р‘Р”."""
    query = update.callback_query
    await query.answer()
    choice = query.data.split("|", 1)[1]
    chat_id, msg_id = query.message.chat_id, query.message.message_id

    if choice == "yes":
        user_id = query.from_user.id
        barber_info = ctx.user_data.get('barber') or {}
        barber_name = barber_info.get('name', ctx.user_data.get('barber'))
        appointment_date = ctx.user_data['date']
        time_range = ctx.user_data['time_range']
        services_str = ", ".join(ctx.user_data['services_list'])
        barber_chat_id = None
        new_id = str(uuid.uuid4())
        with get_db_connection() as conn:
            cursor = conn.cursor()
            if 'name' not in ctx.user_data or 'phone' not in ctx.user_data:
                cursor.execute("SELECT Name, Phone FROM Users WHERE TelegramID = ?", (user_id,))
                user_rec = cursor.fetchone()
                if user_rec:
                    ctx.user_data['name'] = user_rec['Name']
                    ctx.user_data['phone'] = user_rec['Phone']
                else:
                    await query.edit_message_caption("РћС€РёР±РєР°: РІР°С€ РїСЂРѕС„РёР»СЊ РЅРµ РЅР°Р№РґРµРЅ. РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РїСЂРѕР№РґРёС‚Рµ СЂРµРіРёСЃС‚СЂР°С†РёСЋ РєРѕРјР°РЅРґРѕР№ /start.", parse_mode="HTML")
                    return ConversationHandler.END
            record_tuple = (
                new_id, str(user_id), ctx.user_data.get('name'), ctx.user_data.get('phone'),
                barber_name, appointment_date, time_range,
                'РђРєС‚РёРІРЅР°СЏ', services_str, False, False
            )
            cursor.execute(
                "INSERT INTO Appointments (id, UserID, CustomerName, Phone, Barber, Date, Time, Status, Services, Reminder2hClientSent, Reminder2hBarberSent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                record_tuple
            )
            conn.commit()
            barber_cursor = conn.cursor()
            barber_cursor.execute("SELECT TelegramID FROM Users WHERE Barber = ?", (barber_name,))
            barber_record = barber_cursor.fetchone()
            if barber_record and barber_record['TelegramID']:
                barber_chat_id = barber_record['TelegramID']

        barber_notified = False
        if barber_chat_id:
            start_time = time_range.split(' - ')[0] if ' - ' in time_range else time_range
            try:
                barber_message = (
                    f"РќРѕРІР°СЏ Р·Р°РїРёСЃСЊ: {appointment_date} {start_time}.\n"
                    f"РљР»РёРµРЅС‚: <b>{ctx.user_data.get('name')}</b>\n"
                    f"РўРµР»РµС„РѕРЅ: {ctx.user_data.get('phone')}\n"
                    f"РЈСЃР»СѓРіРё: {services_str}"
                )
                await ctx.bot.send_message(barber_chat_id, barber_message, parse_mode="HTML")
                barber_notified = True
            except Exception as e:
                logger.error(f"РќРµ СѓРґР°Р»РѕСЃСЊ СѓРІРµРґРѕРјРёС‚СЊ Р±Р°СЂР±РµСЂР° {barber_name}: {e}")

        if barber_notified:
            with get_db_connection() as conn:
                update_cursor = conn.cursor()
                update_cursor.execute("UPDATE Appointments SET Reminder2hBarberSent = 1 WHERE id = ?", (new_id,))
                conn.commit()

        res = "вњ… Р—Р°РїРёСЃСЊ СѓСЃРїРµС€РЅРѕ РѕС„РѕСЂРјР»РµРЅР°!\nРњС‹ РЅР°РїРѕРјРЅРёРј Р·Р° 2 С‡Р°СЃР° РґРѕ РЅР°С‡Р°Р»Р°."
        await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, res, main_menu_kb(query.from_user.id))

    else:
        await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "Р—Р°РїРёСЃСЊ РѕС‚РјРµРЅРµРЅР°.", main_menu_kb(query.from_user.id))
    return MENU

def main():
    """Р—Р°РїСѓСЃРєР°РµС‚ Р±РѕС‚Р°."""
    # РЎРѕР·РґР°РµРј РѕР±СЉРµРєС‚ РґР»СЏ СЃРѕС…СЂР°РЅРµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ, С‡С‚РѕР±С‹ РєРЅРѕРїРєРё СЂР°Р±РѕС‚Р°Р»Рё РїРѕСЃР»Рµ РїРµСЂРµР·Р°РїСѓСЃРєР°
    persistence = PicklePersistence(filepath=BASE_DIR / "bot_persistence.pickle")

    # РџРµСЂРµРґР°РµРј РµРіРѕ РІ ApplicationBuilder
    app = ApplicationBuilder().token(TOKEN).persistence(persistence).build()

    try:
        # РџСЂРё Р·Р°РїСѓСЃРєРµ СѓРґР°Р»СЏРµРј СЃС‚Р°СЂС‹Рµ Р·Р°РїРёСЃРё, РєРѕС‚РѕСЂС‹Рј Р±РѕР»СЊС€Рµ 90 РґРЅРµР№
        purge_old_appts()
    except Exception as e:
        logger.exception(f"РћС€РёР±РєР° РїСЂРё РїРµСЂРІРёС‡РЅРѕР№ РѕС‡РёСЃС‚РєРµ СЃС‚Р°СЂС‹С… Р·Р°РїРёСЃРµР№: {e}")

    # РџР»Р°РЅРёСЂСѓРµРј Р·Р°РґР°С‡Сѓ РґР»СЏ РѕС‚РїСЂР°РІРєРё РЅР°РїРѕРјРёРЅР°РЅРёР№
    if app.job_queue:
        # Р—Р°РїСѓСЃРєР°РµРј Р·Р°РґР°С‡Сѓ РєР°Р¶РґС‹Рµ 10 РјРёРЅСѓС‚ (600 СЃРµРєСѓРЅРґ)
        app.job_queue.run_repeating(reminder_checker_job, interval=600, first=10, name="reminder_checker")
        logger.info("Р—Р°РґР°С‡Р° РґР»СЏ РїСЂРѕРІРµСЂРєРё РЅР°РїРѕРјРёРЅР°РЅРёР№ Р·Р°РїР»Р°РЅРёСЂРѕРІР°РЅР° (РєР°Р¶РґС‹Рµ 10 РјРёРЅСѓС‚).")

    conv = ConversationHandler(
        entry_points=[CommandHandler("start", start)],
        states={
             REG_NAME:    [MessageHandler(filters.TEXT & ~filters.COMMAND, reg_name)],
             REG_PHONE:   [MessageHandler((filters.TEXT | filters.CONTACT) & ~filters.COMMAND, reg_phone)],
             MENU:        [
                 # РР—РњР•РќР•РќРР•: Р Р°Р·РґРµР»СЊРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё РґР»СЏ РєР°Р¶РґРѕР№ РєРЅРѕРїРєРё РјРµРЅСЋ
                 CallbackQueryHandler(menu_book_cb, pattern="^menu_book$"),
                 CallbackQueryHandler(book_unavailable_cb, pattern="^book_unavailable$"),
                 CallbackQueryHandler(show_records, pattern="^menu_show$"),
                 CallbackQueryHandler(menu_profile_cb, pattern="^menu_profile$"),
                 CallbackQueryHandler(menu_about_cb, pattern="^menu_about$"),
                 CallbackQueryHandler(profile_change_cb, pattern="^profile_change$"),
                 CallbackQueryHandler(profile_change_name_cb, pattern="^profile_change_name$"),
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
                 CallbackQueryHandler(book_back_services_cb, pattern="^book_back_services$"),
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
                 MessageHandler((filters.TEXT|filters.CONTACT)&~filters.COMMAND, change_phone)
                ],
             CHANGE_NAME: [
                 MessageHandler(filters.TEXT & ~filters.COMMAND, change_name)
                ],
        },
        fallbacks=[CommandHandler("start", start)],
        allow_reentry=True,
        # РР—РњР•РќР•РќРР•: РЇРІРЅРѕ СѓРєР°Р·С‹РІР°РµРј, С‡С‚Рѕ СЃРѕСЃС‚РѕСЏРЅРёРµ РґРёР°Р»РѕРіР° РЅСѓР¶РЅРѕ СЃРѕС…СЂР°РЅСЏС‚СЊ
        persistent=True,
        name="bot_conversation"
    )

    app.add_handler(conv)
    app.run_polling()

if __name__ == "__main__":
    main()

