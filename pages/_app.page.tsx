import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global-styles'
import { wrapper } from '../store'
import 'material-icons/iconfont/material-icons.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='A website for nft and art enthusiasts'
        />
        <title>Diamondscraft | aukcje NFT</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default wrapper.withRedux(MyApp)
