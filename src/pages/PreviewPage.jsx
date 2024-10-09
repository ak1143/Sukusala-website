import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PageTitleComponent,
  ImageComponent,
  CallToAskComponent,
  ButtonFormComponent,
  ContactCardComponent,
  RegisteredCardComponent
} from "../components/index";

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { components } = location.state || { components: [] };
  console.log(components)

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Preview of Components
      </h1>

      {components.length === 0 ? (
        <p className="text-center text-gray-600">No components added yet.</p>
      ) : (
        components.map((component, index) => {
          switch (component.componentType) {
            case "pageTitle":
              return (
                <PageTitleComponent
                  key={index}
                  formData={component}
                />
              );

            case "button":
              return <ButtonFormComponent key={index} component={component} />;

            case "callToAsk":
              return <CallToAskComponent key={index} component={component} />;

            case "image":
              return (
                <ImageComponent
                  key={index}
                  imageSrc={component.imageSrc}
                  formData={{
                    altText: component.altText, // Optional
                    width: component.width, // Optional
                    height: component.height, // Optional
                    borderRadius: component.borderRadius, // Optional
                    shadow: component.shadow, // Optional
                  }}
                />
              );

            case "ContactCard":
              return <ContactCardComponent key={index} formData={component}/>;
            
            case "registeredCard" :{
              return <RegisteredCardComponent key={index} formData={component} />
            }
            
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
