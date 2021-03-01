import React, { useState } from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import RadioIcon from '@material-ui/icons/Radio';
import Post from './Post';
import Row from './Row';
import requests from './Requests';
import news from './News';
import Container from './Container';






function Feed() {







    return (
        <div className="feed">
           <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />
                   <form>
                       <input type="text" />
                       <button   type="submit">
                           submit
                           </button>
                   </form>
               </div>
               <div className="feed__inputOptions">
                   <InputOption Icon={MovieFilterIcon} title="video" color="#70B5F9"
                   />
                   <InputOption Icon={CreateIcon} title="write article" color="#70B5F9"
                   />
                   <InputOption Icon={RadioIcon} title="podcast" color="#70B5F9"
                   />
               </div>
           </div>

    
           <Post 
           name="Asher-jay Arenz"
           description="this is a test"
           message="wow, this worked"
           />
        <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <br></br>
      <Container/>

     </div>
       
           
    )
}

export default Feed
