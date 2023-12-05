import '@/styles/globals.css'
import '@/styles/swiper.min.css'
import "public/assets/css/bootstrap.min.css"
import "public/assets/css/animate.min.css"
import "public/assets/css/fontawesome-all.min.css"
import "public/assets/css/flaticon.css"
import "public/assets/css/jarallax.css"
import "public/assets/css/aos.css"
import "public/assets/css/default.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import "public/assets/css/slick.css"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
