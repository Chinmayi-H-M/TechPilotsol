import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Automation from './components/Automation';
import WhyChooseUs from './components/WhyChooseUs';
import ReferAndEarn from './components/ReferAndEarn';
import Portfolio from './components/Portfolio';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Automation />
      <WhyChooseUs />
      <ReferAndEarn />
      <Portfolio />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
