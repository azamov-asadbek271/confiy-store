import { InputForm,SubmitBtn } from "../components";
import {useLogin} from "../hook/useLogin"
import { Form, Link } from "react-router-dom";


function Register() {
      const { loginWithGoogle } = useLogin();

  return (
    <div className="h-screen grid place-items-center bg-base-300">
      <div className="card w-96 p-8 bg-base-100 shadow-lg ">
        <h2 className="text-center font-bold text-3xl mb-2">Register</h2>
        {/* input */}
        <Form className=" flex flex-col gap-y-2 ">
          <InputForm type="text" label=" Name:" name="Name" />
          <InputForm type="url" label=" URl:" name="Photo" />
          <InputForm type="email" label=" Email:" name="Email" />
          <InputForm type="password" label=" Password:" name="Password" />
        </Form>
        {/* button */}
        <div className="mt-6"></div>
        <SubmitBtn text="register" />
        {/* <button className="btn btn-secondary mt-4 text-xl">Guest User</button> */}
        <p className="text-center mt-3">
          {" "}
          Not a memeber yet ?
          <Link to="/login" className="capitalize link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register