package website.brothershop.mobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import website.brothershop.mobile.ui.BrotherShopApp
import website.brothershop.mobile.ui.theme.BrotherShopTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            BrotherShopTheme {
                BrotherShopApp()
            }
        }
    }
}
