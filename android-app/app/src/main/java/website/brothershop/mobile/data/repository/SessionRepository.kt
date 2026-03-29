package website.brothershop.mobile.data.repository

import com.google.gson.Gson
import kotlinx.coroutines.flow.Flow
import website.brothershop.mobile.data.local.SessionStore
import website.brothershop.mobile.data.network.ApiErrorResponse
import website.brothershop.mobile.data.network.BookingDatesPayload
import website.brothershop.mobile.data.network.BookingServicesPayload
import website.brothershop.mobile.data.network.BookingTimesPayload
import website.brothershop.mobile.data.network.BrotherShopApi
import website.brothershop.mobile.data.network.CreateAppointmentRequest
import website.brothershop.mobile.data.network.CreatedAppointmentPayload
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.data.network.LoginRequest

class SessionRepository(
    private val api: BrotherShopApi,
    private val sessionStore: SessionStore,
) {
    private val gson = Gson()

    fun observeToken(): Flow<String> = sessionStore.observeToken()

    suspend fun login(phone: String, password: String) {
        val response = api.login(LoginRequest(phone = phone, password = password))
        if (!response.isSuccessful) {
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }

        val payload = requireNotNull(response.body()) { "Пустой ответ сервера." }
        val token = payload.token.orEmpty()
        if (token.isBlank()) {
            throw IllegalStateException(payload.message ?: "Сервер не вернул токен.")
        }
        sessionStore.writeToken(token)
    }

    suspend fun fetchHomeApp(): HomeAppPayload {
        val response = api.getHomeApp()
        if (!response.isSuccessful) {
            if (response.code() == 401 || response.code() == 403) {
                sessionStore.clear()
            }
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }
        return requireNotNull(response.body()) { "Пустой payload приложения." }
    }

    suspend fun fetchBookingServices(barberId: String): BookingServicesPayload {
        val response = api.getBookingServices(barberId)
        if (!response.isSuccessful) {
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }
        return requireNotNull(response.body()) { "Пустой payload услуг." }
    }

    suspend fun fetchBookingDates(
        barberId: String,
        serviceIds: List<String>,
    ): BookingDatesPayload {
        val response = api.getBookingDates(barberId, serviceIds.joinToString(","))
        if (!response.isSuccessful) {
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }
        return requireNotNull(response.body()) { "Пустой payload дат." }
    }

    suspend fun fetchBookingTimes(
        barberId: String,
        serviceIds: List<String>,
        date: String,
    ): BookingTimesPayload {
        val response = api.getBookingTimes(barberId, serviceIds.joinToString(","), date)
        if (!response.isSuccessful) {
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }
        return requireNotNull(response.body()) { "Пустой payload времени." }
    }

    suspend fun createAppointment(
        barberId: String,
        serviceIds: List<String>,
        date: String,
        startTime: String,
    ): CreatedAppointmentPayload {
        val response = api.createAppointment(
            CreateAppointmentRequest(
                barberId = barberId,
                serviceIds = serviceIds,
                date = date,
                startTime = startTime,
            ),
        )
        if (!response.isSuccessful) {
            throw IllegalStateException(readErrorMessage(response.errorBody()?.string()))
        }
        return requireNotNull(response.body()) { "Пустой ответ создания записи." }.appointment
    }

    suspend fun logout() {
        sessionStore.clear()
    }

    private fun readErrorMessage(raw: String?): String {
        if (raw.isNullOrBlank()) return "Ошибка сети или сервера."
        return runCatching {
            val parsed = gson.fromJson(raw, ApiErrorResponse::class.java)
            parsed.message ?: parsed.error ?: "Ошибка запроса."
        }.getOrDefault("Ошибка запроса.")
    }
}
