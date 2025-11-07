import logging
import datetime
import io
import re
from pathlib import Path

from telegram import (
    Update, InputMediaPhoto,
    InlineKeyboardButton, InlineKeyboardMarkup,
    ReplyKeyboardMarkup, KeyboardButton, InputMedia
)
from telegram.ext import (
    ApplicationBuilder, CommandHandler, MessageHandler,
    filters, ContextTypes, ConversationHandler, CallbackQueryHandler
)
from pyairtable import Table
from telegram.error import BadRequest
from telegram.constants import ChatAction
import config
import asyncio
from datetime import time as dt_time
from zoneinfo import ZoneInfo

# ---------- Настройки ----------
TOKEN       = config.TOKEN
API_KEY     = config.API_KEY
BASE_ID     = config.BASE_ID
USERS_TABLE = config.USERS_TABLE
APPTS_TABLE = config.APPTS_TABLE

BASE_DIR    = Path(__file__).parent
# базовое изображение (главный экран)
IMAGE_FILE  = BASE_DIR / "Image" / "bot.jpg"

# изображения для меню выбора барбера и для каждого барбера
BARBER_IMAGES = {
    "menu":      BASE_DIR / "Image" / "menu_barber.jpg",
    "Алексей🦐": BASE_DIR / "Image" / "barber_alex.jpg",
    "Тимур🐼":   BASE_DIR / "Image" / "barber_timur.jpg",
    "Владимир😎":BASE_DIR / "Image" / "barber_vlad.jpg",
    "Алина💖":   BASE_DIR / "Image" / "barber_alina.jpg",
}

# Считаем, что IMAGE_FILE всегда есть
with open(IMAGE_FILE, "rb") as f:
    IMAGE_BYTES = f.read()

# Стадии
(REG_NAME, REG_PHONE, MENU,
 BOOK_BARBER, SELECT_SERVICES,
 BOOK_DATE, BOOK_TIME, BOOK_CONFIRM,
 SHOW_RECORDS, CANCEL_CONFIRM, CHANGE_PHONE, CHANGE_NAME) = range(12)

# Барберы
BARBERS = {
    "Алексей🦐": {
        "info": (
            "Ученик прошедший курс 'Юный барбер' в 2025 году. "
            "Леша очень чуткий к мелочам и деталям. "
            "Хочет стать полноценным мастером и добиться успеха в этой профессии. "
            "Общительный человек с разными увлечениями.\n"
            "Любимая фраза: Погнали!"
        ),
        "rating": "★★★☆☆"
    },
    "Тимур🐼": {
        "info": (
            "Главный барбер и основатель барбершопа 'По Братски'. "
            "Стрижет с 15 лет с 2021 года, клиентская база более 80 клиентов. "
            "Любит креативить с разными образами. "
            "Баберер-самоучка, практиковался у лучших барберов Братска и Хабаровска. "
            "Интересный факт: иногда забывает про время, лишь бы сделать хорошую стрижку.\n"
            "Любимая фраза: А почему бы и нет?"
        ),
        "rating": "★★★★★"
    },
    "Владимир😎": {
        "info": (
            "Ученик прошедший курс 'Юный барбер' в 2025 году. "
            "Активно ищет моделей и клиентов, не боящихся экспериментировать. "
            "Вова учится в каждой стрижке и быстро схватывает на лету. "
            "Хочет стать стильным барбером со своим вайбом.\n"
            "Любимая фраза: Волосы не зубы, отрастут"
        ),
        "rating": "★★★☆☆"
    },
    "Алина💖": {
        "info": (
            "Наша новая барбер Алина — профессионал с большим чувством стиля. "
            "Закончила курс 'Современный барбер' в 2025 году. "
            "Обожает экспериментировать с образами и поддерживать комфорт клиентов.\n"
            "Любимая фраза: Будь собой!"
        ),
        "rating": "★★★☆☆"
    },
}

# Имя колонки Multiple select в Airtable
SERVICES_FIELD = "Services"

tbl_users = Table(API_KEY, BASE_ID, USERS_TABLE)
tbl_appts = Table(API_KEY, BASE_ID, APPTS_TABLE)
# Таблица с расписанием барберов
SCHEDULES_TABLE = "Schedules"
tbl_sched = Table(API_KEY, BASE_ID, SCHEDULES_TABLE)

# Таблица исключений
# SCHEDULE_EXCEPTIONS_TABLE = "ScheduleExceptions"
# tbl_sched_ex = Table(API_KEY, BASE_ID, SCHEDULE_EXCEPTIONS_TABLE)

COST_TABLE = "Cost"
tbl_cost = Table(API_KEY, BASE_ID, COST_TABLE)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

ZONE = ZoneInfo("Europe/Amsterdam")

PHONE_PATTERN = re.compile(r'^\+?\d{10,15}$')

def load_services():
    """
    Считает из таблицы Cost:
    - названия услуг (поле 'Услуги')
    - длительность (поле 'Длительность', в минутах)
    - цены по каждому барберу (колонки с именами барберов)
    Возвращает list dict:
      [ { "name": ..., "duration": int, "prices": { barber: price_int, … } }, … ]
    Коррекция: надёжно парсит цены вида '₽200' или '200₽' и т.д.
    """
    tbl_cost = Table(API_KEY, BASE_ID, "Cost")

    def parse_price(val):
        if val is None:
            return 0
        if isinstance(val, (int, float)):
            return int(val)
        if isinstance(val, str):
            # ищем первую последовательность цифр с опциональной десятичной частью
            m = re.search(r'(\d+(?:[.,]\d+)?)', val)
            if not m:
                return 0
            s = m.group(1).replace(',', '.')
            try:
                return int(float(s))
            except Exception:
                return 0
        # иначе
        try:
            return int(val)
        except Exception:
            return 0

    services = []
    for r in tbl_cost.all():
        f = r.get("fields", {})
        name = f.get("Услуги") or f.get("Service")  # на случай разницы имени поля
        if not name:
            continue
        duration_raw = f.get("Длительность", f.get("Duration", 0))
        try:
            duration = int(duration_raw)
        except Exception:
            # если в таблице строка, пробуем извлечь число
            m = re.search(r'(\d+)', str(duration_raw or "0"))
            duration = int(m.group(1)) if m else 0
        prices = {}
        for barber in BARBERS.keys():
            raw = f.get(barber, 0)
            prices[barber] = parse_price(raw)
        services.append({
            "name": name,
            "duration": duration,
            "prices": prices
        })
    return services

def _is_flag_true(val) -> bool:
    if val is True:
        return True
    if isinstance(val, str) and val.lower() in ("true", "1", "yes", "y"):
        return True
    if isinstance(val, (int, float)) and int(val) == 1:
        return True
    return False

def _find_user_chat_by_fields(f):
    """Попытки получить chat_id клиента из полей записи апоинтмента."""
    # пробуем UserID, TelegramID
    for k in ("UserID", "TelegramID", "User"):
        v = f.get(k)
        if v:
            try:
                return int(v)
            except Exception:
                pass
    # пробуем найти по телефону/имени в tbl_users
    phone = f.get("Phone") or f.get("ClientPhone") or f.get("CustomerPhone")
    if phone:
        # простой поиск — может быть тяжело, но попробуем
        try:
            users = tbl_users.all(formula=f"FIND('{phone}',{{Phone}})")
            if users:
                uf = users[0].get("fields", {})
                try:
                    return int(uf.get("TelegramID") or uf.get("UserID"))
                except Exception:
                    return None
        except Exception:
            # fallback: перебор всех и поиск по вхождению
            for u in tbl_users.all():
                uf = u.get("fields", {})
                if phone in str(uf.get("Phone","")):
                    try:
                        return int(uf.get("TelegramID") or uf.get("UserID"))
                    except Exception:
                        return None
    # ниче не нашли
    return None

