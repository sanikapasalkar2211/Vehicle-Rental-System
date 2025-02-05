import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/carblur4.jpg";

const BookingPage = () => {
  const navigate = useNavigate();
  const [searchCriteria, setSearchCriteria] = useState({
    bookingType: "Daily",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleConfirmBooking = () => {
    navigate("/payment");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto p-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          User Booking Details
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Review and confirm your booking details below.
        </p>

        {/* Booking Details Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Booking Information</h2>

          {/* Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Pickup Date (DD-MM-YYYY)
              </label>
              <input
                type="text"
                name="pickupDate"
                placeholder="Enter pickup date"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.pickupDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Pickup Time (HH:MM)
              </label>
              <input
                type="text"
                name="pickupTime"
                placeholder="Enter pickup time"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.pickupTime}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Drop Date (DD-MM-YYYY)
              </label>
              <input
                type="text"
                name="dropDate"
                placeholder="Enter drop date"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.dropDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Drop Time (HH:MM)
              </label>
              <input
                type="text"
                name="dropTime"
                placeholder="Enter drop time"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.dropTime}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* User Details */}
          <h2 className="text-xl font-semibold mt-6 mb-4">User Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Address</label>
              <textarea
                placeholder="Enter your address"
                className="px-4 py-2 border border-gray-300 rounded-md"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleConfirmBooking}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
