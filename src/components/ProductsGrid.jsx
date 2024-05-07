import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../uitls";

function ProductsGrid() {
     const { products } = useLoaderData();
  return (
    <div className="grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {products.map((item) => {
            const { title, image, price } = item.attributes;
            const dollarAmount = formatPrice(price)
        return (
          <Link
            className="card  w-full shadow-xl hover:shadow-2xl transition duration-300"
            key={item.id}
            to={`/product/${item.id}`}
          >
            <figure>
              <img
                className="rounded-xl h-64 md:h-48 w-full object-cover "
                src={image}
                alt={title}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title tracking-wider capitalize">{title}</h2>
              <span className="text-secondary">{dollarAmount}</span>
            </div>
          </Link>
        );

        })}
    </div>
  )
}

export default ProductsGrid