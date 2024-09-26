import React, { useState } from 'react';
import Terminal from './Modules/Terminal';
import Header from './Modules/Header';
import Home from './Modules/Home';
import AboutMe from './Modules/AboutMe';
import Projects from './Modules/Projects';
import Testimonials from './Modules/Testamonials';
import ContactForm from './Modules/ContactForm';
import './Styles/App.scss';

const MainContent = () => (
  <div className="main-content">
    {/* Your main content goes here */}
    <Header />
    <Home />
    <AboutMe />
    <Projects />
    <Testimonials />
    <ContactForm />
  </div>
);

function App() {
  const [terminalFinished, setTerminalFinished] = useState(false);

  return (
    <div className="app">
      {!terminalFinished ? (
        <Terminal onFinish={() => setTerminalFinished(true)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;
