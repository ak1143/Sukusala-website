import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CallToAskComponent } from '../components';
import ButtonFormComponent from '../components/Button/ButtonFormComponent';

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
              return <ButtonFormComponent key={index} component={component} />

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
              return <CallToAskComponent key={index} component={component} />;

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
