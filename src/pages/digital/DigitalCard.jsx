/* eslint-disable react/prop-types */

const DigitalCard = ({ productProps }) => {
  return (
    <div className="w-[20rem] h-[15rem] border-2 shadow-xl rounded-[0.8rem] p-3  ">
      <div className="flex justify-between ">
        <div className="w-[5rem] h-[5rem]  ">
          <img src={productProps.images} alt="images" />
        </div>
        <p
          className={`${
            productProps.availabilityStatus === "Low Stock"
              ? "text-white bg-red-400 "
              : "text-white bg-green-400"
          }  rounded-lg p-[0.7rem] h-fit `}
        >
          {productProps.availabilityStatus}
        </p>
      </div>
    </div>
  )
}

export default DigitalCard
