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
import {
  blogPathName,
  businessPathName,
  dataPathName,
  digitalServicePathName,
  drillOnePathName,
  drillThreePathName,
  drillTwoPathName,
  singleBusinessPathName,
} from "./data/pathName.js"
import Data from "./pages/data/Data.jsx"
import SingleData from "./pages/data/SingleData.jsx"
import SingleBusiness from "./pages/business/singleBusiness/SingleBusiness.jsx"
import ComponentOne from "./pages/Components/ComponentOne.jsx"
import ComponentTwo from "./pages/Components/ComponentTwo.jsx"
import GlobalContext from "./components/context/GlobalContext.jsx"
import ContextTwo from "./components/context/ContextTwo.jsx"
import Login from "./pages/Login/Login.jsx"
import Profile from "./pages/Profile/Profile.jsx"
import DrillOne from "./pages/drill/DrillOne.jsx"
import ContextAPI from "./shared/ContextAPI.jsx"
import DrillTwo from "./pages/drill/DrillTwo.jsx"
import DrillThree from "./pages/drill/DrillThree.jsx"
import Digital from "./pages/digital/Digital.jsx"

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
    path: digitalServicePathName,
    element: <Digital />,
  },
  {
    path: "/data/:id",
    element: <SingleData />,
  },
  {
    path: "/compOne",
    element: <ComponentOne />,
  },
  {
    path: "/compTwo",
    element: <ComponentTwo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: drillOnePathName,
    element: <DrillOne />,
  },
  {
    path: drillTwoPathName,
    element: <DrillTwo />,
  },
  {
    path: drillThreePathName,
    element: <DrillThree />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <ContextTwo>
        <ContextAPI>
          <RouterProvider router={router} />
        </ContextAPI>
      </ContextTwo>
    </GlobalContext>
  </React.StrictMode>
)
