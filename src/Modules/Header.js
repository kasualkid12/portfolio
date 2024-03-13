import React, { useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Header.scss'; // Adjust the path as needed

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Me
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact Me
          </a>
        </div>

        <div className="icon-links">
          <a
            href="https://www.linkedin.com/in/pauldwalkeriii/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/kasualkid12"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
