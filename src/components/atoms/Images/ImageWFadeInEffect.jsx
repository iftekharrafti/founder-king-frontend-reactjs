

const ImageWFadeInEffect = ({ className, src }) => {
  return (
    <img
      src={src}
      alt={src}
      height={1000}
      width={1000}
      className={`object-cover transition-transform duration-500 group-hover:scale-110 ${className} w-full`}
    />
  );
};

export default ImageWFadeInEffect;
