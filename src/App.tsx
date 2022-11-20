import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)


const ArtistsPage = React.lazy(() => import('./pages/Artists'))
const AboutPage = React.lazy(() => import('./pages/AboutUsPage'))
const ArtPage = React.lazy(() => import('./pages/Art'))
const EventPage = React.lazy(() => import('./pages/EventPage'))
const RootPage = React.lazy(() => import('./pages/RootPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback='Loading...'>{component}</React.Suspense>
}

const router = createHashRouter([
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
        path: 'contact',
        element: suspenseComponent(<ContactPage />),
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
