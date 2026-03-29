package website.brothershop.mobile.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val BrotherShopColors = darkColorScheme(
    primary = Mint,
    onPrimary = Ink,
    primaryContainer = MintDeep,
    onPrimaryContainer = MintGlow,
    secondary = Fog,
    onSecondary = Ink,
    secondaryContainer = Slate,
    onSecondaryContainer = Mist,
    tertiary = Steel,
    onTertiary = Mist,
    tertiaryContainer = CarbonHigh,
    onTertiaryContainer = Mist,
    background = Ink,
    onBackground = Mist,
    surface = Carbon,
    onSurface = Mist,
    surfaceVariant = CarbonHigh,
    onSurfaceVariant = Fog,
    error = RoseOxide,
    onError = Mist,
    errorContainer = RoseShell,
    onErrorContainer = Color(0xFFF3C9C0),
    outline = Color(0x14FFFFFF),
)

@Composable
fun BrotherShopTheme(
    content: @Composable () -> Unit,
) {
    MaterialTheme(
        colorScheme = BrotherShopColors,
        typography = BrotherShopTypography,
        content = content,
    )
}
