import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/carblur6.jpg";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Payment Details
        </h2>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Card Holder Name</label>
            <input
              type="text"
              name="cardHolderName"
              placeholder="Enter card holder name"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={paymentDetails.cardHolderName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter card number"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              placeholder="Enter CVV"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              value={paymentDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
