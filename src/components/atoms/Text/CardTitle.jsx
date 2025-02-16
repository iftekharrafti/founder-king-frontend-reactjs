const CardTitle = ({ title }) => {
  return (
    <h3 className="text-2xl font-bold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-white">
      {title}
    </h3>
  );
};

export default CardTitle;
