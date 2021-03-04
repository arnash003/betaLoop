import React from 'react'
import "./VideoCard.css";

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img 
            src="https://images.unsplash.com/photo-1525331336235-d3153d7e58cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
            />
            <p>This is a film about sustainability</p>
            <h3>Movie Title</h3>
            <p>Number of Likes</p>
        </div>
    )
}

export default VideoCard;
