import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from '../../atoms/CartItem/CartItem';
import ThemeOneMainTemplate from '../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';

const sampleCartItems = [
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 2,
        name: "Leather Crossbody Bag",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"
    }
];

const AddtoCart = () => {
    return (
        <ThemeOneMainTemplate>
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <FaShoppingCart className="text-3xl text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-4">
                            {sampleCartItems.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="md:col-span-1">
                            <div className="bg-white p-6 rounded-xl shadow-sm mt-6 md:mt-0 sticky top-20">
                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span>Total:</span>
                                    <span className="text-indigo-600">
                                        ${sampleCartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                                    </span>
                                </div>
                                <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </ThemeOneMainTemplate>
    );
};

export default AddtoCart;