import React from 'react'
import Banner from '../Banner'
import Feed from '../Feed'
import Footer from '../Footer'
import Header from '../Header'
import InputOption from '../InputOption'
import Nav from '../Nav'

import Sidebar from '../Sidebar'




function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Header />
            <div className="app__body">
                <Sidebar />
                <Feed />
                
            
            </div>
            
           
            
    </div>
  );
}
        
 

export default HomeScreen
