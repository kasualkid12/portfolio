import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin as faLinkedinBrands,
  faGithub as faGithubBrands,
} from '@fortawesome/free-brands-svg-icons';
import '../Styles/Header.scss';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    window.scrollTo({
      top: offsetTop - 60,
      behavior: 'smooth',
    });

    if (windowWidth < 1080 && isNavCollapsed) {
      setIsNavCollapsed(false);
    }
  };

  return (
    <header className="header" data-aos="fade-down">
      <nav className="navbar">
        <button className="navbar-toggler" onClick={handleNavCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`nav-links ${
            isNavCollapsed && windowWidth < 1080 ? 'collapse' : ''
          }`}
        >
          <a href="#home" className="nav-link" onClick={handleScroll}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={handleScroll}>
            About Me
          </a>
          <a href="#projects" className="nav-link" onClick={handleScroll}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={handleScroll}>
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
            <FontAwesomeIcon icon={faLinkedinBrands} />
          </a>
          <a
            href="https://github.com/kasualkid12"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubBrands} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;