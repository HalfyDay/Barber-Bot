package website.brothershop.mobile.ui.site

import website.brothershop.mobile.data.network.ActiveAppointment
import website.brothershop.mobile.data.network.BarberCard
import website.brothershop.mobile.data.network.BookingServiceItem
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.data.network.PromoItem
import website.brothershop.mobile.data.network.ReferralOperation
import website.brothershop.mobile.data.network.ReferralPerson
import website.brothershop.mobile.data.network.VisitHistoryItem

data class WebsiteHomeModel(
    val brandTitle: String,
    val promos: List<PromoItem>,
    val nextAppointment: ActiveAppointment?,
    val aboutTitle: String,
    val aboutText: String,
    val aboutImageUrl: String,
    val mapTitle: String,
    val mapImageUrl: String,
    val mapCaption: String,
    val contactsTitle: String,
    val phone: String,
    val telegramUrl: String,
    val whatsappUrl: String,
    val email: String,
    val bookingButtonText: String,
    val barbers: List<BarberCard>,
    val bsBalance: Int,
    val noticeCount: Int,
    val isBlocked: Boolean,
)

data class WebsiteBookingModel(
    val pageTitle: String,
    val commentPlaceholder: String,
    val barbers: List<BarberCard>,
)

data class WebsiteReferralModel(
    val pageTitle: String,
    val participationText: String,
    val balance: Int,
    val currentLevelName: String,
    val progressPercent: Int,
    val progressCurrent: Int,
    val progressNext: Int,
    val isMaxLevel: Boolean,
    val activeReferralsCount: Int,
    val referrals: List<ReferralPerson>,
    val operations: List<ReferralOperation>,
)

data class WebsiteProfileModel(
    val pageTitle: String,
    val historyTitle: String,
    val displayName: String,
    val phone: String,
    val birthDate: String,
    val gender: String,
    val avatarUrl: String,
    val notices: List<String>,
    val visitHistory: List<VisitHistoryItem>,
    val activeAppointments: List<ActiveAppointment>,
    val warningCount: Int,
    val bsBalance: Int,
)

fun HomeAppPayload.toWebsiteHomeModel(): WebsiteHomeModel =
    WebsiteHomeModel(
        brandTitle = site.home.logoText.ifBlank { "BrotherShop" },
        promos = site.home.promos,
        nextAppointment = booking.activeAppointments.firstOrNull(),
        aboutTitle = site.home.aboutTitle.ifBlank { site.home.logoText.ifBlank { "BrotherShop" } },
        aboutText = site.home.aboutText,
        aboutImageUrl = site.home.aboutImageUrl,
        mapTitle = site.home.mapTitle.ifBlank { "Карта" },
        mapImageUrl = site.home.mapImageUrl,
        mapCaption = site.home.mapCaption,
        contactsTitle = site.home.contactsTitle.ifBlank { "Контакты" },
        phone = site.home.phone.ifBlank { user.phone.orEmpty() },
        telegramUrl = site.home.telegramUrl,
        whatsappUrl = site.home.whatsappUrl,
        email = site.home.email,
        bookingButtonText = site.home.bookingButtonText.ifBlank { "Записаться" },
        barbers = booking.barbers.take(4),
        bsBalance = referral.bsBalance,
        noticeCount = user.noticeCount,
        isBlocked = user.isBlocked,
    )

fun HomeAppPayload.toWebsiteBookingModel(): WebsiteBookingModel =
    WebsiteBookingModel(
        pageTitle = site.booking.pageTitle.ifBlank { "Онлайн-запись" },
        commentPlaceholder = site.booking.commentPlaceholder.ifBlank { "Комментарий для мастера" },
        barbers = booking.barbers,
    )

fun HomeAppPayload.toWebsiteReferralModel(): WebsiteReferralModel =
    WebsiteReferralModel(
        pageTitle = site.referral.pageTitle.ifBlank { "Бонусы и рефералы" },
        participationText = site.referral.participationText,
        balance = referral.bsBalance,
        currentLevelName = referral.program.currentLevel?.name ?: "Гость",
        progressPercent = referral.scale.progress,
        progressCurrent = referral.scale.current,
        progressNext = referral.scale.next,
        isMaxLevel = referral.scale.isMaxLevel,
        activeReferralsCount = referral.program.activeReferralsCount,
        referrals = referral.referrals,
        operations = referral.operations,
    )

fun HomeAppPayload.toWebsiteProfileModel(): WebsiteProfileModel =
    WebsiteProfileModel(
        pageTitle = site.profile.pageTitle.ifBlank { "Личный кабинет" },
        historyTitle = site.profile.historyTitle.ifBlank { "Последние движения" },
        displayName = user.displayName.ifBlank { "Клиент" },
        phone = user.phone.orEmpty(),
        birthDate = user.birthDate.orEmpty(),
        gender = user.gender.orEmpty(),
        avatarUrl = user.avatarUrl,
        notices = profile.notices,
        visitHistory = profile.visitHistory,
        activeAppointments = booking.activeAppointments,
        warningCount = user.warningCount,
        bsBalance = referral.bsBalance,
    )

fun BookingServiceItem.websiteLabel(): String = "$name • $duration мин"
