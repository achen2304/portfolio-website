import React, { useState } from 'react';
import styles from './contact.module.css';
import { getImageUrl1 } from '../../utils';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Contact = () => {
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://caizchen.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.text();
    alert(data);
  };

  return (
    <section className={styles.container} id="contact">
      <h1 className={styles.header} data-aos='fade'>Contact</h1>
      <div className={styles.totalContainer}>
        <div className={styles.info} data-aos='fade-right' data-aos-delay='0'>
          <p className={styles.text}> <IoMail /> &nbsp;achen2304@gmail.com</p>
          <p className={styles.text}> <FaPhoneAlt /> &nbsp;641-808-8022</p>
          <div className={styles.imgContainer}>
            <a href="https://github.com/achen2304" target="_blank" rel="noopener noreferrer">
              <img 
                src={                  
                  hoveredImage === 'github'
                  ? getImageUrl1("contact/github2.png")
                  : getImageUrl1("contact/github.png")
                }
                className={styles.img} 
                alt="GitHub"
                onMouseEnter={() => setHoveredImage('github')}
                onMouseLeave={() => setHoveredImage(null)}
                />
            </a>
            <a href="https://www.linkedin.com/in/cai-chen-758a84290/" target="_blank" rel="noopener noreferrer">
              <img                 
                src={                  
                  hoveredImage === 'linkedin'
                  ? getImageUrl1("contact/linkedin2.png")
                  : getImageUrl1("contact/linkedin.png")
                }
                className={styles.img} 
                alt="LinkedIn"
                onMouseEnter={() => setHoveredImage('linkedin')}
                onMouseLeave={() => setHoveredImage(null)}
                />
            </a>
          </div>
        </div>
        <form className={styles.contact} data-aos='fade-left' data-aos-delay='0' onSubmit={handleSubmit}>
          <input
            className={styles.minorContact}
            id="Name"
            name="Name"
            required
            placeholder='Your Name'
            value={formData.Name}
            onChange={handleChange}
          />
          <input
            className={styles.minorContact}
            id="Email"
            name="Email"
            type="email"
            required
            placeholder='Your Email'
            value={formData.Email}
            onChange={handleChange}
          />
          <textarea
            className={styles.message}
            id="Message"
            name="Message"
            required
            placeholder='Your Message'
            value={formData.Message}
            onChange={handleChange}
          />
          <input className={styles.submit} type="submit" value="Submit"/>
        </form>
      </div>
    </section>
  );
};
