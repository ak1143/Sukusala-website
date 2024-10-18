import useComponentStore from "../../store/useComponentStore";


const ParagraphForm = () => {

  const paragraphData = useComponentStore( state => state.paragraphData);
  const setParagraphData = useComponentStore( state => state.setParagraphData);

  const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setParagraphData({ ...paragraphData, [name] : value });
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-2">Paragraph Form</h2>

      <label className="block mb-2">
        Content:
        <textarea
          name="content"
          value={paragraphData.content}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
          required
        />
      </label>

      <label className="block mb-2">
        Background Color:
        <input
          type="color"
          name="backgroundColor"
          value={paragraphData.backgroundColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Text Color:
        <input
          type="color"
          name="textColor"
          value={paragraphData.textColor}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>

      <label className="block mb-2">
        Font Size:
        <input
          type="number"
          name="fontSize"
          value={paragraphData.fontSize}
          onChange={handleInputChange}
          className="border rounded w-full p-2"
        />
      </label>
    </div>
  );
};

export default ParagraphForm;
