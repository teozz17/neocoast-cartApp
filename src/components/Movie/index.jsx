// Movie.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomButton from 'Components/CustomButton';
import movieType from 'Data/shapes';

import './styles.scss';

const Movie = ({
  movie,
  favorites,
  removeFromFavorites,
  addToFavorites,
}) => {
  const {
    id,
    image,
    releaseYear,
    title,
  } = movie;

  const favoriteIndex = favorites?.findIndex((fav) => fav.id === id);
  const isFavorite = Number.isInteger(favoriteIndex) && favoriteIndex !== -1;

  return (
    <Link className="movie" to={`/movies/${id}`}>
      <img src={image} alt={title} />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__year">{releaseYear}</p>
      <CustomButton
        name={`${isFavorite ? '-' : '+'} Favorites`}
        type={isFavorite ? 'secondary' : 'primary'}
        onClick={() => isFavorite
          ? removeFromFavorites(favoriteIndex)
          : addToFavorites(movie)}
      />
    </Link>
  );
};

Movie.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(movieType).isRequired,
  movie: movieType.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Movie;
