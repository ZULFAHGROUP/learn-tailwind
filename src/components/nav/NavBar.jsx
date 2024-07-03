/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logos.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseCircleSharp } from "react-icons/io5"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { blogPathName, businessPathName } from "../../data/pathName"

const NavBar = () => {
  const [toggle, setToggle] = useState(true)

  const navDatas = [
    {
      label: "Data",
      path: "/data",
    },
    {
      label: "Packages & Plans",
      path: "/package/plans",
    },
    {
      label: "Business",
      path: `/${businessPathName}`,
    },
    {
      label: "Digital Services",
      path: "/digital/services",
    },
    {
      label: "Blog",
      path: `/${blogPathName}`,
    },
    {
      label: "Get Help",
      path: "/get/help",
    },
  ]
  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <nav className="flex  bg-white justify-between items-center px-[1rem] z-50 lg:px-[5rem] py-[1rem] w-full flex-wrap sm:flex-nowrap   ">
      <div className="w-[7%] ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[2.5rem] " />
        </Link>
      </div>

      <button className="text-[1.5rem] sm:hidden " onClick={handleToggle}>
        {toggle ? <RxHamburgerMenu /> : <IoCloseCircleSharp />}
      </button>

      <div className="w-[100%] ">
        <ul
          className={` ${
            toggle ? "hidden" : "block"
          } sm:flex justify-end gap-8 text-start sm:text-center sm:text-[0.8rem] md:text-[1rem] items-center font-medium `}
        >
          {navDatas.map((navData, i) => (
            <NavLink
              key={i}
              className={({ isActive }) => {
                return isActive
                  ? "bg-blue-300 py-[0.0.1rem] text-white px-[2rem] rounded-[0.5rem] "
                  : " "
              }}
              to={navData.path}
            >
              <li className="border-b sm:border-none py-4   ">
                {navData.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
