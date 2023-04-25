import type { AppProps } from 'next/app'
import CartProvider from '@store/Cart'
import "@aura-design/system/main.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)}
