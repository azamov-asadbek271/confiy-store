import {useLogin} from "../hook/useLogin"
import { FcGoogle } from "react-icons/fc";
   
   function Login() {
      const { loginWithGoogle } = useLogin();
     return (
       <div className="min-h-screen grid place-items-center">
         <button onClick={loginWithGoogle} className="btn btn-secondary flex items-center">
           <FcGoogle className="text-3xl" />
           <span className="text-2xl">Google</span>
         </button>
       </div>
     );
   }
   
   export default Login 