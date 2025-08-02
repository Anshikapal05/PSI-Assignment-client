import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api";
import loginImage from "../../assets/register.png"; // replace with your login image
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);

    const decoded = jwtDecode(res.data.token);
    localStorage.setItem("role", decoded.role); // 👈 extract role from token

    alert("Login successful");
    navigate("/dashboard");
  } catch (err) {
    alert("Login failed");
  }
};


  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Left Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <img
          src={loginImage}
          alt="Login"
          className="w-2/3 h-auto object-contain" 
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-700 text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600">
            Login to continue to <span className="font-semibold">MyTasker</span>
          </p>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Login
          </button>

          {/* Register Option */}
          <p className="text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
