package website.brothershop.mobile.data.network

data class LoginRequest(
    val phone: String,
    val password: String,
)

data class AuthUser(
    val id: String? = null,
    val phone: String? = null,
    val displayName: String? = null,
)

data class AuthResponse(
    val success: Boolean = false,
    val token: String? = null,
    val user: AuthUser? = null,
    val message: String? = null,
)

data class PromoItem(
    val id: String = "",
    val title: String = "",
    val subtitle: String = "",
    val details: String = "",
    val imageUrl: String = "",
)

data class SiteHome(
    val logoText: String = "BrotherShop",
    val promos: List<PromoItem> = emptyList(),
    val aboutTitle: String = "",
    val aboutText: String = "",
    val aboutImageUrl: String = "",
    val mapTitle: String = "",
    val mapImageUrl: String = "",
    val mapLink: String = "",
    val mapCaption: String = "",
    val contactsTitle: String = "",
    val phone: String = "",
    val telegramUrl: String = "",
    val whatsappUrl: String = "",
    val email: String = "",
    val bookingButtonText: String = "Записаться",
)

data class SiteBooking(
    val pageTitle: String = "Онлайн-запись",
    val commentPlaceholder: String = "Комментарий для мастера",
)

data class SiteReferral(
    val pageTitle: String = "Бонусы и рефералы",
    val introText: String = "",
    val participationText: String = "",
    val friendDiscountRub: Int = 0,
    val bsToRubRate: Int = 1,
)

data class SiteShop(
    val teaserTitle: String = "Скоро...",
    val teaserText: String = "",
)

data class SiteProfile(
    val pageTitle: String = "Личный кабинет",
    val historyTitle: String = "Последние движения",
)

data class SitePayload(
    val home: SiteHome = SiteHome(),
    val booking: SiteBooking = SiteBooking(),
    val referral: SiteReferral = SiteReferral(),
    val shop: SiteShop = SiteShop(),
    val profile: SiteProfile = SiteProfile(),
)

data class AppUser(
    val id: String = "",
    val displayName: String = "Клиент",
    val phone: String? = null,
    val telegramId: String? = null,
    val birthDate: String? = null,
    val gender: String? = null,
    val avatarUrl: String = "",
    val bookingNotificationsEnabled: Boolean = true,
    val referralCode: String = "",
    val warningCount: Int = 0,
    val noticeCount: Int = 0,
    val isBlocked: Boolean = false,
)

data class ActiveAppointment(
    val id: String = "",
    val date: String = "",
    val time: String = "",
    val barber: String = "",
    val barberId: String = "",
    val barberAvatarUrl: String = "",
    val services: List<String> = emptyList(),
    val status: String = "",
)

data class BarberCard(
    val id: String = "",
    val name: String = "",
    val fullName: String = "",
    val nickname: String = "",
    val description: String = "",
    val phrase: String = "",
    val avatarUrl: String = "",
    val color: String = "",
    val imageUrl: String = "",
    val thumbnailUrl: String = "",
    val originalImageUrl: String = "",
    val servicesCount: Int = 0,
)

data class BookingPayload(
    val activeAppointments: List<ActiveAppointment> = emptyList(),
    val barbers: List<BarberCard> = emptyList(),
)

data class ReferralScale(
    val progress: Int = 0,
    val current: Int = 0,
    val next: Int = 0,
    val isMaxLevel: Boolean = false,
)

data class ReferralLevel(
    val id: String = "",
    val name: String = "",
    val minReferrals: Int = 0,
    val maxReferrals: Int? = null,
)

data class ReferralProgram(
    val friendDiscountRub: Int = 0,
    val bsToRubRate: Int = 1,
    val activeReferralsCount: Int = 0,
    val levels: List<ReferralLevel> = emptyList(),
    val currentLevel: ReferralLevel? = null,
)

data class ReferralOperation(
    val id: String = "",
    val type: String = "",
    val title: String = "",
    val description: String = "",
    val amountBs: Int = 0,
    val createdAt: String = "",
    val status: String = "",
    val counterpartName: String = "",
    val counterpartPhone: String = "",
)

data class ReferralPerson(
    val id: String = "",
    val fullName: String = "",
    val shortName: String = "",
    val phone: String = "",
    val color: String = "",
    val lastVisitAt: String = "",
    val rewardedVisits: Int = 0,
    val completedVisits: Int = 0,
)

data class ReferralStats(
    val total: Int = 0,
    val green: Int = 0,
    val yellow: Int = 0,
)

data class ReferralPayload(
    val bsBalance: Int = 0,
    val referralLink: String = "",
    val referrals: List<ReferralPerson> = emptyList(),
    val recentTransferRecipients: List<ReferralPerson> = emptyList(),
    val operations: List<ReferralOperation> = emptyList(),
    val stats: ReferralStats = ReferralStats(),
    val scale: ReferralScale = ReferralScale(),
    val program: ReferralProgram = ReferralProgram(),
)

data class VisitHistoryItem(
    val id: String = "",
    val whenValue: String? = null,
    val date: String? = null,
    val time: String? = null,
    val barber: String = "",
    val services: List<String> = emptyList(),
    val amountRub: Int = 0,
    val status: String = "",
)

data class ProfileOperation(
    val id: String = "",
    val type: String = "",
    val title: String = "",
    val description: String = "",
    val amountRub: Int = 0,
    val amountBs: Int = 0,
    val createdAt: String = "",
)

data class ProfilePayload(
    val notices: List<String> = emptyList(),
    val visitHistory: List<VisitHistoryItem> = emptyList(),
    val operations: List<ProfileOperation> = emptyList(),
)

data class HomeAppPayload(
    val user: AppUser = AppUser(),
    val booking: BookingPayload = BookingPayload(),
    val referral: ReferralPayload = ReferralPayload(),
    val profile: ProfilePayload = ProfilePayload(),
    val site: SitePayload = SitePayload(),
)

data class BookingServiceItem(
    val id: String = "",
    val name: String = "",
    val duration: Int = 0,
    val price: Int = 0,
    val category: String = "",
)

data class BookingServicesPayload(
    val canBook: Boolean = false,
    val message: String = "",
    val bookingLimit: Int = 0,
    val activeAppointments: Int = 0,
    val barber: BarberCard = BarberCard(),
    val services: List<BookingServiceItem> = emptyList(),
)

data class BookingDatesPayload(
    val dateCount: Int = 0,
    val dates: List<String> = emptyList(),
    val totalDuration: Int = 0,
    val services: List<BookingServiceItem> = emptyList(),
)

data class BookingTimesPayload(
    val date: String = "",
    val totalDuration: Int = 0,
    val times: List<String> = emptyList(),
)

data class CreateAppointmentRequest(
    val barberId: String,
    val serviceIds: List<String>,
    val date: String,
    val startTime: String,
)

data class CreatedAppointmentPayload(
    val id: String = "",
    val barberName: String = "",
    val date: String = "",
    val time: String = "",
    val services: List<String> = emptyList(),
)

data class CreateAppointmentResponse(
    val appointment: CreatedAppointmentPayload = CreatedAppointmentPayload(),
)

data class ApiErrorResponse(
    val success: Boolean = false,
    val message: String? = null,
    val error: String? = null,
)
