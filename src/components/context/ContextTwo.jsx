/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const ToggleContext = createContext()

export const useDarkMode = () => {
  return useContext(ToggleContext)
}

const ContextTwo = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <ToggleContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ContextTwo
