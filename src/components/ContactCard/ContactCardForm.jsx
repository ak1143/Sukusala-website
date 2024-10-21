import React from "react";
import useComponentStore from "../../store/useComponentStore";

const ContactCardForm = () => {

  const contactCardData = useComponentStore( state => state.contactCardData );
  const setContactCardData = useComponentStore( state => state.setContactCardData);

  const handleInputChange = (e) =>{
    const { name, value} = e.target;
    setContactCardData({ ...contactCardData, [name]:value})
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Contact Card</h2>
      <label className="block mb-2">
        Text:
        <input
          type="text"
          name="text"
          value={contactCardData.text}
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
          value={contactCardData.description}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Phone Number:
        <input
          type="text"
          name="Phno"
          value={contactCardData.Phno}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>
      <label className="block ">
        Background Color:
        <br />
        <input
          type="color"
          name="backgroundColor"
          value={contactCardData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded"
        />
      </label>
      <br />
      <label className="block">
        Text Color:
        <br />
        <input
          type="color"
          name="textColor"
          value={contactCardData.textColor}
          onChange={handleInputChange}
          className="border rounded"
        />
      </label>
      <br />
      <label className="block mb-2">
        Text Size:
        <input
          type="number"
          name="fontSize"
          value={contactCardData.fontSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Description Size:
        <input
          type="number"
          name="descriptionSize"
          value={contactCardData.descriptionSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default ContactCardForm;
