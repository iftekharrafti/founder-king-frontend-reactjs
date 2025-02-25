import React from 'react';

const CheckoutItemForTheme = ({ item }) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <div className="text-sm text-gray-600">
          Size: {item.size} | Qty: {item.quantity}
        </div>
      </div>
      <div className="font-semibold text-indigo-600">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CheckoutItemForTheme;