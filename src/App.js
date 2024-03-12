import React, { useState } from 'react';
import Terminal from './Modules/Terminal';
import Header from './Modules/Header';
import Home from './Modules/Home';
import AboutMe from './Modules/AboutMe';
import ContactForm from './Modules/ContactForm';
import './Styles/App.scss';

const MainContent = () => (
  <div className="main-content">
    {/* Your main content goes here */}
    <Header />
    <Home />
    <AboutMe />
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
