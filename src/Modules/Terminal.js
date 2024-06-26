import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../Styles/Terminal.scss';

const Terminal = ({ onFinish }) => {
  // State to keep track of the current line being displayed.
  const [currentLine, setCurrentLine] = useState(0);
  // useRef to hold a reference to the terminal container for scrolling purposes.
  const terminalRef = useRef(null);

  // useMemo to initialize commands array only once, improving performance.
  // This array simulates the terminal commands and their associated delays.
  const commands = useMemo(
    () => [
      { text: 'Booting system...', delay: 0 },
      { text: 'Loading kernel modules...', delay: 1000 },
      { text: 'Mounting filesystems...', delay: 750 },
      { text: 'Starting network manager...', delay: 1250 },
      { text: 'Starting sshd service...', delay: 800 },
      { text: 'Initializing system hardware...', delay: 800 },
      { text: 'Setting up user environment...', delay: 1500 },
      { text: 'Welcome to my portfolio Linux system!', delay: 1000 },
    ],
    []
  ); // Dependencies array is empty, indicating it only runs once

  // useEffect to handle the logic of displaying each command after its delay.
  useEffect(() => {
    if (currentLine < commands.length) {
      const timeoutId = setTimeout(() => {
        // Increment currentLine to display the next command.
        setCurrentLine(currentLine + 1);
      }, commands[currentLine].delay);

      // Cleanup function to clear the timeout if the component unmounts.
      return () => clearTimeout(timeoutId);
    } else {
      // Once all commands are displayed, call onFinish after a short delay.
      setTimeout(onFinish, commands[currentLine - 1]?.delay || 2000);
    }
  }, [currentLine, commands, onFinish]);

  // useEffect to scroll the terminal container to the bottom each time a new line is added.
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentLine]);

  // New useEffect hook to listen for any key press and execute onFinish
  useEffect(() => {
    const handleKeyPress = () => {
      onFinish(); // Call onFinish to transition immediately
    };

    // Add event listener when component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onFinish]); // Dependency array ensures this effect is tied to the onFinish function

  return (
    <div className="terminal" ref={terminalRef}>
      {commands.slice(0, currentLine).map((command, index) => (
        // Display each command text up to the current line.
        <p key={index}>{command.text}</p>
      ))}
    </div>
  );
};

export default Terminal;
