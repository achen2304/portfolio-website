import React, { useEffect } from 'react';
import styles from './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects'; 
import { Contact } from './components/Contact/contact';

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 20,
      duration: 850,
    });
  }, []);

  return (
    <div className={styles.App}>

      <Navbar />
      <Hero />
      <Projects /> 
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
