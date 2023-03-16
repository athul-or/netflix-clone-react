import React, { useEffect, useState } from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({ isLargeRow, title, fetchUrl }) {

  const [movies, setMovies] = useState([])

  async function fetchData() {
    const result = await instance.get(fetchUrl)
    setMovies(result.data.results)

  }
  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies'>
        {
          movies.map(movie => (
            <img className={`movie ${isLargeRow && "largeMovie"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} />
          ))
        }
      </div>
    </div>
  )
}

export default Row