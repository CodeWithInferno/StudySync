// // Sounds.js
// import React from 'react';

// const Sounds = () => {
//   const containerStyle = {
//     display: 'flex',
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '80%',
//     maxWidth: '600px',
//     height: '80%',
//     maxHeight: '500px',
//     backgroundColor: 'rgba(37, 37, 37, 0.9)',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//     padding: '20px',
//     zIndex: '999',
//     color: '#fff',
//   };

  
//   const buttonStyle = {
//     display: 'block',
//     width: '100%',
//     marginBottom: '10px',
//     padding: '10px',
//     fontSize: '16px',
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#3498db',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   const playRainSound = () => {
//     const audio = new Audio('/sounds/rain.mp3'); // Adjust the path based on your project structure
//     audio.loop = true;
//     audio.volume = 1;
//     audio.play();
//   };

//   const playCamfireSound = () => {
//     const audio = new Audio('/sounds/Campfire.mp3'); // Adjust the path based on your project structure
//     audio.loop = true;
//     audio.volume = 0.5;
//     audio.play();
//   };
//   const playWavesSound = () => {
//     const audio = new Audio('/sounds/Waves.mp3'); // Adjust the path based on your project structure
//     audio.loop = true;
//     audio.volume = 0.5;
//     audio.play();
//   };
//   const playBirdsSound = () => {
//     const audio = new Audio('/sounds/Birds.mp3'); // Adjust the path based on your project structure
//     audio.loop = true;
//     audio.volume = 0.5;
//     audio.play();
//   };
//   return (
//     <div style={containerStyle}>
//       <button style={buttonStyle} onClick={playRainSound}>
//         Play Rain Sound
//       </button>
//       <button style={buttonStyle} onClick={playCamfireSound}>
//         Play Camfire Sound
//       </button>
//       <button style={buttonStyle} onClick={playWavesSound}>
//         Play Waves Sound
//       </button>
//       <button style={buttonStyle} onClick={playBirdsSound}>
//         Play Birds Sound
//       </button>
//       {/* Other buttons */}

//     </div>
//   );
// };

// export default Sounds;












// Sounds.js
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

const Sounds = ({ onClose }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    height: '60%',
    maxHeight: '500px',
    backgroundColor: 'rgba(37, 37, 37, 0.5)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: '999',
    color: '#fff',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#fff',
  };

  const buttonStyle = {
    width: '100%',
    marginBottom: '15px',
    padding: '15px',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const soundButtons = [
    { label: 'Rain Sound', file: 'rain.mp3', volume: 1 },
    { label: 'Campfire Sound', file: 'Campfire.mp3', volume: 0.5 },
    { label: 'Waves Sound', file: 'Waves.mp3', volume: 0.5 },
    { label: 'Birds Sound', file: 'Birds.mp3', volume: 0.5 },
    // Add more sound buttons as needed
  ];

  const [playingIndices, setPlayingIndices] = useState([]);
  const audioRefs = soundButtons.map(() => useRef(null));

  const playPauseSound = (index, soundFile, volume) => {
    const audio = audioRefs[index].current;
    const isPlaying = playingIndices.includes(index);

    if (isPlaying) {
      const updatedIndices = playingIndices.filter((i) => i !== index);
      setPlayingIndices(updatedIndices);
      audio.pause();
    } else {
      const updatedIndices = [...playingIndices, index];
      setPlayingIndices(updatedIndices);
      audio.loop = true;
      audio.volume = volume;
      audio.play();
    }
  };

  return (
    <div style={containerStyle}>
      <div style={closeButtonStyle} onClick={onClose}>
        <FaTimes />
      </div>
      {soundButtons.map((button, index) => (
        <button
          key={index}
          style={buttonStyle}
          onClick={() => playPauseSound(index, button.file, button.volume)}
        >
          {playingIndices.includes(index) ? (
            <FaPause style={iconStyle} />
          ) : (
            <FaPlay style={iconStyle} />
          )}
          {button.label}
        </button>
      ))}
      {soundButtons.map((button, index) => (
        <audio key={index} ref={audioRefs[index]} src={`/sounds/${button.file}`} />
      ))}
    </div>
  );
};

export default Sounds;
