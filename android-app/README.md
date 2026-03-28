# BrotherShop Android

Android-приложение BrotherShop работает как нативный shell для существующего сайта.

## Что подготовлено
- Android shell на Kotlin + Compose
- встроенный `WebView`, который открывает `https://brothershop.website/`
- один и тот же UI для сайта и приложения
- поддержка `localStorage`, cookies и загрузки файлов из WebView
- back navigation внутри истории сайта

## Как открыть
1. Откройте папку `android-app/` в Android Studio.
2. Дождитесь sync Gradle.
3. При необходимости установите Android SDK для `compileSdk = 35`.
4. Запустите `app` на устройстве или эмуляторе.

## Сервер
`BASE_URL` задан в `app/build.gradle.kts`:

`https://brothershop.website/`

## Архитектура
- Источник истины по UI: веб-клиент сайта.
- Android-приложение: контейнер для этого же интерфейса.
- Синхронизация между сайтом и приложением происходит автоматически, потому что экран используется один и тот же.

## Следующие шаги
- доработать сайт под WebView-окружение, если всплывут несовместимости
- добавить Android bridge для share, push, deep links и нативных действий
- вынести общие design tokens и API-контракты в отдельные модули репозитория
