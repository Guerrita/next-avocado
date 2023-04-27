import type { AppProps } from 'next/app'
import CartProvider from '@store/Cart'
import Head from 'next/head'
import '@aura-design/system/main.css'
import '../style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Avo Store</title>
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}
