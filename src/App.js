import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";;


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un voleur qui dérobe les secrets dans les rêves.",
      posterUrl: "https://images.pexels.com/photos/38275/anonymous-studio-figure-photography-facial-mask-38275.jpeg",
      rating: 5
    },
    {
      title: "The Matrix",
      description: "Un hacker découvre la vérité sur la réalité.",
      posterUrl: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg",
      rating: 4
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({ title: "", description: "", posterUrl: "", rating: 0 });

  const addMovie = () => {
    if (newMovie.title) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterUrl: "", rating: 0 });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Application Cinéma</h1>

      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />

      <div style={{ marginBottom: "20px" }}>
        <h2>Ajouter un film</h2>
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL affiche"
          value={newMovie.posterUrl}
          onChange={(e) => setNewMovie({ ...newMovie, posterUrl: e.target.value })}
        />
        <input
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
          min="0"
          max="5"
        />
        <button onClick={addMovie}>Ajouter</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
