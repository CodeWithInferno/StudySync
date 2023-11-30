// src/App.js
import React, { useState } from 'react';
import { FaHome, FaCog, FaBell } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { CiCloudOn } from 'react-icons/ci';
import { FaMusic } from 'react-icons/fa6';
import { LuAppWindow } from 'react-icons/lu';
import './Dock.css';
import Settings from '../Pages/Settings';
import Sounds from '../components/Sounds'; // Import the Sounds component
import ImageSelector from './ImageSelector';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
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

  return (
    <div className="App">
      <Dock>
        <DockButton icon={<FaHome />} />
        <DockButton icon={<FaCog />} onClick={openSettings} />
        <DockButton icon={<FaBell />} />
        <DockButton icon={<ImStatsDots />} />
        <DockButton icon={<CiCloudOn />} />
        <DockButton icon={<FaMusic />} onClick={openMusic} />
        <DockButton icon={<LuAppWindow />} onClick={openImage} />
      </Dock>

      {isSettingsOpen && <Settings onClose={closeSettings} />}
      {isMusicOpen && <Sounds onClose={closeMusic} />}
      {isImageOpen && <ImageSelector onClose={closeImage} />}
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