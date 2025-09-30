import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import MovieDescription from "./components/MovieDescription";

function App() {
const [movies, setMovies] = useState([
  {
    title: "Inception",
    description: "Un voleur qui dérobe les secrets dans les rêves.",
    posterUrl: "https://images.pexels.com/photos/38275/anonymous-studio-figure-photography-facial-mask-38275.jpeg",
    rating: 5,
    trailerUrl: "https://youtu.be/6hROuWHaNJo"
  },
  {
    title: "The Matrix",
    description: "Un hacker découvre la vérité sur la réalité.",
    posterUrl: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg",
    rating: 4,
    trailerUrl: "https://youtu.be/6hROuWHaNJo"
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
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Application Cinéma</h1>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                setTitleFilter={setTitleFilter}
                setRatingFilter={setRatingFilter}
                newMovie={newMovie}
                setNewMovie={setNewMovie}
                addMovie={addMovie}
                filteredMovies={filteredMovies}
              />
            }
          />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
