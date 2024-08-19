import { useParams, useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const moviesList = [
      { id: 1, title: "Movie 1", time: "2h 30m", genres: ["Action", "Adventure"] },
      { id: 2, title: "Movie 2", time: "1h 45m", genres: ["Comedy", "Romance"] },
      { id: 3, title: "Movie 3", time: "3h 15m", genres: ["Drama", "Thriller"] },
    ];

    const currentMovie = moviesList.find((movie) => movie.id === parseInt(id));
    setMovie(currentMovie); 
  }, [id]);

  return (
    <>
        <header>
          <h1>{movie.title}</h1>
        </header>
      <main>
        <p>Time: {movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;