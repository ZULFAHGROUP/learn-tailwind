/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { stores } from "../../data/stores"

const SingleData = () => {
  const { id } = useParams()

  let result = stores[id - 1]

  console.log("result:", result)

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-[20rem] h-fit space-y-3 rounded-[0.5rem] drop-shadow-xl p-3 bg-white border-2 ">
        <div className="mx-auto w-[5rem] ">
          <img src={result.image} alt="" />
        </div>
        <h1>{result.title}</h1>
        <h2>#{result.price}</h2>
        <p className="w-[15rem] ">{result.description}</p>
      </div>
    </div>
  )
}

export default SingleData
