import React, { useEffect, useState } from "react";
import "./Row.css";

import axios from "./axios";


// https://newsapi.org/v2/top-headlines?country=za&apiKey=275a21d9e0e74fa38c82bb82ea4387b5


function Row({ title, fetchUrl, isLargeRow = false }) {
  const [articles, setArticles] = useState([]);

  const base_url = "https://newsapi.org/v2";
 
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
     // console.log(request.data);
      setArticles(request.data.articles);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {articles.map((article) => (
          <div className = "headline__row">
            <h4>{article.title}</h4>
            <img src={article.urlToImage} alt="" height="100px" width="140px"></img>
            <p>Some other kak {article.description}</p>
            <br />
          </div>
      ))}
      </div>




      {/* <div className="row__posters">
        {movies.map((movie) => (
      
            ((isLargeRow && movie.poster_path) || (!isLargeRow &&
            movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            )
        
        ))}
      </div> */}
    </div>
  );
}

export default Row;