// src/components/PreviewPage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { components } = location.state || { components: [] };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Preview of Components</h1>

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
                  className="p-4 mb-6 w-full text-center shadow-md hover:opacity-80 transition duration-200"
                >
                  {component.buttonText}
                </button>
              );

            case 'sectionTitle':
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <h2
                    style={{ color: component.titleColor }}
                    className={`text-3xl font-semibold mb-2`}
                  >
                    {component.title}
                  </h2>
                  <h3
                    style={{ color: component.subtitleColor }}
                    className={`text-xl text-gray-600`}
                  >
                    {component.subtitle}
                  </h3>
                </div>
              );

            case 'callToAsk':
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-700">Call to Ask</h2>
                  <p className="mb-2"><span className="font-medium">Name:</span> {component.name}</p>
                  <p className="mb-2"><span className="font-medium">Email:</span> {component.email}</p>
                  <p className="mb-2"><span className="font-medium">Phone Number:</span> {component.phoneNumber}</p>
                  <p className="mb-2"><span className="font-medium">Inquiry Type:</span> {component.inquiryType}</p>
                  <p className="mb-2"><span className="font-medium">Questions:</span> {component.questions}</p>
                  <p className="mb-2"><span className="font-medium">Address:</span> {component.address}</p>
                  <p className="mb-2"><span className="font-medium">Preferred Contact Time:</span> {component.preferredContactTime}</p>
                  <p className="mb-2"><span className="font-medium">Additional Notes:</span> {component.additionalNotes}</p>
                  {component.icons && component.icons.length > 0 && (
                    <div className="mb-2">
                      <span className="font-medium">Selected Icons:</span>
                      <div className="flex space-x-2 mt-2">
                        {component.icons.map((icon, iconIndex) => (
                          <span key={iconIndex} className="text-2xl">{icon}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {component.attachment && (
                    <div className="mt-4">
                      <span className="font-medium">Attachment:</span>
                      <a
                        href={URL.createObjectURL(component.attachment)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2"
                      >
                        {component.attachment.name}
                      </a>
                    </div>
                  )}
                </div>
              );

            case 'image':
              return (
                <div key={index} className="mb-8">
                  <img
                    src={component.imageSrc}
                    alt={component.altText}
                    style={{
                      width: component.width,
                      height: component.height,
                      borderRadius: `${component.borderRadius}px`,
                      boxShadow: component.shadow || '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    className="rounded-lg shadow-md mx-auto"
                  />
                  {component.altText && (
                    <p className="text-center text-gray-600 mt-2">{component.altText}</p>
                  )}
                </div>
              );

            default:
              return null;
          }
        })
      )}

      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white p-3 rounded-md shadow-md hover:bg-gray-700 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
