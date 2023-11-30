// src/components/ImageSelector.js
import React, { useEffect, useState } from 'react';

const ImageSelector = ({ onSelect }) => {
  const [imageOptions, setImageOptions] = useState([]);

  useEffect(() => {
    // Fetch the list of images dynamically from the public/images folder
    const importAll = (r) => r.keys().map((image) => image.slice(2));
    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    setImageOptions(images);
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select an image</option>
      {imageOptions.map((image, index) => (
        <option key={index} value={image}>
          {image}
        </option>
      ))}
    </select>
  );
};

export default ImageSelector;
