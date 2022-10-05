import '../styles/globals.scss';
import Head from "next/head";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <Head>
      {/* <Script src="https://cdn.tailwindcss.com"></Script> */}
      </Head>
      <Component {...pageProps} />
    </div>
}

export default MyApp
