import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Fuzzy </title>

        <meta name='og:title' content='ArtieFuzzz'/>
        <meta name='og:description' content='Self Taught Frontend / Backend Developer'/>
        <meta name='description' content='Self Taught Frontend / Backend Developer'/>
        <meta name='og:url' content='https://artiefuzzz.is-a.dev'/>
        <meta name='og:site_name' content='ArtieFuzzz'/>
        <meta name='keywords' content='ArtieFuzzz, Artie, Fuzzz'/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
