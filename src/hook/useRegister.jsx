import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fairbase/FairbaseConfig";
export function useRegister() {
 const register = (data) => {
     createUserWithEmailAndPassword(auth, data.email, data.password)
       .then((userCredential) => {
         const user = userCredential.user;
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
       });
 }
 return {register}
}
