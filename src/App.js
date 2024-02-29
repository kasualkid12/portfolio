import React, { useState } from 'react';
import Terminal from './Modules/Terminal';
import './Styles/App.scss';

const MainContent = () => (
  <div className="main-content">
    {/* Your main content goes here */}
    <h1>Main Portfolio Content</h1>
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