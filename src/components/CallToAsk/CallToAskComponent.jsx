import React from "react";
import useComponentStore from "../../store/useComponentStore";

const CallToAskComponent = () => {
    const { callToAskData } = useComponentStore();

    return (
        <div className={`relative pb-6 mb-10 text-${callToAskData.textAlign}`}>
            <h1
                className={`font-extrabold mb-0 text-${callToAskData.textAlign}`}
                style={{ color: callToAskData.titleColor, fontFamily: callToAskData.titleFontFamily }}
            >
                {callToAskData.name || "Your Name"}
            </h1>
            <h5
                className={`font-extrabold uppercase text-${callToAskData.textAlign}`}
                style={{ color: callToAskData.subtitleColor, fontFamily: callToAskData.subtitleFontFamily }}
            >
                {callToAskData.email || "Your Email"}
            </h5>
            <p style={{ color: callToAskData.subtitleColor }}>
                <strong>Phone:</strong> {callToAskData.phone || "Your Phone Number"}
            </p>
            <p style={{ color: callToAskData.subtitleColor }}>
                <strong>Address:</strong> {callToAskData.address || "Your Address"}
            </p>
            <p style={{ color: callToAskData.subtitleColor }}>
                <strong>Message:</strong> {callToAskData.message || "Your Message"}
            </p>
        </div>
    );
};

export default CallToAskComponent;
