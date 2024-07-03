import { stores } from "../../data/stores"
import Cards from "./Cards"

const Data = () => {
  return (
    <div className="w-full min-h-screen p-[2rem] ">
      <div className="grid gap-4 grid-cols-3 ">
        {stores.map((store) => (
          <Cards key={store.id} {...store} to={`/data/${store.id}`} />
        ))}
      </div>
    </div>
  )
}

export default Data
