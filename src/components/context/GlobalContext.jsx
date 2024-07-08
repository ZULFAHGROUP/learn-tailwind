/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const ContextProvider = createContext()
// export const ContextProviderTwo = createContext()

export function useFinal() {
  return useContext(ContextProvider)
}

const GlobalContext = ({ children }) => {
  const [name, setName] = useState("Olawale")
  const [surName, setSurName] = useState("Dimeji")
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
    alert(`The current state is ${toggle}`)
  }

  return (
    <ContextProvider.Provider value={{ surName, name, toggle, handleToggle }}>
      {/* / <ContextProviderTwo.Provider value={surName}> */}
      {children}
      {/* </ContextProviderTwo.Provider> */}
    </ContextProvider.Provider>
  )
}

export default GlobalContext
