// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './Components/About.jsx';
import Error from './Components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  // <App />
  //</React.StrictMode>,

  <RouterProvider router={appRouter} />
)
