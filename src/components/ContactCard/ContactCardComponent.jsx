import React from "react";

const ContactCardComponent = ({ formData }) => {
  const { text, description, Phno, backgroundColor, textColor, fontSize } = formData;

  return (
    <div
      className="p-8 rounded-lg text-center"
      style={{
        backgroundColor: backgroundColor || "#D9752D", // Use a default color similar to the image
        color: textColor || "#fff",
      }}
    >
      <h3
        className="font-bold mb-4"
        style={{ fontSize: `${fontSize || 24}px` }} // Adjusted heading size to match the image
      >
        {text || "Call Us For Quote"}
      </h3>
      <p className="mb-4 text-lg" style={{ fontSize: `${fontSize || 18}px` }}>
        {description || "We are just a call distance to get in touch with you."}
      </p>
      <p className="font-bold text-2xl" style={{ fontSize: `${fontSize || 32}px` }}>
        {Phno}
      </p>
    </div>
  );
};

export default ContactCardComponent;
