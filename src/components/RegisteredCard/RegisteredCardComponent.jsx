import React from "react";
import useComponentStore from "../../store/useComponentStore";

const RegisteredCardComponent = () => {
  const registeredCardData = useComponentStore( state => state.registeredCardData);
  const { title, description, buttonText, backgroundColor, textColor, fontSize, buttonColor } = registeredCardData;

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: `${fontSize}px`,
      }}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="list-disc pl-4 mb-2">
        {description.split('.').filter(text => text).map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>
      <button
        className="px-4 py-2 rounded"
        style={{
          backgroundColor: buttonColor,
          color: "#fff",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default RegisteredCardComponent;
