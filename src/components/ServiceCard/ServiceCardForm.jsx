

const ServiceCardForm = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Service Card</h2>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
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
          value={formData.description}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Icon (URL):
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Background Color:
        <input
          type="color"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Text Color:
        <input
          type="color"
          name="textColor"
          value={formData.textColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default ServiceCardForm;
