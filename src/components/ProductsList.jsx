import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../uitls";

function ProductsList() {
    const {products} = useLoaderData()
  return (
    <div className="mt-12 grid gap-y-8">
        {products.map((pro) => {
            const { title, image, price,company } = pro.attributes;
            const dollarAmount = formatPrice(price);
            return (
              <Link
                className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl"
                key={pro.id}
                to={`/product/${pro.id}`}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover"
                />
              </Link>
            );
        })}
    </div>
  )
}

export default ProductsList