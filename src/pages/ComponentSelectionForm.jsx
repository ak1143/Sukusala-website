import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTitleForm, ImageForm } from "../components/index";


const components = [
  { id: 'sectionTitle', name: 'Section Title' },
  { id: 'image', name: 'Image' }, // Add Image to components
];

const ComponentSelectionForm = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('');
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
        const base64Image = reader.result;
        setImageData((prev) => ({ ...prev, imageSrc: base64Image }));
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
  };

  const handlePreview = () => {
    navigate('/preview', { state: { components: addedComponents } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Component Selection Form</h1>
      <label className="block mb-2">Select Component:</label>
      <select
        value={selectedComponent}
        onChange={handleComponentChange}
        className="border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select --</option>
        {components.map((component) => (
          <option key={component.id} value={component.id}>
            {component.name}
          </option>
        ))}
      </select>

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

      <div className="mt-4">
        <button 
          onClick={handleAddComponent}
          className="bg-blue-500 text-white p-3 rounded mr-2 hover:bg-blue-600 transition duration-200"
        >
          Add Component
        </button>
        <button 
          onClick={handlePreview}
          className="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-200"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default ComponentSelectionForm;
