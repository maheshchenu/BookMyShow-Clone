import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const seats = useSelector((state) => state.seats.selectedSeats);
  const navigate = useNavigate();

  const seatPricing = {
    Bronze: 120,
    Silver: 180,
    Gold: 250,
  };

  const getSection = (seat) => {
    const row = seat.charAt(0);

    if (["A", "B"].includes(row)) return "Bronze";
    if (["C", "D", "E", "F"].includes(row)) return "Silver";
    if (["G", "H"].includes(row)) return "Gold";
  };

  const totalPrice = seats.reduce((acc, seat) => {
    const section = getSection(seat);
    return acc + seatPricing[section];
  }, 0);

  const handlePay = () => {
    
    navigate("/scanner");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        Payment Summary
      </h1>

      <div className="bg-white shadow-md p-4 rounded-lg">
        
        <h2 className="text-lg font-semibold mb-2">Selected Seats</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {seats.map((seat) => (
            <span
              key={seat}
              className="px-3 py-1 bg-green-600 text-white rounded-lg"
            >
              {seat}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-2">Price Details</h2>

        {seats.map((seat) => {
          const section = getSection(seat);
          return (
            <div
              key={seat}
              className="flex justify-between border-b py-1 text-gray-700"
            >
              <span>
                Seat: <b>{seat}</b> ({section})
              </span>
              <span>₹ {seatPricing[section]}</span>
            </div>
          );
        })}

        <div className="flex justify-between mt-4 text-xl font-bold">
          <span>Total Amount</span>
          <span>₹ {totalPrice}</span>
        </div>

        <button
          onClick={handlePay}
          className="w-full mt-4 bg-red-600 text-white py-2 text-xl rounded-lg cursor-pointer "
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
