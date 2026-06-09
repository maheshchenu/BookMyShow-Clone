import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Scanner = () => {
  const seats = useSelector((state) => state.seats.selectedSeats);

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

  const total = seats.reduce((acc, seat) => acc + seatPricing[getSection(seat)], 0);

  return (
    <div className="p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Movie Entry Pass</h1>

      <div className="w-72 h-72 bg-white border-4 border-black shadow-xl rounded-lg relative overflow-hidden flex items-center justify-center">
        
        <div className="text-center">
          <div className="w-52 h-52 bg-gray-300 mx-auto mb-2"><img src="src/assets/scanner.jpeg" alt="" /></div>
          <p className="text-sm font-semibold">QR CODE</p>
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-scan"></div>
      </div>

      <div className="mt-6 bg-white shadow-lg rounded-lg p-4 w-80">
        <h2 className="text-xl font-bold mb-2">Your Seats</h2>
        <p className="text-green-600 text-lg font-semibold">{seats.join(", ")}</p>

        <h2 className="text-xl font-bold mt-4 mb-1">Total Paid</h2>
        <p className="text-blue-700 text-2xl font-bold">₹ {total}</p>

        <p className="mt-4 text-gray-700 font-medium">
          Show this pass at theater entry.
        </p>
      </div>
     <NavLink to={'/'}> <button className="my-2 text-xl text-white cursor-pointer bg-red-700 p-2 rounded-2xl">GoTo Home</button></NavLink>
    </div>
  );
};

export default Scanner;
