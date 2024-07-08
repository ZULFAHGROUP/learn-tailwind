/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Container from "../../components/container/Container"
import { businessPathName } from "../../data/pathName"
import { products } from "../../data/products"
import ProductCard from "./ProductCard"
import axios from "axios"

const Business = () => {
  const [getProducts, setGetProducts] = useState([])

  async function getRequest() {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((result) => setGetProducts(result))

    try {
      const response = await fetch("https://fakestoreapi.com/products")

      const result = await response.json()
      setGetProducts(result)
    } catch (error) {
      console.log(error)
    }

    // axios("https://fakestoreapi.com/products").then((response) =>
    //   // console.log(response.data)
    //   setGetProducts(response.data)
    // )
  }
  // console.log("second:", getProducts)

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <Container>
      <div className="p-10 ">
        <div className="grid grid-cols-3 gap-y-8 ">
          {getProducts.map((product, i) => (
            <ProductCard
              {...product}
              key={product.id}
              to={`/${businessPathName}/${i}`}
            />
          ))}
        </div>
        {/* <button onClick={getRequest}>submit</button> */}
      </div>
    </Container>
  )
}

export default Business
