import './header.css'
import gitIcon from '../assets/github.svg';
import resumeIcon from '../assets/myResume.svg';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    document.body.classList.add('page_loaded');
  }, []);

  return(
    <div className="header">
      <div className="intro">
        <div className="introSection">
          <div className="introText">
            <h1>
              Welcome!
              <br />
              I&apos;m Evan Perry!
            </h1>
            <p>A passionate web developer in Denver, CO!</p>
          </div>
          <ul className="btnGroup">
            <li>
              <a href="https://github.com/EvanPrograms" className="btn heroBtn">
                <img src={gitIcon} width="33" height="26" alt="See my Work" />
                <p>GitHub</p>
              </a>
            </li>
            <li>
              <a href="resume.pdf" className="btn heroBtn">
                <img src={resumeIcon} width="33" height="26" alt="View Resume" />
                <p>Resume</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="picture">
          <div className="outerHexagon">
            <div className="innerHexagon"></div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Header;