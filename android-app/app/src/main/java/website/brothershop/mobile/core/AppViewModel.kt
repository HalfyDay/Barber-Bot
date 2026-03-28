package website.brothershop.mobile.core

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.data.repository.SessionRepository

data class AppUiState(
    val isLoading: Boolean = true,
    val isAuthenticated: Boolean = false,
    val token: String = "",
    val homePayload: HomeAppPayload? = null,
    val phoneInput: String = "",
    val passwordInput: String = "",
    val errorMessage: String? = null,
)

class AppViewModel(
    private val repository: SessionRepository,
) : ViewModel() {
    private val _uiState = MutableStateFlow(AppUiState())
    val uiState: StateFlow<AppUiState> = _uiState.asStateFlow()

    init {
        repository.observeToken()
            .onEach { token ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    token = token,
                    isAuthenticated = token.isNotBlank(),
                )
                if (token.isNotBlank()) {
                    refreshHome()
                }
            }
            .launchIn(viewModelScope)
    }

    fun updatePhone(value: String) {
        _uiState.value = _uiState.value.copy(phoneInput = value)
    }

    fun updatePassword(value: String) {
        _uiState.value = _uiState.value.copy(passwordInput = value)
    }

    fun login() {
        val phone = uiState.value.phoneInput.trim()
        val password = uiState.value.passwordInput.trim()
        if (phone.isBlank() || password.isBlank()) {
            _uiState.value = _uiState.value.copy(errorMessage = "Введите телефон и пароль.")
            return
        }

        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, errorMessage = null)
            runCatching {
                repository.login(phone = phone, password = password)
                repository.fetchHomeApp()
            }.onSuccess { payload ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    isAuthenticated = true,
                    homePayload = payload,
                    passwordInput = "",
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    errorMessage = error.message ?: "Не удалось выполнить вход.",
                )
            }
        }
    }

    fun refreshHome() {
        if (_uiState.value.token.isBlank()) return
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, errorMessage = null)
            runCatching {
                repository.fetchHomeApp()
            }.onSuccess { payload ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    homePayload = payload,
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    errorMessage = error.message ?: "Не удалось загрузить данные.",
                )
            }
        }
    }

    fun logout() {
        viewModelScope.launch {
            repository.logout()
            _uiState.value = AppUiState(isLoading = false)
        }
    }

    fun clearError() {
        _uiState.value = _uiState.value.copy(errorMessage = null)
    }
}
