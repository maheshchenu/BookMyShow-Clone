import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieDetails = async () => {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (!movie) return <h2 className="text-center p-10 text-xl">Loading...</h2>;

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
        {movie.name}
      </h1>

      
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6 items-start">
        <img
          src={movie.image?.original}
          alt={movie.name}
          className="w-full rounded-lg shadow-xl"
        />

        <div className="space-y-3">
          <p className="text-lg">
            <strong>Language:</strong> {movie.language}
          </p>

          <p className="text-lg">
            <strong>Genres:</strong> {movie.genres.join(", ")}
          </p>

          <p className="text-lg">
            <strong>Rating:</strong> {movie.rating.average || "N/A"}
          </p>

          <strong className="text-lg block">Review</strong>
          <p
            className="text-base sm:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: movie.summary }}
          ></p>

          <div className="flex justify-center sm:justify-start mt-4 ">
           <NavLink to='/Timing'>
                       <button className="border px-4 py-2 bg-red-800 rounded-xl text-white text-lg hover:bg-red-700 transition cursor-pointer">
              Book Tickets
            </button>
           </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
