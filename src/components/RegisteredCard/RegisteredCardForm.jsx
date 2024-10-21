import React, { useEffect } from "react";
import useComponentStore from "../../store/useComponentStore";

const RegisteredCardForm = () => {
  const registeredCardData = useComponentStore(
    (state) => state.registeredCardData
  );
  const setRegisteredCardData = useComponentStore(
    (state) => state.setRegisteredCardData
  );
  useEffect(()=>(console.log(registeredCardData)),[registeredCardData])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisteredCardData({ ...setRegisteredCardData, [name]: value });
  };

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
      <label>
        Title Alignment:
        <select
          name="titleAlign"
          value={registeredCardData.titleAlign}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
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
        <br />
        <input
          type="color"
          name="backgroundColor"
          value={registeredCardData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded"
        />
        <br />
      </label>
      <label className="block mb-2">
        Text Color:
        <br />
        <input
          type="color"
          name="textColor"
          value={registeredCardData.textColor}
          onChange={handleInputChange}
          className="border rounded"
        />
      </label>
      <label className="block mb-2">
        Title Size:
        <input
          type="number"
          name="titleSize"
          value={registeredCardData.titleSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Description and Button Size:
        <input
          type="number"
          name="discriptionAndButtonSize"
          value={registeredCardData.discriptionAndButtonSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Button Color:
        <br />
        <input
          type="color"
          name="buttonColor"
          value={registeredCardData.buttonColor}
          onChange={handleInputChange}
          className="border rounded"
        />
      </label>
      <label className="block mb-2">
        Button aligment:
        <br />
        <select
          name="buttonAlign"
          value={registeredCardData.buttonAlign}
          onChange={handleInputChange}
          className="border p-2 mb-4 w-full"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
    </div>
  );
};

export default RegisteredCardForm;
