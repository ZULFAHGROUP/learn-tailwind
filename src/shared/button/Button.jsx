/* eslint-disable react/prop-types */

const Button = ({ text,disable, ...props}) => {
  return <button disabled={disable} {...props} className="bg-[#d6e22a] text-white py-[0.5rem] px-[1rem] rounded-[5rem] ">{text}</button>
}

export default Button
