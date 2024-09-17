import React from 'react';

const actors = [
  { name: "Leonardo DiCaprio", movies: ["Inception", "Titanic", "The Revenant"] },
  { name: "Matthew McConaughey", movies: ["Interstellar", "Dallas Buyers Club"] },
];

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2> 
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li> 
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
