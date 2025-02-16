import ImageWFadeInEffect from "@/components/atoms/Images/ImageWFadeInEffect";

const ImageWText = ({ url, title, description }) => {
  return (
    <div className="relative group overflow-hidden">
      <ImageWFadeInEffect src={url} className="h-[500px]" />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end">
        <h3 className="text-white text-xl font-semibold p-6">{title}</h3>
        {description && (
          <p className="text-white font-semibold px-6 text-right">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageWText;
