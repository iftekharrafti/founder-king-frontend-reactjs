import { useState } from "react";

const ProductImage = ({ mainImage, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverImage : mainImage}
        alt="Product"
        className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default ProductImage;
