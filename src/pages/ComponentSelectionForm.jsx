// src/components/ComponentSelection.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [selectedComponent, setSelectedComponent] = useState("");
  const [addedComponents, setAddedComponents] = useState([]);
  const [selectedCardType, setSelectedCardType] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    titleColor: "#000000",
    subtitleColor: "#000000",
    titleFont: "Arial",
    subtitleFont: "Arial",
    titleFontSize: "text-4xl",
    subtitleFontSize: "text-xl",
    textAlign: "left",
  });

  const [imageData, setImageData] = useState({
    width: "",
    height: "",
    altText: "",
    shadow: "",
    imageSrc: "",
  });

  const [contactCardData, setContactCardData] = useState({
    text: "",
    description: "",
    Phno: "",
    backgroundColor: "orange",
    textColor: "white",
    fontSize: 16,
  });

  const [callToAskData, setCallToAskData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    questions: "",
    icons: [],
    address: "",
    preferredContactTime: "",
    additionalNotes: "",
    attachment: null,
  });

  const [buttonData, setButtonData] = useState({
    buttonText: "",
    buttonColor: "#007BFF",
    fontSize: 16,
    fontColor: "#FFFFFF",
    borderRadius: 5,
  });

  const [registeredCardData, setRegisteredCardData] = useState({
    title: "",
    description: "",
    buttonText: "",
    backgroundColor: "#ffffff", // Default to white
    textColor: "#000000", // Default to black
    fontSize: 16, // Default font size in pixels
    buttonColor: "#ff7f00", // Default button color (orange, based on the image)
  });

  const [mapData, setMapData] = useState({
    lat: 17.4932,
    lng: 78.3997,
    zoom: 13,
    height: "400px",
    width: "100%",
    markerText: "Hello!",
  });

  const [paragraphData, setParagraphData] = useState({
    content: "",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    fontSize: 16,
  });

  const [serviceCardData, setServiceCardData] = useState({
    title: "",
    description: "",
    icon: "", // URL for the icon
    backgroundColor: "#ffffff",
    textColor: "#000000",
  });

  const [serviceListData, setServiceListData] = useState([
    { text: "", icon: "reply" }, // Initialize Service List
  ]);

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleInputChange = (e, index) => {
    const { name, value, type, checked, files } = e.target;

    switch (selectedComponent) {
      case "pageTitle":
        setFormData({ ...formData, [name]: value });
        break;

      case "image":
        setImageData({ ...imageData, [name]: value });
        break;

      case "callToAsk":
        if (type === "checkbox") {
          setCallToAskData((prev) => {
            const icons = checked
              ? [...prev.icons, value]
              : prev.icons.filter((icon) => icon !== value);
            return { ...prev, icons };
          });
        } else if (name === "attachment") {
          setCallToAskData((prev) => ({ ...prev, attachment: files[0] }));
        } else {
          setCallToAskData((prev) => ({ ...prev, [name]: value }));
        }
        break; // Break after handling this case

      case "button":
        setButtonData({ ...buttonData, [name]: value });
        break;

      case "map":
        setMapData((prev) => ({ ...prev, [name]: value }));
        break;

      case "paragraph":
        setParagraphData((prev) => ({ ...prev, [name]: value }));
        break;

      case "serviceList":
        const updatedServices = [...serviceListData];
        if (name.startsWith("text")) {
          updatedServices[index].text = value;
        } else if (name.startsWith("icon")) {
          updatedServices[index].icon = value;
        }
        setServiceListData(updatedServices);
        break;
      
        case "card":
          switch (selectedCardType) {
            case "contactCard":
              setContactCardData({ ...contactCardData, [name]: value });
              break;
            case "registeredCard":
              setRegisteredCardData({ ...registeredCardData, [name]: value });
              break;
            case "serviceCard":
              setServiceCardData({ ...serviceCardData, [name]: value });
              break;
            default:
              break;
          }
          break;

      default:
        break;
    }
  };

  const addService = () => {
    if (serviceListData.some((service) => !service.text.trim())) {
      alert("Please fill out the service text before adding.");
      return;
    }
    setServiceListData([...serviceListData, { text: "", icon: "reply" }]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData((prev) => ({ ...prev, imageSrc: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetFormData = () => {
    switch (selectedComponent) {
      case "pageTitle":
        setFormData({
          title: "",
          subtitle: "",
          titleColor: "#000000",
          subtitleColor: "#000000",
          titleFont: "Arial",
          subtitleFont: "Arial",
          titleFontSize: "text-4xl",
          subtitleFontSize: "text-xl",
          textAlign: "left",
        });
        break;

      case "image":
        setImageData({
          width: "",
          height: "",
          altText: "",
          shadow: "",
          imageSrc: null,
        });
        break;

      case "contactCard":
        setContactCardData({
          text: "",
          description: "",
          Phno: "",
          backgroundColor: "orange",
          textColor: "white",
          fontSize: 16,
        });
        break;

      case "callToAsk":
        setCallToAskData({
          name: "",
          email: "",
          phoneNumber: "",
          inquiryType: "",
          questions: "",
          icons: [],
          address: "",
          preferredContactTime: "",
          additionalNotes: "",
          attachment: null,
        });
        break;

      case "button":
        setButtonData({
          buttonText: "",
          buttonColor: "#007BFF",
          fontSize: 16,
          fontColor: "#FFFFFF",
          borderRadius: 5,
        });
        break;

      case "map":
        setMapData({
          lat: 17.4932,
          lng: 78.3997,
          zoom: 13,
          height: "400px",
          width: "100%",
          markerText: "Hello!",
        });
        break;

      case "paragraph":
        setParagraphData({
          content: "",
          backgroundColor: "#ffffff",
          textColor: "#000000",
          fontSize: 16,
        });
        break;

      case "serviceCard":
        setServiceCardData({
          title: "",
          description: "",
          icon: "",
          backgroundColor: "#ffffff",
          textColor: "#000000",
        });
        break;

      case "serviceList":
        setServiceListData([{ text: "", icon: "reply" }]); // Reset back to initial state
        break;

      case "registeredCard":
        setRegisteredCardData({
          title: "",
          description: "",
          buttonText: "",
          backgroundColor: "#ffffff",
          textColor: "#000000",
          fontSize: 16,
          buttonColor: "#ff7f00",
        });
        break;

      default:
        break;
    }
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
            break;
        }
        break;

      case "pageTitle":
        if (!formData.title || !formData.subtitle) {
          alert("Please fill out all Page Title fields.");
          return;
        }
        newComponent = { ...formData, componentType: selectedComponent };
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

      case "serviceList":
        newComponent = {
          services: serviceListData,
          componentType: selectedComponent,
        };
        break;

      default:
        alert("Unknown component type.");
        return;
    }

    setAddedComponents((prev) => [...prev, newComponent]);
    resetFormData();
    setSelectedComponent("");
  };

  const handlePreview = () => {
    if (addedComponents.length === 0) {
      alert("Please add at least one component to preview.");
      return;
    }
    navigate("/preview", { state: { components: addedComponents } });
  };

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
          value={selectedComponent}
          onChange={handleComponentChange}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Component Type --</option>
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
        <PageTitleForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === "image" && (
        <ImageForm
          formData={imageData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
        />
      )}

      {/* Render Forms Based on Selected Card Type */}
      {selectedCardType === "contactCard" && (
        <ContactCardForm
          formData={contactCardData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedCardType === "registeredCard" && (
        <RegisteredCardForm
          formData={registeredCardData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedCardType === "serviceCard" && (
        <ServiceCardForm
          formData={serviceCardData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === "callToAsk" && (
        <CallToAskForm
          formData={callToAskData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === "button" && (
        <ButtonForm
          formData={buttonData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === "map" && (
        <MapForm formData={mapData} handleInputChange={handleInputChange} />
      )}

      {selectedComponent === "paragraph" && (
        <ParagraphForm
          formData={paragraphData}
          handleInputChange={handleInputChange}
        />
      )}

      {selectedComponent === "serviceList" && (
        <ServiceListForm
          servicesData={serviceListData}
          handleInputChange={handleInputChange}
          addService={addService}
        />
      )}

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
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
          Preview
        </button>
      </div>
    </div>
  );
};

export default ComponentSelection;
