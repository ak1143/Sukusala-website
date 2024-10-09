import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ imageSrc, formData }) => {
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
        <>
          <img
            src={image}
            alt={formData.altText}
            className={`shadow-lg max-w-full h-auto`}
            style={{
              width: formData.width ? `${formData.width}px` : 'auto',
              height: formData.height ? `${formData.height}px` : 'auto',
              borderRadius: formData.borderRadius || '0',
              boxShadow: formData.shadow || 'none',
            }}
          />
        </>
      ) : (
        <div>
          <p>Please upload an image.</p>
        </div>
      )}
    </motion.div>
  );
};

export default ImageComponent;
