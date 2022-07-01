import { FC, ReactNode } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Provider } from 'react-redux'
import store from '../../app/store'
import Head from 'next/head'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="./logo.png" />
        <link rel="manifest" href="./manifest.json" />
        <title>UMR Group | Translate</title>
      </Head>
      <Header />

      <div className={styles.Main}>
        {children}
      </div>

      <Footer />
    </>
  )
}

export { Layout }