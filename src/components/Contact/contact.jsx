import React from 'react';
import styles from './contact.module.css';
import { getImageUrl1 } from '../../utils';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Contact = () => {
  
  return (
    <section className={styles.container} id="contact">
      <h1 className={styles.header}>Contact</h1>
      <div className={styles.totalContainer}>
        <div className={styles.info} data-aos='zoom-in-up' data-aos-delay='100'>
            <p className={styles.text}> <IoMail /> &nbsp;achen2304@gmail.com</p>
            <p className={styles.text}> <FaPhoneAlt /> &nbsp;641-808-8022</p>
            <div className={styles.imgContainer}>
                <a href="https://github.com/achen2304" target="_blank">
                    <img src={getImageUrl1("contact/github.png")} className={styles.img}/>
                </a>
                <a href="https://www.linkedin.com/in/cai-chen-758a84290/" target="_blank">
                    <img src={getImageUrl1("contact/linkedin.png")} className={styles.img}/>
                </a>
            </div>
        </div>
        <div className={styles.contact} data-aos='zoom-in-up' data-aos-delay='100'>
            <input className={styles.minorContact} id="Name" name="Name" required placeholder='Your Name' /> 
            <input className={styles.minorContact} id="Email" name="Email" required placeholder='Your Email' />  
            <textarea className={styles.message} id="Message" name="Message" required placeholder='Your Message' />
            <input className={styles.submit} type="submit"/>
        </div>
      </div>
    </section>
  );
};
