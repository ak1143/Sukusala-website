import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitleForm, ImageForm } from "../components/index";


const components = [
  { id: 'sectionTitle', name: 'Section Title' },
  { id: 'image', name: 'Image' }, // Add Image to components
];

const ComponentSelection = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("");

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    titleColor: '#000000',
    subtitleColor: '#000000',
    titleFont: 'Arial',
    subtitleFont: 'Arial',
    titleFontSize: 'text-4xl',
    subtitleFontSize: 'text-xl',
    textAlign: 'left',
  });

  const [imageData, setImageData] = useState({
    width: "",
    height: "",
    altText: "",
    borderRadius: "",
    shadow: "",
    imageSrc: null,
  });

  const [contactCardData, setContactCardData] = useState({
    text: "",
    Phno:"",
  });

  const [addedComponents, setAddedComponents] = useState([]);

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedComponent === 'sectionTitle') {
      setFormData({ ...formData, [name]: value });
    } else if (selectedComponent === 'image') {
      setImageData({ ...imageData, [name]: value });
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

  const handleAddComponent = () => {
    if (selectedComponent) {
      const newComponent = selectedComponent === 'sectionTitle' 
        ? { ...formData, componentType: selectedComponent }
        : { ...imageData, componentType: selectedComponent };

      setAddedComponents([...addedComponents, newComponent]);
      
      // Reset form data
      if (selectedComponent === 'sectionTitle') {
        setFormData({
          title: '',
          subtitle: '',
          titleColor: '#000000',
          subtitleColor: '#000000',
          titleFont: 'Arial',
          subtitleFont: 'Arial',
          titleFontSize: 'text-4xl',
          subtitleFontSize: 'text-xl',
          textAlign: 'left',
        });
      } else if (selectedComponent === 'image') {
        setImageData({
          width: '',
          height: '',
          altText: '',
          borderRadius: '',
          shadow: '',
          imageSrc: null,
        });
      }
      setSelectedComponent('');
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

      {selectedComponent === "ContactCard" && (
        <ContactCardForm
          formData={contactCardData}
          handleInputChange={handleInputChange}
        />
      )}

      <div className="mt-4">
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
