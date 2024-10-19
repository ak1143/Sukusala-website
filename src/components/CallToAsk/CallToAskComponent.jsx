import React, { useEffect } from 'react'
import useComponentStore from '../../store/useComponentStore'

const CallToAskComponent = () => {
    const callToAskData = useComponentStore( state => state.callToAskData);

    useEffect(() => {
        console.log(callToAskData);
      }, [callToAskData]);
      

    return (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Call to Ask</h2>
            <p className="mb-2"><span className="font-medium">Name:</span> {callToAskData.name}</p>
            <p className="mb-2"><span className="font-medium">Email:</span> {callToAskData.email}</p>
            <p className="mb-2"><span className="font-medium">Phone Number:</span> {callToAskData.phoneNumber}</p>
            <p className="mb-2"><span className="font-medium">Inquiry Type:</span> {callToAskData.inquiryType}</p>
            <p className="mb-2"><span className="font-medium">Questions:</span> {callToAskData.questions}</p>
            <p className="mb-2"><span className="font-medium">Address:</span> {callToAskData.address}</p>
            <p className="mb-2"><span className="font-medium">Preferred Contact Time:</span> {callToAskData.preferredContactTime}</p>
            <p className="mb-2"><span className="font-medium">Additional Notes:</span> {callToAskData.additionalNotes}</p>
            {callToAskData.icons && callToAskData.icons.length > 0 && (
                <div className="mb-2">
                    <span className="font-medium">Selected Icons:</span>
                    <div className="flex space-x-2 mt-2">
                        {callToAskData.icons.map((icon, iconIndex) => (
                            <span key={iconIndex} className="text-2xl">{icon}</span>
                        ))}
                    </div>
                </div>
            )}
            {callToAskData.attachment && (
                <div className="mt-4">
                    <span className="font-medium">Attachment:</span>
                    <a
                        href={URL.createObjectURL(callToAskData.attachment)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2"
                    >
                        {callToAskData.attachment.name}
                    </a>
                </div>
            )}
        </div>
    )
}

export default CallToAskComponent
