import React from "react";
import { NavLink } from "react-router-dom";

const cities = [
  "Hyderabad",
  "Vijayawada",
  "Nuzvidu",
  "Kolkata",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Chimalapadu",
  "Tiruvuru",
  "Secunderabad",
  "Nunna",
  "Khammam",
  "Bhadrachalam",
  "Hyderabad",
  "Vijayawada",
  "Nuzvidu",
  "Kolkata",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Chimalapadu",
  "Tiruvuru",
  "Secunderabad",
  "Nunna",
  "Khammam",
  "Bhadrachalam",
];

const Nav = () => {
  return (
    <nav className="p-2 shadow-2xl sm:p-5 sm:justify-between sm:flex-row flex flex-col gap-3">
      
    
      <section className="flex flex-col sm:gap-7 gap-3 sm:flex-row sm:items-center">
        <NavLink to="/">
          <img src="../src/assets/logo.png" alt="logo" className="w-48 h-10" />
        </NavLink>

      
        <div className="flex justify-center items-center gap-2 shadow-2xl sm:gap-6 px-2 py-1 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path
              fill="#000000"
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Movies, Events, Sports"
            autoFocus
            className="w-70 xl:w-96 focus:outline-none"
          />
        </div>
      </section>

     
      <section className="flex justify-between gap-5 ">
        <select className="px-2 py-1 border rounded-lg cursor-pointer">
          {cities.map((city, index) => (
            <option key={index} value={city} className="text-xl cursor-pointer">
              {city}
            </option>
          ))}
        </select>

        <button className="px-3 py-1 bg-red-700 rounded-xl text-white whitespace-nowrap">
          <NavLink to='/signup'>
          Sign Up
          </NavLink>
        </button>
      </section>
    </nav>
  );
};

export default Nav;
