import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
  <>
    <GoogleAnalytics trackPageViews strategy="lazyOnload"/>
    <Analytics />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
