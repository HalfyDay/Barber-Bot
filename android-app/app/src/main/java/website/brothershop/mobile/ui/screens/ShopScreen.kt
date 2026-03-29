package website.brothershop.mobile.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import website.brothershop.mobile.data.network.HomeAppPayload

@Composable
fun ShopScreen(
    payload: HomeAppPayload?,
    contentPadding: PaddingValues,
) {
    val shop = payload?.site?.shop

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentPadding = PaddingValues(top = 12.dp, bottom = 18.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        item {
            HeroCard(
                eyebrow = "Shop",
                title = shop?.teaserTitle ?: "Скоро...",
                body = shop?.teaserText ?: "Магазин BrotherShop появится в следующих версиях приложения.",
            )
        }
        item {
            GlassCard {
                Text(
                    text = "Эта страница выделена отдельно, как и на сайте.",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.onSurface,
                )
                Text(
                    text = "Следующий этап здесь — каталог товаров, карточки, остатки и оформление заказа.",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
            }
        }
    }
}
