import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Features from './components/Features';
import Classes from './components/Classes';
import Footer from './components/Footer';
import BMICalculator from './components/calculator';
import Contact from './components/Contact1'; // ✅ Correct

import Hero from './components/Hero';
import Trainerbio from './components/Trainer';
import TailoredFitnessPrograms from './components/cardio';
import Reviews from './components/Testing';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: false });
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Trainerbio />
              <Classes />
              <TailoredFitnessPrograms />
              <BMICalculator />
              <Reviews />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
