import React, { useState } from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BookIcon from '@material-ui/icons/Book';
import RadioIcon from '@material-ui/icons/Radio';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Route, Router, Switch } from 'react-router-dom';
import {Link} from "react-router-dom";
import Banner from './Banner';


    

function Header() {

    const [name, setName] = useState(false);

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__search">
                  
                        
                  <Link onClick={() =>  setName(true)} className="links" to="/home"><HeaderOption Icon={HomeIcon} title='Home'/></Link> 
                  <Link onClick={() =>  setName(true)} className="links" to="/films"><HeaderOption Icon={MovieIcon} title="Films"/></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/stories"><HeaderOption Icon={BookIcon} title="Stories"/></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/podcasts"><HeaderOption Icon={RadioIcon} title="Podcasts"/></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/signup"><HeaderOption Icon={AccountBoxIcon} title='Sign Up'/></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/newsletter"><HeaderOption Icon={EmailIcon} title="Newsletter"/></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/alivetv"><HeaderOption Icon={LiveTvIcon} title='A LIVE' /></Link>
                  <Link onClick={() =>  setName(true)} className="links" to="/shopscreen"><HeaderOption Icon={ScreenShareIcon} title="Shop"/></Link>
                    
                    

                    
                </div>
            </div>
            
        </div>
    )
}

export default Header
