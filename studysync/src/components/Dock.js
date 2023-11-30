import React from 'react';
import { FaHome, FaEnvelope, FaCog, FaBell, } from 'react-icons/fa';
import { ImStatsDots } from "react-icons/im";
import { CiCloudOn } from "react-icons/ci";
import { FaMusic } from "react-icons/fa6";
import './Dock.css';
import { LuAppWindow } from "react-icons/lu";

function App() {
  return (
    <div className="App">
      <Dock>
        <DockButton icon={<FaHome />} />
        <DockButton icon={<FaCog />} />
        <DockButton icon={<FaBell />} />
        <DockButton icon={<ImStatsDots />} />
        <DockButton icon={<CiCloudOn />} />
        <DockButton icon={<FaMusic />} />
        <DockButton icon={<LuAppWindow />} />
      </Dock>
    </div>
  );
}

const Dock = ({ children }) => {
  return <div className="dock">{children}</div>;
};

const DockButton = ({ icon }) => {
  return <div className="dock-button">{icon}</div>;
};

export default App;
