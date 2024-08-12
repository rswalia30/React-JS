// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Body from './Components/Body.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Post from './Components/Post.jsx'
import ResMenu from './Components/ResMenu.jsx'
// import Github from './Components/Class Components/Github.jsx'
// import Instamart from './Components/Instamart/Instamart.jsx'
import { lazy, Suspense } from 'react'
import Shimmer from './Components/Shimmer.jsx'

const Github = lazy(() => import("./Components/Class Components/Github.jsx"));
const Instamart = lazy(() => import("./Components/Instamart/Instamart.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Body />} />
      <Route path="/github"
        element=
        {
          // <Suspense fallback={<h1>Loading...</h1>}>
          <Suspense fallback={<Shimmer />}>
            <Github />
          </Suspense>
        }
      />
      < Route path="/contact" element={< Contact />} />
      < Route path="/post/:postid" element={< Post />} />
      < Route path="/res/:resid" element={< ResMenu />} />
      < Route path="/instamart"
        element=
        {
          <Suspense fallback={<Shimmer />}>
            < Instamart />
          </Suspense>
        } />
    </Route >
  )
)

createRoot(document.getElementById('root')).render(
  // <App />
  <RouterProvider router={router} />
)

{/* <StrictMode>
    <App />
  </StrictMode>, */}