# updated reminder checker with admin notification + AdminNotified flag
async def reminder_checker_job(context: ContextTypes.DEFAULT_TYPE):
    try:
        now = datetime.datetime.now(tz=ZONE)
        logger.info("reminder_checker_job: start at %s", now.isoformat())

        try:
            appt_recs = tbl_appts.all(formula="Status='active'")
        except Exception as e:
            logger.exception("reminder_checker_job: failed to load active appts with formula, trying all(): %s", e)
            appt_recs = tbl_appts.all()

        logger.info("reminder_checker_job: loaded %d active appt records", len(appt_recs))

        for r in appt_recs:
            rec_id = r.get("id")
            f = r.get("fields", {}) or {}

            date_s = f.get("Date")
            time_s = f.get("Time", "")
            barber = f.get("Barber")
            if not date_s or not time_s or not barber:
                logger.debug("reminder_checker_job: skipping %s (missing Date/Time/Barber)", rec_id)
                continue

            if "-" not in time_s:
                logger.debug("reminder_checker_job: skipping %s (Time not HH:MM-HH:MM): %s", rec_id, time_s)
                continue
            start_time = time_s.split("-",1)[0].strip()

            # parse appointment datetime into timezone-aware appt_dt in ZONE
            # ----------------- Новый парсер appt_dt (интерпретируем беззонное время как локальное время машины) ---------------
            try:
                # нормализуем date_s (может быть list/dict из Airtable)
                if isinstance(date_s, (list, tuple)) and date_s:
                    date_s = date_s[0]
                if isinstance(date_s, dict):
                    for k in ("date", "value", "text"):
                        if k in date_s and date_s[k]:
                            date_s = date_s[k]
                            break
                    else:
                        date_s = str(date_s)

                dt_str = f"{date_s}T{start_time}"
                appt_dt = datetime.datetime.fromisoformat(dt_str)

                # локальная TZ машины (где запущен бот)
                local_tz = datetime.datetime.now().astimezone().tzinfo

                if appt_dt.tzinfo is None:
                    # если в записи нет информации о часовом поясе — считаем время локальным (машины)
                    appt_dt = appt_dt.replace(tzinfo=local_tz)
                else:
                    # иначе приводим к локальной TZ для корректного сравнения
                    appt_dt = appt_dt.astimezone(local_tz)

                # Для диагностики: вариант в Europe/Amsterdam (чтобы видеть оба представления)
                appt_dt_ams = appt_dt.astimezone(ZONE)

                # время «сейчас» в локальной TZ (для корректного delta)
                now_local = datetime.datetime.now(tz=local_tz)

                # вычисляем дельту в локальной TZ (это то, что имеет смысл, если записи вводятся в локальном времени)
                delta = appt_dt - now_local

                # ДИАГНОСТИКА (логируем оба варианта)
                logger.debug(
                    "reminder_checker_job: appt parsed: rec=%s appt_local=%s appt_ams=%s now_local=%s delta=%s",
                    rec_id, appt_dt.isoformat(), appt_dt_ams.isoformat(), now_local.isoformat(), str(delta)
                )
            except Exception:
                logger.exception("reminder_checker_job: cannot parse datetime for appt %s (date=%r time=%r)", rec_id, date_s, time_s)
                continue
            # -----------------------------------------------------------------------------------------------------------------


            client_flag = f.get("Reminder2hClientSent")
            barber_flag = f.get("Reminder2hBarberSent")
            admin_flag = f.get("AdminNotified")

            # --- диагностика ---
            if delta <= datetime.timedelta(hours=2):
                logger.info(
                    "reminder_checker_job: appt %s qualifies (<=2h) barber=%s appt_dt=%s delta=%s "
                    "[client=%s barber=%s admin=%s]",
                    rec_id, barber, appt_dt.isoformat(), str(delta),
                    _is_flag_true(client_flag), _is_flag_true(barber_flag), _is_flag_true(admin_flag)
                )


            # --- admin notification: если <=2 часа и ещё не уведомляли админов ---
            if delta <= datetime.timedelta(hours=2) and not _is_flag_true(admin_flag):
                # подготовим текст для админа
                cust_name = f.get("CustomerName") or f.get("Customer") or "—"
                cust_phone = f.get("Phone") or "—"
                start_h = appt_dt.time().strftime("%H:%M")
                services = ", ".join(f.get(SERVICES_FIELD, [])) or "—"
                admin_text = (
                    f"🔔 <b>Upcoming appointment (≤2h)</b>\n"
                    f"Appt ID: <code>{rec_id}</code>\n"
                    f"Barber: <b>{barber}</b>\n"
                    f"Date: {date_s} {start_h}\n"
                    f"Client: <b>{cust_name}</b>\n"
                    f"Phone: {cust_phone}\n"
                    f"Services: {services}\n"
                    f"Flags: client_sent={bool(_is_flag_true(client_flag))} barber_sent={bool(_is_flag_true(barber_flag))}"
                )

            # --- клиентское напоминание ---
            if delta <= datetime.timedelta(hours=2) and not _is_flag_true(client_flag):
                chat_id = _find_user_chat_by_fields(f)
                if chat_id:
                    try:
                        start_h = appt_dt.time().strftime("%H:%M")
                        msg = (f"⏰ Напоминание: у вас сегодня в {start_h} запись к барберу <b>{barber}</b>.\n"
                               f"Услуги: {', '.join(f.get(SERVICES_FIELD, []))}")
                        await context.bot.send_message(chat_id, msg, parse_mode="HTML")
                        logger.info("reminder_checker_job: sent client reminder appt=%s -> chat=%s", rec_id, chat_id)
                    except Exception:
                        logger.exception("reminder_checker_job: failed sending client reminder for appt %s to %s", rec_id, chat_id)
                else:
                    logger.warning("reminder_checker_job: no chat_id found for appt %s (cannot notify client)", rec_id)

                try:
                    tbl_appts.update(rec_id, {"Reminder2hClientSent": True})
                except Exception:
                    logger.exception("reminder_checker_job: failed to update Reminder2hClientSent for %s", rec_id)

            # --- барберу напоминание ---
            if delta <= datetime.timedelta(hours=2) and not _is_flag_true(barber_flag):
                try:
                    users = tbl_users.all(formula=f"{{Barber}}='{barber}'")
                except Exception:
                    users = [u for u in tbl_users.all() if str((u.get("fields") or {}).get("Barber","")) == barber]

                if not users:
                    logger.warning("reminder_checker_job: no Users with Barber=%s found for appt %s", barber, rec_id)
                else:
                    for urec in users:
                        ufields = urec.get("fields", {}) or {}
                        try:
                            barber_chat = int(ufields.get("TelegramID") or ufields.get("UserID"))
                        except Exception:
                            barber_chat = None
                        if not barber_chat:
                            logger.warning("reminder_checker_job: barber user %s has no TelegramID", urec.get("id"))
                            continue
                        try:
                            start_h = appt_dt.time().strftime("%H:%M")
                            cust_name = f.get("CustomerName") or f.get("Customer") or "—"
                            cust_phone = f.get("Phone") or "—"
                            msg = (f"⏰ Напоминание: сегодня в {start_h} запись.\n"
                                   f"Клиент: <b>{cust_name}</b>\nТелефон: {cust_phone}\nУслуги: {', '.join(f.get(SERVICES_FIELD, []))}")
                            await context.bot.send_message(barber_chat, msg, parse_mode="HTML")
                            logger.info("reminder_checker_job: sent barber reminder appt=%s -> barber_chat=%s", rec_id, barber_chat)
                        except Exception:
                            logger.exception("reminder_checker_job: failed to send barber reminder for appt %s -> %s", rec_id, barber_chat)

                try:
                    tbl_appts.update(rec_id, {"Reminder2hBarberSent": True})
                except Exception:
                    logger.exception("reminder_checker_job: failed to update Reminder2hBarberSent for %s", rec_id)

        logger.info("reminder_checker_job: finished loop")
    except Exception:
        logger.exception("reminder_checker_job: unexpected error")


# --- вспомогательные функции для новой структуры Schedules (Barber|DayOfWeek|1Date|1Week|2Date|2Week) ---

def _ru_weekday_to_int(day_name: str) -> int | None:
    """
    Принимает русское название дня недели (в разных регистрах/сокращениях) и возвращает weekday int:
    0=Понедельник .. 6=Воскресенье
    """
    if not day_name:
        return None
    n = str(day_name).strip().lower()
    mapping = {
        "понедельник": 0, "пон": 0, "пн": 0,
        "вторник": 1,     "вт": 1,
        "среда": 2,       "ср": 2,
        "четверг": 3,     "чт": 3, "чет": 3,
        "пятница": 4,     "пт": 4,
        "суббота": 5,     "сб": 5,
        "воскресенье": 6, "вс": 6
    }
    # иногда поле может содержать несколько дней через запятую — берем первый вхожд.
    # например: "Понедельник, Среда" -> нужно сопоставить с Понедельником/Средой при поиске.
    # тут мы возвращаем точное значение, если есть совпадение по слову.
    for key in mapping:
        if key in n:
            return mapping[key]
    return None


