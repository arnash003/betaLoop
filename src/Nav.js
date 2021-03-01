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
