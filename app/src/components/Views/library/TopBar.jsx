import React from 'react';
import { Link } from 'react-router-dom'; 
import { IoHomeOutline } from 'react-icons/io5';  
import DropdownMenu from './DropdownMenu'; 

import './TopBar.css'; 

const TopBar = () => {
  const scrollTop = () => { 
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
   }

  return (
    <div className="top-bar">
      <div className="top-content">
        <Link className="home-icon" to="/">
          <IoHomeOutline />
        </Link>
        <div className="page-logo">
          <p onClick={scrollTop}>KAU</p>
        </div>
        <DropdownMenu className="dropdown-menu" />
      </div>
    </div>
  );
};

export default TopBar
