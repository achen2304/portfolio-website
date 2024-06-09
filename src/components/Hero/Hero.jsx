import React from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Cai Chen
        </h1>
        <h2 className={styles.subtitle}>
          Computer Engineer
        </h2>
        <p className={styles.description}>
          I'm a student studying computer engineering at Iowa State University.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.imgBox}>
        <img src={getImageUrl1("hero/Hero.jpg")} alt="Hero image of me" className={styles.heroImg} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};