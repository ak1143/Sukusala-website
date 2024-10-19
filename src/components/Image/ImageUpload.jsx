import React, { useRef } from 'react';
import useComponentStore from "../../store/useComponentStore";


const ImageUpload = () => {
  const setImageData = useComponentStore((state) => state.setImageData);
  const imageData = useComponentStore((state) => state.imageData); 
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
   
    const file = e.target.files[0];
    if (file) {
  
      setImageData({
        imageSrc:file, 
      });
    }
  };

  const handleImageRemove = () => {
    setImageData({
      imageSrc: null, 
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the input file field
    }
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center items-center relative w-36 h-36 overflow-hidden bg-gray-50 r">
        {imageData.imageSrc && (
          <>
            <button
              type="button"
              className="absolute top-3 right-3 border-2 border-gray-300 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition duration-300 hover:bg-red-600 "
              onClick={handleImageRemove} 
            >
              X
            </button>
            <img
              src={URL.createObjectURL(imageData.imageSrc)} 
              alt="Profile"
              className="rounded-full w-9/12 h-9/12 object-cover "
            />
          </>
        )}
      </div>
      <div className="rounded-md border border-gray-300 bg-white p-4 w-full ">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
