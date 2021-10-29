import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/Theme'
import '../styles/globals.css'
import Heading from '../components/Heading'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // google analytics to track navigation
  const handleRouteChange = (url) => {
    window.gtag('config', 'UA-151632739-1', {
      page_path: url,
    });
  };
  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events])

  return <ThemeProvider theme={theme}>
    <Heading />
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
