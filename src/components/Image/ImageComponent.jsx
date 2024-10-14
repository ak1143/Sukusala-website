import { useState, useEffect } from "react";

const ImageComponent = ({ imageSrc, formData = {} }) => {
  // Destructure formData with default values
  const {
    altText = 'Default image description',
    width = 300, // Default width in pixels
    height = 200, // Default height in pixels
    shadow = 'none', // Default shadow style
  } = formData;

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc);
    }
  }, [imageSrc]);

  return (
    <div
      className="w-full lg:h-full flex flex-col justify-center items-center"
    >
      {image ? (
        <img
          src={image}
          alt={altText}
          className="shadow-lg max-w-full h-auto"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            boxShadow: shadow,
          }}
        />
      ) : (
        <div>
          <p>Please upload an image.</p>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
