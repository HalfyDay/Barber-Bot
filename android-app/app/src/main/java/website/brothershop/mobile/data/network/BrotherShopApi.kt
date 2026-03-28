package website.brothershop.mobile.data.network

import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface BrotherShopApi {
    @POST("api/home/auth/login")
    suspend fun login(
        @Body request: LoginRequest,
    ): Response<AuthResponse>

    @GET("api/home/app")
    suspend fun getHomeApp(): Response<HomeAppPayload>
}
