/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logos.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseCircleSharp } from "react-icons/io5"
import { useState } from "react"

const NavBar = () => {
  const [toggle, setToggle] = useState(true)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <nav className="flex  justify-between items-center px-[1rem] md:px-[5rem] py-[1rem] w-full flex-wrap sm:flex-nowrap   ">
      <div className="w-[20%] ">
        <img src={logo} alt="logo" className="w-[2.5rem] " />
      </div>

      <button className="text-[1.5rem] sm:hidden " onClick={handleToggle}>
        {toggle ? <RxHamburgerMenu /> : <IoCloseCircleSharp />}
      </button>

      <div className="w-[80%] ">
        <ul
          className={` ${
            toggle ? "hidden" : "block"
          } sm:flex justify-end gap-8 items-center font-medium `}
        >
          <li className="border-b sm:border-none py-4  ">Data</li>
          <li className="border-b sm:border-none py-4  ">Packages & Plans</li>
          <li className="border-b sm:border-none py-4  ">Business</li>
          <li className="border-b sm:border-none py-4  ">Digital Services</li>
          <li className="border-b sm:border-none py-4  ">Blog</li>
          <li className="border-b sm:border-none py-4  ">Get Help</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
