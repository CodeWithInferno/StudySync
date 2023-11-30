







// // Pomodoro.js
// import React, { useState, useEffect, useRef } from 'react';
// import Settings from './Settings';
// import Snowfall from 'react-snowfall';
// import Rain from '../components/rain';
// import { FaPlay, FaPause, FaRedo, FaCog } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Pomodoro.css';
// import SpotifyPlayer from '../components/SpotifyPlayer';
// import Signup from '../components/SignUp';
// import MyDock from '../components/Dock';
// import { useAuth } from '../components/AuthContext';
// import ImageSelector from '../components/ImageSelector'; // Import the ImageSelector component

// const Pomodoro = () => {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [timerState, setTimerState] = useState('idle');
//   const [showSettings, setShowSettings] = useState(false);
//   const [showSnow, setShowSnow] = useState(false);
//   const [showRain, setShowRain] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [isImageOpen, setIsImageOpen] = useState(false); // Track image selector state
//   const timerRef = useRef(null);

//   useEffect(() => {
//     const storedImage = localStorage.getItem('selectedImage');
//     if (storedImage) {
//       setSelectedImage(storedImage);
//       document.body.style.backgroundImage = `url(/images/${storedImage})`;
//       document.body.style.backgroundColor = '';
//       document.body.style.color = '';
//     } else {
//       document.body.style.backgroundColor = '#000';
//       document.body.style.color = '#fff';
//     }
//   }, []);

//   const { isAuth, login, logout } = useAuth();

//   useEffect(() => {
//     if (timerState === 'running') {
//       timerRef.current = setInterval(() => {
//         if (minutes === 0 && seconds === 0) {
//           clearInterval(timerRef.current);
//           setTimerState('idle');
//           notify();
//         } else if (seconds === 0) {
//           setMinutes((prevMinutes) => prevMinutes - 1);
//           setSeconds(59);
//         } else {
//           setSeconds((prevSeconds) => prevSeconds - 1);
//         }
//       }, 1000);
//     } else {
//       clearInterval(timerRef.current);
//     }

//     return () => clearInterval(timerRef.current);
//   }, [timerState, minutes, seconds]);

//   const startTimer = () => {
//     setTimerState('running');
//   };

//   const pauseTimer = () => {
//     setTimerState('paused');
//   };

//   const resetTimer = () => {
//     setTimerState('idle');
//     setMinutes(25);
//     setSeconds(0);
//   };

//   const notify = () => toast.info('Time to take a break!');

//   const toggleSettings = () => {
//     setShowSettings(!showSettings);
//   };

//   const toggleSnow = () => {
//     setShowSnow(!showSnow);
//   };

//   const toggleRain = () => {
//     setShowRain(true);
//   };

//   const toggleImageSelector = () => {
//     setIsImageOpen(!isImageOpen);
//   };

//   const handleSelectImage = (selectedImage) => {
//     localStorage.setItem('selectedImage', selectedImage);
//     setSelectedImage(selectedImage);
//     document.body.style.backgroundImage = `url(/images/${selectedImage})`;
//     document.body.style.backgroundColor = '';
//     document.body.style.color = '';
//   };

//   return (
//     <div className="pomodoro-container">
//       {showSnow && <Snowfall />}
//       {showRain && <Rain />}
//       <div className="timer-container">
//         <div className="timer">
//           <span className="time">
//             {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
//           </span>
//         </div>
//         <div className="buttons">
//           {timerState === 'idle' && (
//             <button onClick={startTimer}>
//               <FaPlay />
//             </button>
//           )}
//           {timerState === 'running' && (
//             <>
//               <button onClick={pauseTimer}>
//                 <FaPause />
//               </button>
//               <button onClick={resetTimer}>
//                 <FaRedo />
//               </button>
//             </>
//           )}
//           {timerState === 'paused' && (
//             <>
//               <button onClick={startTimer}>
//                 <FaPlay />
//               </button>
//               <button onClick={resetTimer}>
//                 <FaRedo />
//               </button>
//             </>
//           )}
//           <button onClick={toggleSettings}>
//             <FaCog />
//           </button>
//           <button onClick={toggleSnow}>Snow</button>
//           <button onClick={toggleRain}>Rain</button>
//           <button onClick={toggleImageSelector}>Change Image</button>
//         </div>
//       </div>

