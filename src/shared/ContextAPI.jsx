/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const ToggleContext = createContext()

export function useFinal() {
  return useContext(ToggleContext)
}

const ContextAPI = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  const [darkMode, setDarkMode] = useState(true)

  function handleToggle() {
    setToggle(!toggle)
    alert(`The current state is ${toggle}`)
  }
  function handleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <ToggleContext.Provider value={{ toggle, handleToggle, darkMode,handleDarkMode }}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ContextAPI
