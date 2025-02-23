import React from 'react';
import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import Heading from '../../atoms/Text/Heading';
import PrimaryButton from '../../atoms/Buttons/PrimaryButton';
import SecondaryButton from '../../atoms/Buttons/SecondaryButton';

const ThemeOneBannerContent = () => {
    return (
        <div className="space-y-8">
            <Heading type='main'>
                Discover Your Style,
                <br />
                Elevate Your Life
            </Heading>

            <p className="text-xl text-gray-600 max-w-lg">
                Shop the latest trends in fashion, electronics, and lifestyle products.
                Get exclusive deals and premium quality items delivered to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4">
                <PrimaryButton variant="primary">
                    <span className="flex items-center gap-2">
                        Shop Now <FaShoppingBag />
                    </span>
                </PrimaryButton>

                <SecondaryButton variant="secondary">
                    <span className="flex items-center gap-2">
                        View Catalog <FaArrowRight />
                    </span>
                </SecondaryButton>
            </div>

            <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">50K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">10K+</div>
                    <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">24/7</div>
                    <div className="text-gray-600">Support</div>
                </div>
            </div>
        </div>
    );
};

export default ThemeOneBannerContent;