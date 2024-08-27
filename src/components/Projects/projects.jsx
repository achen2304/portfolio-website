import React, { useEffect } from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './projects.module.css';
import { GoArrowUpRight } from "react-icons/go";

export const Projects = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);
  
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.header} data-aos='fade'>Projects</h1>
      <div className={styles.allProjectContainer}> 

        {/* project 2 */} 


        {/* Project 1 */}
        <nav className={styles.projectContainer} data-aos='fade-up-right' data-aos-delay='200'>  
          <div className={styles.imgContainer}>
            <img src={getImageUrl1("projects/pcbKeyboard.png")} alt="Picture of PCB" className={styles.projectImg} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}> 
              <a href="https://github.com/achen2304/Pi-Pico-Keyboard" target="_blank">
                Pi Pico Keyboard <GoArrowUpRight />
              </a>
            </div> 
            {/*Description*/}
            <ul className={styles.description}>
              <li>
              Created custom schematic and PCB that fully implements the Pi Pico microcontroller to allow for fully 
              functional keyboard switches, and layout.                
              </li>
              <li>
                Programmed a Pi Pico microcontroller to convert keystrokes into corresponding characters using Python.
              </li>
            </ul>
            {/*SKILL SECTION*/}
            <ul className={styles.skillsUsed}>
              <li>Kicad</li>
              <li>Solidworks</li>
            </ul>
          </div>
        </nav>

      </div>
    </section>
  );

};
