import React, { useEffect, useState } from 'react';
import instance from '../baseUrl';
import './Banner.css';

function Banner({ fetchUrl }) {
  const [movie, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(fetchUrl);
      // Fix the random index calculation: add parentheses
      setMovies(result.data.results[Math.floor(Math.random() * result.data.results.length)]);
    }

    fetchData();
  }, [fetchUrl]); // ✅ Include fetchUrl as dependency

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div
      className='banner'
      style={{ backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>{movie?.name || movie?.title}</h1>
        <h4 className='banner-desc'>
          {truncate(movie?.overview, 150)}
        </h4>
      </div>
    </div>
  );
}

export default Banner;