import React from 'react';
import { Link } from "react-router-dom";
import aboutImg from '../assets/about.webp'; // <-- replace with your image

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
        {/* Brand + Menu */}
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

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-blue-600 font-semibold hover:underline flex items-center">
            <i className="fas fa-sign-in-alt mr-2"></i> Log in
          </Link>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <i className="fas fa-user-plus mr-2"></i> Get started
            </button>
          </Link>
        </div>
      </nav>

      {/* About Content */}
      <div className="flex-grow flex items-center justify-center px-12 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-blue-700">
              About Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-blue-600">MyTasker</span> is a platform 
              designed to simplify your daily workflow, help you collaborate with your 
              team, and keep you organized and productive. 
              <br /><br />
              Built with simplicity and efficiency in mind, our mission is to transform 
              the way individuals and teams manage their tasks, documents, and projects.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src={aboutImg} 
              alt="About MyTasker" 
              className="w-full max-w-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

