"""Configuration helper for values shared between the Telegram bot and Airtable sync."""

from __future__ import annotations

import os
from pathlib import Path

try:
    from dotenv import load_dotenv
except ImportError:  # pragma: no cover - dependency is optional at import time
    load_dotenv = None

BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"

if load_dotenv:
    if ENV_PATH.exists():
        load_dotenv(ENV_PATH)
    else:
        load_dotenv()


def _split_admin_ids(raw_value: str | None) -> list[int]:
    """Convert a comma separated list of ids into integers."""
    if not raw_value:
        return []
    result: list[int] = []
    for chunk in raw_value.split(","):
        value = chunk.strip()
        if not value:
            continue
        try:
            result.append(int(value))
        except ValueError:
            continue
    return result


TOKEN = os.getenv("TELEGRAM_BOT_TOKEN") or os.getenv("TOKEN", "")
API_KEY = os.getenv("AIRTABLE_API_KEY") or os.getenv("API_KEY", "")
BASE_ID = os.getenv("AIRTABLE_BASE_ID") or os.getenv("BASE_ID", "")
USERS_TABLE = os.getenv("AIRTABLE_USERS_TABLE", "Users")
APPTS_TABLE = os.getenv("AIRTABLE_APPOINTMENTS_TABLE", "Appointments")
ADMIN_IDS = _split_admin_ids(os.getenv("TELEGRAM_ADMIN_IDS"))
