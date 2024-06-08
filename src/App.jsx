import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />

    </div>
  );
}

export default App;
