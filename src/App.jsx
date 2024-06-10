// src/App.jsx
import React, { useEffect } from 'react';
import styles from './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects';
import { Contact } from './components/Contact/contact';
import { Resume } from './components/Resume/resume';

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 20,
      duration: 850,
    });
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;