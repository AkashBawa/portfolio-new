import '../styles/globals.scss';
import Head from "next/head";
import Script from 'next/script';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div> 
      <Component {...pageProps} />
    </div>
}

export default MyApp
