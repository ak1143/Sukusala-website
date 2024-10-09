import React from "react";

const ContactCardForm = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Contact Card</h2>
      <label className="block mb-2">
        Text:
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>
      <label className="block mb-2">
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Phone Number:
        <input
          type="text"
          name="Phno"
          value={formData.Phno}
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
    </div>
  );
};

export default ContactCardForm;
