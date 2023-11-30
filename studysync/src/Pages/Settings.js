// import React, { useState } from 'react';
// import ImageSelector from '../components/ImageSelector';
// import { FaTimes } from 'react-icons/fa';
// import './Settings.css';

// const Settings = ({ onClose }) => {
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedContent, setSelectedContent] = useState('backgroundSelector');

//   const handleImageSelect = (image) => {
//     setSelectedImage(image);
//     document.body.style.backgroundImage = `url(/images/${image})`;
//     onClose();
//   };

//   const handleButtonClick = (content) => {
//     setSelectedContent(content);
//   };

//   return (
//     <div className="settings-container">
//       <div className="settings-sidebar">
//         <button className="sidebar-button" onClick={() => handleButtonClick('backgroundSelector')}>
//           Timer Settings
//         </button>
//         <button className="sidebar-button" onClick={() => handleButtonClick('hii')}>
//           Button 2
//         </button>
//         <button className="sidebar-button">Button 3</button>
//         <button className="sidebar-button">Button 4</button>
//       </div>
//       <div className="sidebar-divider"></div>
//       <div className="settings-content">
//         <div>
//           <div className="settings-header">
//             <h2>Settings</h2>
//             <button onClick={onClose}>
//               <FaTimes />
//             </button>
//           </div>
          
//           <div className="settings-content">
//             {selectedContent === 'backgroundSelector' ? (
//               <>
//                 <h3>Background Selector</h3>
//                 <ImageSelector onSelect={handleImageSelect} />
//               </>
//             ) : (
//               <h3>Hii</h3>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;







import React, { useState } from 'react';
import ImageSelector from '../components/ImageSelector';
import { FaTimes } from 'react-icons/fa';
import './Settings.css';

const Settings = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedContent, setSelectedContent] = useState('backgroundSelector');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    document.body.style.backgroundImage = `url(/images/${image})`;
    onClose();
  };

  const handleButtonClick = (content) => {
    setSelectedContent(content);
    setShowDropdown(false); // Close the dropdown when switching content
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <button className="sidebar-button" onClick={() => handleButtonClick('backgroundSelector')}>
          Timer Settings
        </button>
        <button className="sidebar-button" onClick={() => handleButtonClick('hii')}>
          Button 2
        </button>
        <button className="sidebar-button">Button 3</button>
        <button className="sidebar-button">Button 4</button>
      </div>
      <div className="sidebar-divider"></div>
      <div className="settings-content">
        <div>
          <div className="settings-header">
            <h2>Settings</h2>
            <button className="close-button" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          
          <div className="settings-content">
            {selectedContent === 'backgroundSelector' ? (
              <>
                <h3>Background Selector</h3>
                <ImageSelector onSelect={handleImageSelect} />
              </>
            ) : (
              <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>Hii</button>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <p onClick={() => console.log('Snow selected')}>Snow</p>
                    <p onClick={() => console.log('Rain selected')}>Rain</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;