import React, { useEffect } from 'react';
import ThemeOneMainTemplate from '../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate';
import ThemeOneHeroSection from '../../organisms/ThemeOneHeroSection/ThemeOneHeroSection';
import ThemeOneProductCategory from '../../organisms/ThemeOneProductCategory/ThemeOneProductCategory';
import FeatureProductsSection from '../../UI/FeatureProductsSection/FeatureProductsSection';
import Section from '../../templates/Section/Section';
import TestimonialsSection from '../../organisms/TestimonialsSection/TestimonialsSection';
import { useColors } from '../../../context/colorContext';
import ThemeOneTopCategoriesSection from '../../organisms/TopCategoriesSection/ThemeOneTopCategoriesSection';

const ThemeOne = () => {
    const products = [
        {
            id: 1,
            name: "Classic White Sneakers",
            price: 89.99,
            mainImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800",
            hoverImage: "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid"
        },
        {
            id: 2,
            name: "Leather Crossbody Bag",
            price: 129.99,
            mainImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
            hoverImage: "https://img.freepik.com/premium-photo/vintage-style-chic-fashion-accessories-lady-set_161568-2367.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid"
        },
        {
            id: 3,
            name: "Minimalist Watch - Silver",
            price: 199.99,
            mainImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
            hoverImage: "https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid"
        },
        {
            id: 4,
            name: "Wireless Headphones",
            price: 159.99,
            mainImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
            hoverImage: "https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid"
        },
        {
            id: 5,
            name: "Leather Crossbody Bag",
            price: 129.99,
            mainImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
            hoverImage: "https://img.freepik.com/premium-photo/vintage-style-chic-fashion-accessories-lady-set_161568-2367.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid"
        },
    ];



    const { updateThemeColors } = useColors();

    useEffect(() => {
        // Example: Update only theme colors
        const fetchThemeColors = async () => {
            // Simulate API call for theme colors
            const themeColors = {
                primaryColor: "#10B981",
                secondaryColor: "#6366F1",
                primaryColorHover: "#059669",
                secondaryColorHover: "#4F46E5",
            };

            updateThemeColors(themeColors);
        };

        // Only call fetchThemeColors when needed
        fetchThemeColors();
    }, []);
    return (
        <div>
            <ThemeOneMainTemplate>
                <ThemeOneHeroSection />
                <ThemeOneProductCategory />
                <FeatureProductsSection products={products} heading="Featured Products" />
                <ThemeOneTopCategoriesSection />
                <FeatureProductsSection products={products} heading="New Arrivals" />
                <Section
                    heading={"OUR HAPPY CLIENTS"}
                    className={"bg-white"}
                >
                    <TestimonialsSection />
                </Section>
            </ThemeOneMainTemplate>
        </div>
    );
};

export default ThemeOne;