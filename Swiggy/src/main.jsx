// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Body from './Components/Body.jsx'
import About from './Components/Class Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Post from './Components/Post.jsx'
import ResMenu from './Components/ResMenu.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post/:postid" element={<Post />} />
      <Route path="/res/:resid" element={<ResMenu />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <App />
  <RouterProvider router={router} />
)

{/* <StrictMode>
    <App />
  </StrictMode>, */}
