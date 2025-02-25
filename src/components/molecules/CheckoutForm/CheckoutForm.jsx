import React from 'react';
import InputField from '../../atoms/Form/InputField';

const CheckoutForm = ({register}) => {
    const countries = [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
    ];

    return (
        <div className="space-y-6">
            <InputField type='text' label="Your Name" placeholder="Name" name="name" register={register} />
            <InputField type='email' label="Email Address" placeholder="Email" name="email" register={register} />
            <InputField type='tel' label="Phone" placeholder="Phone" name="phone" register={register} />
            <InputField type='text' label="Address" placeholder="123 Main St" name="address" register={register} />

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
                Submit
            </button>
        </div>
    );
};

export default CheckoutForm;