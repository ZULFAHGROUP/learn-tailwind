import { useFinal } from "../../shared/ContextAPI"
import DrillNav from "./DrillNav"

const DrillOne = () => {
  const { handleToggle } = useFinal()

  return (
    <DrillNav>
      <p>DrillOne</p>
      <button onClick={handleToggle}>Submit</button>
    </DrillNav>
  )
}

export default DrillOne
