/* eslint-disable react/prop-types */
import Footer from "../footer/Footer"
import NavBar from "../nav/NavBar"

const Container = ({ children }) => {
  return (
    <div className=" w-full min-h-screen font-Maven">
      <NavBar />

      {children}
      <Footer />
    </div>
  )
}

export default Container
