import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar title="TextUtils" isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" isDarkMode={isDarkMode} />
     
      </div>
    </div>
  );
}

export default App;
