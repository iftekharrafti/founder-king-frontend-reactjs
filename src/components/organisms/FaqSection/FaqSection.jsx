import FaqItem from '@/components/molecules/FaqItem/FaqItem';
import React from 'react';

const FaqSection = () => {
    const faqs = [
        {
            question: "Is it easy to build a website?",
            answer: "Yes! Our platform provides an intuitive drag-and-drop interface and pre-built templates that make website creation simple and straightforward, even for beginners."
        },
        {
            question: "Do I need technical knowledge to create a website?",
            answer: "Not at all! Our website builder is designed for users of all skill levels. You don't need any coding knowledge to create a professional-looking website."
        },
        {
            question: "How long does it take to build a website?",
            answer: "With our platform, you can have a basic website up and running in just a few hours. More complex websites might take a few days to perfect."
        },
        {
            question: "Can I customize my website design?",
            answer: "Absolutely! We offer extensive customization options for colors, fonts, layouts, and more. You can make your website truly unique to match your brand."
        }
    ];

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
};

export default FaqSection;