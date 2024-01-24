// Navbar.jsx Component
import React from 'react';
import './Navbar.css';

const Navbar = ({ onColorChange }) => {
  const colors = ['red', 'yellow', 'purple', 'black', 'green', 'blue', 'default'];

  return (
    <nav className="navbar">
      {colors.map((color) => (
        <button key={color} onClick={() => onColorChange(color)}>
          {color}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
