import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../features/Footer'
import { GlobalStyle } from '../styles/global-styles'
import NewEntrySection from '../features/NewEntrySection'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const suspenseComponent = (component: React.ReactNode | React.ReactNode[]) => {
  return <React.Suspense fallback=''>{component}</React.Suspense>
}

const RootComponent = ({ children }: Props) => {
  return (
    <>
      {/* <NavBar /> */}
      <div id={'entryPageStartHook'}></div>
      {/* <NewEntrySection /> */}
      <div id={'entryPageEndHook'}></div>
      {suspenseComponent(children)}
      {/* <Footer /> */}
      <GlobalStyle />
    </>
  )
}

export default RootComponent
