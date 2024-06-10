import React from 'react'
import styles from './contact.module.css';
import { getImageUrl1 } from '../../utils';

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h1 className={styles.header}>Contact</h1>
      <div className={styles.totalContainer}>
        <div className={styles.info}>
            <p>achen2304@gmail.com</p>
            <p>641-808-8022</p>
            <img src={getImageUrl1("contact/github.svg")} className={styles.img}/>
            <img src={getImageUrl1("contact/linkedin.svg")} className={styles.img}/>
        </div>
        <div className={styles.contact}>
            <input id="Name" name="Name" placeholder='Your Name' /> 
            <input id="Email" name="Email" placeholder='Your Email' />  
            <input className={styles.message}id="Message" name="Message" placeholder='Your Message' />  
        </div>
    </div>
    </section>
  );
};
