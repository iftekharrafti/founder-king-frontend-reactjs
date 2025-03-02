import React from 'react';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Section from '../../templates/Section/Section';
import { SwiperSlide } from 'swiper/react';
import GridTemplate from '../GridTemplate/GridTemplate';

const CategorySectionTwo = ({ heading, categories, CategoryCardComponent }) => {
    return (
        <section className="py-1 md:px-4">
            <div className="max-w-7xl mx-auto">
                <Section heading={heading}>
                    <div className="hidden md:block">
                        <SwiperSlider
                            lg={4}
                            md={4}
                            sm={2}
                            icon={true}
                            autoplay={true}
                            paginationBtn={false}
                            slidesPerView={2}
                        >
                            {categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <CategoryCardComponent key={category.id} category={category} />
                                </SwiperSlide>
                            ))}
                        </SwiperSlider>
                    </div>
                    <div className="md:hidden">
                        <SwiperSlider
                            lg={4}
                            md={4}
                            sm={2}
                            icon={true}
                            autoplay={true}
                            paginationBtn={false}
                            slidesPerView={2}
                        >
                            {categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <CategoryCardComponent key={category.id} category={category} />
                                </SwiperSlide>
                            ))}
                        </SwiperSlider>
                    </div>
                </Section>
            </div>
        </section>
    );
};

export default CategorySectionTwo;