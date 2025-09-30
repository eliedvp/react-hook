import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <h2>Film non trouvé</h2>;

  // Fonction pour transformer une URL en version "embed"
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }
    return url;
  };

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <p className="movie-desc">{movie.description}</p>

      <div className="trailer">
        <iframe
          src={getEmbedUrl(movie.trailerUrl)}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onError={(e) => console.log("Erreur de chargement vidéo", e)}
        ></iframe>
      </div>

      <p>
        👉 <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">Regarder sur YouTube</a>
      </p>

      <Link to="/">⬅ Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDescription;
