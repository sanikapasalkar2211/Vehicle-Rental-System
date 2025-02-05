// src/pages/VehiclesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Assuming images are imported at the top of the file
import carImage from '../assets/images/car.jpg';
import suvImage from '../assets/images/suv.jpg';
import bikeImage from '../assets/images/bike.jpg';
import car1 from '../assets/images/car1.jpg';
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';
import car4 from '../assets/images/car4.jpg';
import bike1 from '../assets/images/bike1.jpg';
import bike2 from '../assets/images/bike2.jpg';
import bike3 from '../assets/images/bike3.jpg';
import bike4 from '../assets/images/bike4.jpg';

const VehiclesPage = () => {
  return (
    <>
      <Navbar />
    <section id="vehicles" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Featured Vehicles
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[{ name: "Audi", image: carImage, price: "$30/day" },
            { name: "SUV", image: suvImage, price: "$50/day" },
            { name: "Bike", image: bikeImage, price: "$15/day" },
            { name: "Suzuki", image: car1, price: "$40/day" },
            { name: "Swift", image: car2, price: "$60/day" },
            { name: "Creata", image: car3, price: "$40/day" },
            { name: "Kia", image: car4, price: "$60/day" },
            { name: "Java", image: bike1, price: "$30/day" },
            { name: "Yamaha", image: bike2, price: "$50/day" },
            { name: "Splender", image: bike3, price: "$15/day" },
            { name: "Pulsor", image: bike4, price: "$20/day" },
            
            
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
    <Footer />
    </>
  );
};

export default VehiclesPage;
