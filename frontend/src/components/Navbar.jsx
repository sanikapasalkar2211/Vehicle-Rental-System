import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">RideNow</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="/homepage" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/vehicles" className="text-gray-700 hover:text-blue-600">
            Vehicles
          </a>
          <a href="/testimonal" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
          <a href="/userprofile" className="text-gray-700 hover:text-blue-600">
            profile
          </a>
        </nav>
        <div className="space-x-4 flex">
          <a
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Signup
          </a>
          <a
            href="/login"
            className="bg-yellow-200 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-300 transition"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
