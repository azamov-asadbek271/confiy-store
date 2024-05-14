import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { CartItemList, CartTotals } from "../components";
import { useSelector } from "react-redux";

function Cart() {
  const user = null;
  const numItemInCart = useSelector((state) => state.cartState.numItemsInCart);
  console.log(numItemInCart)
  if (numItemInCart === 0) {
    return <SectionTitle text=" Your cart is empty" />;
  }
  return (
    <div className="mt-8  grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
        {user ? (
          <Link className="btn btn-primary btn-block mt-8" to="/checkout">
            Procced to checkout
          </Link>
        ) : (
          <Link className="btn btn-primary btn-block mt-8" to="/login">
            Please Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
