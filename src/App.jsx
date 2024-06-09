import React from 'react';
import styles from './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/skills';

function App() {

    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />

    </div>
  );
}

export default App;
