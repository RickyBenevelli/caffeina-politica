import NavBar from '../components/NavBar'
import Grid from '../components/Grid'
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Layout>
      <Component {...pageProps} />
      <NavBar/>
    </Layout>
  </>
  )
}
