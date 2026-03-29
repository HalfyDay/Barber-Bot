package website.brothershop.mobile.ui.screens

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.CalendarMonth
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.Storefront
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.graphics.vector.ImageVector
import website.brothershop.mobile.data.network.HomeAppPayload

private enum class AppSection(
    val label: String,
    val icon: ImageVector,
) {
    Home("Главная", Icons.Outlined.Home),
    Appointments("Записи", Icons.Outlined.CalendarMonth),
    Team("Команда", Icons.Outlined.Storefront),
    Profile("Профиль", Icons.Outlined.Person),
}

@Composable
fun AppShellScreen(
    payload: HomeAppPayload?,
    isLoading: Boolean,
    errorMessage: String?,
    onRefresh: () -> Unit,
    onLogout: () -> Unit,
) {
    var selectedSection by rememberSaveable { mutableStateOf(AppSection.Home.name) }
    val activeSection = AppSection.valueOf(selectedSection)

    Scaffold(
        bottomBar = {
            NavigationBar {
                AppSection.entries.forEach { section ->
                    NavigationBarItem(
                        selected = activeSection == section,
                        onClick = { selectedSection = section.name },
                        icon = {
                            Icon(
                                imageVector = section.icon,
                                contentDescription = section.label,
                            )
                        },
                        label = { Text(section.label) },
                    )
                }
            }
        },
    ) { innerPadding ->
        when (activeSection) {
            AppSection.Home -> {
                HomeScreen(
                    payload = payload,
                    isLoading = isLoading,
                    errorMessage = errorMessage,
                    onRefresh = onRefresh,
                    onLogout = onLogout,
                    contentPadding = innerPadding,
                )
            }

            AppSection.Appointments -> {
                AppointmentsScreen(
                    payload = payload,
                    isLoading = isLoading,
                    onRefresh = onRefresh,
                    contentPadding = innerPadding,
                )
            }

            AppSection.Team -> {
                TeamScreen(
                    payload = payload,
                    contentPadding = innerPadding,
                )
            }

            AppSection.Profile -> {
                ProfileScreen(
                    payload = payload,
                    onLogout = onLogout,
                    contentPadding = innerPadding,
                )
            }
        }
    }
}
