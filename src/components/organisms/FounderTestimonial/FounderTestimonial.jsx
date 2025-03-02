import React from 'react';
import SwiperSlider from '@/components/UI/SwiperSlider/SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import GridTemplate from '../../UI/GridTemplate/GridTemplate';
import Avatar from '../../atoms/Images/Avatar';
import Badge from '../../atoms/Badge/Badge';

const testimonials = [
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    },
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    },
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    },
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    },
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    },
    {
        name: "Bret Adcock",
        role: "Founder",
        company: "Figure.ai",
        avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid", // Placeholder image
        content: "Matt is an absolute beast when it comes to audience and community growth. He has one of the fastest growing brands online and is an incredible teacher. Would highly recommend working with him."
    }
];

const FounderTestimonial = ({ founders, testimonialData }) => {


    return (
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center">
                    <h2 className="text-2xl md:text-5xl font-bold text-center text-orange-500 mb-4 border-2 border-global-primary inline-block px-4 py-2 rounded-3xl">
                        What Founders are saying
                        {testimonialData?.title}
                    </h2>
                </div>
                <div className="mt-12">
                    <GridTemplate columns={3} className="md:gap-8 gap-4">
                        {founders?.map((founder, index) => (
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                                <div className="flex items-center gap-4 mb-4">
                                    <div>
                                        <Avatar src={founder?.image} alt={founder?.name} size={110} className='mt-[-35px]' />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{founder?.name}</h3>
                                        <div className="flex gap-2 mt-2">
                                            <Badge text={founder?.role} />
                                            <Badge text={founder.role} color="bg-orange-500" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {founder?.text}
                                </p>
                            </div>
                        ))}
                    </GridTemplate>
                </div>
            </div>
        </section>
    );
};

export default FounderTestimonial;