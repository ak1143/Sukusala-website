import { useState, useEffect, useCallback } from "react";
import useComponentStore from "../../store/useComponentStore";
import "../../styles/CarouselComponent.css"; // Ensure the CSS path is correct

const CarouselComponent = () => {
    const { carouselData } = useComponentStore();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalSlides = carouselData?.length || 0;

    if (totalSlides === 0) {
        return <p>No carousel data available.</p>;
    }

    const goToNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, [totalSlides]);

    const goToPreviousSlide = useCallback(() => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    }, [totalSlides]);

    // Auto-slide every 3 seconds, pauses when user interacts
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval);
    }, [goToNextSlide, isPaused]);

    // Keyboard functionality with throttling
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") goToNextSlide();
            if (e.key === "ArrowLeft") goToPreviousSlide();
        };
        const throttledKeydown = (e) => {
            setTimeout(() => handleKeyDown(e), 100);
        };
        window.addEventListener("keydown", throttledKeydown);
        return () => window.removeEventListener("keydown", throttledKeydown);
    }, [goToNextSlide, goToPreviousSlide]);

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="carousel">
                {carouselData.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                        style={{
                            transform: `translateX(${-(currentSlide * 100)}%)`,
                            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            opacity: index === currentSlide ? 1 : 0,
                        }}
                    >
                        <img
                            src={item.imageSrc}
                            alt={item.altText}
                            loading="lazy"
                            style={{ objectFit: 'contain', }}
                            className="carousel-image"
                        />
                        <h3 className="carousel-title">{item.title}</h3>
                        <p className="carousel-description">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button className="carousel-button prev" onClick={goToPreviousSlide}>
                &#10094;
            </button>
            <button className="carousel-button next" onClick={goToNextSlide}>
                &#10095;
            </button>

            {/* Slide indicators */}
            <div className="carousel-indicators">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;
