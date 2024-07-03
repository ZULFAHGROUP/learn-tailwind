import Container from "../../components/container/Container"
import { businessPathName } from "../../data/pathName"
import { products } from "../../data/products"
import ProductCard from "./ProductCard"

const Business = () => {
  return (
    <Container>
      <div className="p-10 ">
        <div className="grid grid-cols-3 gap-y-8 ">
          {products.map((product, i) => (
            <ProductCard
              {...product}
              key={product.id}
              to={`/${businessPathName}/${i}`}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Business
