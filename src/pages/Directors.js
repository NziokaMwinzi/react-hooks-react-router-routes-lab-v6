const directors = [
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar", "Dunkirk"] },
  { name: "Steven Spielberg", movies: ["Jurassic Park", "E.T.", "Schindler's List"] },
];

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
