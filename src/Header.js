import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import BookIcon from '@material-ui/icons/Book';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Route, Router, Switch } from 'react-router-dom';
import Banner from './Banner';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__search">
                  
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={MovieIcon} title="Films"/>
                    <HeaderOption Icon={AccountBoxIcon} title='Sign Up'/>
                    <HeaderOption Icon={EmailIcon} title="Newsletter"/>
                    <HeaderOption Icon={BookIcon} title='Screening'/>
                    <HeaderOption Icon={ScreenShareIcon} title="Shop"/>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Header
