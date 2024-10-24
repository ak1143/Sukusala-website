import React from "react";
import { motion } from "framer-motion";
import useComponentStore from "../../store/useComponentStore";

const ButtonFormComponent = () => {
    const buttonData = useComponentStore(state => state.buttonData);

    return (
        <div className={`relative pb-6 mb-10`}>
            <button
                style={{
                    backgroundColor: buttonData.buttonColor,
                    color: buttonData.fontColor,
                    fontSize: buttonData.fontSize,
                    borderRadius: buttonData.borderRadius,
                    padding: '10px 20px', // Example padding
                    border: 'none', // You can customize border here
                    cursor: 'pointer',
                }}
            >
                {buttonData.buttonText || "Default Button Text"}
            </button>
            {/* <motion.div
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
            </motion.div> */}
        </div>
    );
};

export default ButtonFormComponent;
