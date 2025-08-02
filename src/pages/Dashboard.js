import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import taskImage from "../assets/dashboard.png";

const Dashboard = () => {
  const [reloadFlag, setReloadFlag] = useState(false);
  const [role, setRole] = useState("user"); // default role

  const refreshTasks = () => setReloadFlag(!reloadFlag);

  // Simulating role fetch from localStorage or API
  useEffect(() => {
  const savedRole = localStorage.getItem("role") || "user";
  setRole(savedRole);
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <i className="fas fa-tasks text-blue-600 text-3xl"></i>
            <h1 className="text-2xl font-bold text-blue-700">MyTasker</h1>
          </div>
          <div className="flex space-x-6 font-medium">
            <Link to="/" className="text-blue-600 hover:text-blue-900 flex items-center">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
            <Link to="/about" className="text-blue-600 hover:text-blue-900 flex items-center">
              <i className="fas fa-info-circle mr-2"></i> About Us
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-900 flex items-center">
              <i className="fas fa-envelope mr-2"></i> Contact Us
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Logout
          </Link>
        </div>
      </nav>

      {/* Dashboard Header */}
      <div className="p-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-blue-700 tracking-wide mb-4">
          <i className="fas fa-chart-line text-blue-600 mr-3"></i>
          {role === "admin"
            ? "Welcome to the Admin Dashboard"
            : "Welcome to Your Dashboard"}
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          {role === "admin"
            ? "Manage users, tasks, and platform settings with ease 🔧"
            : "Manage your tasks efficiently and stay on top of your goals 🚀"}
        </p>

        {/* Grid: Illustration + Task Form */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <img
              src={taskImage}
              alt="Task Management Illustration"
              className="w-full max-w-lg "
            />
          </div>
          <div className="bg-white shadow-2xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
              <i className="fas fa-plus-circle mr-2 text-blue-600"></i>
              Add a New Task
            </h3>
            <TaskForm refreshTasks={refreshTasks} />
          </div>
        </div>

        {/* Task List */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
            <i className="fas fa-tasks mr-2 text-blue-600"></i>
            {role === "admin" ? "All Users' Tasks" : "Your Tasks"}
          </h3>
          <TaskList reloadFlag={reloadFlag} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
