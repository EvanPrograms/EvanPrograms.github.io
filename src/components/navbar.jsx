import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import menuIcon from '../assets/menu.svg';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`appContainer ${menuOpen ? 'menuVisible' : ''}`}>
      <AppBar position="fixed" className="navbar">
        <Toolbar className="toolbar">
          <Typography variant="h3" component="div" className="navbar-title">
            Evan Perry
          </Typography>


          <div className="desktop">
            <ul>
              <li>
                <a className="link" href="#about">About</a>
              </li>
              <li>
                <a className="link" href="#skills">Skills</a>
              </li>
              <li>
                <a className="link" href="#project">Project</a>
              </li>
              <li>
                <a className="link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="mobile">
            <div className="navBtn" onClick={toggleMenu}>
              <img src={menuIcon} alt="Menu" />
            </div>
          </div>
          
        </Toolbar>
      </AppBar>

      <div className="dimmingOverlay" onClick={toggleMenu}></div>

      <section className="navMenu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
