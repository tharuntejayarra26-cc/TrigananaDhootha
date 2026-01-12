import React, { useEffect, useState } from "react";

interface CarouselProps {
    images: string[];
    interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="flex justify-center p-10 ">
            <div className="relative w-64 h-[400px] overflow-hidden rounded-xl border-2 border-gold/30 shadow-glow">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
