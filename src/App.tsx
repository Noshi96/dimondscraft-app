import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global-styles'
const HomePage = React.lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/projekty/'
          element={
            <React.Suspense fallback='Loading...'>
              <HomePage />
            </React.Suspense>
          }
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
