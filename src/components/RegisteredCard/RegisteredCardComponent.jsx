import React from "react";
import useComponentStore from "../../store/useComponentStore";

const RegisteredCardComponent = () => {
  const registeredCardData = useComponentStore(
    (state) => state.registeredCardData
  );
  const {
    title,
    titleAlign,
    description,
    buttonText,
    backgroundColor,
    textColor,
    titleSize,
    buttonColor,
    buttonAlign,
    discriptionAndButtonSize,
  } = registeredCardData;

  // Determine the alignment class based on `buttonAlign`
  const getButtonAlignmentClass = () => {
    if (buttonAlign === "center") return "justify-center";
    if (buttonAlign === "right") return "justify-end";
    return "justify-start"; // Default to left alignment
  };

  return (
    <div
      className="p-4 py-4 px-10 max-h-[300px] max-w-[400px]"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h3
        className="font-bold mb-5"
        style={{
          fontSize: `${titleSize}px`, // Dynamic font size
          textAlign: titleAlign, // Dynamic text alignment
        }}
      >
        {title}
      </h3>
      <ul
        className="list-disc pl-4 mb-6"
        style={{ fontSize: `${discriptionAndButtonSize}px` }}
      >
        {description
          .split(".")
          .filter((text) => text)
          .map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
      </ul>
      <div className={`w-full flex ${getButtonAlignmentClass()}`}>
        <button
          className="px-4 py-2 rounded"
          style={{
            backgroundColor: buttonColor,
            color: "#fff",
            fontSize: `${discriptionAndButtonSize}px`
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RegisteredCardComponent;
