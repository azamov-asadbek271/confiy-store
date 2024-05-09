import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";
import {BsFillGearFill,BsList} from "react-icons/bs"
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function ProductsContainer() {
    const {meta} = useLoaderData()
    const totalProducts = meta.pagination.total
    const [layout,setlayout] = useState("grid")
    const setActivStyle = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${
          pattern === layout
            ? "btn-primary text-primary-content"
            : "btn-ghost text-base-content"
        }`;
    }
  return (
    <div>
      {/* gird & list */}
      <div className=" flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="btn btn-primary text-primary-content">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2 ">
          <button
            onClick={() => setlayout("grid")}
            className={setActivStyle("grid")}
          >
            <BsFillGearFill />
          </button>
          <button
            onClick={() => setlayout("list")}
            className={setActivStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* products */}
      <div>
        {totalProducts == 0 ? (
          <h5>Sorry, no products matched your search...</h5>
        ) : layout == "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
