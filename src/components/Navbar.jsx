import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import NavLinks from "./NavLinks"
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import {  NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
 
const  themes = {
  winter:"winter",
  dracula:"dracula"
}
function darkLocalstore() {
  return localStorage.getItem("mode") || themes.winter
}
// signOut
import { signOut } from "firebase/auth";
import { auth } from "../fairbase/FairbaseConfig";
function Navbar() {
  const [theme,setTheme]  = useState(darkLocalstore())
  function handleClick  () {
 const NewThemes = theme == themes.winter ? themes.dracula: themes.winter
   setTheme(NewThemes)
  }
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem("mode",theme)
  },[theme])
  function loginOutFunc () {
    signOut(auth)
    .then(() => console.log("xayr"))
    .catch((error) => console.log(error))
  }
  return (
    <div>
      <div className="top bg-neutral ">
        <div className="con-align flex lg:justify-end justify-center gap-6 py-2 items-center">
          <p className="text-white">asadbek</p>
          <button onClick={loginOutFunc} className="btn btn-xs btn-outline btn-primary">LOGOUT</button>
        </div>
      </div>
      <div className="bg-base-300 py-1 flex items-center ">
        <div className="navbar con-align">
          {/* start */}
          <div className="navbar-start">
            <div className="hidden lg:flex">
              <Link to="/" className="btn  btn-primary text-3xl">
                C
              </Link>
            </div>
            <div className="dropdown lg:hidden">
              <button tabIndex={0} role="button" className=" m-1">
                <RiMenuFill className="h-6 w-6" />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <NavLinks/>
              </ul>
            </div>
          </div>
          {/* center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
            <NavLinks/>
            </ul>
          </div>
          {/* end */}
          <div className="navbar-end flex gap-5 ">
            <label className="swap swap-rotate">
              <input type="checkbox"
               onClick={handleClick}
               defaultChecked={theme == "winter" ? true : false}
               />
              {/* sun icon */}
              <IoMoon className="swap-on fill-current w-6 h-6" />
              {/* moon icon */}
              <FaRegSun className="swap-off fill-current w-6 h-6" />
            </label>
            <NavLink to="/cart" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className="indicator-item badge  bg-primary text-white">
                  0
                </span>
                <PiShoppingCartLight className="text-3xl" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
