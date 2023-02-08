import React from 'react'
import Head from 'next/head'

import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Caffeina Politica</title>
        <meta name="description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#3c323a" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.caffeinapolitica.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Caffeina Politica" />
        <meta property="og:description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta property="og:image" content="favicon/favicon-32x32.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta property="twitter:domain" content="caffeinapolitica.vercel.app" />
        <meta property="twitter:url" content="https://www.caffeinapolitica.vercel.app" />
        <meta name="twitter:title" content="Caffeina Politica" />
        <meta name="twitter:description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta name="twitter:image" content="favicon/favicon-32x32.png" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="NV-KZa_aqMg8UaJdMsh9HPCkl_OyhURvg98Wp6JGw4I" />

      </Head>
      <NavBar /> 
        {children}
      <Footer />
    </div>
  )
}

export default Layout