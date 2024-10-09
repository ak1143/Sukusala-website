// src/components/ComponentSelection.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageTitleForm,
  ImageForm,
  CallToAskForm,
  ButtonForm,
  MapForm,
  ParagraphForm,
  ServiceCardForm,
  ServiceListForm, // Import ServiceCardForm
} from "../components/index";

const componentsList = [
  { id: "sectionTitle", name: "Section Title" },
  { id: "image", name: "Image" },
  { id: "callToAsk", name: "Call to Ask" },
  { id: "button", name: "Button" },
  { id: "map", name: "Map" }, // Add Map option
  { id: "paragraph", name: "Paragraph" },
  { id: "serviceCard", name: "Service Card" },
  { id: "serviceList", name: "Service List" },
];

const ComponentSelection = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("");
  const [addedComponents, setAddedComponents] = useState([]);

  // Individual states for each component's fields
  const [sectionTitle, setSectionTitle] = useState({
    title: "",
    subtitle: "",
    titleColor: "#000000",
    subtitleColor: "#000000",
  });

  const [imageData, setImageData] = useState({
    width: "",
    height: "",
    altText: "",
    borderRadius: "",
    shadow: "",
    imageSrc: null,
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

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    switch (selectedComponent) {
      case "sectionTitle":
        setSectionTitle((prev) => ({ ...prev, [name]: value }));
        break;

      case "image":
        if (name === "imageSrc") {
          handleImageUpload(e);
        } else {
          setImageData((prev) => ({ ...prev, [name]: value }));
        }
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
        break;

      case "button":
        setButtonData((prev) => ({ ...prev, [name]: value }));
        break;

      case "map":
        setMapData((prev) => ({ ...prev, [name]: value }));
        break;

      case "paragraph":
        setParagraphData((prev) => ({ ...prev, [name]: value }));
        break;

      case "serviceCard":
        setServiceCardData((prev) => ({ ...prev, [name]: value }));
        break;

      case "serviceList":
        const updatedServices = [...serviceListData];
        updatedServices[index][name] = value;
        setServiceListData(updatedServices);
        break;

      default:
        break;
    }
  };

  const addService = () => {
    setServiceListData([...serviceListData, { text: "", icon: "reply" }]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
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
      case "sectionTitle":
        setSectionTitle({
          title: "",
          subtitle: "",
          titleColor: "#000000",
          subtitleColor: "#000000",
        });
        break;

      case "image":
        setImageData({
          width: "",
          height: "",
          altText: "",
          borderRadius: "",
          shadow: "",
          imageSrc: null,
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
        setServiceListData([{ text: "", icon: "reply" }]);
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
      case "sectionTitle":
        if (!sectionTitle.title || !sectionTitle.subtitle) {
          alert("Please fill out all Section Title fields.");
          return;
        }
        newComponent = { ...sectionTitle, componentType: selectedComponent };
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

      case "serviceCard":
        if (!serviceCardData.title || !serviceCardData.description) {
          alert("Please fill out all Service Card fields.");
          return;
        }
        newComponent = { ...serviceCardData, componentType: selectedComponent };
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
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Component Selection
      </h1>

      <div className="mb-6">
        <label className="block mb-2 text-lg font-medium text-gray-700">
          Select Component Type:
        </label>
        <select
          value={selectedComponent}
          onChange={handleComponentChange}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select Component Type --</option>
          {componentsList.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>

      {/* Render Forms Based on Selected Component */}
      {selectedComponent === "sectionTitle" && (
        <PageTitleForm
          formData={sectionTitle}
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

      {selectedComponent === "serviceCard" && (
        <ServiceCardForm
          formData={serviceCardData}
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
          Preview Components
        </button>
      </div>
    </div>
  );
};

export default ComponentSelection;
