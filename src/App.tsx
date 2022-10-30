import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global-styles'
import { NavBar } from './components/NavBar'
import HomePage from './pages/HomePage'
const HomePageLazy = React.lazy(() => import('./pages/HomePage'))

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
            path='/projekty/'
            element={
              <React.Suspense fallback='Loading...'>
                <HomePageLazy />
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
