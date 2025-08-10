import Head from 'next/head'
import '../styles/globals.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Script 
      id='header-gtm'
      dangerouslySetInnerHTML={{__html:`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TQ5B6443')
        `}}
    />
  <Component {...pageProps} />
  </>
}

export default MyApp
