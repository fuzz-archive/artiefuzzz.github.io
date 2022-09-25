/* eslint-disable @next/next/no-script-component-in-head */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import ProfilePicture from '../../public/profilepic.png'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Artie </title>
        <link rel='icon' href='/favicon.png' />

        <meta name='og:title' content='Artie' />
        <meta name='theme-color' content='#f9a8d4' />
        <meta name='og:image' content={ProfilePicture.src} />
        <meta
          name='og:description'
          content='Australian Developer doing Frontend and Backend'
        />
        <meta
          name='description'
          content='Australian Developer doing Frontend and Backend'
        />
        <meta name='og:url' content='https://artiefuzzz.is-a.dev' />
        <meta name='og:site_name' content='Artie' />
        <meta name='keywords' content='ArtieFuzzz, Artie, Fuzzz' />

        <Script async src='https://arc.io/widget.min.js#RHQdmiNq' type='text/javascript'/>
        <Script async src='https://analytics.artiefuzzz.space/umami.js' data-website-id='04c0fa1c-3536-4ec4-b4da-a5b2968fd6f0' type='text/javascript'/>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
