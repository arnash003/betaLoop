import React from 'react'
import "./HomePage.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HomePageNav from './HomePageNav';




function HomePage() {
    return (
        <div className="HomePage_header">
            <div className="HomePage_header_icons">
              
              
               <div className="header__icon">
               <HomeIcon />
               <p>Home</p>
                </div> 

                <div className="header__icon">
                <FlashOnIcon />
                <p>Trending</p>
                </div>

                <div className="header__icon">
                <LiveTvIcon />
                <p>Verified</p>
                </div>


                <div className="header__icon">
                <VideoLibraryIcon />
                <p>Collections</p>
                </div>


                <div className="header__icon">
                <SearchIcon />
                <p>Search</p>
                </div>

                <div className="header__icon">
                <PersonOutlineIcon />
                <p>Account</p>
                
                </div>
            </div>
        </div>
        
    )
}

export default HomePage;
