import React from "react";

function ContactCardForm({ formData, handleInputChange }) {
  return (
    <div className="w-full max-w-full">
      <form className="w-full">
       <div className="flex gap-3 flex-col">
       <div className="flex flex-col gap-2 w-full">
          <label>Some text for contact</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Enter some text"
            className="border p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Contact Number</label>
          <input
            type="text"
            name="Phno"
            value={formData.Phno}
            onChange={handleInputChange}
            placeholder="Enter Conact number"
            className="border p-2 rounded-lg w-full"
          />
        </div>
       </div>
      </form>
    </div>
  );
}

export default ContactCardForm;
