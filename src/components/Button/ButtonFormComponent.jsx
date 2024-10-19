import React from 'react'
import useComponentStore from '../../store/useComponentStore'

const ButtonFormComponent = () => {

    const { buttonData } =useComponentStore()

    return (
        <button
            style={{
                height :"auto",
                width : "auto",
                backgroundColor: buttonData.buttonColor,
                color: buttonData.fontColor,
                fontSize: `${buttonData.fontSize}px`,
                borderRadius: `${buttonData.borderRadius}px`,
            }}
            className="p-4 mb-6 w-full text-center shadow-md hover:opacity-80 transition duration-200"
        >
            {buttonData.buttonText}
        </button>
    )
}

export default ButtonFormComponent
