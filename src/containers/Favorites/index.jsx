import React from 'react';

import MovieList from 'Components/MovieList';

import './styles.scss';

const Favorites = () => (
  <div className="favorites">
    <MovieList isFavoritesPage />
  </div>
);

export default Favorites;
