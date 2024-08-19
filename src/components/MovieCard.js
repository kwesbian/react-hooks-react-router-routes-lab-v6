import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </h2>
    </div>
  );
};

export default MovieCard;