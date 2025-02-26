import React from 'react';

const CTASection = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-[48px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-300 hover:shadow-2xl hover:from-orange-500 hover:to-orange-600">
                {/* Text Content */}
                <h2 className="text-lg md:text-3xl font-bold text-white max-w-3xl !leading-10 animate-fade-in">
                    Our team of passionate web designers and developers is here to assist you in creating a stunning website.
                </h2>

                {/* Button */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/70 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                    <button className="relative bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg md:text-xl whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl">
                        <div className="flex flex-col items-center">
                            <span className="transform transition-transform group-hover:-translate-y-1">Call Now</span>
                            <span className="transform transition-transform group-hover:translate-y-1">For Information</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;