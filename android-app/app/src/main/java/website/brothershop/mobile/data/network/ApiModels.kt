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
    val phone: String = "",
    val bookingButtonText: String = "Записаться",
)

data class SitePayload(
    val home: SiteHome = SiteHome(),
)

data class AppUser(
    val id: String = "",
    val displayName: String = "Клиент",
    val phone: String? = null,
    val avatarUrl: String = "",
    val warningCount: Int = 0,
    val noticeCount: Int = 0,
    val isBlocked: Boolean = false,
)

data class ActiveAppointment(
    val id: String = "",
    val date: String = "",
    val time: String = "",
    val barber: String = "",
    val services: List<String> = emptyList(),
    val status: String = "",
)

data class BarberCard(
    val id: String = "",
    val name: String = "",
    val fullName: String = "",
    val phrase: String = "",
    val avatarUrl: String = "",
    val color: String = "",
)

data class BookingPayload(
    val activeAppointments: List<ActiveAppointment> = emptyList(),
    val barbers: List<BarberCard> = emptyList(),
)

data class ReferralPayload(
    val bsBalance: Int = 0,
)

data class ProfilePayload(
    val notices: List<String> = emptyList(),
)

data class HomeAppPayload(
    val user: AppUser = AppUser(),
    val booking: BookingPayload = BookingPayload(),
    val referral: ReferralPayload = ReferralPayload(),
    val profile: ProfilePayload = ProfilePayload(),
    val site: SitePayload = SitePayload(),
)

data class ApiErrorResponse(
    val success: Boolean = false,
    val message: String? = null,
    val error: String? = null,
)
