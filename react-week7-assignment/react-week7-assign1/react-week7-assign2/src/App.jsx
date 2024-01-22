// App.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color === 'default' ? '' : color);
  };

  return (
    <div className="app" style={{ backgroundColor, minHeight: '100vh' }}>
      <h1>Background Color Changer</h1>
      <Navbar onColorChange={handleColorChange} />
    </div>
  );
};

export default App;
