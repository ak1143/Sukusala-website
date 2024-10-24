import { useEffect, useState } from "react";
import useComponentStore from "../../store/useComponentStore";

const CarouselForm = () => {
    const { setCarouselData, carouselData } = useComponentStore();
    const [carouselItems, setCarouselItems] = useState(carouselData);

    const handleInputChange = (index, field, value) => {
        const newItems = [...carouselItems];
        newItems[index][field] = value;
        setCarouselItems(newItems);
        setCarouselData(newItems);
    };

    const handleAddSlide = () => {
        // Prevent adding a slide if fields are empty
        if (carouselItems.some(item => !item.imageSrc || !item.altText || !item.title || !item.description)) {
            alert("Please fill out all fields before adding a new slide.");
            return;
        }
        const newCarouselItems = [
            ...carouselItems,
            { imageSrc: "", altText: "", title: "", description: "" },
        ];
        setCarouselItems(newCarouselItems);
        setCarouselData(newCarouselItems);
    };

    const handleRemoveSlide = (index) => {
        const newItems = [...carouselItems];
        newItems.splice(index, 1);
        setCarouselItems(newItems);
        setCarouselData(newItems);
    };

    return (
        <div className="carousel-form">
            <h2 className="text-xl font-bold mb-4">Carousel Data</h2>
            {carouselItems.map((item, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium">Slide {index + 1}</h3>
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={item.imageSrc}
                        onChange={(e) => handleInputChange(index, "imageSrc", e.target.value)}
                        className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="Alt Text"
                        value={item.altText}
                        onChange={(e) => handleInputChange(index, "altText", e.target.value)}
                        className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        value={item.title}
                        onChange={(e) => handleInputChange(index, "title", e.target.value)}
                        className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <textarea
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => handleInputChange(index, "description", e.target.value)}
                        className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    {carouselItems.length > 1 && (
                        <button
                            onClick={() => handleRemoveSlide(index)}
                            className="text-red-500 mt-2"
                        >
                            Remove Slide
                        </button>
                    )}
                </div>
            ))}
            <button onClick={handleAddSlide} className="bg-blue-500 text-white p-2 rounded mt-4">
                Add Slide
            </button>
        </div>
    );
};

export default CarouselForm;
