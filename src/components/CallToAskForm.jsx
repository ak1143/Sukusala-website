import React from 'react';

const CallToAskForm = ({ formData, handleInputChange }) => {
    return (
        <div>
            <label className="block mb-2">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded"
                placeholder="Enter your name"
            />

            <label className="block mb-2">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded"
                placeholder="Enter your email"
            />

            <label className="block mb-2">Phone Number:</label>
            <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded"
                placeholder="Enter phone number"
            />

            <label className="block mb-2">Select Inquiry Type:</label>
            <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded"
            >
                <option value="">-- Select Inquiry Type --</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
            </select>

            <label className="block mb-2">Select Icons:</label>
            <div className="flex mb-4">
                {['icon1', 'icon2', 'icon3'].map((icon, index) => (
                    <div key={index} className="mr-4">
                        <input
                            type="checkbox"
                            name="icons"
                            value={icon}
                            onChange={handleInputChange}
                        />
                        <label>{icon}</label>
                    </div>
                ))}
            </div>

            <label className="block mb-2">Questions:</label>
            <textarea
                name="questions"
                value={formData.questions}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded"
                placeholder="Enter questions related to the call"
            />
        </div>
    );
};

export default CallToAskForm;
