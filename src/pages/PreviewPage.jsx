import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useComponentStore from "../store/useComponentStore";
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
} from "../components";

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { addedComponents, setSelectedComponent, setEditComponentIndex } = useComponentStore();

  const handleEdit = () =>{
    navigate(-1)
    // console.log(addedComponents);
    if(addedComponents.length === 0 ){
      alert("you have not added any component.")
    }
  
    const componentToEdit = addedComponents[addedComponents.length-1];
    
    setSelectedComponent(componentToEdit.componentType);
  
    if (componentToEdit.componentType === "card") {
      setSelectedCardType(componentToEdit.componentType);
    }
    setEditComponentIndex(addedComponents.length-1);
  };

  const handleSaveConfiguratoin = ()=>{
    navigate(-1);
    setEditComponentIndex(-1);
    setSelectedComponent('');
  }

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Preview of Components
      </h1>

      {addedComponents.length === 0 ? (
        <p className="text-center text-gray-600">No components added yet.</p>
      ) : (
        addedComponents.map((component, index) => {
          switch (component.componentType) {
            case "pageTitle":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
                      <PageTitleComponent />
                     </div>
              
            case "button":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
                    <ButtonFormComponent />
                    </div>

            case "callToAsk":
              return <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner">
              <CallToAskComponent />
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
              return <ContactCardComponent key={index} />

            case "registeredCard":
              return <RegisteredCardComponent key={index}  />
              
            case "map":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <MapComponent />
                </div>
              );

            case "paragraph":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ParagraphComponent />
                </div>
              );

            case "serviceCard":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ServiceCardComponent />
                </div>
              );

            case "serviceList":
              return (
                <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-inner">
                  <ServiceListComponent />
                </div>
              );
            default:
              return null
          }
        })
      )}

      <div className="text-center pt-10 flex gap-2">
        <button
          onClick={handleEdit}
          className="bg-red-500 text-white p-3 rounded-md shadow-md hover:bg-red-700 transition duration-200"
        >
          Edit
        </button>
        <button
        onClick={handleSaveConfiguratoin}
        className="bg-green-600 text-white p-3 rounded-md shadow-md hover:bg-green-800 transition duration-200"
        >
          Save Component
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
