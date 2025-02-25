import React from 'react';
import Section from '../../templates/Section/Section';
import GridTemplate from '../../UI/GridTemplate/GridTemplate';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
    {
        id: 1,
        name: "Men's Fashion",
        imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Women's Collection",
        imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
];

const ThemeThreeProductCategory = () => {
    return (
        <div>
            <Section heading="Explore Categories">
                <section className="">
                    <div className="max-w-7xl mx-auto">
                        {/* Categories Grid */}
                        <GridTemplate columns={4}>
                            {categories.map((category, index) => (
                                <div className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
                                    <div className="aspect-[4/5] relative">
                                        {/* Background Image with Overlay */}
                                        <img
                                            src={category.imageUrl}
                                            alt={category.name}
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                            {/* Category Name */}
                                            <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                                                {category.name}
                                            </h3>

                                            {/* Items Count */}
                                            <p className="text-gray-300 mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                                                {category.itemCount} Items
                                            </p>

                                            {/* Shop Now Button */}
                                            <button className="w-full bg-white/10 backdrop-blur-md text-white border border-white/30 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white hover:text-gray-900">
                                                Shop Now
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </GridTemplate>
                    </div>
                </section>
            </Section>

        </div>
    );
};

export default ThemeThreeProductCategory;