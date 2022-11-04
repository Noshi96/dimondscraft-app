import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const ArtistsPage = React.lazy(() => import('./pages/Artists'))
const AboutPage = React.lazy(() => import('./pages/About'))
const ArtPage = React.lazy(() => import('./pages/Art'))
const EventPage = React.lazy(() => import('./pages/EventPage'))
const RootPage = React.lazy(() => import('./pages/RootPage'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback='Loading...'>{component}</React.Suspense>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: suspenseComponent(<RootPage />),
    children: [
      {
        path: 'artists',
        element: suspenseComponent(<ArtistsPage />),
      },
      {
        path: 'about',
        element: suspenseComponent(<AboutPage />),
      },
      {
        path: 'art',
        element: suspenseComponent(<ArtPage />),
      },
      {
        path: 'event-page',
        element: suspenseComponent(<EventPage />),
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
