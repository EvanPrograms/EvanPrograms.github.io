import './header.css'
import gitIcon from '../assets/github.svg';
import resumeIcon from '../assets/myResume.svg';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
    }, []);

  return(
    <div className="header" id="home">
      <div className="intro" data-aos="fade-down">
        <div className="introSection">
          <div className="introText">
            <h1>
              Welcome!
              <br />
              I&apos;m Evan Perry!
            </h1>
            <p>A passionate Full Stack Web Developer in Denver, CO!</p>
          </div>
          <ul className="btnGroup">
            <li>
              <a href="https://github.com/EvanPrograms" className="btn heroBtn">
                <img src={gitIcon} width="33" height="26" alt="See my Work" />
                <p>GitHub</p>
              </a>
            </li>
            <li>
              <a href="/Evan_Perry_Resume.pdf" className="btn heroBtn" target="_blank" rel="noopener noreferrer">
                <img src={resumeIcon} width="33" height="26" alt="View Resume" />
                <p>Resume</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="picture" data-aos="fade-down">
          <div className="outerHexagon">
            <div className="innerHexagon"></div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Header;