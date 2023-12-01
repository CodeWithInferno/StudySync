// // src/App.js
// import React, { useState } from 'react';
// import { FaHome, FaCog, FaBell } from 'react-icons/fa';
// import { ImStatsDots } from 'react-icons/im';
// import { CiCloudOn } from 'react-icons/ci';
// import { FaMusic } from 'react-icons/fa6';
// import { LuAppWindow } from 'react-icons/lu';
// import './Dock.css';
// import Settings from '../Pages/Settings';
// import Sounds from '../components/Sounds'; // Import the Sounds component
// import ImageSelector from './ImageSelector';
// import Todo from './Todo';

// function App() {
//   const [selectedImage, setSelectedImage] = useState('');
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const [isMusicOpen, setIsMusicOpen] = useState(false);
//   const [isImageOpen, setIsImageOpen] = useState(false);
//   const handleSelectImage = (selectedImage) => {
//     localStorage.setItem('selectedImage', selectedImage);
//     setSelectedImage(selectedImage);
//     document.body.style.backgroundImage = `url(/images/${selectedImage})`;
//     document.body.style.backgroundColor = '';
//     document.body.style.color = '';
//   };
//   const openSettings = () => {
//     setIsSettingsOpen(true);
//   };

//   const closeSettings = () => {
//     setIsSettingsOpen(false);
//   };
//   const toggleImageSelector = () => {
//     setIsImageOpen(!isImageOpen);
//   };

//   const openImage = () => {
//     setIsImageOpen(true);
//   };

//   const closeImage = () => {
//     setIsImageOpen(false);
//   };

//   const openMusic = () => {
//     setIsMusicOpen(true);
//   };

//   const closeMusic = () => {
//     setIsMusicOpen(false);
//   };

//   return (
//     <div className="App">
//       <Dock>
//         <DockButton icon={<FaHome />} />
//         <DockButton icon={<FaCog />} onClick={openSettings} />
//         <DockButton icon={<FaBell />} />
//         <DockButton icon={<ImStatsDots />} />
//         <DockButton icon={<CiCloudOn />} />
//         <DockButton icon={<FaMusic />} onClick={openMusic} />
//         <DockButton icon={<LuAppWindow />} onClick={toggleImageSelector} />
//       </Dock>

//       {isSettingsOpen && <Settings onClose={closeSettings} />}
//       {isMusicOpen && <Sounds onClose={closeMusic} />}
//       {isImageOpen && <ImageSelector onClose={toggleImageSelector} onSelectImage={handleSelectImage} />}
//     </div>
//   );
// }

// const Dock = ({ children }) => {
//   return <div className="dock">{children}</div>;
// };

// const DockButton = ({ icon, onClick }) => {
//   return (
//     <div className="dock-button" onClick={onClick}>
//       {icon}
//     </div>
//   );
// };

// export default App;
















// src/App.js
import React, { useState } from 'react';
import { FaHome, FaCog, FaBell } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { CiCloudOn } from 'react-icons/ci';
import { FaMusic } from 'react-icons/fa6';
import { LuAppWindow } from 'react-icons/lu';
import { GiScrollQuill } from "react-icons/gi";
import './Dock.css';
import Settings from '../Pages/Settings';
import Sounds from '../components/Sounds';
import ImageSelector from './ImageSelector';
import Todo from './Todo';

function App() {
  const [selectedImage, setSelectedImage] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isTodoOpen, setIsTodoOpen] = useState(false); // New state for Todo component

  const handleSelectImage = (selectedImage) => {
    localStorage.setItem('selectedImage', selectedImage);
    setSelectedImage(selectedImage);
    document.body.style.backgroundImage = `url(/images/${selectedImage})`;
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const toggleImageSelector = () => {
    setIsImageOpen(!isImageOpen);
  };

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const openMusic = () => {
    setIsMusicOpen(true);
  };

  const closeMusic = () => {
    setIsMusicOpen(false);
  };

  const openTodo = () => {
    setIsTodoOpen(true);
  };

  const closeTodo = () => {
    setIsTodoOpen(false);
  };

  return (
    <div className="App">
      <Dock>
        <DockButton icon={<FaHome />} />
        <DockButton icon={<FaCog />} onClick={openSettings} />
        <DockButton icon={<GiScrollQuill />} onClick={openTodo} /> {/* Open Todo component on bell icon click */}
        <DockButton icon={<ImStatsDots />} />
        <DockButton icon={<CiCloudOn />} />
        <DockButton icon={<FaMusic />} onClick={openMusic} />
        <DockButton icon={<LuAppWindow />} onClick={toggleImageSelector} />
      </Dock>

      {isSettingsOpen && <Settings onClose={closeSettings} />}
      {isMusicOpen && <Sounds onClose={closeMusic} />}
      {isImageOpen && <ImageSelector onClose={toggleImageSelector} onSelectImage={handleSelectImage} />}
      {isTodoOpen && <Todo onClose={closeTodo} />} {/* Render Todo component */}
    </div>
  );
}

const Dock = ({ children }) => {
  return <div className="dock">{children}</div>;
};

const DockButton = ({ icon, onClick }) => {
  return (
    <div className="dock-button" onClick={onClick}>
      {icon}
    </div>
  );
};

export default App;
