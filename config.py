"""Configuration helper for values shared between the Telegram bot and CRM."""
from __future__ import annotations

# NOTE: TOKEN/ADMIN_IDS defaults keep compatibility with older deployments.
# The CRM stores bot credentials in the database and injects them via env vars.
TOKEN = ''
ADMIN_IDS: list[int] = []

import os
from pathlib import Path

try:
    from dotenv import load_dotenv
except ImportError:  # pragma: no cover - dependency is optional at import time
    load_dotenv = None

BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / '.env'

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
    for chunk in raw_value.split(','):
        value = chunk.strip()
        if not value:
            continue
        try:
            result.append(int(value))
        except ValueError:
            continue
    return result


_env_token = os.getenv('TELEGRAM_BOT_TOKEN') or os.getenv('TOKEN')
if _env_token:
    TOKEN = _env_token

_env_admin_ids = _split_admin_ids(os.getenv('TELEGRAM_ADMIN_IDS'))
if _env_admin_ids:
    ADMIN_IDS = _env_admin_ids
