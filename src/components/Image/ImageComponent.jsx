import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ imageSrc, formData = {} }) => {
  // Destructure formData with default values
  const {
    altText = 'Default image description',
    width = 300, // Default width in pixels
    height = 200, // Default height in pixels
    borderRadius = '0', // Default border radius
    shadow = 'none', // Default shadow style
  } = formData;

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc);
    }
  }, [imageSrc]);

  return (
    <motion.div
      className="w-full lg:h-full flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {image ? (
        <img
          src={image}
          alt={altText}
          className="shadow-lg max-w-full h-auto"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: borderRadius,
            boxShadow: shadow,
          }}
        />
      ) : (
        <div>
          <p>Please upload an image.</p>
        </div>
      )}
    </motion.div>
  );
};

export default ImageComponent;
