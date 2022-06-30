import { FC, ReactNode } from 'react'
import Head from 'next/head'

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
      
      {children}
    </>
  )
}

export { Layout }