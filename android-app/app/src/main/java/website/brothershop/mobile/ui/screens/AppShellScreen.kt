package website.brothershop.mobile.ui.screens

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AccountBalanceWallet
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathFillType
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.core.BookingComposerState
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.ui.theme.Fog
import website.brothershop.mobile.ui.theme.MintGlow

private const val BookingNavIconUrl = "https://brothershop.website/Image/site/menu/booking.svg"
private const val BookingNavIconActiveUrl = "https://brothershop.website/Image/site/menu/sel_booking.svg"

private enum class AppSection(
    val label: String,
    val icon: ImageVector,
    val subtitle: String,
) {
    Home("Home", WebsiteHomeIcon, "Главная страница"),
    Referral("BS", WebsiteReferralIcon, "Бонусы и рефералы"),
    Booking("Booking", Icons.Outlined.AccountBalanceWallet, "Онлайн-запись"),
    Shop("Shop", WebsiteShopIcon, "Магазин"),
    Profile("Profile", WebsiteProfileIcon, "Личный кабинет"),
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
                WebsiteBottomNav(
                    activeSection = activeSection,
                    onSelect = { selectedSection = it.name },
                )
            },
        ) { innerPadding ->
            Box(modifier = Modifier.padding(horizontal = 14.dp)) {
                when (activeSection) {
                    AppSection.Home -> HomeScreen(
                        payload = payload,
                        isLoading = isLoading,
                        errorMessage = errorMessage,
                        onRefresh = onRefresh,
                        onLogout = onLogout,
                        contentPadding = innerPadding,
                        headerSubtitle = "",
                    )

                    AppSection.Referral -> ReferralScreen(
                        payload = payload,
                        contentPadding = innerPadding,
                    )

                    AppSection.Booking -> BookingScreen(
                        payload = payload,
                        contentPadding = innerPadding,
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
                        contentPadding = innerPadding,
                    )

                    AppSection.Profile -> ProfileScreen(
                        payload = payload,
                        onLogout = onLogout,
                        contentPadding = innerPadding,
                        title = userName,
                        subtitle = activeSection.subtitle,
                    )
                }
            }
        }
    }
}

