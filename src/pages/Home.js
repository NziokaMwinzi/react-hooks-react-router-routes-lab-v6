import React from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
    { id: 3, title: "Dunkirk" }
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;