import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { customFetch } from "../uitls";
import { formatPrice } from "../uitls";
import { generateAmountOptions } from "../uitls";


  export const loader = async ({params}) => {
    const request = await customFetch(`/products/${params.id}`);
   
    return { products: request.data.data };
  };

function SingleProduct() {
   const {products} = useLoaderData()
   const { title, image, price, description,colors,company } = products.attributes;
     const dollarAmount = formatPrice(price);
     const [productColor,setProductColor] = useState(colors[0])
     const [amount,setAmount] = useState()
  return (
    <section className="con-align mb-20 mt-28">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Proucts</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          className=" w-[420px] h-[400px] lg:w-[500px] object-cover rounded-lg "
          src={image}
          alt={title}
        />
        <div>
          <h1 className=" capitalize text-3xl font-bold">{title}</h1>
          <h4 className="title-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-7">{description}</p>
          <div className="mt-3 flex gap-2">
            {colors.map((color) => {
              return (
                <button
                  className={`badge w-6 h-6 ${
                    color == productColor && "border-2 border-secondary"
                  }`}
                  style={{ background: color }}
                  key={color}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <h4 className=" text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button
              onClick={() => console.log("add to bag")}
              className="btn btn-secondary btn-md"
            >
              Add to Bag
            </button> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct