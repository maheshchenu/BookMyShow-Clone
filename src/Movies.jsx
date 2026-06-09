import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "./SlideShow";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let res = await fetch("https://api.tvmaze.com/shows");
    let data = await res.json();
    setMovies(data.slice(0, 50));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="p-6">
      <Slider/>
      <h1 className="text-3xl font-bold mb-6">Movies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((m) => (
          <NavLink key={m.id} to={`/moviesDetails/${m.id}`}>
            <div className="bg-white rounded-xl shadow-xl p-3 hover:scale-105 transition transform cursor-pointer">
              <img
                src={m.image?.medium}
                alt={m.name}
                className="w-full rounded-lg mb-2"
              />

              <h3 className="text-lg font-semibold text-center">{m.name}</h3>

              <p className="text-sm text-gray-500 text-center">
                {m.genres.join(", ")}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Movies;
