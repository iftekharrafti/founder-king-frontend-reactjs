import React from 'react';
import InputField from '../../atoms/Form/InputField';
import TextareaField from '../../atoms/Form/TextareaField';
import PrimaryButton from '../../atoms/Buttons/PrimaryButton';
import CheckoutSummaryItem from '../../atoms/CheckoutSummaryItem/CheckoutSummaryItem';
import { useForm } from 'react-hook-form';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const Checkout = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const checkoutSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };
    return (
        <MainTemplate>
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="max-w-xl mx-auto">
                    {/* Checkout Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                            <h1 className="text-2xl font-bold text-white mb-6">Checkout</h1>

                            <div className="space-y-2 divide-y divide-white/10">
                                <CheckoutSummaryItem
                                    label="Selected Package"
                                    value="Pro"
                                />
                                <CheckoutSummaryItem
                                    label="Billing Cycle"
                                    value="Monthly"
                                />
                                <CheckoutSummaryItem
                                    label="Total Amount"
                                    value="৳990"
                                />
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                Enter Your Details
                            </h2>

                            <form onSubmit={handleSubmit(checkoutSubmit)} className="space-y-5">
                                <InputField type='text' label="Business Name" placeholder="Business Name" name="business_name" register={register} />
                                <InputField type='text' label="Enter your full name" placeholder="Enter your full name" name="name" register={register} />
                                <InputField type='tel' label="Phone Number" placeholder="Phone Number" name="phone" register={register} />
                                <InputField type='email' label="Your email address" placeholder="Your email address" name="email" register={register} />
                                <TextareaField type='text' label="Your Message" placeholder="Tell us about your business..." name="message" register={register} />

                                <div className='flex justify-center'>
                                    <PrimaryButton className="px-12 py-2">Proceed to Payment</PrimaryButton>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default Checkout;