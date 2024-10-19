import React from 'react'

const ParagraphForm = () => {

  
  return (
    <div>
    <div className="mb-4">
    <h2 className="text-2xl font-bold mb-2">Paragraph Form</h2>

    <label className="block mb-2">
      Content:
      <textarea
        name="content"
        value={formData.content}
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

    <label className="block mb-2">
      Font Size:
      <input
        type="number"
        name="fontSize"
        value={formData.fontSize}
        onChange={handleInputChange}
        className="border rounded w-full p-2"
      />
    </label>
  </div>
    </div>
  )
}

export default ParagraphForm

// const ParagraphForm = ({ formData, handleInputChange }) => {
//   return (
    
//   );
// };

// export default ParagraphForm;
