import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const defaultState = {
  cartItem: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }) => {
      const { product } = payload;
      const item = state.cartItem.find((i) => (i.cartID = product.ID));

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItem.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax += 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      const { cartID } = payload;
      const product = state.cartItem.find((i) => i.cartID === cartID);
      state.cartItem = state.cartItem.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      cartSlice.caseReducers.calulateTotal(state);
      toast.success("Cart updated");
    },
    editItem: (state, { payload }) => {
      const { amount, cartID } = payload;
      const item = state.cartItem.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calulateTotal(state);
      toast.success("Cart updated");
    },
    calulateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addItem, clearCart, removeItem, editItem, userSlice } =
  cartSlice.actions;
export default cartSlice.reducer;
