import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

const Settings = ({ onClose }) => {
  const [breakTime, setBreakTime] = useState('');
  const [pomodoroTime, setPomodoroTime] = useState('');

  const handleSaveChanges = () => {
    if (!breakTime || !pomodoroTime) {
      console.error('Please fill in both fields.');
      return;
    }

    // Logic to save changes can be added here if needed

    onClose(); // Close the Settings component
  };

  return (
    <div style={containerStyles}>
      <div style={headerContainerStyles}>
        <h2 style={headerStyles}>Pomodoro Settings</h2>
        <RiCloseLine style={closeButtonStyles} onClick={onClose} />
      </div>
      <div style={inputRowStyles}>
        <label htmlFor="breakTime" style={labelStyles}>
          Break Time (min):
        </label>
        <input
          type="number"
          id="breakTime"
          style={inputStyles}
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
        />
      </div>
      <div style={inputRowStyles}>
        <label htmlFor="pomodoroTime" style={labelStyles}>
          Pomodoro Time (min):
        </label>
        <input
          type="number"
          id="pomodoroTime"
          style={inputStyles}
          value={pomodoroTime}
          onChange={(e) => setPomodoroTime(e.target.value)}
        />
      </div>
      <button style={saveButtonStyles} onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

// Styles
const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  height: '70%',
  overflowY: 'auto',
  maxHeight: '500px',
  backgroundColor: '#252525',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  borderRadius: '8px',
  zIndex: '999',
  color: '#fff',
};

const headerContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',
};

const headerStyles = {
  fontSize: '1.5rem',
  alignItems: 'center',
};

const closeButtonStyles = {
  cursor: 'pointer',
  fontSize: '1.5rem',
};

const inputRowStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',
  marginBottom: '15px',
};

const labelStyles = {
  fontSize: '1rem',
  color: '#ecf0f1',
  alignSelf: 'center',
};

const inputStyles = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #323232',
  backgroundColor: '#252525',
  color: '#fff',
};

const saveButtonStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default Settings;
