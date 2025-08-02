import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api";
import registerImage from "../../assets/register.png"; // Add your image to /assets folder

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/register", { email, password, role });
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Left Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <img
          src={registerImage}
          alt="Register"
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
            Create an Account
          </h2>
          <p className="text-center text-gray-600">
            Join <span className="font-semibold">MyTasker</span> and get started today
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

          {/* Role Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Role</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Register
          </button>

          {/* Already have an account */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
