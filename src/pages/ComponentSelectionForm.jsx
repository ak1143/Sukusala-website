// src/components/ComponentSelection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitleForm, ImageForm, CallToAskForm, ButtonForm } from "../components/index";

const componentsList = [
  { id: 'sectionTitle', name: 'Section Title' },
  { id: 'image', name: 'Image' },
  { id: 'callToAsk', name: 'Call to Ask' },
  { id: 'button', name: 'Button' },
];

const ComponentSelection = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('');
  const [formData, setFormData] = useState({
    // Section Title Fields
    title: '',
    subtitle: '',
    titleColor: '#000000',
    subtitleColor: '#000000',

    // Call to Ask Fields
    name: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    questions: '',
    icons: [],
    address: '',
    preferredContactTime: '',
    additionalNotes: '',
    attachment: null,

    // Button Fields
    buttonText: '',
    buttonColor: '#007BFF',
    fontSize: 16,
    fontColor: '#FFFFFF',
    borderRadius: 5,
  });
  const [imageData, setImageData] = useState({
    width: '',
    height: '',
    altText: '',
    borderRadius: '',
    shadow: '',
    imageSrc: null,
  });
  const [addedComponents, setAddedComponents] = useState([]);

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (selectedComponent === 'sectionTitle') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (selectedComponent === 'image') {
      setImageData((prev) => ({ ...prev, [name]: value }));
    } else if (selectedComponent === 'callToAsk') {
      if (type === 'checkbox') {
        setFormData((prev) => {
          const icons = checked
            ? [...prev.icons, value]
            : prev.icons.filter((icon) => icon !== value);
          return { ...prev, icons };
        });
      } else if (name === 'attachment') {
        setFormData((prev) => ({ ...prev, attachment: files[0] }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else if (selectedComponent === 'button') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData((prev) => ({ ...prev, imageSrc: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetFormData = () => {
    if (selectedComponent === 'sectionTitle') {
      setFormData((prev) => ({
        ...prev,
        title: '',
        subtitle: '',
        titleColor: '#000000',
        subtitleColor: '#000000',
      }));
    } else if (selectedComponent === 'image') {
      setImageData({
        width: '',
        height: '',
        altText: '',
        borderRadius: '',
        shadow: '',
        imageSrc: null,
      });
    } else if (selectedComponent === 'callToAsk') {
      setFormData((prev) => ({
        ...prev,
        name: '',
        email: '',
        phoneNumber: '',
        inquiryType: '',
        questions: '',
        icons: [],
        address: '',
        preferredContactTime: '',
        additionalNotes: '',
        attachment: null,
      }));
    } else if (selectedComponent === 'button') {
      setFormData((prev) => ({
        ...prev,
        buttonText: '',
        buttonColor: '#007BFF',
        fontSize: 16,
        fontColor: '#FFFFFF',
        borderRadius: 5,
      }));
    }
  };

  const handleAddComponent = () => {
    if (!selectedComponent) {
      alert('Please select a component type.');
      return;
    }

    let newComponent = {};

    switch (selectedComponent) {
      case 'sectionTitle':
        if (!formData.title || !formData.subtitle) {
          alert('Please fill out all Section Title fields.');
          return;
        }
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'image':
        if (!imageData.imageSrc || !imageData.altText) {
          alert('Please fill out all Image fields.');
          return;
        }
        newComponent = { ...imageData, componentType: selectedComponent };
        break;
      case 'callToAsk':
        if (
          !formData.name ||
          !formData.email ||
          !formData.phoneNumber ||
          !formData.inquiryType ||
          !formData.questions
        ) {
          alert('Please fill out all Call to Ask fields.');
          return;
        }
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'button':
        if (!formData.buttonText) {
          alert('Please enter the button text.');
          return;
        }
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      default:
        alert('Unknown component type.');
        return;
    }

    setAddedComponents((prev) => [...prev, newComponent]);
    resetFormData();
    setSelectedComponent('');
  };

  const handlePreview = () => {
    if (addedComponents.length === 0) {
      alert('Please add at least one component to preview.');
      return;
    }
    navigate('/preview', { state: { components: addedComponents } });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Component Selection</h1>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium text-gray-700">Select Component Type:</label>
        <select
          value={selectedComponent}
          onChange={handleComponentChange}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select Component Type --</option>
          {componentsList.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>

      {/* Render Forms Based on Selected Component */}
      {selectedComponent === 'sectionTitle' && (
        <PageTitleForm formData={formData} handleInputChange={handleInputChange} />
      )}

      {selectedComponent === 'image' && (
        <ImageForm
          formData={imageData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
        />
      )}

      {selectedComponent === 'callToAsk' && (
        <CallToAskForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === 'button' && (
        <ButtonForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={handleAddComponent}
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 flex-1"
        >
          Add Component
        </button>
        <button
          onClick={handlePreview}
          className="bg-green-600 text-white p-3 rounded-md shadow-md hover:bg-green-700 transition duration-200 flex-1"
        >
          Preview Components
        </button>
      </div>
    </div>
  );
};

export default ComponentSelection;
