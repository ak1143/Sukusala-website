const ServiceListForm = () => {

  const setServiceListData = useComponentStore( state => state.setServiceListData);
  const serviceListData = useComponentStore( state => state.serviceListData);
  const addService = ()=>{

  }

  const handleInputChange =()=>{
    
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Service List Form</h2>

      {servicesData.map((service, index) => (
        <div key={service.id || index} className="border rounded p-4 mb-2">
          <label className="block mb-2">
            Service Text:
            <input
              type="text"
              name={`text-${index}`} // Using index for unique names
              value={service.text}
              onChange={(e) => handleInputChange(e, index)} // Pass the index
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            Icon (reply or phone):
            <select
              name={`icon-${index}`} // Using index for unique names
              value={service.icon}
              onChange={(e) => handleInputChange(e, index)} // Pass the index
              className="border rounded w-full p-2"
            >
              <option value="reply">Reply Icon</option>
              <option value="phone">Phone Icon</option>
            </select>
          </label>
        </div>
      ))}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addService}
      >
        Add New Service
      </button>
    </div>
  );
};

export default ServiceListForm;
