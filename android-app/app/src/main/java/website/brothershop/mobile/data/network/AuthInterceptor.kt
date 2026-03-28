package website.brothershop.mobile.data.network

import kotlinx.coroutines.runBlocking
import okhttp3.Interceptor
import okhttp3.Response
import website.brothershop.mobile.data.local.SessionStore

class AuthInterceptor(
    private val sessionStore: SessionStore,
) : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val token = runBlocking { sessionStore.readToken() }
        val request = chain.request()
            .newBuilder()
            .apply {
                if (token.isNotBlank()) {
                    header("Authorization", "Bearer $token")
                }
            }
            .build()

        val response = chain.proceed(request)
        val refreshedToken = response.header("x-home-session-token").orEmpty()
        if (refreshedToken.isNotBlank()) {
            runBlocking {
                sessionStore.writeToken(refreshedToken)
            }
        }
        return response
    }
}
