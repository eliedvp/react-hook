import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="movie-desc">{movie.description}</p>
      <p className="movie-rating">⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
