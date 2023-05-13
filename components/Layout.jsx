import React from 'react'
import Head from 'next/head'
import { NextSeo, DefaultSeo } from 'next-seo';
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Caffeina Politica</title>
        <meta name="robots" content="index, follow" />
        <meta author="Riccardo Benevelli" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#3c323a" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="alternate" href="https://www.caffeinapolitica.com" hrefLang="it-it" />

        {/* Schema */}
        {/* <meta itemprop="name" content="Caffeina Politica" />
        <meta itemprop="description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta itemprop="image" content=""></meta> */}

        {/* Facebook Meta Tags */}
        {/* <meta property="og:url" content="https://www.caffeinapolitica.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Caffeina Politica" />
        <meta property="og:description" content="Lo spazio di dibattito di Reggio Emilia" />
        <meta property="og:image" content="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75" /> */}

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Caffeina Politica" />
        <meta name="twitter:description" content="Lo spazio di dibattito pubblico" />
        <meta name="twitter:image" content="https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="NV-KZa_aqMg8UaJdMsh9HPCkl_OyhURvg98Wp6JGw4I" />

      </Head>
      <DefaultSeo
        title="Caffeina Politica"
        description="Lo spazio di dibattito pubblico"
        canonical="https://www.caffeinapolitica.com"
        defaultTitle="Caffeina Politica"
        languageAlternates={[
          {
            hrefLang: 'it-IT',
            href: 'https://www.caffeinapolitica.com',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'it_IT',
          url: 'https://www.caffeinapolitica.com',
          site_name: 'Caffeina Politica',
          images: [
            {
              url: 'https://www.caffeinapolitica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ca9204f7.png&w=3840&q=75',
              width: 1080,
              height: 298,
              alt: 'Caffeina Politica',
            },
          ],
        }}
        twitter={{
          handle: '@caffeina_politica',
          site: '@caffeina_politica',
          cardType: 'summary_large_image',
        }}
      />
      <NavBar /> 
        {children}
      <Footer />
    </div>
  )
}

export default Layout