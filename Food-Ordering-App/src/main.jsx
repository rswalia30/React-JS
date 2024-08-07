// import React from 'react'
// import './index.css'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from './Components/About.jsx';
import Error from './Components/Error.jsx';
import Body from './Components/Body.jsx';
import Contact from './Components/Contact.jsx';

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/res/:id",
//         element: <ResMenu />
//       }
//     ],
//     errorElement: <Error />
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  // <App />
  //</React.StrictMode>,

  // <RouterProvider router={appRouter} />
  <RouterProvider router={router} />
)
