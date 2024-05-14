import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: false,
  authReady: false,
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
            login: () => {},
            logOut: () => {},
            authReady: ()=> {},
    }
})
const {login,logOut,authReady} = userSlice.actions
export default userSlice.reducer
