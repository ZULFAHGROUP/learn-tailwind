import { useState } from "react"
import { useFinal } from "../../components/context/GlobalContext"
import Container from "../../components/container/Container"

const ComponentTwo = () => {
  const { surName, name, handleToggle } = useFinal()

  return (
    <Container>
      <div className="w-full h-screen flex justify-center items-center ">
        <div>surName:{surName} </div>
        <button
          onClick={handleToggle}
          className="px-[1rem] py-[0.5rem] text-white bg-blue-300 rounded-[0.5rem] "
        >
          {" "}
          Submit
        </button>
        <div>name: {name}</div>
      </div>
    </Container>
  )
}

export default ComponentTwo
