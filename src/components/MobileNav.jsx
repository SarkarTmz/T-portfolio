import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileNav.css';
import { RiMenu3Fill } from "react-icons/ri";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className= "mobilenav">
        <div className="mobilenav__wrapper">
            <Link to="/">
                <h1 className='text-white'>LOGO</h1>
            </Link>
            
            <RiMenu3Fill className="bar"
                onClick={toggleMenu} />

            <div className= {isOpen ? "mobile-li" : "menu-li"}  id="mobile">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="project">Projects</Link>
                    <Link to="contact">Contact</Link>
                </ul>
            </div>
      </div>
    </div>
  );
};

export default MobileNav;