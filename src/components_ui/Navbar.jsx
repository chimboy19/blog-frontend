import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";



const Navbar = ({ DarkMode, toggleDarkMode }) => {
  const [showNavbar, setshowNavbar] = useState(false);

  const toggleNavbar = () => {
    setshowNavbar(!showNavbar);
  };

  const navigate =useNavigate()

  const handleLogout = (e) => {
    e.preventDefault();

    
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    
    toast.info("you have successfully logout", {
      autoClose: 2000,
      hideProgressBar: false,
    });
    navigate ('/login',{replace:true},1500)
  }


  return (
    <div>
      <nav className="width-[100%] border-2 border-red-500 border-solid px-9 py-6 flex justify-between items-center gap-6 sticky top-0 z-10 bg-[#ffffffff] dark:bg-[#141624]">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#ffffff]">
          Devetalk
        </Link>
        <ul className="flex justify-end item-center text-[#383c4A] gap-9 lg:flex-1 max-md:hidden dark:text-[#ffffff]">
          {/* <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="profile"
          >
            hi chima
          </NavLink> */}

          {/* <li>logout</li> */}

          <li>
            <button
              onClick={handleLogout}
              className="text-inherit bg-transparent border-none cursor-pointer p-0 hover:underline font-medium"
              aria-label="Logout"
            >
              logout
            </button>
          </li>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="login"
          >
            login
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="signup"
          >
            register
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="createPost"
          >
            create post
          </NavLink>
          {/* <li className="font-semibold">create a post</li> */}
        </ul>
        <Switch onCheckedChange={toggleDarkMode} checked={DarkMode} />
        <FaHamburger
          onClick={toggleNavbar}
          className="text-2xl cursor-pointer hidden max-md:block dark:text-white"
        />
      </nav>
      <div className={showNavbar ? "hidden" : ""}>
        <ResponsiveNavbar />
      </div>
    </div>
  );
};

export default Navbar;
