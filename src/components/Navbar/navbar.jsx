import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import styles from './navbar.module.css';
import { getImageUrl1 } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (path, id) => {
    navigate(path);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/" data-aos="fade-down" data-aos-delay="0">Portfolio</Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? getImageUrl1("nav/x.png") : getImageUrl1("nav/menu.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          data-aos="fade-down" data-aos-delay="200"
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {/* <li data-aos="fade-down" data-aos-delay="100">
            <button onClick={() => handleNavClick('/', 'experience')}>Experience</button>
          </li> */}
          <li data-aos="fade-down" data-aos-delay="200">
            <button onClick={() => handleNavClick('/', 'projects')}>Projects</button>
          </li>
          <li data-aos="fade-down" data-aos-delay="300">
            <button onClick={() => handleNavClick('/', 'skills')}>Skills</button>
          </li>
          <li data-aos="fade-down" data-aos-delay="400">
            <button onClick={() => handleNavClick('/', 'contact')}>Contact</button>
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
            <Link to="/resume">Resume</Link>
          </li>
          <div className={styles.imgContainer}>
            <a href="https://github.com/achen2304" target="_blank" rel="noopener noreferrer">
              <img
                src={                  
                  hoveredImage === 'github'
                  ? getImageUrl1("contact/github2.png")
                  : getImageUrl1("contact/github.png")
                }
                className={styles.img}
                data-aos="fade-down"
                data-aos-delay="600"
                onMouseEnter={() => setHoveredImage('github')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
            <a href="https://www.linkedin.com/in/cai-chen-758a84290/" target="_blank" rel="noopener noreferrer">
              <img
                src={
                  hoveredImage === 'linkedin'
                  ? getImageUrl1("contact/linkedin2.png")
                  : getImageUrl1("contact/linkedin.png")}
                className={styles.img2}
                data-aos="fade-down"
                data-aos-delay="600"
                onMouseEnter={() => setHoveredImage('linkedin')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};
