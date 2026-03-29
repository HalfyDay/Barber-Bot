package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Call
import androidx.compose.material.icons.outlined.MailOutline
import androidx.compose.material.icons.outlined.NorthEast
import androidx.compose.material.icons.outlined.Share
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.data.network.ActiveAppointment
import website.brothershop.mobile.data.network.BarberCard
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.data.network.PromoItem
import website.brothershop.mobile.ui.theme.Carbon
import website.brothershop.mobile.ui.theme.CarbonHigh
import website.brothershop.mobile.ui.theme.Fog
import website.brothershop.mobile.ui.theme.Mint
import website.brothershop.mobile.ui.theme.MintDeep
import website.brothershop.mobile.ui.theme.MintGlow

@Composable
fun HomeScreen(
    payload: HomeAppPayload?,
    isLoading: Boolean,
    errorMessage: String?,
    onRefresh: () -> Unit,
    onLogout: () -> Unit,
    contentPadding: PaddingValues = PaddingValues(0.dp),
    headerSubtitle: String = "",
) {
    if (payload == null) {
        EmptyStateCard(
            title = "BrotherShop",
            body = "Домашняя страница появится после загрузки клиентских данных.",
            actionLabel = if (isLoading) "Загрузка..." else "Загрузить",
            onAction = onRefresh,
            modifier = Modifier
                .fillMaxSize()
                .padding(contentPadding)
                .padding(horizontal = 6.dp),
            enabled = !isLoading,
        )
        return
    }

    val home = payload.site.home
    val nextAppointment = payload.booking.activeAppointments.firstOrNull()

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentPadding = PaddingValues(top = 8.dp, bottom = 16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        item {
            TopIdentityBar(
                title = home.logoText.ifBlank { "BrotherShop" },
                subtitle = headerSubtitle,
            ) {
                IdentityChip(
                    label = payload.user.displayName.ifBlank { "Клиент" },
                    imageUrl = payload.user.avatarUrl,
                )
            }
        }

        item {
            HomePromoHero(
                title = home.logoText.ifBlank { "BrotherShop" },
                promos = home.promos,
            )
        }

        item {
            HomeAppointmentCard(
                appointment = nextAppointment,
                bookingButtonText = home.bookingButtonText.ifBlank { "Записаться" },
                onRefresh = onRefresh,
            )
        }

        item {
            HomeAboutCard(
                title = home.aboutTitle.ifBlank { "BrotherShop" },
                body = home.aboutText,
                imageUrl = home.aboutImageUrl,
            )
        }

        item {
            HomeMapCard(
                title = home.mapTitle.ifBlank { "Карта" },
                brand = home.logoText.ifBlank { "BrotherShop" },
                caption = home.mapCaption.ifBlank { "Открыть маршрут и посмотреть локацию" },
                imageUrl = home.mapImageUrl,
            )
        }

        item {
            HomeContactsCard(
                title = home.contactsTitle.ifBlank { "Контакты" },
                phone = home.phone.ifBlank { payload.user.phone.orEmpty() },
                telegramUrl = home.telegramUrl,
                whatsappUrl = home.whatsappUrl,
                email = home.email,
            )
        }

        item {
            GlassCard(contentPadding = PaddingValues(14.dp)) {
                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = "БАРБЕРЫ",
                        style = MaterialTheme.typography.labelLarge,
                        color = MintGlow,
                    )
                    Text(
                        text = "Мастера BrotherShop.",
                        style = MaterialTheme.typography.displaySmall,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                }
            }
        }

        if (payload.booking.barbers.isNotEmpty()) {
            items(payload.booking.barbers.take(4)) { barber ->
                HomeBarberCard(barber = barber)
            }
        }

        if (!errorMessage.isNullOrBlank()) {
            item {
                GlassCard {
                    Text(
                        text = errorMessage,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.error,
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                        PrimaryAction(
                            label = if (isLoading) "Загрузка..." else "Обновить",
                            onClick = onRefresh,
                            enabled = !isLoading,
                            modifier = Modifier.weight(1f),
                        )
                        SecondaryAction(
                            label = "Выйти",
                            onClick = onLogout,
                            modifier = Modifier.weight(1f),
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun HomePromoHero(
    title: String,
    promos: List<PromoItem>,
) {
    val promoLaneItems = if (promos.size > 1) {
        buildList {
            while (size < maxOf(6, promos.size * 2)) {
                addAll(promos)
            }
        }.take(maxOf(6, promos.size * 2))
    } else {
        promos
    }

    GlassCard(
        contentPadding = PaddingValues(12.dp),
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 2.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.headlineSmall,
                color = MaterialTheme.colorScheme.onSurface,
                modifier = Modifier.weight(1f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Row(horizontalArrangement = Arrangement.spacedBy(7.dp)) {
                repeat(4) {
                    Box(
                        modifier = Modifier
                            .size(width = 16.dp, height = 6.dp)
                            .clip(RoundedCornerShape(999.dp))
                            .background(Mint),
                    )
                }
            }
        }

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(24.dp))
                .background(Carbon)
                .padding(4.dp),
        ) {
            if (promoLaneItems.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(170.dp)
                        .clip(RoundedCornerShape(24.dp))
                        .background(Brush.linearGradient(listOf(MintDeep, CarbonHigh))),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = "Скоро здесь появятся актуальные предложения и акции.",
                        style = MaterialTheme.typography.bodyLarge,
                        color = Fog,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.padding(horizontal = 28.dp),
                    )
                }
            } else {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    items(promoLaneItems) { promo ->
                        PromoThumb(promo = promo)
                    }
                }
            }
        }
    }
}

@Composable
private fun PromoThumb(
    promo: PromoItem,
) {
    Box(
        modifier = Modifier
            .width(160.dp)
            .height(160.dp)
            .clip(RoundedCornerShape(24.dp))
            .background(Color(0xFF101414)),
    ) {
        WebsiteImage(
            imageUrl = promo.imageUrl,
            contentDescription = promo.title,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop,
        )
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(
                    Brush.verticalGradient(
                        colors = listOf(Color.Transparent, Color(0xD9040707)),
                    ),
                ),
        )
        Column(
            modifier = Modifier
                .align(Alignment.BottomStart)
                .padding(14.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            Text(
                text = promo.title,
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            if (promo.subtitle.isNotBlank()) {
                Text(
                    text = promo.subtitle,
                    style = MaterialTheme.typography.bodyMedium,
                    color = Color(0xB8FFFFFF),
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
        }
    }
}

@Composable
private fun HomeAppointmentCard(
    appointment: ActiveAppointment?,
    bookingButtonText: String,
    onRefresh: () -> Unit,
) {
    GlassCard(contentPadding = PaddingValues(20.dp)) {
        Text(
            text = "Моя запись",
            style = MaterialTheme.typography.labelLarge,
            color = MintGlow,
        )
        if (appointment != null) {
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Box(modifier = Modifier.weight(1f)) {
                    AppointmentMetaCard("Дата", appointment.date)
                }
                Box(modifier = Modifier.weight(1f)) {
                    AppointmentMetaCard("Время", appointment.time)
                }
            }
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(14.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                InitialBadge(
                    text = appointment.barber,
                    imageUrl = appointment.barberAvatarUrl,
                    size = 56,
                )
                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = appointment.barber,
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                    Text(
                        text = appointment.services.joinToString(),
                        style = MaterialTheme.typography.bodyLarge,
                        color = Fog,
                    )
                }
            }
            Spacer(modifier = Modifier.height(2.dp))
        } else {
            Text(
                text = "Открой booking и собери удобный слот.",
                style = MaterialTheme.typography.bodyLarge,
                color = Fog,
            )
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .weight(1f)
                    .height(6.dp)
                    .clip(RoundedCornerShape(999.dp))
                    .background(
                        Brush.horizontalGradient(
                            listOf(Mint, Mint, Mint, Color.Transparent),
                        ),
                    ),
            )
            PrimaryAction(
                label = bookingButtonText,
                onClick = onRefresh,
                modifier = Modifier.padding(horizontal = 12.dp),
            )
            Box(
                modifier = Modifier
                    .weight(1f)
                    .height(6.dp)
                    .clip(RoundedCornerShape(999.dp))
                    .background(
                        Brush.horizontalGradient(
                            listOf(Color.Transparent, Mint, Mint, Mint),
                        ),
                    ),
            )
        }
    }
}

@Composable
private fun AppointmentMetaCard(
    label: String,
    value: String,
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(24.dp))
            .background(Carbon)
            .padding(16.dp),
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Text(
                text = label,
                style = MaterialTheme.typography.labelLarge,
                color = Fog,
            )
            Text(
                text = value.ifBlank { "-" },
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
            )
        }
    }
}

