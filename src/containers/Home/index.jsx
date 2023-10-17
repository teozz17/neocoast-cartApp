import React, { useEffect, useState } from 'react';

import MovieList from 'Components/MovieList';

import getMovies from 'Api/movies';

import './styles.scss';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const initHome = async () => {
    const movies = await getMovies();

    console.log(movies);

    setMovieList(movies.data.results);
  };

  useEffect(() => {
    initHome();
  }, []);

  return (
    <div className="home">
      <MovieList movies={movieList} />
    </div>
  );
};

export default Home;
