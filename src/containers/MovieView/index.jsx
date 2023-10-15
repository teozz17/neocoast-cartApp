import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import movies from 'Data/movies';
import noMovie from 'Assets/noMovie.jpg';

import './styles.scss';

const MovieView = () => {
  const { id } = useParams();

  const [movieToDisplay, setMovieToDisplay] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === Number(id));

    if (!id || !selectedMovie) {
      setError(true);
    } else {
      setMovieToDisplay(selectedMovie);
    }
  }, []);

  if (error) {
    return (
      <div className="movie-view movie-view--error">
        <h1>
          No movie found :(
        </h1>
        <img src={noMovie} alt="not found" />
      </div>
    );
  }

  const {
    description,
    image,
    releaseYear,
    title,
  } = movieToDisplay || {};

  return (
    <div className="movie-view">
      <div className="movie-view__image">
        <img src={image} alt={title} />
      </div>
      <div className="movie-view__details">
        <h2 className="movie-view__title">
          {title}
        </h2>
        <p className="movie-view__release-year">
          {`Published in ${releaseYear}`}
        </p>
        <p className="movie-view__description">
          {description}
        </p>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
