import {useLogin} from "../hook/useLogin"
import { InputForm,SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";


   
   function Login() {
    // const { store } = useSelector((store) => store);
    // console.log(store);
      const { loginWithGoogle } = useLogin();
     return (
       <div className="h-screen grid place-items-center bg-base-300">
         <div className="card w-96 p-8 bg-base-100 shadow-lg ">
           <h2 className="text-center font-bold text-3xl mb-2">Login</h2>
           {/* input */}
           <Form className=" flex flex-col gap-y-4 ">
             {/* <InputForm type="text" label=" Name:" name="Name" />
             <InputForm type="url" label=" URl:" name="Photo" /> */}
             <InputForm type="email" label=" Email:" name="Email" />
             <InputForm type="password" label=" Password:" name="Password" />
           </Form>
           {/* button */}
           <div className="mt-6 mb-5">
             <SubmitBtn text="Login" />
           </div>

           <button
             onClick={loginWithGoogle}
             className="btn btn-secondary flex items-center"
           >
             <FcGoogle className="text-3xl" />
             <span className="text-2xl">Google</span>
           </button>

           <p className="text-center mt-3">
             {" "}
             Not a memeber yet ?
             <Link to="/register" className="capitalize link-primary">
               {" "}
               register
             </Link>
           </p>
         </div>
       </div>
     );
   }
   
   export default Login 