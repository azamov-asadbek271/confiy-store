import { Filter,ProductsContainer } from "../components"
import { customFetch } from "../uitls"
 const url = "/products"
export const loader = async () => {
  const response = await customFetch(url)
  const products = await response.data.data
  const meta = await response.data.meta
  return {products,meta}
}
function Products() {
  return (
    <div className="con-align">
      {/* filter */}
      <Filter/>
      {/* product Container */}
      <ProductsContainer/>
      {/* paginationContainer */}
    </div>
  );
}

export default Products