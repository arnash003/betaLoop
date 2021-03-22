import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./FilmRow.css";

function FilmRow({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url ="https://api.themoviedb.org/3";

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }

      
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);


    return (
        <div className="filmrow">
        <h2>{title}</h2>
        <div className="filmrow__posters">
          {movies.map((movie) => (
        
              ((isLargeRow && movie.poster_path) || (!isLargeRow &&
              movie.backdrop_path)) && (
              <img
                className={`filmrow__poster ${isLargeRow && "filmrow__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              )
          
          ))}
        </div>
      </div>
    )
}

export default FilmRow
