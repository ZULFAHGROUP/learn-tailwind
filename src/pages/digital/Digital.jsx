import { useEffect, useState } from "react"
import Container from "../../components/container/Container"
import DigitalCard from "./DigitalCard"
import axios from "axios"

const Digital = () => {
  const [allProducts, setAllProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const fetchProducts = await axios("https://dummyjson.com/products")

      console.log("fetchProducts:", fetchProducts.data.products)
      setAllProducts(fetchProducts.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // console.log("allProducts:",allProducts)
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <Container>
      <div className="flex w-full min-h-screen justify-center  p-[4rem] ">
        <div className="grid grid-cols-3 gap-5 ">
          {allProducts.map((product) => (
            <DigitalCard key={product.id} productProps={product}/>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Digital
