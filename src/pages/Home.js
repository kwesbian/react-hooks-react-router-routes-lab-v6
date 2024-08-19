import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesList = [
      { id: 1, title: "Movie 1"},
      { id: 2, title: "Movie 2"},
      { id: 3, title: "Movie 3"},
    ];
    setMovies(moviesList);
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie} />
        ))}
      </main>
    </>
  );
};

export default Home;