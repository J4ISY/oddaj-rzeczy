import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// Importing components
// Error Page
import Error from "./components/error/Error.jsx";
// Landing Page
import Home from "./components/home-page/Home.jsx";
// Log-in Page
import LogIn from "./components/home-page/logIn-register/LogIn.jsx";
import Register from "./components/home-page/logIn-register/Register.jsx";
// Logout Page
import Logout from "./components/home-page/logout/Logout.jsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/logowanie',
        element: <LogIn/>
    },
    {
        path: '/rejestracja',
        element: <Register/>
    },
    {
        path: '/wylogowano',
        element: <Logout/>
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
