import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <img
        src={movie.posterUrl}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3>{movie.title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{movie.description}</p>
      <p style={{ fontWeight: "bold" }}>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
