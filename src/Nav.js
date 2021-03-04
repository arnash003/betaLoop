import React, { useEffect, useState } from 'react'

import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
  
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
            className="nav_logo"
            src= "https://seeklogo.com/images/F/flag-of-south-africa-logo-7B9C086917-seeklogo.com.png"
            alt=""
            />
            <img className="nav_flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png"
            />
             <img className="nav_flag2"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            />
             <img className="nav_flag3"
            src="https://au.int/sites/default/files/pages/31823-img-au_logo.jpg"
            />
            <img 
            className="nav_avatar"
            src="https://newcastlebeach.org/images/yellow-banner-1.png"
            alt=""
            />
        </div>
     </div>
          
    )
}

export default Nav
