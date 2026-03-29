# BrotherShop Android

`android-app/` теперь развивается не как `WebView`-обертка, а как нативный Android-клиент, который повторяет структуру мобильного сайта BrotherShop.

## Что важно сейчас

- Приложение на Kotlin + Compose.
- Навигация выровнена под сайт: `Home`, `BS`, `Booking`, `Shop`, `Profile`.
- Данные берутся из `api/home/*`.
- Для упрощения синхронизации с сайтом добавлен mapper-слой:
  `app/src/main/java/website/brothershop/mobile/ui/site/WebsiteScreenModels.kt`

## Как теперь проще обновлять Android после правок на сайте

Логика разделена на 2 уровня:

1. `HomeAppPayload` и API-модели
   Это сырой ответ сервера.

2. `WebsiteScreenModels`
   Это промежуточные модели, уже повторяющие структуру страниц сайта.

Практический смысл:

- если на сайте меняется состав блоков страницы, сначала правится mapper в `WebsiteScreenModels.kt`;
- если меняется только визуальная подача блока, правится соответствующий Compose-экран;
- если меняется API, правятся network-модели и repository.

Это уменьшает объем ручных правок и делает Android-клиент ближе к “mobile renderer” сайта, а не к отдельному случайному UI.

## Текущая структура экранов

- `HomeScreen.kt`
  Домашняя страница, собранная по секциям сайта.
- `ReferralScreen.kt`
  Экран BS / рефералов.
- `BookingScreen.kt`
  Экран онлайн-записи.
- `ShopScreen.kt`
  Отдельная страница магазина.
- `ProfileScreen.kt`
  Личный кабинет.

## Запуск

1. Откройте `android-app/` в Android Studio.
2. Дождитесь Gradle sync.
3. Убедитесь, что установлен Android SDK для `compileSdk = 35`.
4. Запустите `app` на устройстве или эмуляторе.

## Сборка

```powershell
.\gradlew.bat :app:assembleDebug
```

## Следующий этап

- довести `Booking` до более точного повторения сайта;
- подтянуть реальные изображения и медиа;
- перенести profile/referral sheets и дополнительные действия;
- при необходимости вынести общие page sections в еще более универсальный renderer-слой.
