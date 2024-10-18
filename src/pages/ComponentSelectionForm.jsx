
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useComponentStore from "../store/useComponentStore"; // Import the store
import {
  PageTitleForm,
  ImageForm,
  ContactCardForm,
  CallToAskForm,
  ButtonForm,
  RegisteredCardForm,
  MapForm,
  ParagraphForm,
  ServiceCardForm,
  ServiceListForm,
} from "../components/index";

const componentsList = [
  { id: "pageTitle", name: "Page Title" },
  { id: "image", name: "Image" },
  { id: "card", name: "Cards" },
  { id: "callToAsk", name: "Call to Ask" },
  { id: "button", name: "Button" },
  { id: "map", name: "Map" },
  { id: "paragraph", name: "Paragraph" },
  { id: "serviceList", name: "Service List" },
];

const cardTypes = [
  { id: "contactCard", name: "Contact Card" },
  { id: "registeredCard", name: "Register Card" },
  { id: "serviceCard", name: "Service Card" },
];

const ComponentSelection = () => {
  const navigate = useNavigate();
  
  // Use the Zustand store
  const {
    selectedComponent,
    selectedCardType,
    addedComponents,
    editComponentIndex,
    setAddedComponents,
    setSelectedComponent,
    setSelectedCardType,
    setEditComponentIndex,
    setPageTitleData,
    setImageData,
    setContactCardData,
    setCallToAskData,
    setButtonData,
    setRegisteredCardData,
    setMapData,
    setParagraphData,
    setServiceCardData,
    setServiceListData,
    // resetStore,
    pageTitleData,
    contactCardData,
    registeredCardData,
    serviceCardData,
    imageData,
    callToAskData,
    buttonData,
    paragraphData,
    mapData
  } = useComponentStore();

  // useEffect(() => {
  //   resetStore(); // Reset the store when the component mounts
  // }, []);

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleAddComponent = () => {
    if (!selectedComponent) {
      alert("Please select a component type.");
      return;
    }
  
    let newComponent = {};
  
    switch (selectedComponent) {
      case "card":
        if (!selectedCardType) {
          alert("Please select a card type.");
          return;
        }
  
        switch (selectedCardType) {
          case "contactCard":
            if (!contactCardData.text || !contactCardData.description) {
              alert("Please fill out all Contact Card fields.");
              return;
            }
            newComponent = {
              ...contactCardData,
              componentType: selectedCardType,
            };
            break;
  
          case "registeredCard":
            if (!registeredCardData.title || !registeredCardData.description) {
              alert("Please fill out all Registered Card fields.");
              return;
            }
            newComponent = {
              ...registeredCardData,
              componentType: selectedCardType,
            };
            break;
  
          case "serviceCard":
            if (!serviceCardData.title || !serviceCardData.description) {
              alert("Please fill out all Service Card fields.");
              return;
            }
            newComponent = {
              ...serviceCardData,
              componentType: selectedCardType,
            };
            break;
  
          default:
            alert("Unknown card type.");
            return;
        }
        break;
  
      case "pageTitle":
        if (!pageTitleData.title || !pageTitleData.subtitle) {
          alert("Please fill out all Page Title fields.");
          return;
        }
        newComponent = { ...pageTitleData, componentType: selectedComponent };
        break;
  
      case "image":
        if (!imageData.imageSrc || !imageData.altText) {
          alert("Please fill out all Image fields.");
          return;
        }
        newComponent = { ...imageData, componentType: selectedComponent };
        break;
  
      case "callToAsk":
        if (
          !callToAskData.name ||
          !callToAskData.email ||
          !callToAskData.phoneNumber ||
          !callToAskData.inquiryType ||
          !callToAskData.questions
        ) {
          alert("Please fill out all Call to Ask fields.");
          return;
        }
        newComponent = { ...callToAskData, componentType: selectedComponent };
        break;
  
      case "button":
        if (!buttonData.buttonText) {
          alert("Please enter the button text.");
          return;
        }
        newComponent = { ...buttonData, componentType: selectedComponent };
        break;
  
      case "map":
        if (!mapData.lat || !mapData.lng) {
          alert("Please fill out all Map fields.");
          return;
        }
        newComponent = { ...mapData, componentType: selectedComponent };
        break;
  
      case "paragraph":
        if (!paragraphData.content) {
          alert("Please fill out all Paragraph fields.");
          return;
        }
        newComponent = { ...paragraphData, componentType: selectedComponent };
        break;
  
      default:
        alert("Unknown component type.");
        return;
    }
  
    // Add the new component to the state
    setAddedComponents(newComponent);
    // console.log(mapData);
    // console.log(addedComponents)
  
    // Reset component selection
    setSelectedComponent(""); // Clear selected component
    setSelectedCardType("");  // Clear selected card type (if applicable)
  };

  const handleUpdateComponent =()=>{
    setSelectedComponent("");
    setEditComponentIndex(-1);
  }
  
  

  const handlePreview = () => {
    if (addedComponents.length === 0) {
      alert("Please add at least one component to preview.");
      return;
    }
    navigate("/preview", { state: { components: addedComponents } });
  };

  useEffect(()=>{console.log(addedComponents)},[addedComponents])

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Component Selection
      </h1>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium text-gray-700">
          Select Component Type:
        </label>
        <select
          disabled = {editComponentIndex === -1 ? false : true}
          value={selectedComponent}
          onChange={handleComponentChange}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>-- Select Component Type --</option>
          {componentsList.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>

      {/* Card Type Selection */}
      {selectedComponent === "card" && (
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Select Card Type:
          </label>
          <select
            value={selectedCardType}
            onChange={(e) => setSelectedCardType(e.target.value)}
            className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Card Type --</option>
            {cardTypes.map((card) => (
              <option key={card.id} value={card.id}>
                {card.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Render Forms Based on Selected Component */}
      {selectedComponent === "pageTitle" && (
        <PageTitleForm  />
      )}

      {selectedComponent === "image" && (
        <ImageForm />
      )}

      {/* Render Forms Based on Selected Card Type */}
      {selectedCardType === "contactCard" && (
        <ContactCardForm />
      )}

      {selectedCardType === "registeredCard" && (
        <RegisteredCardForm />
      )}

      {selectedCardType === "serviceCard" && (
        <ServiceCardForm />
      )}

      {selectedComponent === "callToAsk" && (
        <CallToAskForm />
      )}

      {selectedComponent === "button" && (
        <ButtonForm />
      )}

      {selectedComponent === "map" && (
        <MapForm />
      )}

      {selectedComponent === "paragraph" && (
        <ParagraphForm  />
      )}

      {selectedComponent === "serviceList" && (
        <ServiceListForm  />
      )}

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={editComponentIndex === -1 ? handleAddComponent : handleUpdateComponent}
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200 flex-1"
        >
          Add Component
        </button>
        <button
          onClick={handlePreview}
          className="bg-green-600 text-white p-3 rounded-md shadow-md hover:bg-green-700 transition duration-200 flex-1"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default ComponentSelection;
