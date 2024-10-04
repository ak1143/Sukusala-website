import React from 'react';

const PageTitleForm = ({ formData, handleInputChange }) => {
  return (
    <div>
      <label>Title</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Enter title"
        className="border p-2 mb-4 w-full"
      />

      <label>Subtitle</label>
      <input
        name="subtitle"
        value={formData.subtitle}
        onChange={handleInputChange}
        placeholder="Enter subtitle"
        className="border p-2 mb-4 w-full"
      />

      <label>Title Color</label>
      <input
        name="titleColor"
        type="color"
        value={formData.titleColor}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      />

      <label>Subtitle Color</label>
      <input
        name="subtitleColor"
        type="color"
        value={formData.subtitleColor}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      />

      <label>Title Font Size</label>
      <select
        name="titleFontSize"
        value={formData.titleFontSize}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      >
        <option value="text-4xl">Large</option>
        <option value="text-3xl">Medium</option>
        <option value="text-2xl">Small</option>
      </select>

      <label>Subtitle Font Size</label>
      <select
        name="subtitleFontSize"
        value={formData.subtitleFontSize}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      >
        <option value="text-xl">Large</option>
        <option value="text-lg">Medium</option>
        <option value="text-md">Small</option>
      </select>

      {/* Alignment Field */}
      <label>Text Alignment</label>
      <select
        name="textAlign"
        value={formData.textAlign}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </div>
  );
};

export default PageTitleForm;
