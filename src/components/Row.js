import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../baseUrl';
import './Row.css';

function Row({ isLargeRow, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    const result = await instance.get(fetchUrl);
    setMovies(result.data.results);
  }

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies'>
        {movies.map(movie => (
          <img
            key={movie.id}
            className={`movie ${isLargeRow && "largeMovie"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title || movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;