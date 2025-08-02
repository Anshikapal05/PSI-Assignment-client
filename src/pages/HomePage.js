// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
//         <div className="flex items-center space-x-12">
//           <h1 className="text-2xl font-bold text-blue-700">MyTasker</h1>
//           <div className="flex space-x-6 font-medium">
//             <Link to="/" className="hover:text-blue-600">Home</Link>
//             <Link to="/about" className="hover:text-blue-600">About Us</Link>
//             <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//           </div>
//         </div>
//         <div>
//           <Link to="/login" className="text-blue-600 font-semibold mr-4 hover:underline">
//             Log in
//           </Link>
//           <Link to="/register">
//             <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
//               Get started
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-12 py-16 flex-grow">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-5xl font-bold text-blue-700 leading-tight">
//             Simplify Your <span className="text-blue-600">Workday</span>
//           </h2>
//           <p className="text-gray-600 text-lg mt-6 mb-8">
//             Manage your tasks, collaborate with your team, and stay organized —
//             all in one secure platform designed for productivity and growth.
//           </p>
//           <div className="space-x-4">
//             <Link to="/register">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
//                 Get started
//               </button>
//             </Link>
//             <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100">
//               Book a demo
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//           <img
//             src="/assets/dashboard.png" // Replace with your uploaded image path
//             alt="Task Management Dashboard"
//             className="w-full max-w-lg rounded-xl shadow-xl"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t text-gray-600 text-sm py-6 px-12 flex justify-between items-center">
//         <p>&copy; 2025 MyTasker. All rights reserved.</p>
//         <div className="space-x-6">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <Link to="/about" className="hover:text-blue-600">About</Link>
//           <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import dashboard from "../assets/home.webp";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 shadow-md bg-white">
        {/* Brand + Menu */}
        <div className="flex items-center space-x-12">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
  <i className="fas fa-tasks text-blue-600 text-3xl"></i>
  <h1 className="text-2xl font-bold text-blue-700">MyTasker</h1>
</div>



          </div>
          <div className="flex space-x-6 font-medium">
            <Link to="/" className="text-blue-600 hover:text-blue-900 flex items-center ">
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

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 py-16 flex-grow">
        <h2 className="text-5xl font-bold text-blue-700 leading-tight">
          Simplify Your <span className="text-blue-600">Workday</span>
        </h2>
        <p className="text-gray-600 text-lg mt-6 mb-8 max-w-2xl">
          Manage your tasks, collaborate with your team, and stay organized —
          all in one secure platform designed for productivity and growth.
        </p>
        <div className="flex space-x-4 mb-12">
          <Link to="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 flex items-center">
              <i className="fas fa-rocket mr-2"></i> Get started
            </button>
          </Link>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 flex items-center">
            <i className="fas fa-video mr-2"></i> Book a demo
          </button>
        </div>

        {/* Image below text */}
        <div className="w-full flex justify-center">
          <img
            src={dashboard}
            alt="Task Management Dashboard"
            className="w-full max-w-2xl "
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-gray-600 text-sm py-6 px-12 flex justify-between items-center">
        <p>&copy; 2025 MyTasker. All rights reserved.</p>
        <div className="space-x-6 flex">
          <Link to="/" className="hover:text-blue-600 flex items-center">
            <i className="fas fa-home mr-1"></i> Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 flex items-center">
            <i className="fas fa-info-circle mr-1"></i> About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 flex items-center">
            <i className="fas fa-envelope mr-1"></i> Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
