import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../uitls";
const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url,{params});
  const products = await response.data.data;
  const meta = await response.data.meta;
  return { products, meta };
};
function Products() {
  return (
    <div className="con-align">
      {/* filter */}
      <Filter />
      {/* product Container */}
      <ProductsContainer />
      {/* paginationContainer */}
      <PaginationContainer/>
    </div>
  );
}

export default Products;
