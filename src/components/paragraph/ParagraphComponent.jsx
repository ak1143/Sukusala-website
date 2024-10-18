import useComponentStore from "../../store/useComponentStore";


const ParagraphComponent = () => {

  const paragraphData = useComponentStore( state => state.paragraphData);
  const { heading, content, backgroundColor, textColor, fontSize } = paragraphData;

  return (
    <div
      style={{
        backgroundColor: backgroundColor || "#ffffff",
        color: textColor || "#000000",
        padding: "20px",
        borderRadius: "8px",
      }}
      className="shadow-md"
    >
      <h2
        style={{
          fontSize: `${fontSize + 8}px`, // Heading font size slightly larger
          color: textColor || "#000",
        }}
        className="font-bold mb-4"
      >
        {heading}
      </h2>
      <p
        style={{
          fontSize: `${fontSize}px`,
          color: textColor || "#000",
        }}
        className="leading-relaxed"
      >
        {content}
      </p>
    </div>
  );
};

export default ParagraphComponent;
