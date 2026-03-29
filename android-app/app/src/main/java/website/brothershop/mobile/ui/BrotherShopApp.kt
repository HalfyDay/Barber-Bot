package website.brothershop.mobile.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import website.brothershop.mobile.core.AppContainer
import website.brothershop.mobile.core.AppViewModel
import website.brothershop.mobile.core.AppViewModelFactory
import website.brothershop.mobile.ui.screens.AppShellScreen
import website.brothershop.mobile.ui.screens.AuthScreen
import website.brothershop.mobile.ui.screens.SplashScreen

@Composable
fun BrotherShopApp() {
    val context = LocalContext.current
    val container = remember(context) { AppContainer(context) }
    val appViewModel: AppViewModel = viewModel(
        factory = AppViewModelFactory(container),
    )
    val uiState by appViewModel.uiState.collectAsStateWithLifecycle()

    when {
        uiState.isLoading && !uiState.isAuthenticated && uiState.homePayload == null -> {
            SplashScreen()
        }

        !uiState.isAuthenticated -> {
            AuthScreen(
                phone = uiState.phoneInput,
                password = uiState.passwordInput,
                isLoading = uiState.isLoading,
                errorMessage = uiState.errorMessage,
                onPhoneChange = appViewModel::updatePhone,
                onPasswordChange = appViewModel::updatePassword,
                onLogin = appViewModel::login,
            )
        }

        else -> {
            AppShellScreen(
                payload = uiState.homePayload,
                isLoading = uiState.isLoading,
                errorMessage = uiState.errorMessage,
                onRefresh = appViewModel::refreshHome,
                onLogout = appViewModel::logout,
            )
        }
    }
}
