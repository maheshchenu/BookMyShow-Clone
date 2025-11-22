import React from "react";
import { NavLink } from "react-router-dom";

const Timings = () => {
  const theaters = [
    {
      name: "Sangamitra Theater",
      times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"],
    },
    {
      name: "Narayana Theater",
      times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"],
    },
    {
      name: "Venkatrama Theater",
      times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"],
    },
    {
      name: "New-Picture Palace Theater",
      times: ["11:00 AM", "02:00 PM", "06:00 PM", "09:00 PM"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-8">
      {theaters.map((theater, index) => (
        <div key={index} className="flex flex-col gap-4 my-5">
          <h1 className="text-2xl sm:text-4xl">{theater.name}</h1>

          <div className="grid max-sm:grid-cols-2 grid-cols-4 gap-1 sm:gap-5">
            {theater.times.map((time, i) => (
              <NavLink to="/SeatSelection" key={i}>
                <button
                  className="border-red-200 px-2 py-1 border-2 text-blue-400 text-xl whitespace-nowrap
                  hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer"
                >
                  {time}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timings;
