import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PageTitleComponent,
  ImageComponent,
  CallToAskComponent,
  ButtonFormComponent,
  ContactCardComponent,
  RegisteredCardComponent,
  MapComponent,
  ParagraphComponent,
  ServiceCardComponent,
  ServiceListComponent
} from "../components"; // Ensure all components are imported correctly

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { components } = location.state || { components: [] };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Preview of Components
      </h1>

      {components.length === 0 ? (
        <p className="text-center text-gray-600">No components added yet.</p>
      ) : (
        components.map((component, index) => {
          switch (component.componentType) {
            case "pageTitle":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
                      <PageTitleComponent formData={component} />;
                     </div>
              
            case "button":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
                    <ButtonFormComponent component={component} />;
                    </div>

            case "callToAsk":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
              <CallToAskComponent component={component} />;
              </div>

            case "image":
              return (
                <ImageComponent
                  key={index}
                  imageSrc={component.imageSrc}
                  formData={{
                    altText: component.altText, // Optional
                    width: component.width, // Optional
                    height: component.height, // Optional
                    shadow: component.shadow, // Optional
                  }}
                />
              );

            case "contactCard":
              return <ContactCardComponent key={index} formData={component} />;

            case "registeredCard":
              return <RegisteredCardComponent key={index} formData={component} />;
              
            case "map":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <MapComponent formData={component} />
                </div>
              );

            case "paragraph":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ParagraphComponent formData={component} />
                </div>
              );

            case "serviceCard":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ServiceCardComponent formData={component} />
                </div>
              );

            case "serviceList":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ServiceListComponent servicesData={component} />
                </div>
              );
            default:
              return null;
          }
        })
      )}

      <div className="text-center pt-10">
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
