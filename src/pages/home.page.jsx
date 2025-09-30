    // src/pages/Home.jsx
    import React, { useState } from "react";
    import Filter from "../components/Filter";
    import MovieList from "../components/MovieList";

    function Home({ movies, setTitleFilter, setRatingFilter, newMovie, setNewMovie, addMovie, filteredMovies }) {
    return (
        <div className="container">
        <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />

        <div className="add-movie-container">
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

    export default Home;
