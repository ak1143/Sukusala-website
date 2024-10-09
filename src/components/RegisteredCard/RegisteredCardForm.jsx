import React from "react";

const RegisteredCardForm = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Registered Card</h2>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
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
          value={formData.buttonText}
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
          value={formData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Text Color:
        <input
          type="color"
          name="textColor"
          value={formData.textColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Font Size:
        <input
          type="number"
          name="fontSize"
          value={formData.fontSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Button Color:
        <input
          type="color"
          name="buttonColor"
          value={formData.buttonColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default RegisteredCardForm;
