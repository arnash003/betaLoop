import React from 'react' 
import HomePage from './HomePage';
import "./ALive.css";
import AliveFeed from './ALiveFeed';


function ALive() {
    return (
        <div className="alive__tv">
            <div>
            <HomePage/>
            <AliveFeed/>
            </div>

        </div>
    )
}

export default ALive
