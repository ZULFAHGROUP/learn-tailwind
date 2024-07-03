/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5"

const Rating = ({ rate }) => {
  return (
    <div className="flex text-yellow-400 ">
      <div>
        {rate >= 1 ? (
          <IoStar />
        ) : rate >= 0.5 ? (
          <IoStarHalfOutline />
        ) : (
          <IoStarOutline />
        )}
      </div>
      <div>
        {rate >= 2 ? (
          <IoStar />
        ) : rate >= 1.5 ? (
          <IoStarHalfOutline />
        ) : (
          <IoStarOutline />
        )}
      </div>
      <div>
        {rate >= 3 ? (
          <IoStar />
        ) : rate >= 2.5 ? (
          <IoStarHalfOutline />
        ) : (
          <IoStarOutline />
        )}
      </div>
      <div>
        {rate >= 4 ? (
          <IoStar />
        ) : rate >= 3.5 ? (
          <IoStarHalfOutline />
        ) : (
          <IoStarOutline />
        )}
      </div>
      <div>
        {rate >= 5 ? (
          <IoStar />
        ) : rate >= 4.5 ? (
          <IoStarHalfOutline />
        ) : (
          <IoStarOutline />
        )}
      </div>
    </div>
  )
}

export default Rating
