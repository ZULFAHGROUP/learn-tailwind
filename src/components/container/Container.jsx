/* eslint-disable react/prop-types */
import { useDarkMode } from "../context/ContextTwo"
import Footer from "../footer/Footer"
import NavBar from "../nav/NavBar"

const Container = ({ children }) => {

  const { darkMode } = useDarkMode()

  return (
    <div className={` ${darkMode ? "bg-gray-700 text-white " : "bg-white"}  w-full min-h-screen font-Maven`}>
      <NavBar />

      {children}
      <Footer />
    </div>
  )
}

export default Container
