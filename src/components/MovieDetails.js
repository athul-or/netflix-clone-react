import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../baseUrl';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await instance.get(`/movie/${id}?api_key=47de2b9e8b2462b53975d18185ac40bf`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!movie) return <div className="error">Movie not found</div>;

  return (
    <div className="movie-details">
      <div className="backdrop" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
      }}>
        <div className="backdrop-overlay"></div>
      </div>

      <div className="content">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="info">
          <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>

          <div className="metadata">
            <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
            <span>{movie.vote_average}/10 ★</span>
          </div>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <div className="genres">
            {movie.genres.map(genre => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;