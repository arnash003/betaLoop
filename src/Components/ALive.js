import React from 'react' 
import "./ALive.css";
import AliveFeed from './ALiveFeed';
import Header from '../Header';


function ALive() {
    return (
        <div className="alive__tv">
            <div>
            <Header/>
            <AliveFeed/>
            </div>

        </div>
    )
}

export default ALive
