import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fairbase/FairbaseConfig";
 import { useContext } from "react";
import { GlobalContext } from "../context/useContextGlobal";
function useLogin() {
  const { dispatch } = useContext(GlobalContext);
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
       dispatch({ type: "SIGNI_USER", payload:user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return {loginWithGoogle};
}

export { useLogin };
