// src/components/Settings.js
import React, { useState } from 'react';
import ThemeSelector from '../components/ThemeSelector';
import Rain from './rain';
import Snow from './snow';
import { FaTimes } from 'react-icons/fa';
import './Settings.css';

const Settings = ({ onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="settings-container">
      {/* ... Other settings content ... */}
      <div className="settings-content">
        <h3>Theme Selector</h3>
        <ThemeSelector onSelect={handleThemeSelect} />
        {selectedTheme === 'rain' && <Rain />}
        {selectedTheme === 'snow' && <Snow />}
      </div>
      {/* ... Other settings content ... */}
    </div>
  );
};

export default Settings;
