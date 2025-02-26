const CardTitle = ({ title, className }) => {
  return (
    <h3
      className={`text-2xl font-bold mb-3 ${className} transition-colors duration-300 group-hover:text-white`}
    >
      {title}
    </h3>
  );
};

export default CardTitle;
