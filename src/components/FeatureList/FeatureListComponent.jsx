import React from 'react'

const FeatureListComponent = ({ component }) => {
    return (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Call to Ask</h2>
            <p className="mb-2"><span className="font-medium">Name:</span> {component.name}</p>
            <p className="mb-2"><span className="font-medium">Email:</span> {component.email}</p>
            <p className="mb-2"><span className="font-medium">Phone Number:</span> {component.phoneNumber}</p>
            <p className="mb-2"><span className="font-medium">Inquiry Type:</span> {component.inquiryType}</p>
            <p className="mb-2"><span className="font-medium">Questions:</span> {component.questions}</p>
            <p className="mb-2"><span className="font-medium">Address:</span> {component.address}</p>
            <p className="mb-2"><span className="font-medium">Preferred Contact Time:</span> {component.preferredContactTime}</p>
            <p className="mb-2"><span className="font-medium">Additional Notes:</span> {component.additionalNotes}</p>
        </div>
    )
}

export default FeatureListComponent
