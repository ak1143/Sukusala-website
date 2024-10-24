import React, { useEffect } from 'react';
import useComponentStore from '../../store/useComponentStore';

const CallToAskForm = ({ onUpdateComponent }) => {
    const callToAskData = useComponentStore(state => state.callToAskData);
    const setCallToAskData = useComponentStore(state => state.setCallToAskData);
    const editing = true;

    useEffect(() => {
        console.log(callToAskData);
    }, [callToAskData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCallToAskData({ ...callToAskData, [name]: value }); // Updating the store with the new form values
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateComponent("calltoaskdata", callToAskData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                name="name"
                value={callToAskData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border p-2 mb-4 w-full"
                required
            />

            <label>Email</label>
            <input
                name="email"
                type="email"
                value={callToAskData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border p-2 mb-4 w-full"
                required
            />

            <label>Message</label>
            <textarea
                name="message"
                value={callToAskData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="border p-2 mb-4 w-full"
                rows="4"
                required
            />

            <label>Phone</label>
            <input
                name="phone"
                type="tel"
                value={callToAskData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border p-2 mb-4 w-full"
                required
            />

            <label>Address</label>
            <input
                name="address"
                value={callToAskData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="border p-2 mb-4 w-full"
                required
            />
{/* 
            {editing && <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>} */}
        </form>
    );
};

export default CallToAskForm;
