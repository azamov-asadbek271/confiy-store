import { useLoaderData } from "react-router-dom"
import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"

function FeaturedProducts() {
   
  return (
    <div className="pt-24">
        <SectionTitle text="Featured products"/>
        <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts