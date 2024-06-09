import React from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content} data-aos='fade-right'>
        <h1 className={styles.title}>
          Cai Chen
        </h1>
        <h2 className={styles.subtitle}>
          Computer Engineer
        </h2>
        <p className={styles.description}>
          I'm a student studying computer engineering at Iowa State University. More stuff More stuff
          More stuffMore stuff
          More stuff
          More stuff
          More stuffMore stuffMore stuff
          Har har har har har har har
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Get In Touch
        </a>
      </div>
      <div className={styles.imgContainer} data-aos='fade-left'>
        <img src={getImageUrl1("hero/Hero.jpg")} alt="Hero image of me" className={styles.heroImg} />
      </div>
    </section>
  );
};
