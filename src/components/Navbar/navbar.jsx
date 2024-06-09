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
            ? getImageUrl1("nav/closeIcon.png") 
            : getImageUrl1("nav/menuIcon.png")
          } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
          >
          {/* <li><a href="#experience">Experience</a></li> */}
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};