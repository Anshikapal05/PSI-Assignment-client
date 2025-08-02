import React from 'react';
import { Link } from "react-router-dom";

const ContactPage = () => {
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

      {/* Contact Section */}
      <div className="flex-grow flex items-center justify-center px-12 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-4">
              We'd love to hear from you! Reach out via the form or through the details below.
            </p>
            <p className="mb-2 flex items-center">
              <i className="fas fa-envelope text-blue-600 mr-2"></i> support@mytasker.com
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone-alt text-blue-600 mr-2"></i> +91 9876543210
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;

