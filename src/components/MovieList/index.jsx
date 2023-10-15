import React from 'react';
import PropTypes from 'prop-types';

import Movie from 'Components/Movie';
import movieType from 'Data/shapes';

import './styles.scss';

const MovieList = ({ movies, setFavorites, favorites }) => {
  const removeFromFavorites = (movieIndex) => {
    const newFavourites = [...favorites];
    newFavourites.splice(movieIndex, 1);
    setFavorites(newFavourites);
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  favorites: PropTypes.arrayOf(movieType).isRequired,
  movies: PropTypes.arrayOf(movieType).isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default MovieList;
