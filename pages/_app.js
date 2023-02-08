import { GoogleAnalytics } from "nextjs-google-analytics";

import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
  <>
    <GoogleAnalytics trackPageViews strategy="lazyOnload"/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
