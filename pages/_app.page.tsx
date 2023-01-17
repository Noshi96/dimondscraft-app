import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global-styles'
import { wrapper } from '../store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes'

function MyApp({ Component, ...rest }: AppProps): JSX.Element {
  const { store, props } = wrapper.useWrappedStore(rest)
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
        <link rel='icon' href='/favicon.ico' />
        <title>Diamondscraft | aukcje NFT</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...props.pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
