import { useSelector } from "react-redux";
import { formatPrice } from "../uitls";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className=" flex justify-between text-xl border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>{" "}
        <p className=" flex justify-between text-xl border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>{" "}
        <p className=" flex justify-between text-xl border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>{" "}
        <p className=" flex justify-between text-xl border-b border-base-300 pb-2">
          <span className="font-bold">Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;