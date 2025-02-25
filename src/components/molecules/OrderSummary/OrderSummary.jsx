import React from 'react';
import CheckoutItemForTheme from '../../atoms/CheckoutItemForTheme/CheckoutItemForTheme';

const OrderSummary = ({ items }) => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
            <div className="divide-y">
                {items.map((item) => (
                    <CheckoutItemForTheme key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-6 space-y-3 text-gray-600">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t">
                    <span>Total</span>
                    <span className="text-indigo-600">${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;