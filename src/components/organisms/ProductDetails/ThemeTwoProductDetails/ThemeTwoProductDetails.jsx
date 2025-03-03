import React, { useState } from 'react';
import { FiCreditCard, FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';
import ThemeTwoImageGallery from './ThemeTwoImageGallery';
import PrimaryButton from '../../../atoms/Buttons/PrimaryButton';
import SecondaryButton from '../../../atoms/Buttons/SecondaryButton';
import Typography from '../../../atoms/Typography/Typography';
import ThemeOneMainTemplate from '../../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';
import ThemeTwoProductInfo from './ThemeTwoProductInfo';

const ThemeTwoProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('M'); // Default size

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) of size ${size} to cart!`);
    };

    const handleOrderNow = () => {
        alert(`Ordering ${quantity} item(s) of size ${size} now!`);
    };

    const product = {
        id: 1,
        title: "Premium Wireless Headphones",
        description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions. Perfect for music lovers, gamers, and professionals alike.",
        price: 249.99,
        rating: 4.8,
        availability: true,
        images: [
            {
                src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Premium Wireless Headphones - Front View"
            },
            {
                src: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Premium Wireless Headphones - Side View"
            },
            {
                src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Premium Wireless Headphones - Detail View"
            },
            {
                src: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                alt: "Premium Wireless Headphones - Lifestyle"
            }
        ]
    };

    const handleSizeChange = (newSize) => {
        setSize(newSize);
    };

    return (
        <div>
            <ThemeOneMainTemplate>
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-white to-neutral py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
                        <div className="w-full">
                            <ThemeTwoImageGallery images={product.images} />
                        </div>

                        <div className="space-y-6">
                            <ThemeTwoProductInfo product={product} />

                            <div className="h-px bg-gray-200 w-full my-6"></div>

                            {/* Size Selection */}
                            <div className="flex items-center gap-4">
                                <Typography variant="h6" className="text-neutral-dark font-medium">Size:</Typography>
                                <div className="flex gap-4">
                                    {['S', 'M', 'L', 'XL'].map((availableSize) => (
                                        <button
                                            key={availableSize}
                                            className={`px-4 py-2 rounded-md border border-gray-300 ${size === availableSize ? 'bg-primary text-gray-600' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                                            onClick={() => handleSizeChange(availableSize)}
                                        >
                                            {availableSize}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-gray-200 w-full my-6"></div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4">
                                <Typography variant="h6" className="text-neutral-dark font-medium">Quantity:</Typography>

                                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                    <button
                                        className="bg-gray-100 hover:bg-gray-200 h-[36px] w-[36px] flex items-center justify-center transition disabled:opacity-50"
                                        onClick={handleDecrease}
                                        disabled={quantity <= 1}
                                    >
                                        <FiMinus className="text-gray-600" />
                                    </button>

                                    <Typography variant="span" className="w-10 text-center font-semibold text-lg bg-white">
                                        {quantity}
                                    </Typography>

                                    <button
                                        className="bg-gray-100 hover:bg-gray-200 h-[36px] w-[36px] flex items-center justify-center transition"
                                        onClick={handleIncrease}
                                    >
                                        <FiPlus className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <PrimaryButton
                                    variant="primary"
                                    className="flex items-center justify-center gap-2 group"
                                    onClick={handleAddToCart}
                                >
                                    <FiShoppingCart className="group-hover:animate-bounce-slow" />
                                    Add to Cart
                                </PrimaryButton>

                                <SecondaryButton
                                    variant="secondary"
                                    className="flex items-center justify-center gap-2 group"
                                    onClick={handleOrderNow}
                                >
                                    <FiCreditCard className="group-hover:animate-pulse-slow" />
                                    Order Now
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeOneMainTemplate>
        </div>
    );
};

export default ThemeTwoProductDetails;
