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
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.data.network.HomeAppPayload
import website.brothershop.mobile.ui.site.toWebsiteReferralModel

@Composable
fun ReferralScreen(
    payload: HomeAppPayload?,
    contentPadding: PaddingValues,
) {
    val model = payload?.toWebsiteReferralModel()
    val operations = model?.operations.orEmpty().take(5)
    val referrals = model?.referrals.orEmpty().take(4)

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentPadding = PaddingValues(top = 12.dp, bottom = 18.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        item {
            HeroCard(
                eyebrow = "BS Wallet",
                title = model?.pageTitle ?: "Бонусы и переводы",
                body = model?.participationText
                    ?: "BS можно копить, переводить и тратить на услуги BrotherShop.",
            ) {
                Text(
                    text = "Баланс: ${model?.balance ?: 0} BS",
                    style = MaterialTheme.typography.displaySmall,
                    color = MaterialTheme.colorScheme.onSurface,
                    fontWeight = FontWeight.Bold,
                )
                Text(
                    text = "Уровень: ${model?.currentLevelName ?: "Гость"}",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.primary,
                )
                Text(
                    text = "Активных рефералов: ${model?.activeReferralsCount ?: 0}",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
            }
        }
        item { SectionHeader(eyebrow = "Progress", title = "Прогресс программы") }
        item {
            GlassCard {
                Text(
                    text = "Текущий прогресс: ${model?.progressPercent ?: 0}%",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Text(
                    text = if (model?.isMaxLevel == true) {
                        "Вы уже на максимальном уровне программы."
                    } else {
                        "Следующая цель: ${model?.progressCurrent ?: 0}/${model?.progressNext ?: 0}"
                    },
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
            }
        }
        if (referrals.isNotEmpty()) {
            item { SectionHeader(eyebrow = "Referral", title = "Ваши люди") }
            items(referrals) { person ->
                GlassCard {
                    Text(
                        text = person.shortName.ifBlank { person.fullName },
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                    Text(
                        text = person.phone,
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.primary,
                    )
                    Text(
                        text = "Статус: ${person.color.ifBlank { "unknown" }}",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
            }
        }
        if (operations.isNotEmpty()) {
            item { SectionHeader(eyebrow = "Activity", title = "Последние движения BS") }
            items(operations) { operation ->
                GlassCard {
                    Text(
                        text = operation.title.ifBlank { "Операция" },
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.onSurface,
                    )
                    Text(
                        text = operation.description,
                        style = MaterialTheme.typography.bodyLarge,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                    Text(
                        text = "${operation.amountBs} BS",
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.primary,
                    )
                }
            }
        }
    }
}
