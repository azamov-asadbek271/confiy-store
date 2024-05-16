import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: false,
  authReadyState: false,
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
            login: (state,{payload}) => {
                state.user = payload
            },
            logout: (state) => {
                state.user = null
            },
            authReady: (state)=> {
                state.authReadyState =  true
            },
    }
})
export const {login,logOut,authReady} = userSlice.actions
export default userSlice.reducer
