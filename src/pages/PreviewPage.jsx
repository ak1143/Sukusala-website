import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import{
  PageTitleComponent,
  ImageComponent
} from "../components/index"
const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { components } = location.state || {};

  return (
    <div className="max-w-full mx-auto p-20 bg-white rounded mt-10">
      <h1 className="text-3xl font-bold mb-4">Preview Components</h1>

      <div className='max-w-full shadow-lg border border-gray-200 p-10'>
        {components && components.length > 0 ? (
          components.map((component, index) => {
            if (component.componentType === 'sectionTitle') {
              return (
                <PageTitleComponent
                  key={index}
                  title={component.title}
                  subtitle={component.subtitle}
                  titleColor={component.titleColor}
                  subtitleColor={component.subtitleColor}
                  titleFontFamily={component.titleFont} // Use the correct font prop
                  subtitleFontFamily={component.subtitleFont} // Use the correct font prop
                  titleFontSize={component.titleFontSize} // Pass font size prop
                  subtitleFontSize={component.subtitleFontSize} // Pass font size prop
                  textAlign={component.textAlign} // Pass alignment prop
                />
              );
            } else if (component.componentType === 'image') {
              return (
                <ImageComponent
                  key={index}
                  // Assuming you have defined props for Image component
                  src={component.imageSrc} // You need to ensure this prop exists in the component state
                  alt={component.imageAlt} // You need to ensure this prop exists in the component state
                />
              );
            }
            return null; // Fallback in case of unrecognized component types
          })
        ) : (
          <p>No components added.</p>
        )}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default PreviewPage;
