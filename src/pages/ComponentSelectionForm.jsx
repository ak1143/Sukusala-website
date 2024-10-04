import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ButtonForm} from '../components'; // Adjust the import path based on your folder structure

const ComponentSelection = () => {
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    componentType: '',
    buttonText: '',
    buttonColor: '#000000',
    fontSize: 16,
    fontColor: '#FFFFFF',
    borderRadius: 5,
    title: '',
    subtitle: '',
    titleColor: '#000000',
    subtitleColor: '#000000',
    phoneNumber: '',
    questions: '',
    icons: [],
    imageSrc: '',
    altText: '',
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    shadow: 'none',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { ...formData, componentType: formData.componentType },
    ]);
    // Reset form after adding a component
    setFormData({
      ...formData,
      buttonText: '',
      buttonColor: '#000000',
      fontSize: 16,
      fontColor: '#FFFFFF',
      borderRadius: 5,
      title: '',
      subtitle: '',
      titleColor: '#000000',
      subtitleColor: '#000000',
      phoneNumber: '',
      questions: '',
      icons: [],
      imageSrc: '',
      altText: '',
      width: '100%',
      height: 'auto',
      borderRadius: 0,
      shadow: 'none',
    });
  };

  const handleSubmit = () => {
    navigate('/preview', { state: { components } });
  };

  return (
    <div className="max-w-full mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Component Selection</h1>

      <label className="block mb-2 text-lg font-medium">Select Component Type:</label>
      <select
        name="componentType"
        value={formData.componentType}
        onChange={handleInputChange}
        className="border border-gray-300 p-3 mb-6 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">-- Select Component Type --</option>
        <option value="button">Button</option>
        <option value="sectionTitle">Section Title</option>
        <option value="callToAsk">Call to Ask</option>
        <option value="image">Image</option>
      </select>

      {formData.componentType === 'button' && (
        <ButtonForm formData={formData} handleInputChange={handleInputChange} />
      )}

      {formData.componentType === 'sectionTitle' && (
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter title"
          />
          <label className="block mb-2 text-lg font-medium">Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter subtitle"
          />
          <label className="block mb-2 text-lg font-medium">Title Color:</label>
          <input
            type="color"
            name="titleColor"
            value={formData.titleColor}
            onChange={handleInputChange}
            className="border border-gray-300 mb-4"
          />
          <label className="block mb-2 text-lg font-medium">Subtitle Color:</label>
          <input
            type="color"
            name="subtitleColor"
            value={formData.subtitleColor}
            onChange={handleInputChange}
            className="border border-gray-300 mb-4"
          />
        </div>
      )}

      {formData.componentType === 'callToAsk' && (
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter phone number"
          />
          <label className="block mb-2 text-lg font-medium">Questions:</label>
          <input
            type="text"
            name="questions"
            value={formData.questions}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter questions"
          />
          <label className="block mb-2 text-lg font-medium">Icons (comma separated):</label>
          <input
            type="text"
            name="icons"
            value={formData.icons}
            onChange={(e) =>
              setFormData({ ...formData, icons: e.target.value.split(',').map(icon => icon.trim()) })
            }
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter icons (comma separated)"
          />
        </div>
      )}

      {formData.componentType === 'image' && (
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Image Source:</label>
          <input
            type="text"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image source URL"
          />
          <label className="block mb-2 text-lg font-medium">Alt Text:</label>
          <input
            type="text"
            name="altText"
            value={formData.altText}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter alt text for the image"
          />
          <label className="block mb-2 text-lg font-medium">Width:</label>
          <input
            type="text"
            name="width"
            value={formData.width}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter width (e.g., '100%', '300px')"
          />
          <label className="block mb-2 text-lg font-medium">Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter height (e.g., 'auto', '200px')"
          />
          <label className="block mb-2 text-lg font-medium">Border Radius:</label>
          <input
            type="number"
            name="borderRadius"
            value={formData.borderRadius}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter border radius (px)"
          />
          <label className="block mb-2 text-lg font-medium">Shadow:</label>
          <input
            type="text"
            name="shadow"
            value={formData.shadow}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter shadow (e.g., '0px 4px 8px rgba(0,0,0,0.2)')"
          />
        </div>
      )}

      <button
        type="button"
        onClick={addComponent}
        className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200  mb-4 mr-3"
      >
        Add Component
      </button>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-3 rounded-md shadow-md hover:bg-green-700 transition duration-200"
      >
        Preview Components
      </button>
    </div>
  );
};

export default ComponentSelection;
