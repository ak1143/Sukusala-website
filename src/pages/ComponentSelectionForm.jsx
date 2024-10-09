// src/components/ComponentSelection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitleForm, ImageForm, CallToAskForm, ButtonForm, FeatureListForm } from "../components/index";

const componentsList = [
  { id: 'sectionTitle', name: 'Section Title' },
  { id: 'image', name: 'Image' },
  { id: 'callToAsk', name: 'Call to Ask' },
  { id: 'button', name: 'Button' },
  { id: 'feature', name: 'Feature' },
];

const initialFormData = {
  title: '',
  subtitle: '',
  titleColor: '#000000',
  subtitleColor: '#000000',
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
  buttonText: '',
  buttonColor: '#007BFF',
  fontSize: 16,
  fontColor: '#FFFFFF',
  borderRadius: 5,
  contactName: '',
  contactEmail: '',
  contactMessage: '',
};

const initialImageData = {
  width: '',
  height: '',
  altText: '',
  borderRadius: '',
  shadow: '',
  imageSrc: null,
};

const ComponentSelection = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [imageData, setImageData] = useState(initialImageData);
  const [addedComponents, setAddedComponents] = useState([]);

  const handleComponentChange = (e) => {
    console.log(e.target.value);
    setSelectedComponent(e.target.value);
    resetFormData(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (selectedComponent === 'callToAsk') {
      if (type === 'checkbox') {
        setFormData((prev) => {
          const icons = checked ? [...prev.icons, value] : prev.icons.filter((icon) => icon !== value);
          return { ...prev, icons };
        });
      } else if (name === 'attachment') {
        setFormData((prev) => ({ ...prev, attachment: files[0] }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else if (selectedComponent === 'image') {
      setImageData((prev) => ({ ...prev, [name]: value }));
    } else {
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

  const resetFormData = (component) => {
    if (component === 'image') {
      setImageData(initialImageData);
    } else if (component === 'callToAsk') {
      setFormData(initialFormData);
    } else if (component === 'button') {
      setFormData((prev) => ({ ...prev, buttonText: '', buttonColor: '#007BFF', fontSize: 16, fontColor: '#FFFFFF', borderRadius: 5 }));
    } else if (component === 'contact') {
      setFormData((prev) => ({ ...prev, contactName: '', contactEmail: '', contactMessage: '' }));
    } else if (component === 'feature') {
      setFormData(initialFormData);
    } else {
      setFormData(initialFormData);
    }
  };

  const handleAddComponent = () => {
    if (!selectedComponent) {
      alert('Please select a component type.');
      return;
    }

    let newComponent = {};
    let isValid = true;

    switch (selectedComponent) {
      case 'sectionTitle':
        isValid = formData.title && formData.subtitle;
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'image':
        isValid = imageData.imageSrc && imageData.altText;
        newComponent = { ...imageData, componentType: selectedComponent };
        break;
      case 'callToAsk':
        isValid = formData.name && formData.email && formData.phoneNumber && formData.inquiryType && formData.questions;
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'button':
        isValid = formData.buttonText;
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'feature':
        isValid = formData.name && formData.email && formData.phoneNumber && formData.inquiryType && formData.questions;
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      case 'contact':
        isValid = formData.contactName && formData.contactEmail && formData.contactMessage;
        newComponent = { ...formData, componentType: selectedComponent };
        break;
      default:
        alert('Unknown component type.');
        return;
    }

    if (isValid) {
      setAddedComponents((prev) => [...prev, newComponent]);
      resetFormData(selectedComponent);
      setSelectedComponent('');
    } else {
      alert(`Please fill out all fields for ${selectedComponent.replace(/([A-Z])/g, ' $1').trim()}.`);
    }
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
        <CallToAskForm formData={formData} handleInputChange={handleInputChange} />
      )}
      {selectedComponent === 'button' && (
        <ButtonForm formData={formData} handleInputChange={handleInputChange} />
      )}
      {selectedComponent === 'feature' && (
        <FeatureListForm formData={formData} handleInputChange={handleInputChange} />
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
