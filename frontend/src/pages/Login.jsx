import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import of useNavigate
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import backgroundImage1 from "../assets/images/carblur1.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login", 
        loginData
      );

      toast.success("Login successful!");
      console.log("User data:", response.data);

      // Redirect to another page after login
      navigate("/homepage"); // Replace "/homepage" with your desired route
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("An error occurred during login.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100"
    style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
    >
      
      <ToastContainer autoClose={2000} theme="dark" />
      <div
        className="shadow-md rounded-lg p-8 w-full max-w-md"
        style={{
          background: "linear-gradient(to bottom right,rgb(101, 84, 199), #d4e2f5)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
        }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          <a href="/resetpassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </p>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
