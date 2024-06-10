import React from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './projects.module.css';

export const Projects = () => {

  
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.allProjectContainer}>

        {/* Project 1 */}
        <nav className={styles.projectContainer} data-aos='fade-up-right' data-aos-delay='200'  >
          <div className={styles.imgContainer}>
            <img src={getImageUrl1("projects/pcbKeyboard.png")} alt="Picture of PCB" className={styles.projectImg} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              Project Name
            </div>
            {/*Description*/}
            <ul className={styles.description}>
              <li>Descriptor 1</li>
              <li>Descriptor 2</li>
              <li>Descriptor 3</li>
            </ul>
            {/*SKILL SECTION*/}
            <ul className={styles.skillsUsed}>
              <li>Skill 1</li>
              <li>Skill 2</li>
            </ul>
          </div>
        </nav>

        {/* Project 1 */}
        <nav className={styles.projectContainer} data-aos='fade-up-left' data-aos-delay='200'>  
          <div className={styles.imgContainer}>
            <img src={getImageUrl1("projects/pcbKeyboard.png")} alt="Picture of PCB" className={styles.projectImg} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              Pi Pico Keyboard
            </div>
            {/*Description*/}
            <ul className={styles.description}>
              <li>
                Designed a custom schematic and PCB using KiCad, ensuring compatibility for MX switches with correct spacing and a custom layout.
                Designed a custom schematic and PCB using KiCad, ensuring compatibility for MX switches with correct spacing and a custom layout.
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
