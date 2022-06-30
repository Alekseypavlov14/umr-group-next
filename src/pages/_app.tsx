import type { AppProps } from 'next/app'
import './../styles/null.css'
import './../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}