import React, { useState, useEffect } from 'react';
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
    setLoading(false);}, 100); 
  };

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <Link 
      className={styles.title} 
      to="/" 
      data-aos="fade-down" 
      data-aos-delay="0" 
      onClick={() => setLoading(true)}>
        Portfolio
      </Link>
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
            <a href="https://github.com/achen2304" 
            target="_blank" 
            rel="noopener noreferrer"
            data-aos="fade-down"
            data-aos-delay="600">
              <img
                src={                  
                  hoveredImage === 'github'
                  ? getImageUrl1("contact/github2.png")
                  : getImageUrl1("contact/github.png")
                }
                className={styles.img}
                onMouseEnter={() => setHoveredImage('github')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </a>
            <a href="https://www.linkedin.com/in/cai-chen-758a84290/" 
            target="_blank" rel="noopener noreferrer"
            data-aos="fade-down"
            data-aos-delay="600">
              <img
                src={
                  hoveredImage === 'linkedin'
                  ? getImageUrl1("contact/linkedin2.png")
                  : getImageUrl1("contact/linkedin.png")}
                className={styles.img2}
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
