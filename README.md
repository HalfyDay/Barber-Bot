# Barber Bot CRM

Полноценное облако для управления барбершопом: веб‑CRM на Express/React, Telegram‑бот на python-telegram-bot и сервисы бэкапов/обновлений/лицензий. Репозиторий содержит backend, фронтенд и рабочие скрипты.

## Возможности
- Современный SPA на React + Tailwind для расписаний, услуг и персонала.
- REST/WS API на Express + Prisma поверх SQLite (файл `prisma/dev.db`).
- Telegram-бот (`BotBarberShop.py`) для записи клиентов и синхронизации с CRM.
- Планировщик резервных копий и автообновлений, работающий через GitHub.
- Лицензионная защита с поддержкой удалённого и локального списка ключей.

## Структура проекта
```
├── server.js          # Express API + интеграция с ботом
├── BotBarberShop.py   # telegram-бот
├── script.js          # SPA (React) + Tailwind
├── prisma/            # Prisma schema + migrations
├── services/          # licenseGuard, updateManager и др.
├── data/              # runtime JSON (игнорируется в Git)
└── Image/             # статические изображения
```

## Требования
- Node.js 20+ / npm 10+
- Python 3.11+ (совместимо с 3.10) + pip
- SQLite (для Prisma)
- Git + доступ к GitHub (для лицензии и обновлений)

## Быстрый старт
1. `git clone https://github.com/HalfyDay/Barber-Bot.git` и `cd Barber-Bot`.
2. Скопируйте `.env.example` → `.env` и заполните ключи (см. ниже).
3. Node-зависимости: `npm install`.
4. Python-зависимости: `python -m pip install -r requirements.txt`.
5. Подготовьте базу и Prisma Client:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```
6. Соберите фронтенд (Tailwind + Babel):
   ```bash
   npm run build:web
   ```
7. Запустите сервис: `npm start`.

> Telegram-токен сохраняйте через интерфейс (“Система → Telegram-бот”). CRM пишет токен в таблицу `BotSettings` и перезапускает бота. Переменная `TELEGRAM_BOT_TOKEN` в `.env` служит только для первого запуска.

## Переменные окружения
| Ключ | Назначение |
| --- | --- |
| `PORT` | Порт Express (по умолчанию 3000) |
| `JWT_SECRET` | Секрет для JWT |
| `DATABASE_URL` | Путь к SQLite (`file:./dev.db`) |
| `TELEGRAM_BOT_TOKEN` (опц.) | Временный токен до сохранения через CRM |
| `TELEGRAM_ADMIN_IDS` | ID администраторов через запятую |
| `BARBER_LICENSE_KEY` | Ваш лицензионный ключ |
| `LICENSE_SOURCE` | URL до JSON со списком лицензий (raw GitHub) |
| `BOT_PYTHON_PATH` / `BOT_COMMAND` | Путь или команда для запуска бота |
| `UPDATE_REPO` / `UPDATE_BRANCH` | Настройки автообновления |

`config.py` использует `python-dotenv`, поэтому `.env` един для Node и Python.

## Лицензирование
- В `LICENSE_SOURCE` укажите `https://raw.githubusercontent.com/HalfyDay/Barber-Bot/main/licenses.json` или свой URL.
- JSON должен выглядеть так:
  ```json
  {
    "licenses": [
      { "key": "key_1299896", "expiresAt": "2099-12-31T23:59:59Z" }
    ]
  }
  ```
- Файл `data/licenses.json` (локальный fallback) хранится на сервере и игнорируется Git. При недоступном GitHub используется именно он.

## Фронтенд и сборка
- Tailwind исходники лежат в `styles.tailwind.css`, конфиг — в `tailwind.config.js`.
- `npm run build:web` = `tailwindcss -i styles.tailwind.css -o styles.css --minify` + Babel (`script.js` → `script.bundle.js`).
- Service Worker кеширует `styles.css` и `script.bundle.js`. После деплоя делайте “жёсткое обновление” или меняйте `CACHE_VERSION` в `service-worker.js`, чтобы клиенты получили новую версию.

## npm-скрипты
| Скрипт | Описание |
| --- | --- |
| `npm start` | Express API + запуск Telegram-бота |
| `npm run build:css` | Только Tailwind → `styles.css` |
| `npm run build:web` | Полный билд фронтенда (CSS + Babel) |
| `npm test` | Заглушка для собственных тестов |

## Обслуживание
- Перед релизом запускайте `npm run build:web`, чтобы `script.bundle.js` и `styles.css` были актуальными.
- Резервные копии (`backups/`) можно создавать через cron (см. `server.js`) или API `/api/backups`.
- Для нестандартного запуска Python-бота задайте `BOT_COMMAND="python -m BotBarberShop"` или `BOT_PYTHON_PATH`.
- Директория `data/` используется только для runtime-файлов и не попадает в Git. Секреты (.env, dev.db, licenses.json) храните локально и на GitHub не публикуйте.
