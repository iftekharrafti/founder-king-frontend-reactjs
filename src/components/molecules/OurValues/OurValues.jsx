import React from 'react';
import { FaHeart, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import CardWithHoverBG from '../CardWithHoverBG/CardWithHoverBG';

const OurValues = () => {
    const values = [
        {
            icon: FaHeart,
            title: 'Customer First',
            description: 'We put our customers at the heart of everything we do.'
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'Constantly pushing boundaries to create better solutions.'
        },
        {
            icon: FaHandshake,
            title: 'Integrity',
            description: 'Building trust through transparency and honesty.'
        },
        {
            icon: FaRocket,
            title: 'Excellence',
            description: 'Striving for excellence in every aspect of our work.'
        }
    ];

    return (
        <div className="py-0 bg-gradient-to-b from-white to-gray-50">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                        <CardWithHoverBG className="after:text-white">
                            <div className="text-rose-500 text-4xl mb-4">
                                <Icon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{value?.title}</h3>
                            <p className="text-gray-600">{value?.description}</p>
                        </CardWithHoverBG>
                    )
                })}
            </div>
        </div>
    );
};

export default OurValues;