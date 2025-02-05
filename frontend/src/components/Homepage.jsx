import React from "react";
import { Link } from "react-router-dom";

// Imported images
import carImage from "../assets/images/car.jpg";
import suvImage from "../assets/images/suv.jpg";
import bikeImage from "../assets/images/bike.jpg";
import car from "../assets/images/carblur2.jpg";
import Navbar from "./Navbar";
import UserProfile from "../pages/UserProfile";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${car})` }}
    >
      {/* Header */}
 <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20"
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">
            Drive Your Dream Vehicle Today
          </h2>
          <p className="text-lg mb-8">
            Affordable rentals for cars, SUVs, and bikes tailored to your needs.
          </p>
          <a href = "/vehicles" >
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            Browse Vehicles
          </button>
          </a>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Our Featured Vehicles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ name: "Car", image: carImage, price: "$30/day" },
              { name: "SUV", image: suvImage, price: "$50/day" },
              { name: "Bike", image: bikeImage, price: "$15/day" },
            ].map((vehicle, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold mb-2">{vehicle.name}</h4>
                  <p className="text-gray-600 mb-4">Starting at {vehicle.price}</p>
                  <Link to="/booking">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Rent Now
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ name: "Karan Sharma", feedback: "Amazing service! The car was in great condition and the process was smooth." },
              { name: "Sara Varma", feedback: "Rented an SUV for my family trip. It was clean, comfortable, and affordable!" },
              { name: "Mitali Shetty", feedback: "The bike I rented was perfect for my weekend adventure. Highly recommend!" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <p className="text-gray-600 italic mb-4">{testimonial.feedback}</p>
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
          <p className="text-lg mb-8">
            Have questions? We're here to help. Contact us today!
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 RideNow. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
