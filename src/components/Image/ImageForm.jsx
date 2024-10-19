import React from 'react';
import ImageUpload from "./ImageUpload";
import useComponentStore from '../../store/useComponentStore';

const ImageForm = () => {
  const setImageData = useComponentStore((state) => state.setImageData);
  const imageData = useComponentStore((state) => state.imageData);




  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setImageData({
      ...imageData, // Spread the current imageData object
      [name]: type === 'checkbox' ? checked : value, // Update the field dynamically
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Image</h2>
      <ImageUpload/>
      <label className="block mb-2 text-lg font-medium text-gray-700">Width:</label>
      <input
        type="number"
        name="width"
        value={imageData.width}
        onChange={handleInputChange}
        className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm"
      />
      <label className="block mb-2 text-lg font-medium text-gray-700">Height:</label>
      <input
        type="number"
        name="height"
        value={imageData.height}
        onChange={handleInputChange }
        className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm"
      />
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="shadow"
          checked={imageData.shadow}
          onChange={handleInputChange }
          className="form-checkbox"
        />
        <span className="ml-2">Apply Shadow</span>
      </label>
    </div>
     
    
  );
};

export default ImageForm;
