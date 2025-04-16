import React from 'react';
import Navbar from './components/Navbar';
import FeatureMarquee from './components/Maq';
import Hero from './components/Hero';
import AOSWrapper from './components/AOSWrapper';
import Features from './components/Features';
import Classes from './components/Classes';
import Footer from './components/Footer';
import BMICalculator from './components/calculator';
import Test from './components/Testing';
import Trainerbio from './components/Trainer';

function App() {
  return (
    <div className="min-h-screen">
      <AOSWrapper>
        <Navbar data-aos="fade-down" data-aos-duration="1000" />
        <Hero data-aos="fade-up" data-aos-duration="1500" />
        <Features data-aos="fade-right" data-aos-duration="2000" />
        <Trainerbio data-aos="fade-left" data-aos-duration="1500" />
        <Classes data-aos="zoom-in" data-aos-duration="1000" />
        <Test data-aos="flip-up" data-aos-duration="1200" />
        <BMICalculator data-aos="flip-left" data-aos-duration="1300" />
        <Footer data-aos="fade-in" data-aos-duration="1600" />
      </AOSWrapper>
    </div>
  );
}

export default App;
