import React from "react";
import { motion } from "framer-motion";

const PageTitle = ({ 
  formData 
}) => {
  const { 
    subtitle, 
    title, 
    subtitleColor = '#000000', 
    titleColor = '#091e3e', 
    subtitleFontFamily = "'Nunito', sans-serif", 
    titleFontFamily = "'Rubik', sans-serif",
    titleFontSize = 'text-4xl',  
    subtitleFontSize = 'text-xl', 
    textAlign = 'left' 
  } = formData; // Destructuring formData

  return (
    <div className={`relative pb-6 mb-10 text-${textAlign}`}>
      <h5 
        className={`font-extrabold uppercase ${subtitleFontSize} text-${textAlign}`}
        style={{ color: subtitleColor, fontFamily: subtitleFontFamily }}
      >
        {subtitle}
      </h5>
      <h1 
        className={`font-extrabold mb-0 ${titleFontSize} text-${textAlign}`}
        style={{ color: titleColor, fontFamily: titleFontFamily }}
      >
        {title}
      </h1>
      <motion.div
        className="absolute left-0 bottom-0 bg-secondary h-1 w-9/12"
        initial={{ width: "9rem" }}
        transition={{
          duration: 4,
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="absolute left-2 bottom-0 bg-white h-1"
          initial={{ width: "0.4rem", x: "-100%" }}
          animate={{ x: ["-100%", "9rem"] }}
          transition={{
            duration: 4,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageTitle;
