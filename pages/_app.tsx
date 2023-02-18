import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>    
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>

    )
}
