import useComponentStore from "../../store/useComponentStore";


const ServiceCardComponent = () => {

  const serviceCardData = useComponentStore(state => state.serviceCardData)

  const { title, description, icon, backgroundColor, textColor } = serviceCardData;

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="flex items-center">
        {icon && (
          <img src={icon} alt="service icon" className="h-8 w-8 mr-2" />
        )}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCardComponent;
