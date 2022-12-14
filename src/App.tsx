import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { Provider } from 'react-redux'
import { store } from './store'
gsap.registerPlugin(ScrollTrigger)

const AboutPage = React.lazy(() => import('./pages/AboutUsPage'))
const EventPage = React.lazy(() => import('./pages/EventPage'))
const RootPage = React.lazy(() => import('./pages/RootPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'))
const Redirect = React.lazy(() => import('./pages/Redirect'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback=''>{component}</React.Suspense>
}

const router = createHashRouter([
  // createHashRouter on GH Pages
  {
    path: '/',
    element: suspenseComponent(<RootPage />),
    children: [
      {
        path: 'about',
        element: suspenseComponent(<AboutPage />),
      },
      {
        path: 'contact',
        element: suspenseComponent(<ContactPage />),
      },
      {
        path: 'event-page',
        element: suspenseComponent(<EventPage />),
      },
      {
        path: 'gallery',
        element: suspenseComponent(<GalleryPage />),
      },
      {
        path: '*',
        element: suspenseComponent(<Redirect />),
      },
    ],
  },
])

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
