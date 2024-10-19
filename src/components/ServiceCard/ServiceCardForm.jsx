import useComponentStore from "../../store/useComponentStore";


const ServiceCardForm = () => {

  const serviceCardData = useComponentStore(state => state.serviceCardData);
  const setServiceCardData = useComponentStore( state => state.setServiceCardData);

  const handleInputChange = (e)=>{
    const {name , value} = e.target;
    setServiceCardData({ ...serviceCardData, [name] :value })
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Service Card</h2>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={serviceCardData.title}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Description:
        <input
          type="text"
          name="description"
          value={serviceCardData.description}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Icon (URL):
        <input
          type="text"
          name="icon"
          value={serviceCardData.icon}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Background Color:
        <input
          type="color"
          name="backgroundColor"
          value={serviceCardData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Text Color:
        <input
          type="color"
          name="textColor"
          value={serviceCardData.textColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default ServiceCardForm;