@Composable
private fun HomeAboutCard(
    title: String,
    body: String,
    imageUrl: String,
) {
    GlassCard(contentPadding = PaddingValues(14.dp)) {
        Text(
            text = title,
            style = MaterialTheme.typography.displaySmall,
            color = MaterialTheme.colorScheme.onSurface,
        )
        Text(
            text = body,
            style = MaterialTheme.typography.bodyLarge,
            color = Fog,
        )
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(160.dp)
                .clip(RoundedCornerShape(24.dp)),
        ) {
            WebsiteImage(
                imageUrl = imageUrl,
                contentDescription = title,
                modifier = Modifier.fillMaxSize(),
                contentScale = ContentScale.Crop,
            )
        }
    }
}

@Composable
private fun HomeMapCard(
    title: String,
    brand: String,
    caption: String,
    imageUrl: String,
) {
    GlassCard(contentPadding = PaddingValues(14.dp)) {
        Text(
            text = title,
            style = MaterialTheme.typography.displaySmall,
            color = MaterialTheme.colorScheme.onSurface,
        )
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .clip(RoundedCornerShape(24.dp))
                .background(Carbon)
                .padding(6.dp),
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(190.dp)
                    .clip(RoundedCornerShape(24.dp)),
            ) {
                WebsiteImage(
                    imageUrl = imageUrl,
                    contentDescription = title,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop,
                )
                Box(
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .padding(14.dp)
                        .clip(RoundedCornerShape(22.dp))
                        .background(Color(0xF2202626))
                        .padding(horizontal = 14.dp, vertical = 12.dp),
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(14.dp),
                    ) {
                        Box(
                            modifier = Modifier
                                .size(44.dp)
                                .clip(RoundedCornerShape(16.dp))
                                .background(Color(0x2600BFAF)),
                            contentAlignment = Alignment.Center,
                        ) {
                            Icon(
                                imageVector = Icons.Outlined.Share,
                                contentDescription = null,
                                tint = Mint,
                            )
                        }
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = brand,
                                style = MaterialTheme.typography.titleLarge,
                                color = MaterialTheme.colorScheme.onSurface,
                                maxLines = 1,
                                overflow = TextOverflow.Ellipsis,
                            )
                            Text(
                                text = caption,
                                style = MaterialTheme.typography.bodyMedium,
                                color = Fog,
                                maxLines = 2,
                                overflow = TextOverflow.Ellipsis,
                            )
                        }
                        Text(
                            text = "На карте",
                            style = MaterialTheme.typography.titleMedium,
                            color = MintGlow,
                        )
                        Icon(
                            imageVector = Icons.Outlined.NorthEast,
                            contentDescription = null,
                            tint = MintGlow,
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun HomeContactsCard(
    title: String,
    phone: String,
    telegramUrl: String,
    whatsappUrl: String,
    email: String,
) {
    GlassCard(contentPadding = PaddingValues(14.dp)) {
        Text(
            text = title,
            style = MaterialTheme.typography.displaySmall,
            color = MaterialTheme.colorScheme.onSurface,
        )
        FlowRow(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            ContactAction(
                icon = { Icon(Icons.Outlined.Call, contentDescription = null) },
                label = if (phone.isBlank()) "Телефон" else phone,
                modifier = Modifier.fillMaxWidth(),
            )
            if (telegramUrl.isNotBlank()) {
                ContactAction(
                    icon = { Icon(Icons.Outlined.NorthEast, contentDescription = null) },
                    label = "Telegram",
                )
            }
            if (whatsappUrl.isNotBlank()) {
                ContactAction(
                    icon = { Icon(Icons.Outlined.Call, contentDescription = null) },
                    label = "WhatsApp",
                )
            }
            if (email.isNotBlank()) {
                ContactAction(
                    icon = { Icon(Icons.Outlined.MailOutline, contentDescription = null) },
                    label = "Email",
                )
            }
        }
    }
}

@Composable
private fun ContactAction(
    icon: @Composable () -> Unit,
    label: String,
    modifier: Modifier = Modifier,
) {
    Box(
        modifier = modifier
            .clip(RoundedCornerShape(18.dp))
            .background(Carbon)
            .padding(horizontal = 14.dp, vertical = 14.dp),
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            icon()
            Text(
                text = label,
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun HomeBarberCard(
    barber: BarberCard,
) {
    GlassCard(contentPadding = PaddingValues(0.dp)) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(232.dp)
                .clip(RoundedCornerShape(28.dp))
                .background(Color(0xFF151919))
                .padding(horizontal = 14.dp, vertical = 14.dp),
        ) {
            Box(
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .fillMaxWidth()
                    .height(5.dp)
                    .clip(RoundedCornerShape(topStart = 27.dp, topEnd = 27.dp))
                    .background(Color(0x6FFFFFFF)),
            )
            Column(
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .fillMaxWidth(0.62f)
                    .padding(top = 14.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                Text(
                    text = barber.name,
                    style = MaterialTheme.typography.headlineSmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                if (barber.description.isNotBlank()) {
                    Text(
                        text = barber.description,
                        style = MaterialTheme.typography.bodyMedium,
                        color = Fog,
                        lineHeight = MaterialTheme.typography.bodyMedium.lineHeight * 0.9,
                    )
                }
                if (barber.phrase.isNotBlank()) {
                    Text(
                        text = barber.phrase,
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color(0xEBF2F7F4),
                        fontWeight = FontWeight.Bold,
                    )
                }
            }

            Box(
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .width(148.dp)
                    .height(162.dp)
                    .clip(RoundedCornerShape(24.dp))
                    .background(
                        Brush.verticalGradient(
                            colors = listOf(Color(0xFF1E2423), Color(0xFF171B1B)),
                        ),
                    )
                    .padding(2.dp),
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .clip(RoundedCornerShape(22.dp)),
                ) {
                    WebsiteImage(
                        imageUrl = barber.avatarUrl.ifBlank { barber.imageUrl.ifBlank { barber.thumbnailUrl } },
                        contentDescription = barber.name,
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Crop,
                    )
                }
            }
        }
    }
}
