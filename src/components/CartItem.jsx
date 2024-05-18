import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/CartSlice";
import { formatPrice, generateAmountOptions } from "../uitls";

function 
CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: Number(e.target.value) }));
  };
  const RemoveItemTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col  gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 "
    >
      <img
        src={image}
        alt={title}
        className="h-26 w-24 rounded-lg sm:h-36 lg:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h2 className="mt-2 text-neutral-content capitalize">{company}</h2>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label className="label-text"> Amount</label>
        </div>
        <div className="flex flex-col gap-4">
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
          <button
            onClick={RemoveItemTheCart}
            className="nt-2 link link-primary link-hover text-sm"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
}

export default CartItem;
