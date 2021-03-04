import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Home from './Components/HomePage';


function App() {
  
  return (
    <div className="App">
    <Router>
    <HomeScreen/>
   
 <br>
</br>
    <HomePage />
     </Router>
    
     
    </div>
  );
}

export default App;
