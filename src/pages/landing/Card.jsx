import { RiInformationFill } from "react-icons/ri"
import Button from "../../shared/button/Button"
import { useDarkMode } from "../../components/context/ContextTwo"

const Card = () => {

  const {darkMode} = useDarkMode()

  return (
    <div className="bg-[#cce1db] rounded-[0.5rem] w-[25rem]  p-[0.8rem] ">
      <div className=" space-y-3 hover:scale-[1.025]">
        <div className="rounded-[0.5rem] overflow-hidden  ">
          <img
            src="https://9mobileassets.blob.core.windows.net/images/1700074132018-491-x-368.jpg"
            alt=""
          />
        </div>
        <div className={ ` ${darkMode? "bg-gray-700 ": "bg-white"}  rounded-t-[0.5rem] space-y-4 rounded-b-[0.8rem] py-[1rem]   px-[0.8rem] `}>
          <h1 className="font-semibold text-[1.5rem] ">TREELZ</h1>
          <p>
            Digital entertainment hub for subscribers on the 9Mobile network
          </p>
          <p>
            <RiInformationFill className="text-[#919294]  inline-block " />
            Terms and Conditions Apply
          </p>
          <Button text="learn more" />
        </div>
      </div>
    </div>
  )
}

export default Card
