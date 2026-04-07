import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Automation from './components/Automation';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Automation />
      <Portfolio />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
