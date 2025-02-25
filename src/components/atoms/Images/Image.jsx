const Image = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full ${className}`}
    />
  );
};

export default Image;
