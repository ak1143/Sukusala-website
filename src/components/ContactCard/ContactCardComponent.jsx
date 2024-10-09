import React from "react";

const ContactCardComponent = ({ formData }) => {
  const { text, description, Phno, backgroundColor, textColor, fontSize } = formData;

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: `${fontSize}px`,
      }}
    >
      <h3 className="text-lg font-bold">{text}</h3>
      <p>{description}</p>
      <p>Phone: {Phno}</p>
    </div>
  );
};

export default ContactCardComponent;
