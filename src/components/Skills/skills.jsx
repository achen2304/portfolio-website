import React, { useEffect } from 'react';
import { getImageUrl1 } from '../../utils';
import styles from './skills.module.css';
import AOS from 'aos';

export const Skills = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className={styles.container} id="skills">
      {/*software*/}
      <div className={styles.box} data-aos='fade-up'>
        <h2 className={styles.title}>Software</h2>
        <div className={styles['img-container']}>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/altium.svg")} alt="Altium" />
            </div>
            <div className={styles.subtitle}>Altium</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/kicad.svg")} alt="KiCad" />
            </div>
            <div className={styles.subtitle}>KiCad</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/solidworks.svg")} alt="SolidWorks" />
            </div>
            <div className={styles.subtitle}>SolidWorks</div>
          </div>
        </div>
      </div>

      {/*lanugages*/}
      <div className={styles.box} data-aos='fade-up'>
        <h2 className={styles.title}>Languages</h2>
        <div className={styles['img-container']}>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/css.svg")} alt="CSS" />
            </div>
            <div className={styles.subtitle}>CSS</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/html.svg")} alt="HTML" />
            </div>
            <div className={styles.subtitle}>HTML</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/javascript.svg")} alt="JavaScript" />
            </div>
            <div className={styles.subtitle}>JavaScript</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/python.svg")} alt="Python" />
            </div>
            <div className={styles.subtitle}>Python</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/c.svg")} alt="C" />
            </div>
            <div className={styles.subtitle}>C</div>
          </div>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/java.svg")} alt="Java" />
            </div>
            <div className={styles.subtitle}>Java</div>
          </div>
        </div>
      </div>
      
      {/*frameworks*/}
      <div className={styles.box} data-aos='fade-up'>
        <h2 className={styles.title}>Frameworks</h2>
        <div className={styles['img-container']}>
          <div>
            <div className={styles['img-box']}>
              <img src={getImageUrl1("skills/react.svg")} alt="React" />
            </div>
            <div className={styles.subtitle}>React</div>
          </div>
        </div>
      </div>
    </section>
  );
};
