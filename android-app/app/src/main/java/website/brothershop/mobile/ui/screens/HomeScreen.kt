package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.data.network.ActiveAppointment
import website.brothershop.mobile.data.network.BarberCard
import website.brothershop.mobile.data.network.HomeAppPayload

@Composable
fun HomeScreen(
    payload: HomeAppPayload?,
    isLoading: Boolean,
    errorMessage: String?,
    onRefresh: () -> Unit,
    onLogout: () -> Unit,
    contentPadding: PaddingValues = PaddingValues(0.dp),
    headerSubtitle: String = "Главная страница",
) {
    if (payload == null) {
        EmptyStateCard(
            title = "BrotherShop",
            body = "Домашний экран появится после загрузки клиентских данных.",
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
        contentPadding = PaddingValues(top = 12.dp, bottom = 18.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        item {
            TopIdentityBar(
                title = home.logoText.ifBlank { "BrotherShop" },
                subtitle = headerSubtitle,
            ) {
                InitialBadge(text = payload.user.displayName)
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
            GlassCard {
                Text(
                    text = home.aboutTitle.ifBlank { "BrotherShop" },
                    style = MaterialTheme.typography.displaySmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Text(
                    text = home.aboutText,
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(172.dp)
                        .clip(RoundedCornerShape(24.dp))
                        .background(
                            Brush.linearGradient(
                                listOf(Color(0xFF102A29), Color(0xFF191F1F)),
                            ),
                        ),
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        text = if (home.aboutImageUrl.isNotBlank()) "Фото бренда" else "BrotherShop",
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                }
            }
        }

        item {
            GlassCard {
                Text(
                    text = home.mapTitle.ifBlank { "Карта" },
                    style = MaterialTheme.typography.displaySmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(186.dp)
                        .clip(RoundedCornerShape(24.dp))
                        .background(
                            Brush.linearGradient(
                                listOf(Color(0xFF152423), Color(0xFF1D2626)),
                            ),
                        ),
                        contentAlignment = Alignment.BottomStart,
                ) {
                    GlassCard(
                        modifier = Modifier.padding(12.dp),
                        contentPadding = PaddingValues(14.dp),
                    ) {
                        Text(
                            text = home.logoText.ifBlank { "BrotherShop" },
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.onSurface,
                        )
                        Text(
                            text = home.mapCaption.ifBlank { "Открыть маршрут и посмотреть локацию" },
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                }
            }
        }

        item {
            GlassCard {
                Text(
                    text = home.contactsTitle.ifBlank { "Контакты" },
                    style = MaterialTheme.typography.displaySmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                ContactLine(label = "Телефон", value = home.phone.ifBlank { payload.user.phone ?: "" })
                if (home.telegramUrl.isNotBlank()) {
                    ContactLine(label = "Telegram", value = home.telegramUrl)
                }
                if (home.whatsappUrl.isNotBlank()) {
                    ContactLine(label = "WhatsApp", value = home.whatsappUrl)
                }
                if (home.email.isNotBlank()) {
                    ContactLine(label = "Email", value = home.email)
                }
            }
        }

        item {
            SectionHeader(eyebrow = "Barbers", title = "Мастера BrotherShop")
        }

        if (payload.booking.barbers.isNotEmpty()) {
            items(payload.booking.barbers.take(4)) { barber ->
                HomeBarberCard(barber = barber)
            }
        }

        item {
            LazyRow(
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                contentPadding = PaddingValues(horizontal = 2.dp),
            ) {
                item { MetricPill(label = "BS balance", value = payload.referral.bsBalance.toString()) }
                item { MetricPill(label = "Notices", value = payload.user.noticeCount.toString()) }
                item {
                    MetricPill(
                        label = "Status",
                        value = if (payload.user.isBlocked) "Blocked" else "Active",
                    )
                }
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
    promos: List<website.brothershop.mobile.data.network.PromoItem>,
) {
    GlassCard {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.displaySmall,
                color = MaterialTheme.colorScheme.onSurface,
            )
            Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                repeat(4) {
                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(999.dp))
                            .background(MaterialTheme.colorScheme.primary)
                            .padding(horizontal = 8.dp, vertical = 3.dp),
                    )
                }
            }
        }
        if (promos.isEmpty()) {
            Text(
                text = "Скоро здесь появятся актуальные предложения и акции.",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
        } else {
            LazyRow(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                items(promos.take(8)) { promo ->
                    Column(
                        modifier = Modifier
                            .width(282.dp)
                            .clip(RoundedCornerShape(26.dp))
                            .background(Color(0xFF171D1D))
                            .clickable { }
                            .padding(10.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(128.dp)
                                .clip(RoundedCornerShape(20.dp))
                                .background(
                                    Brush.linearGradient(
                                        listOf(Color(0xFF1B403D), Color(0xFF101414)),
                                    ),
                                ),
                        )
                        Text(
                            text = promo.title,
                            style = MaterialTheme.typography.titleLarge,
                            color = MaterialTheme.colorScheme.onSurface,
                        )
                        Text(
                            text = promo.subtitle,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                }
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
    GlassCard {
        if (appointment != null) {
            Text(
                text = "Моя запись",
                style = MaterialTheme.typography.labelLarge,
                color = MaterialTheme.colorScheme.primary,
            )
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Box(modifier = Modifier.fillMaxWidth(0.5f)) {
                    AppointmentMetaCard("Дата", appointment.date)
                }
                Box(modifier = Modifier.fillMaxWidth()) {
                    AppointmentMetaCard("Время", appointment.time)
                }
            }
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                InitialBadge(text = appointment.barber)
                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = appointment.barber,
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                    Text(
                        text = appointment.services.joinToString(),
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
            }
        } else {
            Text(
                text = "Моя запись",
                style = MaterialTheme.typography.labelLarge,
                color = MaterialTheme.colorScheme.primary,
            )
            Text(
                text = "Откройте booking и соберите удобный слот.",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
        }
        PrimaryAction(
            label = bookingButtonText,
            onClick = onRefresh,
        )
    }
}

@Composable
private fun AppointmentMetaCard(
    label: String,
    value: String,
) {
    GlassCard(
        contentPadding = PaddingValues(14.dp),
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Text(
            text = value.ifBlank { "-" },
            style = MaterialTheme.typography.titleLarge,
            color = MaterialTheme.colorScheme.onSurface,
        )
    }
}

@Composable
private fun ContactLine(
    label: String,
    value: String,
) {
    GlassCard(contentPadding = PaddingValues(14.dp)) {
        Text(
            text = label,
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary,
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyLarge,
            color = MaterialTheme.colorScheme.onSurface,
        )
    }
}

@Composable
private fun HomeBarberCard(
    barber: BarberCard,
) {
    GlassCard {
        Row(horizontalArrangement = Arrangement.spacedBy(14.dp)) {
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(6.dp),
            ) {
                Text(
                    text = barber.name,
                    style = MaterialTheme.typography.headlineSmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                if (barber.description.isNotBlank()) {
                    Text(
                        text = barber.description,
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
                if (barber.phrase.isNotBlank()) {
                    Text(
                        text = barber.phrase,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.primary,
                    )
                }
            }
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(22.dp))
                    .background(
                        Brush.linearGradient(
                            listOf(Color(0xFF1D3D3A), Color(0xFF171C1C)),
                        ),
                    )
                    .padding(horizontal = 22.dp, vertical = 32.dp),
                contentAlignment = Alignment.Center,
            ) {
                InitialBadge(text = barber.name)
            }
        }
    }
}
