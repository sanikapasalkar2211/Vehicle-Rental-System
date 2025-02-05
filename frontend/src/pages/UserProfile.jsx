import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/images/carblur5.jpg";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    profilePic: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [selectedImage, setSelectedImage] = useState(null);

  const [bookings, setBookings] = useState([
    { id: 1, vehicle: "Tesla Model 3", date: "2024-02-01", status: "Completed", price: "$120" },
    { id: 2, vehicle: "Honda Civic", date: "2024-01-15", status: "Cancelled", price: "$90" },
    { id: 3, vehicle: "Ford Mustang", date: "2023-12-25", status: "Completed", price: "$200" },
  ]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Save profile updates
  const handleSave = () => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUser,
      profilePic: selectedImage || prevUser.profilePic,
    }));
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div 
        className="min-h-screen bg-gray-100 py-10 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Profile Section */}
          <div className="flex items-center space-x-6">
            <label htmlFor="profilePic" className="relative cursor-pointer">
              <img
                src={selectedImage || user.profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
              />
              {isEditing && (
                <div className="absolute bottom-0 right-0 bg-gray-700 text-white p-1 rounded-full text-xs">
                  Edit
                </div>
              )}
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            <div>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full mb-2"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={updatedUser.phone}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">{user.phone}</p>
                </>
              )}
            </div>
          </div>

          {/* Edit & Save Buttons */}
          <div className="mt-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Booking History Section */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Booking History</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            {bookings.length > 0 ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 text-left">Vehicle</th>
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Status</th>
                    <th className="py-2 px-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b">
                      <td className="py-2 px-4">{booking.vehicle}</td>
                      <td className="py-2 px-4">{booking.date}</td>
                      <td
                        className={`py-2 px-4 font-medium ${
                          booking.status === "Completed"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {booking.status}
                      </td>
                      <td className="py-2 px-4">{booking.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No bookings found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
