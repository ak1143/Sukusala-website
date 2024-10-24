import React, { useEffect } from 'react';
import useComponentStore from '../../store/useComponentStore';

const ButtonForm = () => {
    const buttonData = useComponentStore(state => state.buttonData);
    const setButtonData = useComponentStore(state => state.setButtonData);
    const editing = true;

    useEffect(() => {
        console.log(buttonData);
    }, [buttonData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setButtonData({ ...buttonData, [name]: value }); // Updating the store with the new form values
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement handleEdit if needed or just log the buttonData here
        console.log("Button Data Submitted: ", buttonData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Button Text</label>
            <input
                name="buttonText"
                value={buttonData.buttonText}
                onChange={handleChange}
                placeholder="Enter button text"
                className="border p-2 mb-4 w-full"
            />

            <label>Button Color</label>
            <input
                name="buttonColor"
                type="color"
                value={buttonData.buttonColor}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
            />

            <label>Font Size (px)</label>
            <input
                name="fontSize"
                type="number"
                value={buttonData.fontSize}
                onChange={handleChange}
                placeholder="Enter font size"
                className="border p-2 mb-4 w-full"
            />

            <label>Font Color</label>
            <input
                name="fontColor"
                type="color"
                value={buttonData.fontColor}
                onChange={handleChange}
                className="border p-2 mb-4 w-full"
            />

            <label>Border Radius (px)</label>
            <input
                name="borderRadius"
                type="number"
                value={buttonData.borderRadius}
                onChange={handleChange}
                placeholder="Enter border radius"
                className="border p-2 mb-4 w-full"
            />

            {editing && <button type="submit">Edit</button>}
        </form>
    );
};

export default ButtonForm;
