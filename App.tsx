
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HostingGuide from './components/HostingGuide';
import { PERSONAL_INFO } from './constants';

function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenGuide={() => setIsGuideOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer name={PERSONAL_INFO.name} />
      {isGuideOpen && <HostingGuide onClose={() => setIsGuideOpen(false)} />}
    </div>
  );
}

export default App;
