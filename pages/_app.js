import NavBar from '../components/NavBar'
import Grid from '../components/Grid'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <NavBar/>
    {/* <Grid/> */}
    <Component {...pageProps} />
  </>
  )
}
