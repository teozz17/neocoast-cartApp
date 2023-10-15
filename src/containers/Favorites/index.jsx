import React from 'react';
import { useOutletContext } from 'react-router-dom';

import MovieList from 'Components/MovieList';

import './styles.scss';

const Favorites = () => {
  const [favorites, setFavorites] = useOutletContext();

  return (
    <div className="home">
      <MovieList
        movies={favorites}
        setFavorites={setFavorites}
        favorites={favorites}
      />
    </div>
  );
};

export default Favorites;
