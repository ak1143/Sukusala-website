import React from "react";
import useComponentStore from "../../store/useComponentStore";

const RegisteredCardForm = () => {
  const registeredCardData = useComponentStore( state => state.registeredCardData);
  const setRegisteredCardData = useComponentStore( state => state.setRegisteredCardData);

  const handleInputChange = (e)=>{
    const { name, value} = e.target;
    setRegisteredCardData({ ...setRegisteredCardData, [name]: value})
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Registered Card</h2>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={registeredCardData.title}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={registeredCardData.description}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          rows={4}
        />
      </label>
      <label className="block mb-2">
        Button Text:
        <input
          type="text"
          name="buttonText"
          value={registeredCardData.buttonText}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>
      <label className="block mb-2">
        Background Color:
        <input
          type="color"
          name="backgroundColor"
          value={registeredCardData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Text Color:
        <input
          type="color"
          name="textColor"
          value={registeredCardData.textColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Font Size:
        <input
          type="number"
          name="fontSize"
          value={registeredCardData.fontSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Button Color:
        <input
          type="color"
          name="buttonColor"
          value={registeredCardData.buttonColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default RegisteredCardForm;
