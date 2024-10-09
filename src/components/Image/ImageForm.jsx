import React from 'react';

const ImageForm = ({ formData, handleInputChange }) => {
  return (
    <div>
      <label>Upload Image</label>
      <input
        type="file"
        name='imageSrc'
        accept="image/*"
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      />
      <div className="mb-4">
        <label>Image Width (px)</label>
        <input
          type="number"
          name="width"
          value={formData.width}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Enter width in pixels"
        />
      </div>
      <div className="mb-4">
        <label>Image Height (px)</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Enter height in pixels"
        />
      </div>
      <div className="mb-4">
        <label>Alt Text</label>
        <input
          type="text"
          name="altText"
          value={formData.altText}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Enter alt text for the image"
        />
      </div>
      <div className="mb-4">
        <label>Border Radius</label>
        <input
          type="text"
          name="borderRadius"
          value={formData.borderRadius}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Enter border radius (e.g., 10px)"
        />
      </div>
      <div className="mb-4">
        <label>Shadow</label>
        <input
          type="text"
          name="shadow"
          value={formData.shadow}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          placeholder="Enter shadow properties (e.g., 0px 4px 10px rgba(0,0,0,0.5))"
        />
      </div>
    </div>
  );
};

export default ImageForm;
