"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperSlider from '@/components/UI/SwiperSlider/SwiperSlider';

const HappyCustomer = () => {
    const logos = [
        {
            src: "https://www.logodesign.net/logo-new/mountains-with-cloud-trees-and-grass-landscape-1333ld.png?nwm=1&nws=1&industry=landscape&txt_keyword=All",
            alt: "Company Landscaping"
        },
        {
            src: "https://www.creativefabrica.com/wp-content/uploads/2019/04/Landscape-logo-vector-by-DEEMKA-STUDIO-1.jpg",
            alt: "Natural Show"
        },
        {
            src: "https://img.freepik.com/premium-vector/landscape-logo-lawn-gardening-business-organization-website_740796-4308.jpg",
            alt: "Lawn Care"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIDf0_VTyv3SKUvQNbN60gxmtcNCIzWl02g&s",
            alt: "New Bazar"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcr-_aRadehz3P9SXW-JmXHd9q5a2cNkQv8A&s",
            alt: "Natural Veshoj"
        },
        {
            src: "https://img.freepik.com/premium-vector/landscape-logo-lawn-gardening-business-organization-website_740796-4308.jpg",
            alt: "Natural Veshoj"
        }
    ];

    return (
        <div>
            <SwiperSlider lg={5} md={3} sm={2} icon={false} autoplay={true}>
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="max-h-28 flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm
    transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-24 w-auto object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperSlider>

        </div>
    );
};

export default HappyCustomer;