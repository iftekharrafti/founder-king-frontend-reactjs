import React, { useState } from 'react';
import Image from '../../../atoms/Images/Image';

const ThemeTwoImageGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="grid grid-cols-4 gap-4 items-start">
            {/* Left Side - Small Images */}
            <div className="col-span-1 flex flex-col gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-md cursor-pointer ${
                            mainImage.src === image.src
                                ? 'ring-2 ring-primary ring-offset-2'
                                : 'opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => setMainImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Right Side - Main Image */}
            <div className="col-span-3 overflow-hidden rounded-lg bg-white shadow-lg">
                <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

export default ThemeTwoImageGallery;
