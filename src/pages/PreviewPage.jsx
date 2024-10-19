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
  ServiceListComponent,
} from "../components";

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [error, setError] = useState("");

  const {
    addedComponents,
    setSelectedComponent,
    setEditComponentIndex,
    setSelectedCardType,
  } = useComponentStore();

  const handleComponentNameChange = (e) => {
    setComponentName(e.target.value);
    setError("");
  };

  const handleEdit = () => {
    navigate(-1);
    // console.log(addedComponents);
    if (addedComponents.length === 0) {
      alert("you have not added any component.");
    }

    const componentToEdit = addedComponents[addedComponents.length - 1];

    console.log(componentToEdit.componentType);

    if (componentToEdit.componentType === "contactCard") {
      setSelectedCardType(componentToEdit.componentType);
    } else if (componentToEdit.componentType === "registeredCard") {
      setSelectedCardType(componentToEdit.componentType);
    } else if (componentToEdit.componentType === "serviceCard") {
      setSelectedCardType(componentToEdit.componentType);
    } else {
      setSelectedComponent(componentToEdit.componentType);
    }
    setEditComponentIndex(addedComponents.length - 1);
  };

  const handleSaveConfiguratoin = () => {
    setIsPopupVisible(true);
    // navigate(-1);
    // setEditComponentIndex(-1);
    // setSelectedComponent('');
  };

  const handleSave = async () => {
    try {
      const response = await axios.get("/api/component/nameCheck");
      console.log("error 1:", response.data);
      if (response.data) {
        setError("Component name already exists.");
      } else {
        try {
          const res = await axios.post("api/toSave/componentConfig");
          console.log("error 2:", res.data);
          alert("Component saved successfully!");
          setIsPopupVisible(false);
          setComponentName("");
        } catch (error) {
          console.log("error msg 1:", error);
          console.log("error msg 2:", error.response);
          console.log("error msg 3:", error.response.data);
        }
      }
    } catch (error) {
      console.log("error msg 1:", error);
      console.log("error msg 1:", error.response);
    }
  };

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
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner"
                >
                  <PageTitleComponent />
                </div>
              );

            case "button":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner"
                >
                  <ButtonFormComponent />
                </div>
              );

            case "callToAsk":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-gray-100 rounded-lg shadow-inner"
                >
                  <CallToAskComponent />
                </div>
              );

            case "image":
              return (
                <div key={index}>
                  <ImageComponent />
                </div>
              );

            case "contactCard":
              return <ContactCardComponent key={index} />;

            case "registeredCard":
              return <RegisteredCardComponent key={index} />;

            case "map":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-white rounded-lg shadow-inner"
                >
                  <MapComponent />
                </div>
              );

            case "paragraph":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-white rounded-lg shadow-inner"
                >
                  <ParagraphComponent />
                </div>
              );

            case "serviceCard":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-white rounded-lg shadow-inner"
                >
                  <ServiceCardComponent />
                </div>
              );

            case "serviceList":
              return (
                <div
                  key={index}
                  className="mb-8 p-6 bg-white rounded-lg shadow-inner"
                >
                  <ServiceListComponent />
                </div>
              );
            default:
              return null;
          }
        })
      )}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-11/12 sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h2 className="text-xl font-semibold mb-4">Enter Component Name</h2>
            <input
              type="text"
              value={componentName}
              onChange={handleComponentNameChange}
              placeholder="Component Name"
              className="border border-gray-300 p-2 rounded w-full mb-4"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-col sm:flex-row justify-between">
              <button
                onClick={() => {
                  setIsPopupVisible(false);
                  setComponentName("");
                  setError("");
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-2 sm:mb-0"
              >
                Save
              </button>
            </div>
          </div>
        </div>
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
