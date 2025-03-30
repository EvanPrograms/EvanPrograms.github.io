import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
                <AnchorLink href="#home" offset="80" className="link">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about" offset="80" className="link">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#experience" offset="80" className="link">Experience</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#skills" offset="80" className="link">Skills</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects" offset="80" className="link">Projects</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact" offset="80" className="link">Contact</AnchorLink>
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
          <li><AnchorLink href="#home" offset="80">Home</AnchorLink></li>
          <li><AnchorLink href="#about" offset="80">About</AnchorLink></li>
          <li><AnchorLink href="#skills" offset="80">Skills</AnchorLink></li>
          <li><AnchorLink href="#projects" offset="80">Projects</AnchorLink></li>
          <li><AnchorLink href="#contact" offset="80">Contact</AnchorLink></li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
