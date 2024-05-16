import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fairbase/FairbaseConfig";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { login } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export function useRegister() {
    const dispatch = useDispatch()
 const register = (data) => {
     createUserWithEmailAndPassword(auth, data.Email,  data.Password)
       .then(async(userCredential) => {
        await updateProfile(auth.currentUser,{
            photoURL: data.Photo,
            displayName: data.Name,

        })

        toast.success(`Welcom,${data.displayName}`)
        dispatch(login(userCredential.user));

       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
           toast.success(errorMessage);

       });
 }
 return {register}
}
