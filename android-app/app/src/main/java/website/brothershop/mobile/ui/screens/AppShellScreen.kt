package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AccountBalanceWallet
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.ShoppingBag
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.core.BookingComposerState
import website.brothershop.mobile.data.network.HomeAppPayload

private enum class AppSection(
    val label: String,
    val icon: ImageVector,
    val subtitle: String,
) {
    Home("Home", Icons.Outlined.Home, "Главная страница"),
    Referral("BS", Icons.Outlined.AccountBalanceWallet, "Бонусы и рефералы"),
    Booking("Booking", Icons.Outlined.AccountBalanceWallet, "Онлайн-запись"),
    Shop("Shop", Icons.Outlined.ShoppingBag, "Магазин"),
    Profile("Profile", Icons.Outlined.Person, "Личный кабинет"),
}

@Composable
fun AppShellScreen(
    payload: HomeAppPayload?,
    isLoading: Boolean,
    errorMessage: String?,
    bookingComposer: BookingComposerState,
    onRefresh: () -> Unit,
    onLogout: () -> Unit,
    onSelectBarber: (String) -> Unit,
    onToggleBookingService: (String) -> Unit,
    onSelectBookingDate: (String) -> Unit,
    onSelectBookingTime: (String) -> Unit,
    onCreateBooking: () -> Unit,
) {
    var selectedSection by rememberSaveable { mutableStateOf(AppSection.Home.name) }
    val activeSection = AppSection.valueOf(selectedSection)
    val userName = payload?.user?.displayName ?: "BrotherShop"

    AppBackdrop {
        Scaffold(
            containerColor = Color.Transparent,
            bottomBar = {
                NavigationBar(
                    modifier = Modifier
                        .padding(horizontal = 10.dp, vertical = 10.dp)
                        .clip(RoundedCornerShape(24.dp)),
                    containerColor = Color(0xE6151919),
                    tonalElevation = 0.dp,
                ) {
                    AppSection.entries.forEach { section ->
                        NavigationBarItem(
                            selected = activeSection == section,
                            onClick = { selectedSection = section.name },
                            colors = NavigationBarItemDefaults.colors(
                                selectedIconColor = Color(0xFF031211),
                                selectedTextColor = Color(0xFF8FF4EA),
                                unselectedIconColor = Color(0xFFB6C0BE),
                                unselectedTextColor = Color(0xFF8E9997),
                                indicatorColor = Color(0xFF00BFAF),
                            ),
                            icon = {
                                if (section == AppSection.Booking) {
                                    Text(
                                        text = "B",
                                        color = if (activeSection == section) Color(0xFF031211) else Color(0xFFB6C0BE),
                                    )
                                } else {
                                    Icon(
                                        imageVector = section.icon,
                                        contentDescription = section.label,
                                    )
                                }
                            },
                            label = { Text(section.label) },
                        )
                    }
                }
            },
        ) { innerPadding ->
            val shellPadding = PaddingValues(
                top = innerPadding.calculateTopPadding(),
                bottom = innerPadding.calculateBottomPadding(),
            )

            Box(modifier = Modifier.padding(horizontal = 14.dp)) {
                when (activeSection) {
                    AppSection.Home -> HomeScreen(
                        payload = payload,
                        isLoading = isLoading,
                        errorMessage = errorMessage,
                        onRefresh = onRefresh,
                        onLogout = onLogout,
                        contentPadding = shellPadding,
                        headerSubtitle = activeSection.subtitle,
                    )

                    AppSection.Referral -> ReferralScreen(
                        payload = payload,
                        contentPadding = shellPadding,
                    )

                    AppSection.Booking -> BookingScreen(
                        payload = payload,
                        contentPadding = shellPadding,
                        title = userName,
                        subtitle = activeSection.subtitle,
                        bookingComposer = bookingComposer,
                        onSelectBarber = onSelectBarber,
                        onToggleBookingService = onToggleBookingService,
                        onSelectBookingDate = onSelectBookingDate,
                        onSelectBookingTime = onSelectBookingTime,
                        onCreateBooking = onCreateBooking,
                    )

                    AppSection.Shop -> ShopScreen(
                        payload = payload,
                        contentPadding = shellPadding,
                    )

                    AppSection.Profile -> ProfileScreen(
                        payload = payload,
                        onLogout = onLogout,
                        contentPadding = shellPadding,
                        title = userName,
                        subtitle = activeSection.subtitle,
                    )
                }
            }
        }
    }
}
