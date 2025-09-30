import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-list grid">
      {movies.map((movie, index) => (
        <div key={index} style={{ cursor: "pointer" }} onClick={() => navigate(`/movie/${encodeURIComponent(movie.title)}`)}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
