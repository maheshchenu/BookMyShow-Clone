import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Timings = () => {
  const getNext7Days = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    let result = [];

    for (let i = 0; i < 7; i++) {
      let next = new Date();
      next.setDate(today.getDate() + i);

      result.push({
        label: `${days[next.getDay()]} - ${next.getDate()}`,
        date: next.getDate(),
      });
    }
    return result;
  };

  const dates = getNext7Days();
  const [selectedDate, setSelectedDate] = useState(dates[0].date);

  const theaters = [
    { name: "Sangamitra Theater", times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"] },
    { name: "Narayana Theater", times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"] },
    { name: "Venkatrama Theater", times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"] },
    { name: "New-Picture Palace Theater", times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"] },
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 py-8">
      
      <div className="flex justify-center gap-4 mb-10 items-center overflow-x-auto scrollbar-hide w-full py-2">
        {dates.map((d) => (
          <button
            key={d.date}
            onClick={() => setSelectedDate(d.date)}
            className={`px-4 py-2 rounded-lg border-2 text-lg font-semibold flex-shrink-0
              ${
                selectedDate === d.date
                  ? "bg-blue-500 text-white border-blue-600"
                  : "border-gray-400 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {theaters.map((theater, index) => (
          <div key={index} className="w-full max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
              {theater.name}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {theater.times.map((time, i) => (
                <NavLink to="/SeatSelection" key={i} className="w-full">
                  <button
                    className="border-2 border-blue-300 rounded-lg px-3 py-2 text-blue-500 text-lg w-full
                    hover:bg-blue-200 hover:text-blue-700 transition font-medium"
                  >
                    {time}
                  </button>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Timings;
