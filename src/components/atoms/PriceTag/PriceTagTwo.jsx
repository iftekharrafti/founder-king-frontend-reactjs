const PriceTagTwo = ({ mainPrice, discountedPrice }) => {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-primary">
        ${discountedPrice}
      </span>
      {mainPrice !== discountedPrice && (
        <span className="text-sm text-gray-500 line-through">${mainPrice}</span>
      )}
    </div>
  );
};

export default PriceTagTwo;
