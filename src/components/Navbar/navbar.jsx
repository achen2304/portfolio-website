import React, {useState} from 'react';
import styles from './navbar.module.css';
import { getImageUrl1 } from '../../utils';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
          src={ 
            menuOpen /* menu Buttom */
            ? getImageUrl1("nav/x.png") 
            : getImageUrl1("nav/menu.png")
          } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
          >
          <li data-aos='fade-down' data-aos-delay='100'><a href="#experience">Experience</a></li>
          <li data-aos='fade-down' data-aos-delay='200'><a href="#projects">Projects</a></li>
          <li data-aos='fade-down' data-aos-delay='300'><a href="#skills">Skills</a></li>
          <li data-aos='fade-down' data-aos-delay='400'><a href="#contact">Contact</a></li>
          <li data-aos='fade-down' data-aos-delay='500'><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};