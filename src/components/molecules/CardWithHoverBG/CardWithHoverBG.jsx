const CardWithHoverBG = ({ item, children }) => {
  return (
    <div
      className={`group slide-bg after:bg-primary p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-4 cursor-pointer`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CardWithHoverBG;
