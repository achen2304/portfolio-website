import React from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos='fade-right' data-aos-delay='800'>
          Cai Chen
        </h1>
        <h2 className={styles.subtitle} data-aos='fade-right' data-aos-delay='800'>
          Computer Engineer
        </h2>
        <p className={styles.description} data-aos='fade-right' data-aos-delay='1000'>
          I'm a student studying computer engineering at Iowa State University. More stuff More stuff
          More stuffMore stuff
          More stuff
          More stuff
          More stuffMore stuffMore stuff
          Har har har har har har har 
          
        </p>
        <a href="#contact" className={styles.contactBtn} data-aos='fade-right' data-aos-delay='1000'>
          Get In Touch
        </a>
      </div>
      <div className={styles.imgContainer} data-aos='fade-left' data-aos-delay='800'>
        <img src={getImageUrl1("hero/Hero.jpg")} alt="Hero image of me" className={styles.heroImg} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.botBlur} />
    </section>
  );
};
