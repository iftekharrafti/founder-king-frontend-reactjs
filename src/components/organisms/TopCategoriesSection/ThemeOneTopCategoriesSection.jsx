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

const ThemeOneTopCategoriesSection = () => {
    return (
        <div>
            <Section heading="Top Categories">
                <GridTemplate columns={4}>
                    {categories.map(category => (
                        <div className="relative h-[250px] rounded-xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={category?.imageUrl}
                                    alt="Category"
                                    className="w-full h-full object-cover object-center rounded-xl"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-xl" />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transform transition-transform duration-500 group-hover:scale-105">
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                    {category?.name}
                                </h3>
                                <button className="group relative z-10 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-theme-primary hover:text-gray-900 transform hover:scale-105 active:scale-95">
                                    Buy Now
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </GridTemplate>
            </Section>
        </div>
    );
};

export default ThemeOneTopCategoriesSection;