def update_schedule_dates_window(start_day: datetime.date | None = None, force_update: bool = True) -> None:
    """
    Обновлённая версия под структуру "Schedules copy":
    Ожидается, что каждая запись имеет поля:
      - Barber
      - DayOfWeek
      - Date   (одно поле, ISO-строка)
      - Week   (рабочие часы "HH:MM-HH:MM" или "0" для выходного)
      - Today  (чекбокс или логическое поле)
    Поведение:
      - Нормализует Date к YYYY-MM-DD (если есть).
      - Если Date < today -> прибавляем по 14 дней, пока >= today (так как календарь идёт по 2-недельному циклу).
      - Устанавливает Today = True только для тех записей, где Date == today, иначе False.
      - Использует осторожный апдейт, чтобы не писать несуществующие поля повторно (как раньше).
    """
    today = datetime.date.today()
    if start_day is None:
        start_day = today - datetime.timedelta(days=today.weekday())  # понедельник текущей недели

    logger.info("update_schedule_dates_window (new schema): week window %s .. %s (today=%s)",
                start_day.isoformat(), (start_day + datetime.timedelta(days=6)).isoformat(), today.isoformat())

    try:
        recs = tbl_sched.all()
    except Exception as e:
        logger.exception("update_schedule_dates_window: failed to load Schedules copy: %s", e)
        return

    # собрать все имена полей, нормализовать — чтобы удобно удалять при UNKNOWN_FIELD_NAME
    all_field_names = set()
    for r in recs:
        f = r.get("fields", {}) or {}
        all_field_names.update(f.keys())
    logger.info("Schedules copy: field names seen: %s", list(all_field_names))

    import unicodedata
    def _normalize_name(s: str) -> str:
        if s is None:
            return ""
        s = str(s).replace('\u00A0', ' ').replace('\u200B', '').strip()
        s = unicodedata.normalize('NFKD', s)
        s = ''.join(ch for ch in s if ch.isalnum())
        return s.lower()

    norm_map = {}
    for name in all_field_names:
        n = _normalize_name(name)
        if n not in norm_map:
            norm_map[n] = name

    def _find_real_strict(name: str) -> str | None:
        return norm_map.get(_normalize_name(name))

    # реальные имена полей которые мы будем писать (если их нет в таблице, _try_update удалит их из будущих попыток)
    found_date_field = _find_real_strict("Date") or "Date"
    found_today_field = _find_real_strict("Today") or "Today"
    found_dayofweek = _find_real_strict("DayOfWeek") or "DayOfWeek"
    found_barber = _find_real_strict("Barber") or "Barber"

    def _norm_date_field(val):
        if not val:
            return None
        if isinstance(val, (list, tuple)) and val:
            val = val[0]
        if isinstance(val, dict):
            for k in ("date", "text", "value"):
                if k in val and val[k]:
                    val = val[k]; break
            else:
                val = str(val)
        s = str(val)
        if "T" in s:
            s = s.split("T",1)[0]
        if " " in s and ":" in s:
            s = s.split(" ",1)[0]
        try:
            datetime.date.fromisoformat(s)
            return s
        except Exception:
            return None

    # аккуратный апдейт с игнорированием UNKNOWN_FIELD_NAME
    def _try_update(rec_id: str, payload: dict):
        nonlocal found_date_field, found_today_field
        if not payload:
            return False
        try:
            tbl_sched.update(rec_id, payload)
            return True
        except Exception as e:
            msg = str(e)
            logger.warning("update_schedule_dates_window: update rec %s failed: %s", rec_id, msg)
            if "UNKNOWN_FIELD_NAME" in msg or "Unknown field name" in msg:
                for bad in list(payload.keys()):
                    if found_date_field and bad == found_date_field:
                        logger.info("Removing found_date_field (%s) from future writes", found_date_field); found_date_field = None
                    if found_today_field and bad == found_today_field:
                        logger.info("Removing found_today_field (%s) from future writes", found_today_field); found_today_field = None
                return False
            logger.exception("update_schedule_dates_window: failed to update rec %s: %s", rec_id, e)
            return False

    updates = 0
    for r in recs:
        rec_id = r.get("id")
        f = r.get("fields", {}) or {}

        # получаем текущую дату из поля Date (если есть)
        cur_date_str = _norm_date_field(f.get(found_date_field) if found_date_field in f else f.get("Date"))
        if not cur_date_str:
            # Если в записи нет Date — пробуем посчитать по DayOfWeek: берем ближайший соответствующий день >= start_day
            day_field = f.get(found_dayofweek) or f.get("DayOfWeek") or ""
            if not day_field:
                # нет даты и нет DayOfWeek — пропускаем такую строку
                continue
            # берем первый день-метку из day_field
            weekday = _ru_weekday_to_int(day_field)
            if weekday is None:
                logger.debug("update_schedule_dates_window: can't parse DayOfWeek=%r for rec %s", day_field, rec_id)
                continue
            base_date = start_day + datetime.timedelta(days=weekday)
            # если base_date < today — поднимаем на +7/14 до >= today (чтобы вписать запись в будущее)
            date_obj = base_date
            while date_obj < today:
                date_obj += datetime.timedelta(days=7)
        else:
            try:
                date_obj = datetime.date.fromisoformat(cur_date_str)
            except Exception:
                logger.debug("update_schedule_dates_window: invalid Date=%r for rec %s", cur_date_str, rec_id)
                continue

            # если дата устарела — прибавляем по 14 дней (двухнедельный цикл), пока >= today
            if date_obj < today:
                while date_obj < today:
                    date_obj += datetime.timedelta(days=14)

        new_date_iso = date_obj.isoformat()
        human_fmt = date_obj.strftime("%d.%m.%Y")
        payload = {}

        # обновляем Date, если он отличается (или если force_update)
        if found_date_field and (force_update or cur_date_str != new_date_iso):
            payload[found_date_field] = new_date_iso

        # Today — чекбокс/логическое поле
        if found_today_field:
            payload[found_today_field] = (new_date_iso == today.isoformat())

        if not payload:
            continue

        logger.debug("update_schedule_dates_window: rec=%s payload=%s (cur_date=%s)", rec_id, payload, cur_date_str)
        ok = _try_update(rec_id, payload)
        if ok:
            updates += 1

    logger.info("update_schedule_dates_window (new schema): finished, updated %d records", updates)



# оставляем старое имя как wrapper для совместимости
def update_schedule_dates(*args, **kwargs):
    return update_schedule_dates_window(*args, **kwargs)



# ---------- Утилиты ----------
def count_active_appts(user_id: str) -> int:
    recs = tbl_appts.all(formula=f"AND({{UserID}}='{user_id}',Status='active')")
    return len(recs)

def get_last_haircut_date(user_id: str) -> str | None:
    recs = tbl_appts.all(formula=f"AND({{UserID}}='{user_id}',Status='done')")
    dates = [r['fields']['Date'] for r in recs if 'Date' in r['fields']]
    return max(dates) if dates else None

def purge_old_appts():
    """Удаляет из Airtable записи старше 90 дней."""
    threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
    recs = tbl_appts.all()
    for r in recs:
        date = r['fields'].get('Date')
        if date and date < threshold:
            tbl_appts.delete(r['id'])

### Утилита для получения рабочего интервала
def _to_iso_date_str(val):
    """
    Приводит значение поля Airtable к строке YYYY-MM-DD или None.
    Поддерживает: str "YYYY-MM-DD" или "YYYY-MM-DDT..", list/tuple с первым элементом, dict.
    """
    if not val:
        return None
    # если это список (иногда бывает), берем первый элемент
    if isinstance(val, (list, tuple)) and val:
        val = val[0]
    # если dict — пробуем разные ключи
    if isinstance(val, dict):
        for k in ("date", "text", "value"):
            if k in val and val[k]:
                val = val[k]
                break
        else:
            val = str(val)
    val = str(val)
    # если приходит с временем — берем только дату до 'T' или пробела
    if "T" in val:
        val = val.split("T", 1)[0]
    if " " in val and ":" in val:
        val = val.split(" ", 1)[0]
    # окончательная проверка формата YYYY-MM-DD
    try:
        datetime.date.fromisoformat(val)
        return val
    except Exception:
        return None


