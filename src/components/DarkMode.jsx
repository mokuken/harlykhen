import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkMode = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('dark-mode', newTheme);
  };
  
  return (
    <button onClick={toggleTheme}>
      <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
    </button>
  );
};

export default DarkMode;
