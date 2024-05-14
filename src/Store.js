import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import userReduser from "./features/user/userSlice"

 export const store = configureStore({
    reducer:{
        cartState: CartSlice,
        cartUser:userReduser,
    }
})