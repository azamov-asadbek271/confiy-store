import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fairbase/FairbaseConfig";
//  import { useContext } from "react";
// import { GlobalContext } from "../context/useContextGlobal";
import { useDispatch } from "react-redux";
import { userSlice } from "../features/cart/CartSlice";
function useLogin() {
  const dispatch = useDispatch();
  // const { dispatch } = useContext(GlobalContext);
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          userSlice({
            getUser: user,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return { loginWithGoogle };
}

export { useLogin };
