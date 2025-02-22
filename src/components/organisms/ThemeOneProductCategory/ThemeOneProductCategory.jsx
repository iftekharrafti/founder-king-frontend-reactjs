import React from 'react';
import Heading from '../../atoms/Text/Heading';
import GridTemplate from '../../UI/GridTemplate/GridTemplate';
import Card from '../../molecules/Card/Card';
import { FaBook, FaCar, FaGamepad, FaHeadphones, FaHome, FaLaptop, FaTshirt, FaUtensils } from 'react-icons/fa';
import Section from '../../templates/Section/Section';

const ThemeOneProductCategory = () => {
    const categories = [
        { icon: FaLaptop, title: 'Electronics', color: 'text-blue-500', bgColor: 'bg-blue-50' },
        { icon: FaTshirt, title: 'Fashion', color: 'text-pink-500', bgColor: 'bg-pink-50' },
        { icon: FaHeadphones, title: 'Accessories', color: 'text-purple-500', bgColor: 'bg-purple-50' },
        { icon: FaGamepad, title: 'Gaming', color: 'text-green-500', bgColor: 'bg-green-50' },
        { icon: FaHome, title: 'Home & Living', color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
        { icon: FaBook, title: 'Books', color: 'text-red-500', bgColor: 'bg-red-50' },
        { icon: FaCar, title: 'Automotive', color: 'text-gray-500', bgColor: 'bg-gray-50' },
        { icon: FaUtensils, title: 'Kitchen', color: 'text-orange-500', bgColor: 'bg-orange-50' },
    ];
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <Section
                    heading={"Shop By Category"}
                >
                    <GridTemplate columns={4} gap={6} className="mt-8">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <Card className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer transform hover:-translate-y-1 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`text-4xl ${category.color} transition-transform hover:scale-110`}>
                                            <Icon />
                                        </div>
                                        <h3 className="text-lg font-semibold mt-3 text-gray-800">
                                            {category.title}
                                        </h3>
                                    </div>
                                </Card>
                            )
                        })}
                    </GridTemplate>
                </Section>

            </div>
        </section>
    );
};

export default ThemeOneProductCategory;