import React from 'react';
import VideoCard from './Components/VideoCard';
import "./Results.css"

function Results() {
    return (
        <div className="results">
            <VideoCard />
            <VideoCard/>
        </div>
    )
}

export default Results
