import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/Theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
             <Component {...pageProps} />
          </ThemeProvider>
}

export default MyApp
