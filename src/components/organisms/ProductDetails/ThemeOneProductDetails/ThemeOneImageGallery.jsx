import React, { useState } from 'react';
import Image from '../../../atoms/Images/Image';

const ThemeOneImageGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-md cursor-pointer ${mainImage.src === image.src
                                ? 'ring-2 ring-primary ring-offset-2'
                                : 'opacity-70 hover:opacity-100'
                            }`}
                        onClick={() => setMainImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[100px] object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeOneImageGallery;