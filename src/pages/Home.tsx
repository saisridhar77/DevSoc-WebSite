import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FAQ />
    </>
  );
};

export default Home;