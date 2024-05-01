import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import NavLink from "./NavLink"
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

function Navbar() {
  return (
    <div>
      <div className="top bg-neutral ">
        <div className="con-align flex justify-end gap-6 py-2 items-center">
          <p className="text-white">asadbek</p>
          <button className="btn btn-xs btn-outline btn-primary">LOGOUT</button>
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
                <RiMenuFill />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* center */}
          <div className="navbar-center hidden lg:flex">
            <NavLink />
          </div>
          {/* end */}
          <div className="navbar-end flex gap-5 ">
            <label className="swap swap-rotate">
              <input type="checkbox" />
              {/* sun icon */}
              <IoMoon className="swap-on fill-current w-6 h-6" />
              {/* moon icon */}
              <FaRegSun className="swap-off fill-current w-6 h-6" />
            </label>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className="indicator-item badge  bg-primary text-white">
                  0
                </span>
                <PiShoppingCartLight className="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
