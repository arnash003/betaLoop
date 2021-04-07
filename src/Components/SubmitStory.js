import React from 'react';
import "./SubmitStory.css";



function SubmitStory() {
    return (
        <div>
        <div className="submitStoryContainer">
        <h4> Submit Story Background Cover </h4> 
        </div>
        <div className="submitStoryForm">
            <h1>Story Details</h1>
            <div className="storyFormInput">
        <input  placeholder="Title" type="title" />
        <input  placeholder="Genre" type="genre" />
        <input  placeholder="Description" type="description" />
        <input  placeholder="Language" type="language" />
        <input  placeholder="Target Audience" type="targetAudience" />
        <input  placeholder="Main Characters" type="mainCharacters" />
        <input  placeholder="Rating" type="rating" />
        <input  placeholder="Copyright" type="copyright" />
        </div>
        </div>
        </div>
       
    )
}

export default SubmitStory

