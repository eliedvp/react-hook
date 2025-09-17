import React from "react";
import MovieCard from "./MovieCard"; // vérifie le nom ici

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList; // bien exporter le composant
