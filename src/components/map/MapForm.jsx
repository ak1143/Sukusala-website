

const MapForm = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Map Configuration</h2>

      <label className="block mb-2">
        Latitude:
        <input
          type="number"
          step="any"
          name="lat"
          value={formData.lat}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Longitude:
        <input
          type="number"
          step="any"
          name="lng"
          value={formData.lng}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Zoom Level:
        <input
          type="number"
          name="zoom"
          value={formData.zoom}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Width:
        <input
          type="text"
          name="width"
          value={formData.width}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Height:
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Marker Text:
        <input
          type="text"
          name="markerText"
          value={formData.markerText}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default MapForm;
