import { useState } from "react";
import bg from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/user/login`,
        user,
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(navigate("/dashboard"), 1500);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left side container */}
      <div className="ml-60">
        {/* Glass Login Card */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-10 w-96">
          <h1 className="text-3xl font-bold text-white mb-6 text-center ">
            Login
          </h1>

          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-white text-gray-800 font-semibold p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-white text-sm mt-4">
            Don't have an account?
            <Link to={"/register"}>
              <span className="underline cursor-pointer ml-1">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
