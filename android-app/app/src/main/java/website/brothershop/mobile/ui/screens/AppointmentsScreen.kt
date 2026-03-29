package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.data.network.HomeAppPayload

@Composable
fun AppointmentsScreen(
    payload: HomeAppPayload?,
    isLoading: Boolean,
    onRefresh: () -> Unit,
    contentPadding: PaddingValues,
    title: String,
    subtitle: String,
) {
    val appointments = payload?.booking?.activeAppointments.orEmpty()

    if (appointments.isEmpty()) {
        EmptyStateCard(
            title = "Записи",
            body = "Здесь будут отображаться ближайшие визиты клиента и статус бронирования.",
            actionLabel = if (isLoading) "Загрузка..." else "Обновить",
            onAction = onRefresh,
            modifier = Modifier
                .fillMaxSize()
                .padding(contentPadding)
                .padding(horizontal = 6.dp),
            enabled = !isLoading,
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
                InitialBadge(text = title)
            }
        }
        item { SectionHeader(eyebrow = "Schedule", title = "Мои записи") }
        items(appointments) { appointment ->
            GlassCard {
                Text(
                    text = "${appointment.date} • ${appointment.time}",
                    style = MaterialTheme.typography.headlineSmall,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Text(
                    text = appointment.barber,
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.primary,
                )
                Text(
                    text = appointment.services.joinToString(),
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                if (appointment.status.isNotBlank()) {
                    Text(
                        text = appointment.status.uppercase(),
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.primary,
                    )
                }
            }
        }
    }
}
