import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import DropDownUserProfile from "./DropDownUserProfile";

const Navbar = ({ user, setUser }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const join = () => {
    navigate("/local-user-register");
  };

  return (
    <div className="flex justify-between items-center h-24 w-full px-20  bg-gray-50 shadow-lg border-b">
      <h1 className="w-full text-3xl font-bold text-green-600 cursor-pointer"><Link
                to="/"
              >
                FunOlympic
              </Link></h1>
      <ul className="hidden md:flex items-center">
        <li className="p-4 cursor-pointer">Contact</li>
        {user ? (
          <>
            <li className="flex justify-center w-44 cursor-pointer">
              <Link
                to="/"
              >
                Live Straming
              </Link>
            </li>
            <li className="flex justify-center w-44 cursor-pointer">
            <Link
                to="/rewatchgame"
              >
                Re-watch Game
              </Link>
            </li>
            <DropDownUserProfile user={user} setUser={setUser} />
          </>
        ) : (
          <>
            <li className="p-4">
              <Link
                to="/local-user-login"
                className="text-neutral-600 font-bold text-md hover:text-green-600 w-20 h-10 flex items-center justify-center"
              >
                <span> Log in</span>
              </Link>
            </li>
            <li className="p-4">
              <button
                type="button"
                className="md:block hidden text-green-600 font-bold text-md hover:bg-green-600 hover:text-white border   w-20 h-10 rounded-md border-green-600"
                onClick={join}
              >
                Register
              </button>
            </li>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-50 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-green-600 m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4 border-b border-gray-600">Login</li>
        <li className="p-4">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
