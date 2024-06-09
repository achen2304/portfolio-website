import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/skills';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />

    </div>
  );
}

export default App;