def _parse_working_hours(wh: str) -> tuple[int,int] | None:
    """
    Парсит строку "HH:MM - HH:MM" -> (start_min, end_min) или None.
    """
    if not wh or "-" not in wh:
        return None
    try:
        start_s, end_s = [p.strip() for p in wh.split("-", 1)]
        h1, m1 = map(int, start_s.split(":"))
        h2, m2 = map(int, end_s.split(":"))
        return (h1 * 60 + m1, h2 * 60 + m2)
    except Exception:
        return None


def get_working_hours(barber: str, date_str: str) -> tuple[int,int] | None:
    """
    По новой структуре Schedules copy:
      - Ищем запись, где Barber == barber и Date == date_str -> берём поле Week (формат "HH:MM-HH:MM" или "0")
      - Если не нашли по дате, fallback: ищем запись по Barber и DayOfWeek (вхождение нужного дня) и берём Week.
      - Возвращает (start_min, end_min) или None.
    """
    if not barber or not date_str:
        return None

    try:
        recs = tbl_sched.all()
    except Exception as e:
        logger.exception("get_working_hours: не удалось загрузить tbl_sched: %s", e)
        return None

    # helper: нормализовать Date-ячейку
    def _norm_date_field(val):
        if not val:
            return None
        if isinstance(val, (list, tuple)) and val:
            val = val[0]
        if isinstance(val, dict):
            for k in ("date", "value", "text"):
                if k in val and val[k]:
                    val = val[k]; break
            else:
                val = str(val)
        s = str(val)
        if "T" in s:
            s = s.split("T",1)[0]
        if " " in s and ":" in s:
            s = s.split(" ",1)[0]
        try:
            datetime.date.fromisoformat(s)
            return s
        except Exception:
            return None

    def _parse_working_hours(wh: str):
        if not wh or wh in ("0", 0):
            return None
        if "-" not in wh:
            return None
        try:
            start_s, end_s = [p.strip() for p in wh.split("-",1)]
            h1,m1 = map(int, start_s.split(":")); h2,m2 = map(int, end_s.split(":"))
            return (h1*60 + m1, h2*60 + m2)
        except Exception:
            return None

    # 1) поиск по дате
    for r in recs:
        f = r.get("fields", {}) or {}
        rec_barber = str(f.get("Barber") or f.get("Парикмахер") or "").strip()
        if rec_barber != barber:
            continue
        d = _norm_date_field(f.get("Date"))
        if d == date_str:
            wh = f.get("Week") or f.get("Working") or f.get("Hours") or ""
            parsed = _parse_working_hours(wh)
            return parsed  # либо (start,end) либо None (если "0" или unparsable)

    # 2) fallback: поиск по DayOfWeek
    try:
        dt = datetime.date.fromisoformat(date_str)
    except Exception:
        return None
    ru = {0: "Понедельник", 1: "Вторник", 2: "Среда", 3: "Четверг", 4: "Пятница", 5: "Суббота", 6: "Воскресенье"}
    wanted_day = ru[dt.weekday()]

    for r in recs:
        f = r.get("fields", {}) or {}
        rec_barber = str(f.get("Barber") or f.get("Парикмахер") or "").strip()
        if rec_barber != barber:
            continue
        day_field = (f.get("DayOfWeek") or f.get("ДеньНедели") or f.get("Day") or "").strip()
        if not day_field:
            continue
        if wanted_day.lower() not in day_field.lower():
            continue
        wh = f.get("Week") or f.get("Working") or f.get("Hours") or ""
        parsed = _parse_working_hours(wh)
        if parsed:
            return parsed

    return None


async def safe_upsert_menu(ctx, chat_id, msg_id, photo_bytes: bytes, caption: str, reply_markup):
    """
    Пытаемся отредактировать старое сообщение.
    Если не получилось (BadRequest, message not found и т.п.) — удаляем и отправляем заново.
    """
    from telegram.error import BadRequest

    try:
        media = InputMediaPhoto(io.BytesIO(photo_bytes), caption=caption, parse_mode="HTML")
        await ctx.bot.edit_message_media(
            chat_id=chat_id, message_id=msg_id,
            media=media, reply_markup=reply_markup
        )
    except BadRequest as e:
        # если сообщение потерялось или неподходящее содержимое
        if "message to edit not found" in str(e) \
        or "Message is not modified" in str(e) \
        or "edit_message_media" in str(e):
            # удаляем старое (если оно ещё есть)
            try:
                await ctx.bot.delete_message(chat_id, msg_id)
            except:
                pass
            # отправляем новое
            msg = await ctx.bot.send_photo(
                chat_id, photo_bytes,
                caption=caption, parse_mode="HTML",
                reply_markup=reply_markup
            )
            ctx.user_data['bot_msg'] = (chat_id, msg.message_id)
        else:
            # если какая-то иная ошибка — пробрасываем
            raise

def dump_schedules_for_barber(barber: str):
    """
    Печатает в лог все записи Schedules для указанного barbers.
    Запустите временно, чтобы увидеть, какие поля приходят из Airtable.
    """
    try:
        recs = tbl_sched.all()
    except Exception as e:
        logger.exception("dump_schedules_for_barber: ошибка чтения tbl_sched: %s", e)
        return

    logger.info("DumpSchedules: ищем Barber=%s", barber)
    for r in recs:
        f = r.get("fields", {})
        if str(f.get("Barber") or "").strip() != barber:
            continue
        logger.info("Schedule rec id=%s fields=%s", r.get("id"), f)


def main_menu_kb():
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("✂️ Записаться", callback_data="menu_book"),
         InlineKeyboardButton("📅 Мои записи", callback_data="menu_show")],
        [InlineKeyboardButton("👤 Профиль", callback_data="menu_profile"),
         InlineKeyboardButton("ℹ️ О нас",   callback_data="menu_about")]
    ])

def contact_kb():
    return ReplyKeyboardMarkup(
        [[KeyboardButton("📲 Поделиться контактом", request_contact=True)]],
        resize_keyboard=True, one_time_keyboard=True
    )

def get_busy_intervals(barber: str, date_str: str) -> list[tuple[int,int]]:
    """Возвращает список (start_min,end_min) всех активных интервалов."""
    recs = tbl_appts.all(formula="Status='active'")
    intervals = []
    for r in recs:
        f = r['fields']
        if f.get('Barber') != barber or f.get('Date') != date_str:
            continue
        tf = f.get('Time','').strip()
        if '-' not in tf:
            continue
        s,e = re.split(r'\s*-\s*', tf)
        h1,m1 = map(int,s.split(':')); h2,m2 = map(int,e.split(':'))
        start = h1*60 + m1
        end   = h2*60 + m2
        intervals.append((start,end))
    return intervals

def can_fit(start_min: int, duration: int, intervals: list[tuple[int,int]]) -> bool:
    """True, если от start_min на duration минут не пересечётся ни с одним busy-интервалом."""
    end_min = start_min + duration
    for b_s,b_e in intervals:
        if start_min < b_e and end_min > b_s:
            return False
    # не выходим за 24:00
    return end_min <= 24*60


# ---------- Хендлеры ----------
async def start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    # удалим команду start после отправки меню
    chat_id = update.effective_chat.id
    user_id = update.effective_user.id
    registered = bool(tbl_users.all(formula=f"{{TelegramID}}={user_id}"))

    msg = await ctx.bot.send_photo(
        chat_id, IMAGE_BYTES,
        caption=(
            "👋 Снова привет! Выберите действие:"
            if registered else
            "👋 Добро пожаловать! Введите ФИО:"
        ),
        parse_mode="HTML",
        reply_markup=main_menu_kb() if registered else None
    )
    ctx.user_data['bot_msg'] = (chat_id, msg.message_id)
    # удаляем команду
    await update.message.delete()
    return MENU if registered else REG_NAME

async def reg_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    name = update.message.text.strip()
    if len(name.split())<2:
        await update.message.reply_text("Введите ФИО (имя и фамилия).")
        return REG_NAME
    ctx.user_data['name'] = name
    chat_id,msg_id = ctx.user_data['bot_msg']
    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, "<b>2️⃣ Укажите телефон:</b>", None)
    await update.message.delete()
    sent = await ctx.bot.send_message(chat_id, "Поделитесь контактом или введите вручную:", reply_markup=contact_kb())
    ctx.user_data['last_prompt'] = sent.message_id
    return REG_PHONE

