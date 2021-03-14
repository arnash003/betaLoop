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
import { Home } from '@material-ui/icons';
import Results from './Results';









function Feed() {



    return (
        <div className="feed">
           <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />
                   <form>
                       <input type="text" />
                       <button className="feed__submit"  type="submit">
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

      <Row title="Top Headlines" fetchUrl={requests.fetchTopHeadlines} />
      <br></br>
      <br></br>
      
     
     

     </div>
       
           
    )
}

export default Feed
