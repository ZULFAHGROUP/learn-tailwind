import { Link } from "react-router-dom"
import Rating from "./Rating"

/* eslint-disable react/prop-types */
const ProductCard = ({
  image,
  title,
  price,
  category,
  description,
  to,
  rating,
}) => {
  return (
    <div className="rounded-[0.5rem] overflow-hidden  space-y-4 shadow-lg w-[20rem] h-fit border-2 ">
      <Link to={to}>
        <div className="p-[1rem]">
          <div className="w-[8rem]  mx-auto ">
            <img src={image} alt="" className="h-[10rem]" />
          </div>
          <h1 className="font-semibold ">{title}</h1>
          <div className="flex justify-between  font-medium text-blue-300  ">
            <h2>&#8358;{price}</h2>
            <h3 className="text-orange-300">{category}</h3>
          </div>
          <p className="text-[0.8rem] ">{description}</p>
          <Rating rate={rating.rate} />
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
