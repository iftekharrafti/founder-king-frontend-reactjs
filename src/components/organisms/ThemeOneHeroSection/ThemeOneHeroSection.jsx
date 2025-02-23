import React from 'react';
import Image from '../../atoms/Images/Image';
import ThemeOneBannerContent from '../ThemeOneHeroContent/ThemeOneHeroContent';

const ThemeOneBannerContentSection = () => {
    return (
        <div>
            <section className="bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="order-2 lg:order-1">
                            <ThemeOneBannerContent />
                        </div>

                        {/* Right Column - Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-theme_one_primary to-theme_one_primary_hover rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000">
                                </div>
                                <Image
                                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Shopping Experience"
                                    className="relative rounded-lg shadow-2xl transform transition duration-500 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ThemeOneBannerContentSection;