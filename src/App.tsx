import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global-styles'
import NavBar from './layouts/NavBar'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const ArtistsPage = React.lazy(() => import('./pages/Artists'))
const AboutPage = React.lazy(() => import('./pages/About'))
const ArtPage = React.lazy(() => import('./pages/Art'))
const EventPage = React.lazy(() => import('./pages/EventPage'))

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <React.Suspense fallback='Loading...'>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path='/artists'
          element={
            <React.Suspense fallback='Loading...'>
              <ArtistsPage />
            </React.Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <React.Suspense fallback='Loading...'>
              <AboutPage />
            </React.Suspense>
          }
        />
        <Route
          path='/art'
          element={
            <React.Suspense fallback='Loading...'>
              <ArtPage />
            </React.Suspense>
          }
        />
        <Route
          path='/event-page'
          element={
            <React.Suspense fallback='Loading...'>
              <EventPage />
            </React.Suspense>
          }
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
