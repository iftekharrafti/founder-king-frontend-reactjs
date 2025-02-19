import React from "react";

const Image = ({ src, alt = "Image", className = "", width, height }) => {
  console.log("src: ", src);
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-md ${className}`}
    />
  );
};

export default Image;
