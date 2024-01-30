import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import the LoginForm component

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <header className='header'>
      <div className='top'>
        <a href='#' target='_blank' className='top'>Techies</a>
      </div>
      <nav>
        <ul className='nav-list'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#Technews'>Technews</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li>
            <NavLink to='login' className='Log' onClick={handleLoginClick}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
