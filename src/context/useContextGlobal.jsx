import { useReducer } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();
function changeUser (state,action) {
   switch(action.type){
    case "SIGNI_USER":
        return {...state,user:action.payload}
     case "AUTH_CHANGE":
          return {...state,authChange:true}
    
    default: return state;
    }

}
export const  GlobalContextProvider  = ({children}) => {

    const [state,dispatch] = useReducer(changeUser,{
        user:null,
        authChange:false
    })

   return <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>
}