// Rain.js
import React, { useEffect } from 'react';
import './Rain.css'; // Include the CSS for Rain component

const Rain = () => {
  useEffect(() => {
    createRaindrops();

    // Function to create raindrops
    function createRaindrops() {
      const rainContainer = document.querySelector('.rain');
      const dropCount = 100;

      for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDelay = `${Math.random()}s`;
        rainContainer.appendChild(drop);
      }
    }
  }, []); // Run once on component mount

  return <div className="rain"></div>;
};

export default Rain;
