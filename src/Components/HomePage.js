import React, { useState } from 'react'
import "./HomePage.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HomePageNav from './HomePageNav';
import {Link} from "react-router-dom";




function HomePage() {

    const [name, setName] = useState(true);

    return (
        <div className="HomePage_header">
            <div className="HomePage_header_icons">
              
              
               <div className="header__icon">
               <Link onClick={() =>  setName(true)} className="links" to="/home" ><HomeIcon /></Link>
               <p>Home</p>
                </div> 

                <div className="header__icon">
               <Link  onClick={() =>  setName(true)} className="links" to="/alivetv"><FlashOnIcon /></Link> 
                <p>Trending</p>
                </div>

                <div className="header__icon">
                <Link onClick={() =>  setName(true)} className="links" to="/premium"><LiveTvIcon /></Link> 
                <p>Verified</p>
                </div>


                <div className="header__icon">
                <Link  onClick={() =>  setName(true)} className="links" to="/films"><VideoLibraryIcon /></Link> 
                <p>Collections</p>
                </div>


                <div className="header__icon">
                <Link onClick={() =>  setName(true)} className="links" to="/search"><SearchIcon /></Link>
                <p>Search</p>
                </div>

                <div className="header__icon">
                <Link  onClick={() =>  setName(true)} className="links" to="/signup"><PersonOutlineIcon /></Link>
                <p>Account</p>
                </div>
            </div>
        </div>
        
    )
}

export default HomePage;
