package website.brothershop.mobile.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColors = lightColorScheme(
    primary = Clay,
    onPrimary = Mist,
    primaryContainer = Sand,
    onPrimaryContainer = Espresso,
    secondary = Moss,
    tertiary = RoseDust,
    background = Color(0xFFFFFBF7),
    surface = Color(0xFFFFF7F1),
    onSurface = Espresso,
    onSurfaceVariant = Color(0xFF5E5148),
)

private val DarkColors = darkColorScheme(
    primary = Sand,
    onPrimary = Espresso,
    primaryContainer = Ember,
    onPrimaryContainer = Mist,
    secondary = Color(0xFFBBCBB0),
    tertiary = RoseDust,
    background = Color(0xFF17110E),
    surface = Color(0xFF201815),
    onSurface = Mist,
    onSurfaceVariant = Color(0xFFD3C5BB),
)

@Composable
fun BrotherShopTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    MaterialTheme(
        colorScheme = if (darkTheme) DarkColors else LightColors,
        typography = BrotherShopTypography,
        content = content,
    )
}
