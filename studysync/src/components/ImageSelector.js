
import React, { useEffect, useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { LuPlus } from 'react-icons/lu';
import { FaPaw } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { FaCity } from 'react-icons/fa';

const ImageSelector = ({ onSelect, onClose, onSelectImage }) => {
  const [imageOptions, setImageOptions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch the list of images dynamically from the public/images folder
    const importAll = (r) => r.keys().map((image) => image.slice(2));
    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    setImageOptions(images);
  }, []);

  const containerStyles = {
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
    backgroundColor: 'rgba(37, 37, 37, 0.7)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: '999',
    color: '#fff',
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px',
  };

  const buttonStyles = {
    border: '1px solid #303030',
    borderRadius: '10px',
    padding: '10px',
    width: '80px',
    height: '80px',
    cursor: 'pointer',
  };

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: '10px',
    marginTop: '20px',
  };

  const imageStyles = {
    width: '100%', // Use 100% width to fill the container
    height: '80px', // Set a fixed height
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };
  
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onSelectImage(image); // Notify the parent component
  };

  useEffect(() => {
    // Update the page background when selectedImage changes
    document.body.style.backgroundImage = selectedImage
      ? `url('../../public/images/${selectedImage}')`
      : 'none';
    document.body.style.backgroundSize = 'cover';
  }, [selectedImage]);

  return (
    <div style={containerStyles}>
      <div style={buttonContainerStyles}>
        <button style={buttonStyles} onClick={() => handleImageSelect('button1')}>
          <LuPlus size={30} />
        </button>
        <button style={buttonStyles} onClick={() => handleImageSelect('button2')}>
          <CiStar size={30} />
        </button>
        <button style={buttonStyles} onClick={() => handleImageSelect('button3')}>
          <FaPaw size={30} />
        </button>
        <button style={buttonStyles} onClick={() => handleImageSelect('button4')}>
          <FaCity size={30} />
        </button>
      </div>
      <h2>Select an Image</h2>
      <FaTimes size={30} style={closeButtonStyles} onClick={onClose} />
      <div style={gridContainerStyles}>
        {imageOptions.map((image, index) => (
          <img
            key={index}
            src={require(`../../public/images/${image}`)}
            alt={`Image ${index}`}
            style={imageStyles}
            onClick={() => handleImageSelect(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;









