import React from 'react';
import { useLocation } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();
  const { components } = location.state || { components: [] };

  return (
    <div className="max-w-full mx-auto p-8 bg-gray-100 rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Preview of Components</h1>

      {components.length === 0 ? (
        <p className="text-center text-gray-600">No components added yet.</p>
      ) : (
        components.map((component, index) => {
          switch (component.componentType) {
            case 'button':
              return (
                <button
                  key={index}
                  style={{
                    backgroundColor: component.buttonColor,
                    color: component.fontColor,
                    fontSize: `${component.fontSize}px`,
                    borderRadius: `${component.borderRadius}px`,
                  }}
                  className="p-3 mb-4 w-full shadow-md hover:opacity-80 transition duration-200"
                >
                  {component.buttonText}
                </button>
              );
            case 'sectionTitle':
              return (
                <div key={index} className="mb-4">
                  <h2 style={{ color: component.titleColor }} className="text-2xl font-semibold">{component.title}</h2>
                  <h3 style={{ color: component.subtitleColor }} className="text-xl">{component.subtitle}</h3>
                </div>
              );
            case 'callToAsk':
              return (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-semibold">Call to Ask:</h4>
                  <p className="text-md">Phone Number: {component.phoneNumber}</p>
                  <p className="text-md">Questions: {component.questions}</p>
                  {component.icons && component.icons.length > 0 && (
                    <div className="flex space-x-2 mt-2">
                      {component.icons.map((icon, iconIndex) => (
                        <img key={iconIndex} src={icon} alt={icon} className="w-6 h-6" />
                      ))}
                    </div>
                  )}
                </div>
              );
            case 'image':
              return (
                <div key={index} className="mb-4">
                  <img
                    src={component.imageSrc}
                    alt={component.altText}
                    style={{
                      width: component.width,
                      height: component.height,
                      borderRadius: `${component.borderRadius}px`,
                      boxShadow: component.shadow,
                    }}
                  />
                </div>
              );
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default PreviewPage;
