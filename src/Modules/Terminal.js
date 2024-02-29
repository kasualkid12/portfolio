import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Terminal.scss';

const Terminal = ({ onFinish }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef(null); // Reference to the terminal container

  const commands = [
    'Booting system...',
    'Loading kernel modules...',
    'Mounting filesystems...',
    'Starting network manager...',
    'Starting sshd service...',
    'Initializing system hardware...',
    'Setting up user environment...',
    'Welcome to my portfolio Linux system!',
  ];

  useEffect(() => {
    const typeLine = () => {
      if (currentLine < commands.length) {
        setCurrentLine(currentLine + 1);
      } else {
        setTimeout(onFinish, 1000); // Adjust delay as needed
      }
    };

    const timeoutId = setTimeout(typeLine, 100); // Adjust typing speed as needed

    return () => clearTimeout(timeoutId);
  }, [currentLine, commands.length, onFinish]);

  useEffect(() => {
    // Scroll to the bottom of the terminal container
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentLine]); // This effect runs every time a new line is added

  return (
    <div className="terminal" ref={terminalRef}>
      {commands.slice(0, currentLine).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Terminal;