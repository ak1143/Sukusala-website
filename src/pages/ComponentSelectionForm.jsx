import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageTitleForm,
  ImageForm,
  ContactCardForm,
  CallToAskForm,
  ButtonForm,
  RegisteredCardForm,
} from "../components/index";

const componentsList = [
  { id: "pageTitle", name: "Page Title" },
  { id: "image", name: "Image" },
  { id: "ContactCard", name: "Contact Card" },
  { id: "callToAsk", name: "Call to Ask" },
  { id: "button", name: "Button" },
  { id: "registeredCard" , name : "Register Card"}
];

const ComponentSelection = () => {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState("");

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
    borderRadius: "",
    shadow: "",
    imageSrc:"",
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
    buttonColor: "#ff7f00" // Default button color (orange, based on the image)
  });
  

  const [addedComponents, setAddedComponents] = useState([]);

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    switch (selectedComponent) {
      case "pageTitle":
        setFormData({ ...formData, [name]: value });
        break;

      case "image":
        setImageData({ ...imageData, [name]: value });
        break;

      case "ContactCard":
        setContactCardData({ ...contactCardData, [name]: value });
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
          setCallToAskData((prev) => ({
            ...prev,
            attachment: files[0],
          }));
        } else {
          setCallToAskData((prev) => ({ ...prev, [name]: value }));
        }
        break;

      case "button":
        setButtonData({ ...buttonData, [name]: value });
        break;

      case "registeredCard":
        setRegisteredCardData({...registeredCardData, [name] : value })

      default:
        break;
    }
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

  const handleAddComponent = () => {
    if (!selectedComponent) {
      alert("Please select a component type.");
      return;
    }

    let newComponent = {};

    switch (selectedComponent) {
      case "pageTitle":
        if (!formData.title || !formData.subtitle) {
          alert("Please fill out all Page Title fields.");
          return;
        }
        newComponent = { ...formData, componentType: selectedComponent };
        break;

      case "image":
        if (!imageData.imageSrc || !imageData.altText) {
          console.log(imageData)
          alert("Please fill out all Image fields.");
          return;
        }
        newComponent = { ...imageData, componentType: selectedComponent };
        break;

      case "ContactCard":
        if (!contactCardData.text || !contactCardData.Phno) {
          alert("Please fill out all Contact Card fields.");
          return;
        }
        newComponent = { ...contactCardData, componentType: selectedComponent };
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
      
      case "registeredCard" :
        if(!registeredCardData.title){
          alert("please give title");
          return;
        }
        newComponent = { ...registeredCardData, componentType: selectedComponent}
        break;

      default:
        alert("Unknown component type.");
        return;
    }

    setAddedComponents((prev) => [...prev, newComponent]);
    resetFormData();
    setSelectedComponent("");
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
      
      case "registeredCard":
        setRegisteredCardData({
          title: "",
          description: "",
          buttonText: "",
          backgroundColor: "#ffffff", 
          textColor: "#000000", 
          fontSize: 16,
          buttonColor: "#ff7f00" 
        });

      default:
        break;
    }
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

      {selectedComponent === "ContactCard" && (
        <ContactCardForm
          formData={contactCardData}
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

      { selectedComponent === "registeredCard" && (
        <RegisteredCardForm
          formData={registeredCardData}
          handleInputChange={handleInputChange}
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
