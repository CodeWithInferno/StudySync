// Sounds.js
import React from 'react';

const Sounds = () => {
  const containerStyle = {
    display: 'flex',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    height: '80%',
    maxHeight: '500px',
    backgroundColor: 'rgba(37, 37, 37, 0.9)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: '999',
    color: '#fff',
  };

  
  const buttonStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const playRainSound = () => {
    const audio = new Audio('/sounds/rain.mp3'); // Adjust the path based on your project structure
    audio.loop = true;
    audio.volume = 1;
    audio.play();
  };

  const playCamfireSound = () => {
    const audio = new Audio('/sounds/Campfire.mp3'); // Adjust the path based on your project structure
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  };
  const playWavesSound = () => {
    const audio = new Audio('/sounds/Waves.mp3'); // Adjust the path based on your project structure
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  };
  const playBirdsSound = () => {
    const audio = new Audio('/sounds/Birds.mp3'); // Adjust the path based on your project structure
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  };
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={playRainSound}>
        Play Rain Sound
      </button>
      <button style={buttonStyle} onClick={playCamfireSound}>
        Play Camfire Sound
      </button>
      <button style={buttonStyle} onClick={playWavesSound}>
        Play Waves Sound
      </button>
      <button style={buttonStyle} onClick={playBirdsSound}>
        Play Birds Sound
      </button>
      {/* Other buttons */}

    </div>
  );
};

export default Sounds;











