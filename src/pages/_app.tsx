import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'
import { store } from '@app/store'
import Head from 'next/head'
import '@styles/null.css'
import '@styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/logo.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='UMR Group website'
        />
        <title>UMR Group | Translate</title>
      </Head>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </Provider>
  )
}