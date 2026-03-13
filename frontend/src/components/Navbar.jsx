import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/user/logout`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Expense Tracker</h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-medium text-gray-700">
        <NavLink
          to="/dashboard"
          className="hover:text-blue-600"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/allexpence"
          className="hover:text-blue-600"
        >
          Expenses
        </NavLink>

        <NavLink
          to="/about"
          className="hover:text-blue-600"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="hover:text-blue-600"
        >
          Contact
        </NavLink>

        <button
          onClick={logoutHandler}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
