import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  return (
    <>
      <Navbar />
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Karan Sharma",
                feedback:
                  "Amazing service! The car was in great condition and the process was smooth.",
              },
              {
                name: "Sara Varma",
                feedback:
                  "Rented an SUV for my family trip. It was clean, comfortable, and affordable!",
              },
              {
                name: "Mitali Shetty",
                feedback:
                  "The bike I rented was perfect for my weekend adventure. Highly recommend!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <p className="text-gray-600 italic mb-4">
                  {testimonial.feedback}
                </p>
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
