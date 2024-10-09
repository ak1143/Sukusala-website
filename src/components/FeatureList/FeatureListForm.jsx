import React from 'react';

const FeatureListForm = ({ formData, handleInputChange }) => {
    return (
        <div className="mb-6 p-6 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Feature List Details</h2>

            <label className="block mb-2 text-sm font-medium text-gray-700">Feature Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number:</label>
            <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter phone number"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Select Inquiry Type:</label>
            <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">-- Select Inquiry Type --</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
            </select>


            <label className="block mb-2 text-sm font-medium text-gray-700">List of features to be added :</label>
            <textarea
                name="questions"
                value={formData.questions}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter questions related to the call"
                rows="4"
            ></textarea>

            <label className="block mb-2 text-sm font-medium text-gray-700">Address:</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Preferred Contact Time:</label>
            <input
                type="text"
                name="preferredContactTime"
                value={formData.preferredContactTime}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g., Morning, Afternoon, Evening"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Additional Notes:</label>
            <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 mb-4 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Any additional information"
                rows="3"
            ></textarea>

        </div>
    );
};

export default FeatureListForm;
