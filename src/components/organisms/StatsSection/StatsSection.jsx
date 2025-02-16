import React from 'react';
import { FaUsers, FaStar, FaBox } from 'react-icons/fa';
import Card from '@/components/molecules/Card/Card';

const StatsSection = () => {
    const stats = [
        {
            icon: <FaUsers />,
            number: "৫০০+",
            text: "এক্টিভ ইউজার"
        },
        {
            icon: <FaStar />,
            number: "৯৯.৯৯%",
            text: "সেটিসফাইড ক্লায়েন্ট"
        },
        {
            icon: <FaBox />,
            number: "১৬০+",
            text: "সিস্টেম আপডেট"
        }
    ];

    return (
        <section className="md:py-10 py-6 px-4 bg-gradient-to-b from-gray-200 to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <Card className="bg-gray-900 text-white p-8 rounded-xl transform transition-transform hover:scale-105">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="text-yellow-400 text-4xl">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-yellow-400">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-300">
                                    {stat.text}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;