import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
          return request;
        }
        fetchData();
      }, []);
    
      console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }


      const style = {height : "1000 px", width : "1000px"}

    return (
        <header
      className="banner"
      style={{
          backgroundSize: "contain",
          overflow: 'hidden',
          backgroundImage: `url("https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=373&q=80")`,
          
          backgroundPosition: "center center"
          
      }}
      >

        <div className="banner__contents">
        <h1 className="banner__title">
            Films 
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <button className="banner__button">Upload</button>
        </div>
        <h1 className="banner__title">
            Podcasts 
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Listen</button>
          <button className="banner__button">My List</button>
          <button className="banner__button">Upload</button>
        </div>
        <h1 className="banner__title">
            Stories 
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Read</button>
          <button className="banner__button">My List</button>
          <button className="banner__button">Upload</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150

            )}
        </h1>
        </div>


        <div className="banner--fadeBottom" />
      </header>
    
    )
}

export default Banner
