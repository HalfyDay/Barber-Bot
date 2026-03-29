package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
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
import website.brothershop.mobile.ui.site.toWebsiteProfileModel

@Composable
fun ProfileScreen(
    payload: HomeAppPayload?,
    onLogout: () -> Unit,
    contentPadding: PaddingValues,
    title: String,
    subtitle: String,
) {
    val model = payload?.toWebsiteProfileModel()

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentPadding = PaddingValues(top = 12.dp, bottom = 18.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        item {
            TopIdentityBar(title = title, subtitle = subtitle) {
                InitialBadge(text = model?.displayName ?: "C")
            }
        }
        item {
            HeroCard(
                eyebrow = "Profile",
                title = model?.displayName ?: "Клиент",
                body = model?.phone?.ifBlank { "Телефон пока не заполнен" }
                    ?: "Телефон пока не заполнен",
            ) {
                Text(
                    text = "BS баланс: ${model?.bsBalance ?: 0}",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.primary,
                )
                Text(
                    text = "Предупреждения: ${model?.warningCount ?: 0}",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(
                    text = model?.historyTitle ?: "Последние движения",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                PrimaryAction(label = "Выйти из аккаунта", onClick = onLogout)
            }
        }
        if (!model?.notices.isNullOrEmpty()) {
            item { SectionHeader(eyebrow = "Feed", title = "Уведомления") }
            items(model?.notices.orEmpty()) { notice ->
                GlassCard {
                    Text(
                        text = notice,
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                }
            }
        }
    }
}
