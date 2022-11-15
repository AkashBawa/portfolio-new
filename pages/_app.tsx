import '../styles/globals.scss';
import Head from "next/head";
import Script from 'next/script';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div> 
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>
     
      <Component {...pageProps} />
    </div>
}

export default MyApp
