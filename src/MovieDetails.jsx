import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  const getMovieDetails = async () => {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let data = await res.json();
    setMovie(data);
  };

  const getCast = async () => {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
    let data = await res.json();
    setCast(data);
  };

  useEffect(() => {
    getMovieDetails();
    getCast();
  }, [id]);

  if (!movie) return <h2 className="text-center p-10 text-xl">Loading...</h2>;

  return (
    <div className="bg-[#111] min-h-screen text-white">

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <img
            src={movie.image?.original}
            alt={movie.name}
            className="rounded-xl shadow-2xl w-full"
          />
        </div>

        <div className="md:col-span-2 space-y-4 flex flex-col justify-center">

          <h1 className="text-4xl font-bold">{movie.name}</h1>

          <div className="flex items-center gap-4">
            <p className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
              ⭐ {movie.rating.average || "N/A"} / 10
            </p>

            <button className="border border-gray-400 px-3 py-1 rounded-lg hover:bg-gray-700">
              Rate now
            </button>
          </div>

          <p className="text-gray-300">
            {movie.runtime} mins • {movie.genres.join(", ")}
          </p>

          <div className="flex gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded-lg">2D</span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg">
              {movie.language}
            </span>
          </div>

          <NavLink to="/Timing">
            <button className="bg-red-600 hover:bg-red-700 text-xl px-6 py-3 rounded-xl mt-4 cursor-pointer">
              Book tickets
            </button>
          </NavLink>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-3">About the movie</h2>

        <p
          className="text-gray-300 leading-7"
          dangerouslySetInnerHTML={{ __html: movie.summary }}
        ></p>
      </div>

      {/* CAST SECTION */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Cast</h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {cast.map((c, i) => (
            <div
              key={i}
              className="min-w-[120px] bg-[#1a1a1a] p-3 rounded-lg text-center"
            >
              <img
                src={
                  c.person.image?.medium ||
                  "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                }
                alt={c.person.name}
                className="rounded-lg w-full h-40 object-cover mb-2"
              />

              <p className="font-semibold">{c.person.name}</p>
              <p className="text-sm text-gray-400">
                as {c.character?.name || "Unknown"}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default MovieDetails;
