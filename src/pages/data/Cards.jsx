/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom"

const Cards = ({ image, title, price, description,to }) => {
  return (
    <Link to={to}>
      <div className=" w-[20rem] h-fit space-y-3 rounded-[0.5rem] drop-shadow-xl p-3 bg-white border-2 ">
        <div className="mx-auto w-[5rem] ">
          <img src={image} alt="" />
        </div>
        <h1>{title}</h1>
        <h2>#{price}</h2>
        <p className="w-[15rem] ">{description}</p>
      </div>
    </Link>
  )
}

export default Cards
