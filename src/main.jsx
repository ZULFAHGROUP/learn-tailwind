/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Recap from "./pages/recap/index.jsx"
import RecapTwo from "./pages/recap/RecapTwo.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing/Landing.jsx"
import Blog from "./pages/blog/Blog.jsx"
import Business from "./pages/business/Business.jsx"
import ErrorPage from "./pages/errorPage/ErrorPage.jsx"
import { blogPathName, businessPathName, dataPathName, singleBusinessPathName } from "./data/pathName.js"
import Data from "./pages/data/Data.jsx"
import SingleData from "./pages/data/SingleData.jsx"
import SingleBusiness from "./pages/business/singleBusiness/SingleBusiness.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: blogPathName,
    element: <Blog />,
  },
  {
    path: businessPathName,
    element: <Business />,
  },
  {
    path: singleBusinessPathName,
    element: <SingleBusiness />,
  },
  {
    path: dataPathName,
    element: <Data />,  
  },
  {
    path: "/data/:id",
    element: <SingleData />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
