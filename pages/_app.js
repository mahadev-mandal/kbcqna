import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/Theme'
import '../styles/globals.css'
import Heading from '../components/Heading'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
             {/* <Heading/> */}
             <Component {...pageProps} />
          </ThemeProvider>
}

export default MyApp
