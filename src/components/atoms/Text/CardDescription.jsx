const CardDescription = ({ description }) => {
  return (
    <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-white">
      {description}
    </p>
  );
};

export default CardDescription;
