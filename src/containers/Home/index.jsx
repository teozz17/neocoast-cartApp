import React from 'react';

import MovieList from 'Components/MovieList';
import moviesData from 'Data/movies';

import './styles.scss';

const Home = () => (
  <div className="home">
    <MovieList movies={moviesData} />
  </div>
);

export default Home;
