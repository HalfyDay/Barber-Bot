package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FilterChipDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.core.BookingComposerState
import website.brothershop.mobile.data.network.BarberCard
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.ui.site.toWebsiteBookingModel
import website.brothershop.mobile.ui.site.websiteLabel

@Composable
fun BookingScreen(
    payload: HomeAppPayload?,
    contentPadding: PaddingValues,
    title: String,
    subtitle: String,
    bookingComposer: BookingComposerState,
    onSelectBarber: (String) -> Unit,
    onToggleBookingService: (String) -> Unit,
    onSelectBookingDate: (String) -> Unit,
    onSelectBookingTime: (String) -> Unit,
    onCreateBooking: () -> Unit,
) {
    val model = payload?.toWebsiteBookingModel()
    val barbers = model?.barbers.orEmpty()
    val selectedBarber = barbers.firstOrNull { it.id == bookingComposer.selectedBarberId } ?: barbers.firstOrNull()

    if (barbers.isEmpty()) {
        EmptyStateCard(
            title = "Онлайн-запись",
            body = "Данные о барберах и слотах пока не загружены.",
            actionLabel = "Недоступно",
            onAction = {},
            modifier = Modifier
                .fillMaxSize()
                .padding(contentPadding)
                .padding(horizontal = 6.dp),
            enabled = false,
        )
        return
    }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentPadding = PaddingValues(top = 12.dp, bottom = 18.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        item {
            TopIdentityBar(title = title, subtitle = subtitle) {
                InitialBadge(text = "B")
            }
        }
        item {
            HeroCard(
                eyebrow = "Booking",
                title = model?.pageTitle ?: "Онлайн-запись",
                body = "Выберите барбера, услуги, дату и время. Экран выровнен под booking-страницу сайта.",
            )
        }
        item { SectionHeader(eyebrow = "Step 1", title = "Барбер") }
        item {
            LazyRow(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                items(barbers) { barber ->
                    BookingBarberCard(
                        barber = barber,
                        selected = bookingComposer.selectedBarberId == barber.id,
                        onClick = { onSelectBarber(barber.id) },
                    )
                }
            }
        }
        if (selectedBarber != null) {
            item {
                BookingComposerCard(
                    barber = selectedBarber,
                    state = bookingComposer,
                    commentPlaceholder = model?.commentPlaceholder ?: "Комментарий для мастера",
                    onToggleBookingService = onToggleBookingService,
                    onSelectBookingDate = onSelectBookingDate,
                    onSelectBookingTime = onSelectBookingTime,
                    onCreateBooking = onCreateBooking,
                )
            }
        }
    }
}

@Composable
private fun BookingBarberCard(
    barber: BarberCard,
    selected: Boolean,
    onClick: () -> Unit,
) {
    GlassCard(
        modifier = Modifier
            .width(300.dp)
            .clickable(onClick = onClick)
            .padding(1.dp),
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .border(
                    BorderStroke(
                        1.dp,
                        if (selected) MaterialTheme.colorScheme.primary else Color(0x12FFFFFF),
                    ),
                    RoundedCornerShape(22.dp),
                )
                .padding(14.dp),
            horizontalArrangement = Arrangement.spacedBy(14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            InitialBadge(text = barber.name)
            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Text(
                    text = barber.name,
                    style = MaterialTheme.typography.headlineSmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Text(
                    text = barber.phrase.ifBlank { barber.fullName },
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(
                    text = "Услуг: ${barber.servicesCount}",
                    style = MaterialTheme.typography.labelLarge,
                    color = MaterialTheme.colorScheme.primary,
                )
            }
        }
    }
}

@Composable
private fun BookingComposerCard(
    barber: BarberCard,
    state: BookingComposerState,
    commentPlaceholder: String,
    onToggleBookingService: (String) -> Unit,
    onSelectBookingDate: (String) -> Unit,
    onSelectBookingTime: (String) -> Unit,
    onCreateBooking: () -> Unit,
) {
    GlassCard {
        Text(
            text = "2. Услуги",
            style = MaterialTheme.typography.titleLarge,
            color = MaterialTheme.colorScheme.onSurface,
        )
        Text(
            text = barber.phrase.ifBlank { "Подберите услуги и удобный слот." },
            style = MaterialTheme.typography.bodyLarge,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        if (!state.infoMessage.isNullOrBlank()) {
            Text(
                text = state.infoMessage,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.primary,
            )
        }
        FlowChipRow(
            items = state.services.map { it.id to it.websiteLabel() },
            selected = state.selectedServiceIds,
            onSelect = onToggleBookingService,
        )
        if (state.availableDates.isNotEmpty()) {
            Text(
                text = "3. Дата",
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
            )
            FlowChipRow(
                items = state.availableDates.map { it to it },
                selected = setOfNotNull(state.selectedDate),
                onSelect = onSelectBookingDate,
            )
        }
        if (state.availableTimes.isNotEmpty()) {
            Text(
                text = "4. Время",
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface,
            )
            FlowChipRow(
                items = state.availableTimes.map { it to it },
                selected = setOfNotNull(state.selectedTime),
                onSelect = onSelectBookingTime,
            )
        }
        Text(
            text = "5. Комментарий: $commentPlaceholder",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        if (!state.successMessage.isNullOrBlank()) {
            Text(
                text = state.successMessage,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.primary,
                fontWeight = FontWeight.Bold,
            )
        }
        PrimaryAction(
            label = if (state.isLoading) "Загрузка..." else "Подтвердить запись",
            onClick = onCreateBooking,
            enabled = !state.isLoading &&
                state.selectedServiceIds.isNotEmpty() &&
                state.selectedDate != null &&
                state.selectedTime != null &&
                state.canBook,
        )
    }
}

@Composable
private fun FlowChipRow(
    items: List<Pair<String, String>>,
    selected: Set<String>,
    onSelect: (String) -> Unit,
) {
    LazyRow(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        items(items) { entry ->
            val isSelected = entry.first in selected
            FilterChip(
                selected = isSelected,
                onClick = { onSelect(entry.first) },
                label = { Text(entry.second) },
                colors = FilterChipDefaults.filterChipColors(
                    selectedContainerColor = MaterialTheme.colorScheme.primary,
                    selectedLabelColor = MaterialTheme.colorScheme.onPrimary,
                    containerColor = Color(0xFF1A2020),
                    labelColor = MaterialTheme.colorScheme.onSurface,
                ),
            )
        }
    }
}
