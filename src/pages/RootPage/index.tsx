import React from 'react'
import NavBar from '../../layouts/NavBar'
import { GlobalStyle } from '../../styles/global-styles'
import { useOutlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import Footer from "../../features/Footer";
const HomePage = React.lazy(() => import('../../pages/HomePage'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback='Loading...'>{component}</React.Suspense>
}

const RootPage = () => {
  const outlet = useOutlet()

  return (
    <>
      <NavBar />
      {outlet || suspenseComponent(<HomePage />)}
      <Footer />
      <GlobalStyle />
      <ScrollRestoration />
    </>
  )
}

export default RootPage
