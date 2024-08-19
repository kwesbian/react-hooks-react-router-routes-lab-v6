import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const directorsList = [
      { id: 1, name: "Director 1", movies: ["Movie 1", "Movie 2"] },
      { id: 2, name: "Director 2", movies: ["Movie 3", "Movie 4"] },
      { id: 3, name: "Director 3", movies: ["Movie 5", "Movie 6"] },
    ];
    setDirectors(directorsList);
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;