import React from 'react';
import { FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import CheckoutForm from '../../molecules/CheckoutForm/CheckoutForm';
import OrderSummary from '../../molecules/OrderSummary/OrderSummary';
import ThemeOneMainTemplate from '../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';

const sampleItems = [
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        quantity: 1,
        size: "US 10",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"
    },
    {
        id: 2,
        name: "Leather Crossbody Bag",
        price: 129.99,
        quantity: 1,
        size: "Medium",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"
    }
];

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();
    return (
        <ThemeOneMainTemplate>
            <section className="py-16 px-4 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <FaLock className="text-2xl text-green-500" />
                        <h1 className="text-3xl font-bold text-gray-800">Secure Checkout</h1>
                    </div>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h2 className="text-xl font-bold text-gray-800 mb-6">
                                    Shipping Information
                                </h2>
                                <CheckoutForm register={register} />
                            </div>
                            <div>
                                <OrderSummary items={sampleItems} />
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </ThemeOneMainTemplate>
    );
};

export default CheckoutPage;