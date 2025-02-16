const CardIcon = ({ imageUrl, alt }) => {
  return (
    <div className="w-20 h-20 mx-auto mb-6">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110"
      />
    </div>
  );
};

export default CardIcon;
