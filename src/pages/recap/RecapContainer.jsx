/* eslint-disable react/prop-types */
import RecapFooter from "./RecapFooter"
import RecapNav from "./RecapNav"

const RecapContainer = ({ children }) => {
  return (
    <>
      <RecapNav />

      {children}
      <RecapFooter />
    </>
  )
}

export default RecapContainer
