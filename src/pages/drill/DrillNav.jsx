/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {
  drillOnePathName,
  drillThreePathName,
  drillTwoPathName,
} from "../../data/pathName"
import { useFinal } from "../../shared/ContextAPI"
import { IoIosSunny } from "react-icons/io"
import { AiOutlineMoon } from "react-icons/ai"

const DrillNav = ({ children }) => {
  const datas = [
    {
      path: drillOnePathName,
      label: "Drill One",
    },
    {
      path: drillTwoPathName,
      label: "Drill Two",
    },
    {
      path: drillThreePathName,
      label: "Drill Three",
    },
  ]
  const { darkMode, handleDarkMode } = useFinal()

  return (
    <div
      className={`w-full h-screen  ${
        darkMode ? "bg-white text-black " : "bg-gray-600 text-white "
      }  `}
    >
      <div className="flex justify-between items-center px-10 ">
        <div>
          <img src="" alt="image" />
        </div>
        <div className="flex items-center gap-x-4 ">
          {datas.map((data, i) => (
            <Link to={`/${data.path}`} key={i}>
              <p> {data.label}</p>
            </Link>
          ))}

          <div className="cursor-pointer " onClick={handleDarkMode}>

            {
              darkMode? <AiOutlineMoon />:<IoIosSunny /> 
            }
            {/* {
              darkMode? "on": "off"
            } */}
          </div>
        </div>
      </div>

      {children}

      <div>Footer</div>
    </div>
  )
}

export default DrillNav