//       {showSettings && <Settings onClose={toggleSettings} />}
//       <SpotifyPlayer />

//       <ToastContainer />

//       {!isAuth && (
//         <div className="top-right-buttons">
//           <button className="transparent-button">SignUp</button>
//           <button className="transparent-button">Login</button>
//         </div>
//       )}
//       {isImageOpen && <ImageSelector onClose={toggleImageSelector} onSelectImage={handleSelectImage} />}
//       <MyDock />
//     </div>
//   );
// };

// export default Pomodoro;














import React, { useState, useEffect, useRef } from 'react';
import Settings from './Settings';
import Snowfall from 'react-snowfall';
import Rain from '../components/rain';
import { FaPlay, FaPause, FaRedo, FaCog } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Pomodoro.css';
import SpotifyPlayer from '../components/SpotifyPlayer';
import Signup from '../components/SignUp';
import MyDock from '../components/Dock';
import { useAuth } from '../components/AuthContext';
import ImageSelector from '../components/ImageSelector'; // Import the ImageSelector component

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerState, setTimerState] = useState('idle');
  const [showSettings, setShowSettings] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [showRain, setShowRain] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isImageOpen, setIsImageOpen] = useState(false); // Track image selector state
  const timerRef = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
      setSelectedImage(storedImage);
      document.body.style.backgroundImage = `url(/images/${storedImage})`;
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    } else {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    }
  }, []);

  const { isAuth, login, logout } = useAuth();

  useEffect(() => {
    if (timerState === 'running') {
      timerRef.current = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setTimerState('idle');
          notify();
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [timerState, minutes, seconds]);

  const startTimer = () => {
    setTimerState('running');
  };

  const pauseTimer = () => {
    setTimerState('paused');
  };

  const resetTimer = () => {
    setTimerState('idle');
    setMinutes(25);
    setSeconds(0);
  };

  const notify = () => toast.info('Time to take a break!');

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleSnow = () => {
    setShowSnow(!showSnow);
  };

  const toggleRain = () => {
    setShowRain(true);
  };

  const toggleImageSelector = () => {
    setIsImageOpen(!isImageOpen);
  };

  const handleSelectImage = (selectedImage) => {
    localStorage.setItem('selectedImage', selectedImage);
    setSelectedImage(selectedImage);
    document.body.style.backgroundImage = `url(/images/${selectedImage})`;
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  };

  return (
    <div className="pomodoro-container">
      {showSnow && <Snowfall />}
      {showRain && <Rain />}
      <div className="timer-container">
        <div className="timer">
          <span className="time">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
        <div className="buttons">
          {timerState === 'idle' && (
            <button onClick={startTimer}>
              <FaPlay />
            </button>
          )}
          {timerState === 'running' && (
            <>
              <button onClick={pauseTimer}>
                <FaPause />
              </button>
              <button onClick={resetTimer}>
                <FaRedo />
              </button>
            </>
          )}
          {timerState === 'paused' && (
            <>
              <button onClick={startTimer}>
                <FaPlay />
              </button>
              <button onClick={resetTimer}>
                <FaRedo />
              </button>
            </>
          )}
          <button onClick={toggleSettings}>
            <FaCog />
          </button>
          <button onClick={toggleSnow}>Snow</button>
          <button onClick={toggleRain}>Rain</button>
          <button onClick={toggleImageSelector}>Change Image</button>
        </div>
      </div>

      {showSettings && <Settings onClose={toggleSettings} />}
      <SpotifyPlayer />

      <ToastContainer />

      {!isAuth && (
        <div className="top-right-buttons">
          <button className="transparent-button">SignUp</button>
          <button className="transparent-button">Login</button>
        </div>
      )}
      {isImageOpen && <ImageSelector onClose={toggleImageSelector} onSelectImage={handleSelectImage} />}
      <MyDock />
    </div>
  );
};

export default Pomodoro;
