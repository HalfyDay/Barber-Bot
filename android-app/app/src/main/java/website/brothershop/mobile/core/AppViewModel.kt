package website.brothershop.mobile.core

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch
import website.brothershop.mobile.data.network.BookingServiceItem
import website.brothershop.mobile.data.network.BookingTimesPayload
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.data.repository.SessionRepository

data class BookingComposerState(
    val selectedBarberId: String? = null,
    val services: List<BookingServiceItem> = emptyList(),
    val selectedServiceIds: Set<String> = emptySet(),
    val availableDates: List<String> = emptyList(),
    val selectedDate: String? = null,
    val availableTimes: List<String> = emptyList(),
    val selectedTime: String? = null,
    val totalDuration: Int = 0,
    val canBook: Boolean = true,
    val infoMessage: String? = null,
    val successMessage: String? = null,
    val isLoading: Boolean = false,
)

data class AppUiState(
    val isLoading: Boolean = true,
    val isAuthenticated: Boolean = false,
    val token: String = "",
    val homePayload: HomeAppPayload? = null,
    val phoneInput: String = "",
    val passwordInput: String = "",
    val errorMessage: String? = null,
    val bookingComposer: BookingComposerState = BookingComposerState(),
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
                    bookingComposer = seedBookingComposer(payload),
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
                    bookingComposer = syncBookingComposer(_uiState.value.bookingComposer, payload),
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    errorMessage = error.message ?: "Не удалось загрузить данные.",
                )
            }
        }
    }

    fun selectBarber(barberId: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(
                bookingComposer = BookingComposerState(
                    selectedBarberId = barberId,
                    isLoading = true,
                ),
                errorMessage = null,
            )
            runCatching {
                repository.fetchBookingServices(barberId)
            }.onSuccess { payload ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = BookingComposerState(
                        selectedBarberId = barberId,
                        services = payload.services,
                        canBook = payload.canBook,
                        infoMessage = payload.message.ifBlank { null },
                        isLoading = false,
                    ),
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = _uiState.value.bookingComposer.copy(isLoading = false),
                    errorMessage = error.message ?: "Не удалось загрузить услуги.",
                )
            }
        }
    }

    fun toggleBookingService(serviceId: String) {
        val state = _uiState.value.bookingComposer
        val nextSelected = state.selectedServiceIds.toMutableSet().apply {
            if (!add(serviceId)) remove(serviceId)
        }
        _uiState.value = _uiState.value.copy(
            bookingComposer = state.copy(
                selectedServiceIds = nextSelected,
                selectedDate = null,
                availableDates = emptyList(),
                availableTimes = emptyList(),
                selectedTime = null,
                totalDuration = 0,
                successMessage = null,
            ),
        )
        if (nextSelected.isEmpty()) return
        loadDates()
    }

    fun selectBookingDate(date: String) {
        val state = _uiState.value.bookingComposer
        val barberId = state.selectedBarberId ?: return
        if (state.selectedServiceIds.isEmpty()) return
        _uiState.value = _uiState.value.copy(
            bookingComposer = state.copy(
                selectedDate = date,
                selectedTime = null,
                availableTimes = emptyList(),
                isLoading = true,
                successMessage = null,
            ),
        )
        viewModelScope.launch {
            runCatching {
                repository.fetchBookingTimes(barberId, state.selectedServiceIds.toList(), date)
            }.onSuccess { payload ->
                applyTimesPayload(payload)
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = _uiState.value.bookingComposer.copy(isLoading = false),
                    errorMessage = error.message ?: "Не удалось загрузить время.",
                )
            }
        }
    }

    fun selectBookingTime(time: String) {
        _uiState.value = _uiState.value.copy(
            bookingComposer = _uiState.value.bookingComposer.copy(
                selectedTime = time,
                successMessage = null,
            ),
        )
    }

    fun createBooking() {
        val state = _uiState.value.bookingComposer
        val barberId = state.selectedBarberId ?: return
        val date = state.selectedDate ?: return
        val time = state.selectedTime ?: return
        val serviceIds = state.selectedServiceIds.toList()
        if (serviceIds.isEmpty()) return

        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(
                bookingComposer = state.copy(isLoading = true, successMessage = null),
                errorMessage = null,
            )
            runCatching {
                repository.createAppointment(
                    barberId = barberId,
                    serviceIds = serviceIds,
                    date = date,
                    startTime = time,
                )
            }.onSuccess { appointment ->
                val payload = repository.fetchHomeApp()
                _uiState.value = _uiState.value.copy(
                    homePayload = payload,
                    isLoading = false,
                    bookingComposer = BookingComposerState(
                        successMessage = "Запись создана: ${appointment.date} • ${appointment.time}",
                    ),
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = _uiState.value.bookingComposer.copy(isLoading = false),
                    errorMessage = error.message ?: "Не удалось создать запись.",
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

    private fun loadDates() {
        val state = _uiState.value.bookingComposer
        val barberId = state.selectedBarberId ?: return
        val serviceIds = state.selectedServiceIds.toList()
        if (serviceIds.isEmpty()) return

        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(
                bookingComposer = state.copy(isLoading = true),
            )
            runCatching {
                repository.fetchBookingDates(barberId, serviceIds)
            }.onSuccess { payload ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = _uiState.value.bookingComposer.copy(
                        availableDates = payload.dates,
                        totalDuration = payload.totalDuration,
                        isLoading = false,
                        infoMessage = if (payload.dates.isEmpty()) {
                            "Нет доступных дат для выбранных услуг."
                        } else {
                            _uiState.value.bookingComposer.infoMessage
                        },
                    ),
                )
            }.onFailure { error ->
                _uiState.value = _uiState.value.copy(
                    bookingComposer = _uiState.value.bookingComposer.copy(isLoading = false),
                    errorMessage = error.message ?: "Не удалось загрузить даты.",
                )
            }
        }
    }

    private fun applyTimesPayload(payload: BookingTimesPayload) {
        _uiState.value = _uiState.value.copy(
            bookingComposer = _uiState.value.bookingComposer.copy(
                availableTimes = payload.times,
                totalDuration = payload.totalDuration,
                isLoading = false,
                infoMessage = if (payload.times.isEmpty()) {
                    "На выбранную дату нет свободного времени."
                } else {
                    _uiState.value.bookingComposer.infoMessage
                },
            ),
        )
    }

    private fun seedBookingComposer(payload: HomeAppPayload): BookingComposerState {
        val defaultBarberId = payload.booking.barbers.firstOrNull()?.id
        return BookingComposerState(selectedBarberId = defaultBarberId)
    }

    private fun syncBookingComposer(
        current: BookingComposerState,
        payload: HomeAppPayload,
    ): BookingComposerState {
        val availableIds = payload.booking.barbers.map { it.id }.toSet()
        val selected = current.selectedBarberId?.takeIf { it in availableIds }
            ?: payload.booking.barbers.firstOrNull()?.id
        return current.copy(selectedBarberId = selected)
    }
}
