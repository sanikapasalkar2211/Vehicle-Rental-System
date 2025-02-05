import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-50 via-red-100 to-red-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="mb-6 text-4xl font-extrabold text-gray-900">Online Vehicle Rental System</h1>
        <div className="space-y-4">
          {/* Rental Vehicles Link */}
          <Link
            to="/vehicles"
            className="block px-6 py-3 text-lg text-white bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Rental Vehicles
          </Link>

          {/* Login Link */}
          <Link
            to="/login"
            className="block px-6 py-3 text-lg text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>

          {/* Register Link */}
          <Link
            to="/signup"
            className="block px-6 py-3 text-lg text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Link>

          {/* UserProfile Link */}
          <Link
            to="/profile"
            className="block px-6 py-3 text-lg text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            UserProfile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
