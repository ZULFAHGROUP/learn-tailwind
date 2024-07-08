import Container from "../../components/container/Container"
import { useFinal } from "../../components/context/GlobalContext"

const ComponentOne = () => {
  const { handleToggle, name } = useFinal()

  return (
    <Container>
      <div>
        <button
          onClick={handleToggle}
          className="px-[1rem] py-[0.5rem] text-white bg-blue-300 rounded-[0.5rem] "
        >
          {" "}
          Submit
        </button>
        <div>{name}</div>
      </div>
    </Container>
  )
}

export default ComponentOne
