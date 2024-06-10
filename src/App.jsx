// src/App.jsx
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';


import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects';
import { Contact } from './components/Contact/contact';
import { Resume } from './components/Resume/resume';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 20,
      duration: 850,
    });

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

    return (
    <Router>
      <div className={styles.App}>
      {loading ? (
          <div className={styles.loaderContainer}>
            <PulseLoader color="#64ffda" loading={loading} size={15} speedMultiplier={0.5}/>
          </div>
        ) : (
          <>
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
        </>
        )}
      </div>
    </Router>
  );
}

export default App;