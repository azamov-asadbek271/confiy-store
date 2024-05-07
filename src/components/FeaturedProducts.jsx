import { useLoaderData } from "react-router-dom"
import SectionTitle from "./SectionTitle"

function FeaturedProducts() {
    const {products} = useLoaderData()
    console.log(products)
  return (
    <div className="pt-24">
        <SectionTitle text="Featured products"/>
    </div>
  )
}

export default FeaturedProducts