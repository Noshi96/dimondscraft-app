import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global-styles'
import { NavBar } from './layouts/NavBar'
const HomePageLazy = React.lazy(() => import('./pages/HomePage'))
const ArtistsPageLazy = React.lazy(() => import('./pages/Artists'))
const AboutPageLazy = React.lazy(() => import('./pages/About'))
const ArtPageLazy = React.lazy(() => import('./pages/Art'))

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <React.Suspense fallback='Loading...'>
                <HomePageLazy />
              </React.Suspense>
            }
          />
          <Route
            path='/artists'
            element={
              <React.Suspense fallback='Loading...'>
                <ArtistsPageLazy />
              </React.Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <React.Suspense fallback='Loading...'>
                <AboutPageLazy />
              </React.Suspense>
            }
          />
          <Route
            path='/art'
            element={
              <React.Suspense fallback='Loading...'>
                <ArtPageLazy />
              </React.Suspense>
            }
          />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

export default App
