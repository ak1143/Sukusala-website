import React from 'react';

const ButtonForm = ({ formData, handleInputChange }) => {
    return (
        <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">Button Text:</label>
            <input
                type="text"
                name="buttonText"
                value={formData.buttonText}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter button text"
            />

            <label className="block mb-2 text-lg font-medium">Button Color:</label>
            <input
                type="color"
                name="buttonColor"
                value={formData.buttonColor}
                onChange={handleInputChange}
                className="border border-gray-300 mb-4"
            />

            <label className="block mb-2 text-lg font-medium">Font Size (px):</label>
            <input
                type="number"
                name="fontSize"
                value={formData.fontSize}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter font size"
            />

            <label className="block mb-2 text-lg font-medium">Font Color:</label>
            <input
                type="color"
                name="fontColor"
                value={formData.fontColor}
                onChange={handleInputChange}
                className="border border-gray-300 mb-4"
            />

            <label className="block mb-2 text-lg font-medium">Border Radius (px):</label>
            <input
                type="number"
                name="borderRadius"
                value={formData.borderRadius}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter border radius"
            />
        </div>
    );
};

export default ButtonForm;
