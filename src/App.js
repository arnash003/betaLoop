import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Home from './Components/HomePage';
import ALive from './Components/ALive';
import NewsLetter from './Components/NewsLetter';
import SignUp from './Components/SignUp';
import VideoCard from './Components/VideoCard';
import SubmitFilmScreen from './screens/SubmitFilmScreen';
import Header from './Header';
import PodcastsScreen from './Components/PodcastsScreen';
import SubmitStory from './Components/SubmitStory';
import ShopScreen from './screens/ShopScreen';
import SignUpScreen from './Components/SignUpScreen';




function App() {
  
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/podcasts">
          <Header/>
          <PodcastsScreen/>
        </Route>
        <Route path="/signupscreen">
          <Header />
          <SignUpScreen/>
        </Route>
        <Route path="/stories">
          <Header />
          <SubmitStory />
        </Route>
        <Route path="/shopscreen">
          <Header/>
          <ShopScreen />
        </Route>
        <Route path="/alivetv">
            <ALive/>
          </Route>
        <Route path="/newsletter">
            <NewsLetter/>
        </Route>
        <Route path="/signup">
          <Route path="/">
            <HomePage/>
            <SignUp/>
          </Route>
        </Route>
        <Route path="/films">
          <SubmitFilmScreen />
        </Route>
    <HomeScreen/>
    </Switch>
     </Router>
   
    
     
    </div>
  );
}

export default App;
