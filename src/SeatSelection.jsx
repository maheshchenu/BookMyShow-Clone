import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSeats } from "./store/seatSlice";
import { useNavigate } from "react-router-dom";

const SeatSelection = () => {
  const bookedSeats = ["A3", "A4", "A7", "A8", "B5", "C2", "F8"];

  const rows = [
    { section: "Gold", rows: ["A", "B"] },
    { section: "Silver", rows: ["C", "D", "E", "F"] },
    { section: "Bronze", rows: ["G", "H"] },
  ];

  const seatsPerRow = 12;

  const [selectedSeats, setSelectedSeatsState] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSeat = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeatsState((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const confirmSeats = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }

    dispatch(setSeats(selectedSeats));
    navigate("/payment");
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-xl font-bold mb-4 bg-blue-50 py-2 rounded">
        SCREEN THIS WAY
      </h2>

      <div className="flex justify-center gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded"></div> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-red-500 rounded"></div> Booked
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500 rounded"></div> Selected
        </div>
      </div>

      {rows.map((sec, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-center font-semibold text-lg mb-2">
            {sec.section}
          </h3>

          {sec.rows.map((row) => (
            <div
              key={row}
              className="flex justify-center items-center gap-2 mb-2"
            >
              <span className="w-6 text-right font-semibold">{row}</span>

              <div className="flex gap-1 sm:gap-2 flex-nowrap">
                {Array.from({ length: seatsPerRow }, (_, index) => {
                  const seatId = `${row}${index + 1}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <div
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded cursor-pointer transition
                        ${
                          isBooked
                            ? "bg-red-500 cursor-not-allowed"
                            : isSelected
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }
                        hover:scale-110
                      `}
                      title={seatId}
                    ></div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="text-center flex flex-col items-center mt-6 text-lg font-semibold">
        Selected Seats:{" "}
        <span className="text-green-600">
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </span>

        <button
          onClick={confirmSeats}
          className="px-2 py-1 bg-red-800 text-white text-2xl mt-3 rounded cursor-pointer"
        >
          Confirm Tickets
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
