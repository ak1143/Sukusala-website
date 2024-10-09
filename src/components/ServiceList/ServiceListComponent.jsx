
import { FaReply, FaPhoneAlt } from "react-icons/fa"; // Icons for Reply and Phone

const ServiceListComponent = ({ servicesData }) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      {servicesData.map((service, index) => (
        <div key={index} className="flex items-center mb-4">
          <span className="mr-2 text-orange-600">
            {service.icon === "reply" ? <FaReply /> : <FaPhoneAlt />}
          </span>
          <p className="text-base font-medium">{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceListComponent;
