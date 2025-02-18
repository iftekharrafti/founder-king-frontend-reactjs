import React from 'react';
import Card from '../Card/Card';

const OurStory = () => {
    const milestones = [
        {
            year: '2020',
            title: 'The Beginning',
            description: 'Started with a vision to revolutionize e-commerce in Bangladesh.'
        },
        {
            year: '2021',
            title: 'Rapid Growth',
            description: 'Expanded our team and reached 1000+ active users.'
        },
        {
            year: '2022',
            title: 'Innovation',
            description: 'Launched groundbreaking features and won multiple tech awards.'
        },
        {
            year: '2023',
            title: 'Market Leader',
            description: 'Became the leading e-commerce solution provider in Bangladesh.'
        }
    ];

    return (
        <div className="py-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones?.map((milestone, index) => (
                    <Card className="border-l-4 border-primary border-0"> 
                        <span className="text-primary font-bold text-lg">{milestone?.year}</span>
                        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{milestone?.title}</h3>
                        <p className="text-gray-600">{milestone?.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default OurStory;