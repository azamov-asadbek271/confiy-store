import { InputForm, SubmitBtn } from "../components";
// import {useLogin} from "../hook/useLogin"
import { useRegister } from "../hook/useRegister";
import { Form, Link, useActionData } from "react-router-dom";
import { useEffect } from "react";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let Name = formData.get("Name");
  let Photo = formData.get("Photo");
  let Email = formData.get("Email");
  let Password = formData.get("Password");
  return { Name, Photo, Email, Password };
};

function Register() {
  // const { loginWithGoogle } = useLogin();
  const data = useActionData();
  const { register } = useRegister();

  useEffect(() =>{
    if(data) {
      register(data)
    }
  },[data])


  return (
    <div className="h-screen grid place-items-center bg-base-300">
      <Form className=" flex flex-col gap-y-2 " method="post">
        <div className="card w-96 p-8 bg-base-100 shadow-lg ">
          <h2 className="text-center font-bold text-3xl mb-2">Register</h2>
          {/* input */}
          <InputForm type="text" label=" Name:" name="Name" />
          <InputForm type="url" label=" URl:" name="Photo" />
          <InputForm type="email" label=" Email:" name="Email" />
          <InputForm type="password" label=" Password:" name="Password" />
          {/* button */}
          <div className="mt-6">
            <SubmitBtn text="register" />
          </div>
          {/* <button className="btn btn-secondary mt-4 text-xl">Guest User</button> */}
          <p className="text-center mt-3">
            Not a memeber yet ?
            <Link to="/login" className="capitalize link-primary">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Register;
