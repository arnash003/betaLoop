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


function App() {
  
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/alivetv">
          <Route path="/">
            <ALive/>
          </Route>
        </Route>
        <Route path="/newsletter">
          <Route path="/">
            <NewsLetter/>
          </Route>
        </Route>
        <Route path="/signup">
          <Route path="/">
            <SignUp/>
          </Route>
        </Route>
        <Route path="/films">
          <Route path="/">
            <VideoCard/>
          </Route>
        </Route>
    <HomeScreen/>
    </Switch>
     </Router>
   
    
     
    </div>
  );
}

export default App;
