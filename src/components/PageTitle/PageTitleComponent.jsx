import React from "react";
import { motion } from "framer-motion";
import useComponentStore from "../../store/useComponentStore";

const PageTitle = () => {
  const { pageTitleData } = useComponentStore()

  return (
    <div className={`relative pb-6 mb-10 text-${pageTitleData.textAlign}`}>
      <h1 
        className={`font-extrabold mb-0 ${pageTitleData.titleFontSize} text-${pageTitleData.textAlign}`}
        style={{ color: pageTitleData.titleColor, fontFamily: pageTitleData.titleFontFamily }}
      >
        {pageTitleData.title}
      </h1>
      <h5 
        className={`font-extrabold uppercase ${pageTitleData.subtitleFontSize} text-${pageTitleData.textAlign}`}
        style={{ color: pageTitleData.subtitleColor, fontFamily: pageTitleData.subtitleFontFamily }}
      >
        {pageTitleData.subtitle}
      </h5>
      <motion.div
        className="absolute left-0 bottom-0 bg-orange-400 h-1 w-9/12"
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
