import React from "react";
import car from '../assets/images/car.jpg'

const ProductPage = () => {
  // Sample products data
  const vehicles = [
    {
      name: "SUV",
      image: car,
      description:
        "Spacious SUV perfect for family trips and off-road adventures.",
      features: [
        "5 Seats",
        "Automatic Transmission",
        "All-Wheel Drive",
        "Air Conditioning",
        "Bluetooth Connectivity",
      ],
      price: "$70/day",
    },
    {
      name: "Sedan",
      image: car,
      description:
        "A comfortable and fuel-efficient car for city and highway drives.",
      features: [
        "4 Seats",
        "Manual Transmission",
        "Front-Wheel Drive",
        "Cruise Control",
        "USB Charging Ports",
      ],
      price: "$50/day",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Available Vehicles
        </h1>

        {/* Render each vehicle */}
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-8 mb-12 border-b pb-8"
          >
            {/* Vehicle Image */}
            <div>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Vehicle Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{vehicle.name}</h2>
              <p className="text-gray-600 mt-4">{vehicle.description}</p>

              {/* Features */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Features
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Pricing and Rent Now */}
              <div className="mt-6">
                <p className="text-2xl font-bold text-blue-600">{vehicle.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
