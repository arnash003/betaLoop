import React from 'react'
import Banner from '../Banner';
import HomePage from '../Components/HomePage';
import FilmRow from '../FilmRow';
import requestsTwo from '../RequestsTwo';
import "./SubmitFilmScreen.css";



function SubmitFilmScreen() {
    return (
        <div className="submitFilmScreen">
            <HomePage/>
            <FilmRow 
            title="African Originals"
            fetchUrl={requestsTwo.fetchNetflixOriginals}
            isLargeRow
            />
            <FilmRow title="Trending Now" fetchUrl={requestsTwo.fetchTrending}/>  
            <FilmRow title="Top Rated" fetchUrl={requestsTwo.fetchTopRated}/>  
            <FilmRow title="Short Films" fetchUrl={requestsTwo.fetchActionMovies} />
            <FilmRow title="Music Videos" fetchUrl={requestsTwo.fetchComedyMovies} />
            <FilmRow title="Interviews and Podcasts" fetchUrl={requestsTwo.fetchHorrorMovies} />
            <FilmRow title="Gender-based Violence" fetchUrl={requestsTwo.fetchRomanceMovies} />
            <FilmRow title="Documentaries" fetchUrl={requestsTwo.fetchDocumentaries} />
            <div>
                <Banner/>
            </div>
        </div>
    )
}

export default SubmitFilmScreen
