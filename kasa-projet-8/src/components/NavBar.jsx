
import React from 'react';
import './style/componentsSCSS/Navbar.scss';
import logoNavbar from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img alt='kasa-logo' src={logoNavbar} className='logo-kasa' />
      <div className="nav-bar-links">
        <NavLink exact to="/" activeClassName="bottomBar">
          Accueil
        </NavLink>
        <NavLink exact to="/About" activeClassName="bottomBar">
          À Propos
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
