import React from 'react'
import Footer from '../features/Footer'
import NewEntrySection from '../features/NewEntrySection'
interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const suspenseComponent = (Component: React.ReactNode | React.ReactNode[]) => {
  return <React.Suspense fallback=''>{Component}</React.Suspense>
}

const RootComponent = ({ children }: Props) => {
  return (
    <>
      {/* <NavBar /> */}
      <div id={'entryPageStartHook'}></div>
      <NewEntrySection />
      <div id={'entryPageEndHook'}></div>
      {suspenseComponent(children)}
      <Footer />
    </>
  )
}

export default RootComponent
