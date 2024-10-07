import React from 'react'

const ButtonFormComponent = ({ component }) => {
    return (
        <button
            style={{
                backgroundColor: component.buttonColor,
                color: component.fontColor,
                fontSize: `${component.fontSize}px`,
                borderRadius: `${component.borderRadius}px`,
            }}
            className="p-4 mb-6 w-full text-center shadow-md hover:opacity-80 transition duration-200"
        >
            {component.buttonText}
        </button>
    )
}

export default ButtonFormComponent
