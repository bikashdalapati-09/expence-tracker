import { useState } from "react";
import bg from "../assets/bg.png";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left side container */}
      <div className="ml-60">
        {/* Glass Register Card */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-10 w-100">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Register
          </h1>

          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            <input
              value={user.name}
              onChange={(e) => setUser({...user, name: e.target.value})}
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <input
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <input
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-lg bg-white/30 text-white placeholder-white border border-white/40 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-white text-gray-800 font-semibold p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="text-white text-sm mt-4">
            Already have an account?
            <span className="underline cursor-pointer ml-1">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
