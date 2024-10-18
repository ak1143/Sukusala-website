
import { FaReply, FaPhoneAlt } from "react-icons/fa"; // Icons for Reply and Phone
import useComponentStore from "../../store/useComponentStore";

const ServiceListComponent = () => {

  const serviceListData = useComponentStore( state => state.serviceListData);

  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      {serviceListData.services.map((service, index) => (
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
