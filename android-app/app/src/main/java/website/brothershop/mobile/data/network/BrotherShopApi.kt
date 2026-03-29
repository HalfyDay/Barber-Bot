package website.brothershop.mobile.data.network

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface BrotherShopApi {
    @POST("api/home/auth/login")
    suspend fun login(
        @Body request: LoginRequest,
    ): Response<AuthResponse>

    @GET("api/home/app")
    suspend fun getHomeApp(): Response<HomeAppPayload>

    @GET("api/home/booking/services")
    suspend fun getBookingServices(
        @Query("barberId") barberId: String,
    ): Response<BookingServicesPayload>

    @GET("api/home/booking/dates")
    suspend fun getBookingDates(
        @Query("barberId") barberId: String,
        @Query("serviceIds") serviceIds: String,
    ): Response<BookingDatesPayload>

    @GET("api/home/booking/times")
    suspend fun getBookingTimes(
        @Query("barberId") barberId: String,
        @Query("serviceIds") serviceIds: String,
        @Query("date") date: String,
    ): Response<BookingTimesPayload>

    @POST("api/home/booking/appointments")
    suspend fun createAppointment(
        @Body request: CreateAppointmentRequest,
    ): Response<CreateAppointmentResponse>
}
