import useComponentStore from "../../store/useComponentStore";

const MapForm = () => {

  const mapData = useComponentStore( state => state.mapData);
  const setMapData = useComponentStore( state => state.setMapData);

  const handleInputChange =(e) =>{
    const { name, value} = e.target;
    setMapData({ ...mapData, [name] : value});
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Map Configuration</h2>

      <label className="block mb-2">
        Latitude:
        <input
          type="number"
          step="any"
          name="lat"
          value={mapData.lat}
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
          value={mapData.lng}
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
          value={mapData.zoom}
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
          value={mapData.width}
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
          value={mapData.height}
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
          value={mapData.markerText}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default MapForm;
