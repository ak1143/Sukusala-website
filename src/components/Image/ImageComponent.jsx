import React from 'react';
import useComponentStore from '../../store/useComponentStore';


const ImageComponent = () => {
 const imageData = useComponentStore((state) => state.imageData);

  return (
    <div>
      <div className="md-8 p-6 rounded-lg shadow-lg bg-gray-200"  >

          <img
            src={URL.createObjectURL(imageData.imageSrc)}
            alt='Default image'
            width={imageData.width || auto}
            height={imageData.height || auto}
            className={`object-contain ${imageData.shadow ? 'shadow-[0px_6px_12px_rgba(0,0,0,0.7)]' : ''}`}
          >
          </img>
     </div>

    </div>
  );
};

export default ImageComponent;