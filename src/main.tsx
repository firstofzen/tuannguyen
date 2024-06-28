import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "@/pages/Home.tsx";
import {About} from "@/pages/About.tsx";
import "@/styles/base.css"
import {ProductDetail} from "@/pages/ProductDetail.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/product/:id",
            element: <ProductDetail/>

        }
    ]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
