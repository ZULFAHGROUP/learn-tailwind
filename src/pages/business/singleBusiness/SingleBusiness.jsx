/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { products } from "../../../data/products"
import Rating from "../Rating"

const SingleBusiness = () => {
  const { business_id } = useParams()

  const result = products[business_id]
  return (
    <div className=" p-5 ">
      <div className="flex rounded-[1rem] gap-x-6 border-2 justify-between shadow-lg p-3 ">
        <div className="w-[20rem] ">
          <img src={result.image} alt="" />
        </div>
        <div className="text-[1.3rem] w-1/2 ">
          <h1 className="text-[1.5rem] font-semibold text-center ">
            {result.title}
          </h1>
          <h2>&#8358;{result.price}</h2>
          <h3 className="text-orange-300">{result.category}</h3>
                  <p className="text-[0.8rem] ">{result.description}</p>
                  <Rating rate={result.rating.rate } />
        </div>
      </div>
    </div>
  )
}

export default SingleBusiness