@Composable
private fun WebsiteBottomNav(
    activeSection: AppSection,
    onSelect: (AppSection) -> Unit,
) {
    BoxWithConstraints(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp, vertical = 10.dp),
    ) {
        val horizontalGap = 8.dp
        val sidePadding = 10.dp
        val totalGap = horizontalGap * (AppSection.entries.size - 1)
        val itemWidth = (maxWidth - sidePadding * 2 - totalGap) / AppSection.entries.size
        val selectedIndex = AppSection.entries.indexOf(activeSection)
        val indicatorOffset by animateDpAsState(
            targetValue = sidePadding + ((itemWidth + horizontalGap).value * selectedIndex).dp,
            label = "bottom-nav-indicator",
        )

        Surface(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(32.dp)),
            color = Color(0xF70F1212),
            shadowElevation = 18.dp,
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = sidePadding, vertical = 10.dp),
            ) {
                Box(
                    modifier = Modifier
                        .padding(start = indicatorOffset)
                        .width(itemWidth)
                        .height(58.dp)
                        .clip(RoundedCornerShape(24.dp))
                        .background(Color(0xFF1A3431)),
                )

                Row(modifier = Modifier.fillMaxWidth()) {
                    AppSection.entries.forEach { section ->
                        WebsiteNavPill(
                            section = section,
                            selected = activeSection == section,
                            modifier = Modifier.width(itemWidth),
                            onClick = { onSelect(section) },
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun WebsiteNavPill(
    section: AppSection,
    selected: Boolean,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
) {
    TextButton(
        onClick = onClick,
        modifier = modifier.height(58.dp),
        shape = RoundedCornerShape(24.dp),
        contentPadding = PaddingValues(0.dp),
    ) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center,
        ) {
            if (section == AppSection.Booking) {
                WebsiteImage(
                    imageUrl = if (selected) BookingNavIconActiveUrl else BookingNavIconUrl,
                    contentDescription = section.label,
                    modifier = Modifier.size(if (selected) 54.dp else 40.dp),
                    contentScale = ContentScale.Fit,
                )
            } else {
                Icon(
                    imageVector = section.icon,
                    contentDescription = section.label,
                    tint = if (selected) MintGlow else Fog,
                    modifier = Modifier.size(29.dp),
                )
            }
        }
    }
}

private val WebsiteHomeIcon: ImageVector
    get() = ImageVector.Builder(
        name = "WebsiteHomeIcon",
        defaultWidth = 24.dp,
        defaultHeight = 24.dp,
        viewportWidth = 24f,
        viewportHeight = 24f,
    ).apply {
        path(fill = SolidColor(Color.Black), pathFillType = PathFillType.EvenOdd) {
            moveTo(8.74f, 4.06f)
            curveTo(10.55f, 2.11f, 13.45f, 2.11f, 15.26f, 4.06f)
            lineTo(19.01f, 7.94f)
            curveTo(19.83f, 8.79f, 20.3f, 9.93f, 20.3f, 11.07f)
            verticalLineTo(17.05f)
            curveTo(20.3f, 18.68f, 18.98f, 20f, 17.35f, 20f)
            horizontalLineTo(6.65f)
            curveTo(5.02f, 20f, 3.7f, 18.68f, 3.7f, 17.05f)
            verticalLineTo(11.07f)
            curveTo(3.7f, 9.93f, 4.17f, 8.79f, 4.99f, 7.94f)
            lineTo(8.74f, 4.06f)
            close()
            moveTo(10.78f, 12.3f)
            curveTo(10.78f, 11.64f, 11.32f, 11.1f, 11.98f, 11.1f)
            horizontalLineTo(12.02f)
            curveTo(12.68f, 11.1f, 13.22f, 11.64f, 13.22f, 12.3f)
            verticalLineTo(20f)
            horizontalLineTo(10.78f)
            close()
        }
    }.build()

private val WebsiteReferralIcon: ImageVector
    get() = ImageVector.Builder(
        name = "WebsiteReferralIcon",
        defaultWidth = 24.dp,
        defaultHeight = 24.dp,
        viewportWidth = 24f,
        viewportHeight = 24f,
    ).apply {
        path(fill = SolidColor(Color.Black), pathFillType = PathFillType.EvenOdd) {
            moveTo(6.9f, 4.1f)
            curveTo(8.58f, 4.1f, 9.94f, 5.46f, 9.94f, 7.14f)
            reflectiveCurveTo(8.58f, 10.2f, 6.9f, 10.2f)
            reflectiveCurveTo(3.86f, 8.82f, 3.86f, 7.14f)
            reflectiveCurveTo(5.22f, 4.1f, 6.9f, 4.1f)
            moveTo(17.1f, 4.1f)
            curveTo(18.78f, 4.1f, 20.14f, 5.46f, 20.14f, 7.14f)
            reflectiveCurveTo(18.78f, 10.18f, 17.1f, 10.18f)
            reflectiveCurveTo(14.06f, 8.82f, 14.06f, 7.14f)
            reflectiveCurveTo(15.42f, 4.1f, 17.1f, 4.1f)
            moveTo(9.15f, 12.1f)
            curveTo(11.95f, 12.1f, 14.23f, 14.38f, 14.23f, 17.18f)
            curveTo(14.23f, 18.74f, 12.96f, 20f, 11.4f, 20f)
            horizontalLineTo(4.77f)
            curveTo(3.21f, 20f, 1.94f, 18.74f, 1.94f, 17.18f)
            curveTo(1.94f, 14.38f, 4.22f, 12.1f, 7.03f, 12.1f)
            close()
            moveTo(18.94f, 12.62f)
            curveTo(20.66f, 12.62f, 22.06f, 14.02f, 22.06f, 15.74f)
            curveTo(22.06f, 16.99f, 21.05f, 18f, 19.8f, 18f)
            horizontalLineTo(17.15f)
            curveTo(17.28f, 17.57f, 17.35f, 17.12f, 17.35f, 16.66f)
            curveTo(17.35f, 15.22f, 16.79f, 13.91f, 15.88f, 12.93f)
            curveTo(16.42f, 12.73f, 17f, 12.62f, 18.94f, 12.62f)
            close()
        }
    }.build()

private val WebsiteShopIcon: ImageVector
    get() = ImageVector.Builder(
        name = "WebsiteShopIcon",
        defaultWidth = 24.dp,
        defaultHeight = 24.dp,
        viewportWidth = 24f,
        viewportHeight = 24f,
    ).apply {
        path(fill = SolidColor(Color.Black), pathFillType = PathFillType.EvenOdd) {
            moveTo(7.35f, 4.1f)
            curveTo(7.35f, 2.53f, 8.63f, 1.25f, 10.2f, 1.25f)
            horizontalLineTo(13.8f)
            curveTo(15.37f, 1.25f, 16.65f, 2.53f, 16.65f, 4.1f)
            verticalLineTo(4.8f)
            horizontalLineTo(18.15f)
            curveTo(19.72f, 4.8f, 21f, 6.08f, 21f, 7.65f)
            verticalLineTo(15.85f)
            curveTo(21f, 17.59f, 19.59f, 19f, 17.85f, 19f)
            horizontalLineTo(6.15f)
            curveTo(4.41f, 19f, 3f, 17.59f, 3f, 15.85f)
            verticalLineTo(7.65f)
            curveTo(3f, 6.08f, 4.28f, 4.8f, 5.85f, 4.8f)
            horizontalLineTo(7.35f)
            close()
            moveTo(9.45f, 4.8f)
            horizontalLineTo(14.55f)
            verticalLineTo(4.1f)
            curveTo(14.55f, 3.69f, 14.21f, 3.35f, 13.8f, 3.35f)
            horizontalLineTo(10.2f)
            curveTo(9.79f, 3.35f, 9.45f, 3.69f, 9.45f, 4.1f)
            close()
            moveTo(7.65f, 9.25f)
            curveTo(7.65f, 8.67f, 8.12f, 8.2f, 8.7f, 8.2f)
            horizontalLineTo(15.3f)
            curveTo(15.88f, 8.2f, 16.35f, 8.67f, 16.35f, 9.25f)
            curveTo(16.35f, 9.83f, 15.88f, 10.3f, 15.3f, 10.3f)
            horizontalLineTo(8.7f)
            curveTo(8.12f, 10.3f, 7.65f, 9.83f, 7.65f, 9.25f)
            close()
        }
    }.build()

private val WebsiteProfileIcon: ImageVector
    get() = ImageVector.Builder(
        name = "WebsiteProfileIcon",
        defaultWidth = 24.dp,
        defaultHeight = 24.dp,
        viewportWidth = 24f,
        viewportHeight = 24f,
    ).apply {
        path(fill = SolidColor(Color.Black), pathFillType = PathFillType.EvenOdd) {
            moveTo(12f, 3.25f)
            arcTo(4.75f, 4.75f, 0f, true, true, 12f, 12.75f)
            arcTo(4.75f, 4.75f, 0f, true, true, 12f, 3.25f)
            moveTo(6.77f, 14.25f)
            horizontalLineTo(17.23f)
            curveTo(19.73f, 14.25f, 21.75f, 16.27f, 21.75f, 18.77f)
            curveTo(21.75f, 19.86f, 20.86f, 20.75f, 19.77f, 20.75f)
            horizontalLineTo(4.23f)
            curveTo(3.14f, 20.75f, 2.25f, 19.86f, 2.25f, 18.77f)
            curveTo(2.25f, 16.27f, 4.27f, 14.25f, 6.77f, 14.25f)
            close()
        }
    }.build()