async def reg_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    phone = update.message.contact.phone_number if update.message.contact else update.message.text.strip()
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("Неверный формат, например +71234567890.")
        return REG_PHONE
    tbl_users.create({
        "TelegramID": update.effective_user.id,
        "Name":       ctx.user_data['name'],
        "Phone":      phone
    })
    chat_id,msg_id = ctx.user_data['bot_msg']
    await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES,
        "✅ <b>Регистрация завершена!</b>\nВыберите действие:", main_menu_kb()
    )
    await update.message.delete()
    await ctx.bot.delete_message(chat_id, ctx.user_data.get('last_prompt'))
    return MENU

def count_no_shows(user_id: str) -> int:
    """
    Считает предупреждения (Status='не явился') пользователя за последние 90 дней.
    """
    threshold = (datetime.date.today() - datetime.timedelta(days=90)).isoformat()
    # фильтруем по UserID, Status='не явился' и дате >= threshold
    formula = (
        f"AND(UserID='{user_id}',Status='не явился',Date>='{threshold}')"
    )
    recs = tbl_appts.all(formula=formula)
    return len(recs)

async def menu_callback(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    action = query.data.split("_", 1)[1]
    chat_id, msg_id = ctx.user_data['bot_msg']

    if action == "book":
        # Проверяем, не больше ли двух активных записей у пользователя
        user_id = query.from_user.id
        if count_active_appts(user_id) >= 2:
            # Редактируем текущее меню с ошибкой
            await safe_upsert_menu(
                ctx,
                chat_id, msg_id,
                photo_bytes=IMAGE_BYTES,
                caption="❌ У вас уже есть 2 активные записи.\nСначала отмените одну из них, чтобы записаться снова.",
                reply_markup=main_menu_kb()
            )
            return MENU

        # Если записей меньше двух — показываем список барберов
        kb = [
            [InlineKeyboardButton(f"{b} {info['rating']}", callback_data=f"book_barber|{b}")]
            for b, info in BARBERS.items()
        ]
        kb.append([InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")])

        await safe_upsert_menu(
            ctx,
            chat_id, msg_id,
            photo_bytes=BARBER_IMAGES["menu"].read_bytes(),
            caption="<b>1️⃣ Выберите барбера:</b>",
            reply_markup=InlineKeyboardMarkup(kb)
        )
        return BOOK_BARBER

    if action == "show":
        return await show_records(update, ctx)

    if action == "profile":
        await show_profile(ctx, *ctx.user_data['bot_msg'], update.effective_user.id)
        return MENU

    if action == "about":
        about_text = (
            "<b>О нас</b>\n\n"
            "Путь Тимура Гуторова к открытию собственного барбершопа начался в 15 лет. "
            "Тогда он стоял перед выбором: пойти учиться на парикмахера или получить водительские права. "
            "Он выбрал первое — и не прогадал. Сначала Тимур стал универсальным мастером, "
            "но вскоре понял, что его по-настоящему вдохновляют мужские стрижки и культура барберинга.\n\n"
            "Он начал самообучение по видео на YouTube, допуская ошибки, но с каждым днём оттачивая мастерство. "
            "За два года он набрался опыта, практиковался у профессиональных барберов и продолжал развиваться. "
            "Вскоре арендовал собственное кресло, затем переехал в студию — взялся за обучение новых барберов "
            "и сегодня стоит на пороге открытия BrotherShop.\n\n"
            "BrotherShop — это не просто барбершоп. Это целое сообщество. "
            "Это место, где мы создадим твой образ.\n\n"
            "📍 Адрес: Крупская 36, 1 подъезд, домофон 2В\n"
            "📞 Телефон: 89646599296\n"
            "🔗 ВК: https://vk.com/brothershopbratsk\n"
            "✉️ Почта: gutorovtimur06@gmail.com"
        )

        # отдельное изображение для раздела "О нас"
        about_img_path = BASE_DIR / "Image" / "about.jpg"
        try:
            about_bytes = about_img_path.read_bytes()
        except Exception:
            logger.warning("About image %s not found — using default IMAGE_BYTES", about_img_path)
            about_bytes = IMAGE_BYTES

        await safe_upsert_menu(
            ctx,
            chat_id, msg_id,
            photo_bytes=about_bytes,
            caption=about_text,
            reply_markup=main_menu_kb()
        )
        return MENU

    if action == "main":
        await safe_upsert_menu(
            ctx,
            chat_id, msg_id,
            photo_bytes=IMAGE_BYTES,
            caption="👋 <b>Главное меню:</b>",
            reply_markup=main_menu_kb()
        )
        return MENU

async def show_profile(ctx: ContextTypes.DEFAULT_TYPE, chat_id: int, msg_id: int, user_id: int):
    rec = tbl_users.all(formula=f"{{TelegramID}}={user_id}")[0]
    fields = rec['fields']

    last = get_last_haircut_date(str(user_id)) or "—"
    active = count_active_appts(user_id)
    warns = count_no_shows(str(user_id))

    text = (
        f"<b>Профиль</b>\n\n"
        f"ФИО: {fields.get('Name','—')}\n"
        f"Телефон: {fields.get('Phone','—')}\n"
        f"Последняя стрижка: {last}\n"
        f"Активных записей: {active}\n"
        f"Предупреждения: {warns}\n"
        f"❗ 3 предупреждения — блокировка."
    )
    kb = InlineKeyboardMarkup([
        [
            InlineKeyboardButton("✏️ Сменить имя",   callback_data="profile_change_name"),
            InlineKeyboardButton("✏️ Сменить номер", callback_data="profile_change")
        ],
        [InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")]
    ])
    await safe_upsert_menu(
        ctx,
        chat_id, msg_id,
        photo_bytes=IMAGE_BYTES,
        caption=text,
        reply_markup=kb
    )


# ---------- хендлер смены имени ----------
async def profile_change_name_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()  # просто чтобы убрать «часики» на кнопке

    rec = tbl_users.all(formula=f"{{TelegramID}}={query.from_user.id}")[0]
    last_changed = rec["fields"].get("LastNameChanged")  # ISO‑строка YYYY‑MM‑DD

    if last_changed:
        last_date = datetime.date.fromisoformat(last_changed)
        days = (datetime.date.today() - last_date).days
        if days < 7:
            # вот этот вызов покажет алерт
            await query.answer(
                text=f"Сменить имя можно не чаще раза в неделю.\n"
                     f"Прошло только {days} дн.",
                show_alert=True
            )
            return MENU

    # если можно — запрашиваем новое ФИО
    await safe_upsert_menu(
        ctx,
        *ctx.user_data['bot_msg'],
        photo_bytes=IMAGE_BYTES,
        caption="<b>Введите новое ФИО:</b>",
        reply_markup=None
    )
    return CHANGE_NAME


async def change_name(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    new_name = update.message.text.strip()
    if len(new_name.split()) < 2:
        await update.message.reply_text("Введите полное ФИО (имя и фамилия).")
        return CHANGE_NAME

    # Обновляем Airtable
    rec = tbl_users.all(formula=f"{{TelegramID}}={update.effective_user.id}")[0]
    tbl_users.update(rec["id"], {
        "Name": new_name,
        "LastNameChanged": datetime.date.today().isoformat()
    })

    # Удаляем ввод пользователя
    chat_id, msg_id = ctx.user_data['bot_msg']
    await update.message.delete()

    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU

async def profile_change_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id, msg_id = ctx.user_data['bot_msg']

    # 4-й аргумент — картинка, 5-й — caption, 6-й — клавиатура
    await safe_upsert_menu(
        ctx,
        chat_id, msg_id,
        IMAGE_BYTES,
        "<b>Сменить номер</b>\nПоделитесь контактом или введите вручную:",
        None
    )
    sent = await ctx.bot.send_message(chat_id, "Введите новый номер:", reply_markup=contact_kb())
    ctx.user_data['last_prompt'] = sent.message_id
    return CHANGE_PHONE


async def change_phone(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    phone = update.message.contact.phone_number if update.message.contact else update.message.text.strip()
    if not PHONE_PATTERN.match(phone):
        await update.message.reply_text("Неверный формат, например +71234567890.")
        return CHANGE_PHONE

    # Обновляем пользователя
    rec = tbl_users.all(formula=f"{{TelegramID}}={update.effective_user.id}")[0]
    tbl_users.update(rec['id'], {"Phone": phone})

    # Удаляем ввод
    chat_id = update.effective_chat.id
    await update.message.delete()
    await ctx.bot.delete_message(chat_id, ctx.user_data.get('last_prompt'))

    chat_id, msg_id = ctx.user_data['bot_msg']
    await show_profile(ctx, chat_id, msg_id, update.effective_user.id)
    return MENU



async def book_barber_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    _, barber = query.data.split("|", 1)
    ctx.user_data['barber'] = barber

    # Загрузка актуальных услуг
    services = load_services()
    ctx.user_data['all_services'] = services
    ctx.user_data['selected_services'] = set()

    # Строим клавиатуру — показываем только те услуги, которые выполняет барбер
    kb = []
    for svc in services:
        price = svc["prices"].get(barber, 0)
        if price == 0:
            # пропускаем услуги, которые барбер не выполняет
            continue
        # форматируем: (30мин) и цена 200₽
        kb.append([ InlineKeyboardButton(
            f"◻️ {svc['name']} ({svc['duration']}мин) — {price}₽",
            callback_data=f"svc_toggle|{svc['name']}"
        )])
    # если у барбера вообще нет услуг — покажем уведомление и вернём в меню
    if not kb:
        await safe_upsert_menu(
            ctx,
            *ctx.user_data['bot_msg'],
            photo_bytes=IMAGE_BYTES,
            caption=f"❌ У {barber} пока нет доступных услуг.",
            reply_markup=main_menu_kb()
        )
        return MENU

    kb.append([
        InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main"),
        InlineKeyboardButton("▶️ Далее",         callback_data="svc_done")
    ])

    caption = "<b>2️⃣ Выберите услуги:</b>"
    img = BARBER_IMAGES[barber].read_bytes()
    chat_id, msg_id = ctx.user_data['bot_msg']
    await ctx.bot.edit_message_media(
        chat_id=chat_id, message_id=msg_id,
        media=InputMediaPhoto(img, caption=caption, parse_mode="HTML"),
        reply_markup=InlineKeyboardMarkup(kb)
    )
    return SELECT_SERVICES

async def svc_toggle_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    _, svc_name = query.data.split("|", 1)
    sel = ctx.user_data['selected_services']
    if svc_name in sel:
        sel.remove(svc_name)
    else:
        sel.add(svc_name)

    barber   = ctx.user_data['barber']
    services = ctx.user_data['all_services']

    kb = []
    for svc in services:
        price = svc["prices"].get(barber, 0)
        if price == 0:
            # не показываем услуги, которые барбер не выполняет
            continue
        name  = svc["name"]
        dur   = svc["duration"]
        mark = "✅" if name in sel else "◻️"
        kb.append([InlineKeyboardButton(
            f"{mark} {name} ({dur}мин) — {price}₽",
            callback_data=f"svc_toggle|{name}"
        )])
    kb.append([
        InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main"),
        InlineKeyboardButton("▶️ Далее",         callback_data="svc_done")
    ])

    total_min = sum(svc["duration"] for svc in services if svc["name"] in sel)
    caption = (
        f"<b>2️⃣ Выберите услуги:</b>\n\n"
        f"Итого: <b>{total_min}мин</b>"
    )
    await query.edit_message_caption(caption, reply_markup=InlineKeyboardMarkup(kb), parse_mode="HTML")
    return SELECT_SERVICES

# --- ЗАМЕНА: svc_done_cb ---
async def svc_done_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    chat_id, msg_id = ctx.user_data['bot_msg']

    services = ctx.user_data['all_services']
    sel      = ctx.user_data['selected_services']
    if not sel:
        await query.answer("Выберите хотя бы одну услугу.", show_alert=True)
        return SELECT_SERVICES

    # сохраняем список и длительность
    ctx.user_data['services_list'] = list(sel)
    total_min = sum(svc["duration"] for svc in services if svc["name"] in sel)
    ctx.user_data['total_duration'] = total_min

    # --- экран загрузки (оставляем) ---
    await ctx.bot.edit_message_caption(
        chat_id=chat_id, message_id=msg_id,
        caption="⏳ Загружаем доступные даты для записи...",
        reply_markup=InlineKeyboardMarkup([[InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")]]),
        parse_mode="HTML"
    )

    # ---------- отладочный и надёжный сбор доступных дат ----------
    today = datetime.date.today()
    days_ahead = 16
    start_date = today.isoformat()
    end_date = (today + datetime.timedelta(days=days_ahead - 1)).isoformat()
    barber = ctx.user_data['barber']
    total_min = ctx.user_data.get('total_duration', 0)

    logger.info("Searching available dates for barber=%s total_min=%s range=%s..%s",
                barber, total_min, start_date, end_date)

    def _barber_match(a, b):
        if not a or not b:
            return False
        if str(a).strip() == str(b).strip():
            return True
        return re.sub(r'\s+','',str(a)).strip() == re.sub(r'\s+','',str(b)).strip()

    # --- ЗАГРУЗКА данных Schedules copy (всё и затем фильтрация в Python) ---
    try:
        sched_recs = tbl_sched.all()
        logger.info("Loaded %d Schedule records", len(sched_recs))
    except Exception as e:
        logger.exception("Failed to load tbl_sched: %s", e)
        sched_recs = []

    # Собираем карты: date_map: { 'YYYY-MM-DD': 'HH:MM-HH:MM' or '0' }
    date_map = {}
    # (мы всё ещё сохраняем weekly_fallback на случай, если захочешь fallback, но НЕ используем его для списка дат)
    weekly_fallback = {}

    def _to_iso_date_str_local(val):
        if not val:
            return None
        if isinstance(val, (list, tuple)) and val:
            val = val[0]
        if isinstance(val, dict):
            for k in ("date", "value", "text"):
                if k in val and val[k]:
                    val = val[k]; break
            else:
                val = str(val)
        s = str(val)
        if "T" in s:
            s = s.split("T",1)[0]
        if " " in s and ":" in s:
            s = s.split(" ",1)[0]
        try:
            datetime.date.fromisoformat(s)
            return s
        except Exception:
            return None

    for r in sched_recs:
        f = r.get("fields", {}) or {}
        rec_barber = f.get("Barber") or f.get("Парикмахер") or ""
        if not _barber_match(rec_barber, barber):
            continue

        # Date (одна ячейка)
        d = _to_iso_date_str_local(f.get("Date") or f.get("date"))
        # Week (рабочие часы или "0" для выходного)
        w = f.get("Week") or f.get("Working") or f.get("Hours") or ""
        if d:
            date_map[d] = w
        # weekly fallback (сохраняем, но НЕ используем для списка дат)
        day_field = (f.get("DayOfWeek") or f.get("ДеньНедели") or f.get("Day") or "").strip()
        if day_field:
            weekly_fallback[day_field] = w

    logger.info("For barber=%s found date_map keys=%s weekly_fallback_keys=%s",
                barber, list(date_map.keys()), list(weekly_fallback.keys()))

    # --- Загружаем активные апоинтменты за период (один запрос) ---
    try:
        appt_recs = tbl_appts.all(formula=(
            f"AND({{Barber}}='{barber}',Status='active',Date>='{start_date}',Date<='{end_date}')"
        ))
        logger.info("Loaded %d appt records (active) for barber=%s in range", len(appt_recs), barber)
    except Exception as e:
        logger.exception("Failed to load tbl_appts: %s", e)
        appt_recs = []

    # busy_by_date
    from collections import defaultdict
    busy_by_date = defaultdict(list)
    for r in appt_recs:
        f = r.get("fields", {})
        d = f.get("Date")
        tf = f.get("Time","").strip()
        if not d or "-" not in tf:
            continue
        try:
            s,e = re.split(r'\s*-\s*', tf)
            h1,m1 = map(int, s.split(':')); h2,m2 = map(int, e.split(':'))
            busy_by_date[d].append((h1*60 + m1, h2*60 + m2))
        except Exception:
            logger.exception("Failed parse appointment time %s for record %s", tf, r.get("id"))
            continue

    logger.info("Busy slots for sample dates: %s", {k: busy_by_date[k] for k in list(busy_by_date)[:5]})

    # локальный парсер рабочего интервала
    def _parse_working_hours_local(wh: str):
        if not wh or wh in ("0", 0):
            return None
        if "-" not in wh:
            return None
        try:
            start_s, end_s = [p.strip() for p in wh.split("-",1)]
            h1,m1 = map(int, start_s.split(":")); h2,m2 = map(int, end_s.split(":"))
            return (h1*60 + m1, h2*60 + m2)
        except Exception:
            return None

    # --- Собираем candidate_dates только из date_map (только те даты, которые есть в Schedules copy) ---
    candidate_dates = sorted(d for d in date_map.keys() if start_date <= d <= end_date)

    available_dates = []
    now = datetime.datetime.now()
    min_allowed = now + datetime.timedelta(hours=2)  # запись минимум через 2 часа

    for d in candidate_dates:
        wh = date_map.get(d, "") or ""
        parsed = _parse_working_hours_local(wh) if wh else None
        if not parsed:
            logger.debug("Date %s: parsed working hours is None (wh=%r)", d, wh)
            continue
        start_day, end_day = parsed

        busy = busy_by_date.get(d, [])
        found_slot = False
        for minute in range(start_day, end_day - total_min + 1, 60):
            slot_dt = datetime.datetime.fromisoformat(f"{d}T{minute//60:02d}:{minute%60:02d}")
            if slot_dt >= min_allowed and can_fit(minute, total_min, busy):
                available_dates.append(d)
                found_slot = True
                logger.info("Found available date %s for barber=%s (slot %02d:%02d)", d, barber, minute//60, minute%60)
                break
        if not found_slot:
            logger.debug("Date %s: no free slot (or all slots are earlier than min_allowed) for barber=%s", d, barber)

    # --- Результат: либо пусто, либо формируем клавиатуру как раньше ---
    if not available_dates:
        logger.warning("No available_dates found for barber=%s total_min=%s. Dumping matching schedule records for debug.", barber, total_min)
        sample = []
        for r in sched_recs:
            f = r.get("fields", {})
            rec_barber = f.get("Barber") or f.get("Парикмахер") or ""
            if _barber_match(rec_barber, barber):
                sample.append(f)
        logger.warning("Matching Schedules records for barber=%s: %s", barber, sample[:5])

        await ctx.bot.edit_message_caption(
            chat_id=chat_id, message_id=msg_id,
            caption=("❌ В ближайшие 16 дней нет свободных окон."),
            reply_markup=main_menu_kb(),
            parse_mode="HTML"
        )
        return MENU

    # формируем 4-колоночную клавиатуру
    rows = []
    for i in range(0, len(available_dates), 4):
        chunk = available_dates[i:i+4]
        rows.append([InlineKeyboardButton(f"{d[8:]}.{d[5:7]}", callback_data=f"book_date|{d}") for d in chunk])
    rows.append([InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")])

    await ctx.bot.edit_message_caption(
        chat_id=chat_id, message_id=msg_id,
        caption=(
            f"<b>3️⃣ Выберите дату:</b>\n\n"
            f"Длительность приёма: <b>{total_min}мин</b>"
        ),
        reply_markup=InlineKeyboardMarkup(rows),
        parse_mode="HTML"
    )
    return BOOK_DATE

# --- ЗАМЕНА: book_date_cb (учёт минимального порога 2 часа при показе времён) ---
async def book_date_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    _, date = query.data.split("|",1)
    ctx.user_data['date'] = date

    total = ctx.user_data['total_duration']
    busy  = get_busy_intervals(ctx.user_data['barber'], date)
    wh    = get_working_hours(ctx.user_data['barber'], date)
    if not wh:
        await query.answer("Барбер не работает в этот день.", show_alert=True)
        return BOOK_DATE

    start_day, end_day = wh
    now = datetime.datetime.now()
    min_allowed = now + datetime.timedelta(hours=2)  # нельзя записаться раньше, чем через 2 часа

    buttons = []
    minute = start_day
    while minute + total <= end_day:
        slot_dt = datetime.datetime.fromisoformat(f"{date}T{minute//60:02d}:{minute%60:02d}")
        # проверяем, что слот не в прошлом и не ближе, чем 2 часа
        if slot_dt >= min_allowed and can_fit(minute, total, busy):
            t = f"{minute//60:02d}:{minute%60:02d}"
            buttons.append(InlineKeyboardButton(t, callback_data=f"book_time|{t}"))
        minute += 60

    if not buttons:
        await query.answer("В этот день нет доступных слотов.", show_alert=True)
        return BOOK_DATE

    rows = [buttons[i:i+3] for i in range(0, len(buttons), 3)]
    rows.append([InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")])

    await query.edit_message_caption(
        "<b>4️⃣ Выберите время:</b>",
        reply_markup=InlineKeyboardMarkup(rows),
        parse_mode="HTML"
    )
    return BOOK_TIME

async def ignore(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    await update.callback_query.answer()

async def book_time_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    _, start = query.data.split("|", 1)
    dt_start = datetime.datetime.fromisoformat(f"{ctx.user_data['date']}T{start}")
    total = ctx.user_data['total_duration']
    dt_end = dt_start + datetime.timedelta(minutes=total)
    ctx.user_data['dt_start']   = dt_start
    ctx.user_data['time_range'] = f"{start}-{dt_end.time().strftime('%H:%M')}"

    svc_text = "\n".join(f"– {s}" for s in ctx.user_data['services_list'])
    caption = (
        f"<b>5️⃣ Подтвердите запись:</b>\n\n"
        f"Барбер: <b>{ctx.user_data['barber']}</b>\n"
        f"Услуги:\n{svc_text}\n"
        f"Дата: <b>{ctx.user_data['date']}</b>\n"
        f"Время: <b>{ctx.user_data['time_range']}</b>"
    )
    kb = InlineKeyboardMarkup([
        [InlineKeyboardButton("✅ Подтвердить", callback_data="book_confirm|yes"),
         InlineKeyboardButton("❌ Отменить",    callback_data="book_confirm|no")],
        [InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")]
    ])
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return BOOK_CONFIRM

async def send_reminder(context: ContextTypes.DEFAULT_TYPE):
    data = context.job.data
    chat_id = data["chat_id"]
    rec = tbl_appts.get(data["appt_id"])["fields"]
    time_range = rec.get("Time", "")
    start_time = time_range.split("-", 1)[0] if "-" in time_range else time_range
    text = (
        f"⏰ Напоминание: у вас сегодня в {start_time} "
        f"запись к барберу <b>{rec['Barber']}</b>."
    )
    await context.bot.send_message(chat_id, text, parse_mode="HTML")



async def book_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    choice = query.data.split("|", 1)[1]
    chat_id, msg_id = ctx.user_data['bot_msg']

    if 'name' not in ctx.user_data or 'phone' not in ctx.user_data:
        rec = tbl_users.all(formula=f"{{TelegramID}}={query.from_user.id}")[0]['fields']
        ctx.user_data['name']  = rec.get('Name', '')
        ctx.user_data['phone'] = rec.get('Phone', '')

        # ... внутри book_confirm_cb, вместо scheduling блока:
    if choice == "yes":
        record = {
            "UserID":       str(query.from_user.id),
            "CustomerName": ctx.user_data['name'],
            "Phone":        ctx.user_data['phone'],
            "Barber":       ctx.user_data['barber'],
            "Date":         ctx.user_data['date'],
            "Time":         ctx.user_data['time_range'],
            "Status":       "active",
            SERVICES_FIELD: ctx.user_data['services_list'],
            # флаги напоминаний — выставляем False (чтобы джоб их обнаружил и отправил)
            "Reminder2hClientSent": False,
            "Reminder2hBarberSent": False,
        }
        new = tbl_appts.create(record)
        new_id = new["id"]

        # просто отправляем подтверждение пользователю (без локального планирования)
        res = "✅ Запись создана! Напоминание будет отправлено автоматически."
        await safe_upsert_menu(ctx, chat_id, msg_id, IMAGE_BYTES, res, main_menu_kb())

    return MENU

async def show_records(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    recs = tbl_appts.all(formula=f"AND({{UserID}}='{query.from_user.id}',Status='active')")
    chat_id, msg_id = ctx.user_data['bot_msg']

    if not recs:
        await safe_upsert_menu(
            ctx, chat_id, msg_id,
            IMAGE_BYTES,
            "У вас нет активных записей.",
            main_menu_kb()
        )
        return MENU

    text = "<b>Ваши записи:</b>\n"
    kb = []
    for i, r in enumerate(recs, 1):
        f = r['fields']
        svc = ", ".join(f.get(SERVICES_FIELD, []))
        text += f"\n{i}. {f['Date']} {f['Time']}\n  Услуги: {svc}"
        kb.append([
            InlineKeyboardButton(f"{i}. ❌ Отменить запись", callback_data=f"cancel|{r['id']}")
        ])

    kb.append([InlineKeyboardButton("🔙 Главное меню", callback_data="menu_main")])

    await safe_upsert_menu(
        ctx, chat_id, msg_id,
        IMAGE_BYTES,
        text,
        InlineKeyboardMarkup(kb)
    )
    return SHOW_RECORDS

async def cancel_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query=update.callback_query; await query.answer()
    rec_id = query.data.split("|",1)[1]
    rec = tbl_appts.get(rec_id)['fields']
    caption = f"Отменить запись у <b>{rec['Barber']}</b>\n{rec['Date']} {rec['Time']}?"
    kb = InlineKeyboardMarkup([[InlineKeyboardButton("✅ Да", callback_data=f"cancel_confirm|{rec_id}|yes"),
                                InlineKeyboardButton("❌ Нет", callback_data="menu_show")]])
    await query.edit_message_caption(caption, reply_markup=kb, parse_mode="HTML")
    return CANCEL_CONFIRM

async def cancel_confirm_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query; await query.answer()
    _, rec_id, choice = query.data.split("|", 2)
    if choice == "yes":
        tbl_appts.update(rec_id, {"Status": "cancelled"})
        res = "❌ Запись отменена."
    else:
        res = "ℹ️ Отменено."

    chat_id, msg_id = ctx.user_data['bot_msg']
    await safe_upsert_menu(
        ctx, chat_id, msg_id,
        IMAGE_BYTES,
        res,
        main_menu_kb()
    )
    return MENU

async def update_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    """
    /update - запускает update_schedule_dates() вручную.
    Доступ ограничивается config.ADMIN_IDS (если оно задано).
    """
    user_id = update.effective_user.id

    # получить список админов из config, если он задан
    admin_list = getattr(config, "ADMIN_IDS", None)
    if admin_list is None:
        # если не задан — разрешаем (но логируем предупреждение и советуем настроить ADMIN_IDS)
        logger.warning("ADMIN_IDS not set in config.py — /update will be available to anyone. "
                       "Set config.ADMIN_IDS = [123456789] to restrict access.")
        allowed = True
    else:
        allowed = user_id in set(admin_list)

    if not allowed:
        try:
            await update.message.reply_text("🚫 У вас нет прав на выполнение этой команды.")
        except Exception:
            pass
        return

    # инициализируем lock в application.bot_data, чтобы избежать параллельных запусков
    app = ctx.application
    lock = app.bot_data.setdefault("update_lock", asyncio.Lock())

    if lock.locked():
        await update.message.reply_text("⚠️ Обновление уже выполняется. Подождите завершения.")
        return

    # подтверждение запуска
    msg = await update.message.reply_text("⏳ Запускаю обновление расписаний...")

    # выполняем синхронную update_schedule_dates в отдельном потоке
    try:
        async with lock:
            # стартуем и ждём выполнения в пуле потоков
            await asyncio.to_thread(update_schedule_dates)
        await msg.edit_text("✅ Обновление расписаний выполнено.")
    except Exception as e:
        logger.exception("update_cb: update failed: %s", e)
        try:
            await msg.edit_text(f"❌ Ошибка при обновлении: {e}")
        except Exception:
            pass

import datetime as _dt


# ---------- Запуск ----------
def main():
    app = ApplicationBuilder().token(TOKEN).build()

    # --- initial update при старте ---
    try:
        update_schedule_dates()
        logger.info("Initial update_schedule_dates() выполнен успешно при старте.")
    except Exception:
        logger.exception("Не удалось выполнить initial update_schedule_dates()")

    purge_old_appts()

    # --- запуск напоминаний каждые 3600 секунд ---
    async def _reminder_job(context: ContextTypes.DEFAULT_TYPE):
        try:
            await reminder_checker_job(context)  # передаём context от JobQueue
        except Exception:
            logger.exception("reminder_checker_job из job упал.")

    if app.job_queue is not None:
        app.job_queue.run_repeating(
            _reminder_job,
            interval=60,
            first=10,
            name="reminder_checker"
        )
        logger.info("Scheduled reminder_checker_job every 3600 seconds.")

    # --- ручной запуск для админов ---
    async def run_reminders_cb(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
        admin_list = getattr(config, "ADMIN_IDS", None)
        now_ams = datetime.datetime.now(tz=ZONE)
        now_local = datetime.datetime.now().astimezone()
        logger.info("reminder_checker_job: start ams=%s local=%s", now_ams.isoformat(), now_local.isoformat())

        if admin_list is not None and update.effective_user.id not in set(admin_list):
            await update.message.reply_text("У вас нет прав.")
            return
        await update.message.reply_text("Запускаю проверку напоминаний…")
        await reminder_checker_job(ctx)  # работает и из команды
        await update.message.reply_text("Проверка завершена. Смотри логи.")

    app.add_handler(CommandHandler("run_reminders", run_reminders_cb))

    # --- ежедневный job ---
    async def _daily_update_job(context: ContextTypes.DEFAULT_TYPE):
        try:
            await asyncio.to_thread(update_schedule_dates)
            logger.info("Daily update_schedule_dates() выполнен успешно из job.")
        except Exception:
            logger.exception("Daily update_schedule_dates() из job упал.")

    if app.job_queue is not None:
        for job in app.job_queue.jobs():
            if job.name in ("update_schedules",):
                job.schedule_removal()

        local_tz = _dt.datetime.now().astimezone().tzinfo
        logger.info("Local tzinfo detected: %s", local_tz)

        run_time = dt_time(hour=0, minute=0, tzinfo=local_tz)
        app.job_queue.run_daily(
            _daily_update_job,
            time=run_time,
            days=tuple(range(7)),
            name="update_schedules"
        )

        logger.info("Now (local) = %s", _dt.datetime.now(local_tz).isoformat())
        for job in app.job_queue.jobs():
            logger.info("Job name=%s next_run_time=%s", job.name, getattr(job, "next_run_time", None))
        logger.info("Scheduled daily update_schedule_dates() at %s local system time", run_time.isoformat())

    # --- остальная логика handlers ---
    menu_handler = CallbackQueryHandler(menu_callback, pattern="^menu_")

    conv = ConversationHandler(
        entry_points=[CommandHandler("start", start)],
        states={
            REG_NAME:    [MessageHandler(filters.TEXT & ~filters.COMMAND, reg_name)],
            REG_PHONE:   [MessageHandler((filters.TEXT | filters.CONTACT) & ~filters.COMMAND, reg_phone)],
            MENU: [
                menu_handler,
                CallbackQueryHandler(profile_change_cb,      pattern="^profile_change$"),
                CallbackQueryHandler(profile_change_name_cb, pattern="^profile_change_name$")
            ],
            BOOK_BARBER:     [menu_handler, CallbackQueryHandler(book_barber_cb, pattern="^book_barber")],
            SELECT_SERVICES: [menu_handler,
                              CallbackQueryHandler(svc_toggle_cb, pattern="^svc_toggle"),
                              CallbackQueryHandler(svc_done_cb,   pattern="^svc_done")],
            BOOK_DATE:       [menu_handler,
                              CallbackQueryHandler(book_date_cb, pattern="^book_date"),
                              CallbackQueryHandler(ignore,       pattern="^ignore")],
            BOOK_TIME:       [menu_handler, CallbackQueryHandler(book_time_cb, pattern="^book_time")],
            BOOK_CONFIRM:    [menu_handler, CallbackQueryHandler(book_confirm_cb, pattern="^book_confirm")],
            SHOW_RECORDS:    [menu_handler,
                              CallbackQueryHandler(show_records, pattern="^menu_show$"),
                              CallbackQueryHandler(cancel_cb,    pattern="^cancel\\|")],
            CANCEL_CONFIRM:  [menu_handler, CallbackQueryHandler(cancel_confirm_cb, pattern="^cancel_confirm")],
            CHANGE_PHONE:    [menu_handler, MessageHandler((filters.TEXT|filters.CONTACT)&~filters.COMMAND, change_phone)],
            CHANGE_NAME:     [MessageHandler(filters.TEXT & ~filters.COMMAND, change_name)],
        },
        fallbacks=[CommandHandler("start", start)],
        allow_reentry=True
    )

    app.add_handler(CommandHandler("update", update_cb))
    app.add_handler(conv)

    app.run_polling()


if __name__ == "__main__":
    main()
