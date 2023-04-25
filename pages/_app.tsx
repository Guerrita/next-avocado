import type { AppProps } from 'next/app'
import CartProvider from '@store/Cart'


export default function MyApp({ Component, pageProps }: AppProps) {
  return(
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)}
