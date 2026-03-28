package website.brothershop.mobile.data.local

import android.content.Context
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.map

private val Context.dataStore by preferencesDataStore(name = "brothershop_session")

class SessionStore(
    private val context: Context,
) {
    private val tokenKey = stringPreferencesKey("home_session_token")

    fun observeToken(): Flow<String> =
        context.dataStore.data.map { preferences -> preferences[tokenKey].orEmpty() }

    suspend fun readToken(): String = observeToken().first()

    suspend fun writeToken(token: String) {
        context.dataStore.edit { preferences ->
            preferences[tokenKey] = token
        }
    }

    suspend fun clear() {
        context.dataStore.edit { preferences ->
            preferences.remove(tokenKey)
        }
    }
}
