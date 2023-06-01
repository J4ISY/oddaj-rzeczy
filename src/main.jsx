import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// Importing components
import Error from "./components/error/Error.jsx";
import Home from "./components/home-page/Home.jsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error />
    },
    {
        path: '/',
        element: <Home />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
