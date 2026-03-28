package website.brothershop.mobile.core

import android.content.Context
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import website.brothershop.mobile.BuildConfig
import website.brothershop.mobile.data.local.SessionStore
import website.brothershop.mobile.data.network.AuthInterceptor
import website.brothershop.mobile.data.network.BrotherShopApi
import website.brothershop.mobile.data.repository.SessionRepository

class AppContainer(context: Context) {
    private val appContext = context.applicationContext
    private val sessionStore = SessionStore(appContext)

    private val httpClient: OkHttpClient by lazy {
        OkHttpClient.Builder()
            .addInterceptor(AuthInterceptor(sessionStore))
            .addInterceptor(
                HttpLoggingInterceptor().apply {
                    level = HttpLoggingInterceptor.Level.BASIC
                },
            )
            .build()
    }

    private val retrofit: Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BuildConfig.BASE_URL)
            .client(httpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    private val api: BrotherShopApi by lazy {
        retrofit.create(BrotherShopApi::class.java)
    }

    val sessionRepository: SessionRepository by lazy {
        SessionRepository(
            api = api,
            sessionStore = sessionStore,
        )
    }
}
