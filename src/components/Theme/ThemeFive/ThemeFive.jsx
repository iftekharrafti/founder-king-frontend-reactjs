import React, { useEffect, useState } from 'react';
import Section from '../../templates/Section/Section';
import TestimonialsSection from '../../organisms/TestimonialsSection/TestimonialsSection';
import { useColors } from '../../../context/colorContext';
import ThemeOneHeroSection from '../../organisms/HeroSection/ThemeOneHeroSection';
import ThemeFourMainTemplate from '../../templates/ThemeFourMainTemplate/ThemeFourMainTemplate';
import ThemeFourProductCategoryCard from '../../organisms/CategoryCard/ThemeFourProductCategoryCard';
import CategorySectionTwo from '../../UI/CategorySection/CategorySectionTwo';
import ProductColumn from '../../UI/ProductColumn/ProductColumn';
import ThemeFiveMainTemplate from '../../templates/ThemeFiveMainTemplate/ThemeFourMainTemplate';
import ThemeFiveProductCategoryCard from '../../organisms/CategoryCard/ThemeFiveProductCategoryCard';
import ThemeFiveProductGrid from '../../molecules/ThemeFiveProductGrid/ThemeFiveProductGrid';
import CategoryTabs from '../../molecules/CategoryTabs/CategoryTabs';

const ThemeFive = () => {
    const [activeCategory, setActiveCategory] = useState('mens');

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const heroSlides = [
        {
            imageUrl:
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
            imageAlt: "Beautiful mountain landscape",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
            imageAlt: "Scenic mountain view",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
            imageAlt: "Sunset over the ocean",
        },
    ];

    const categories = [
        { id: 'mens', name: "MEN'S FASHION", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
        { id: 'womens', name: "WOMEN'S FASHION", image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
        { id: 'boys', name: "BOYS FASHION", image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
        { id: 'girls', name: "GIRLS FASHION", image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
        { id: 'baby', name: "BABY", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
    ];

    const products = {
        mens: [
            {
                id: 'm1',
                name: "Men's White Kurta",
                image: "https://images.unsplash.com/photo-1598808503746-f34cfb6350ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1500,
                discountPrice: 1200,
                category: "mens"
            },
            {
                id: 'm2',
                name: "Navy Blue Punjabi",
                image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 4000,
                discountPrice: 3200,
                category: "mens"
            },
            {
                id: 'm3',
                name: "Classic Denim Jacket",
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 3500,
                discountPrice: 2800,
                category: "mens"
            }
        ],
        womens: [
            {
                id: 'w1',
                name: "Elegant Black Saree",
                image: "https://images.unsplash.com/photo-1610030469668-8e4a7c3e1a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 2000,
                discountPrice: 1000,
                category: "womens"
            },
            {
                id: 'w2',
                name: "Floral Summer Dress",
                image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1800,
                discountPrice: 1500,
                category: "womens"
            },
            {
                id: 'w3',
                name: "Designer Anarkali Suit",
                image: "https://images.unsplash.com/photo-1602424976565-e8c3e15dba1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 3500,
                discountPrice: 2800,
                category: "womens"
            }
        ],
        boys: [
            {
                id: 'b1',
                name: "Boys Casual T-Shirt",
                image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 800,
                discountPrice: 600,
                category: "boys"
            },
            {
                id: 'b2',
                name: "Boys Denim Jeans",
                image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1200,
                discountPrice: 950,
                category: "boys"
            },
            {
                id: 'b3',
                name: "Boys Formal Suit",
                image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 2500,
                discountPrice: 2000,
                category: "boys"
            }
        ],
        girls: [
            {
                id: 'g1',
                name: "Girls Party Dress",
                image: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1500,
                discountPrice: 1200,
                category: "girls"
            },
            {
                id: 'g2',
                name: "Girls Summer Outfit",
                image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1000,
                discountPrice: 800,
                category: "girls"
            },
            {
                id: 'g3',
                name: "Girls Winter Jacket",
                image: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 1800,
                discountPrice: 1500,
                category: "girls"
            }
        ],
        baby: [
            {
                id: 'bb1',
                name: "Baby Romper Set",
                image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 800,
                discountPrice: 650,
                category: "baby"
            },
            {
                id: 'bb2',
                name: "Baby Knit Sweater",
                image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 900,
                discountPrice: 750,
                category: "baby"
            },
            {
                id: 'bb3',
                name: "Baby Shoes",
                image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                originalPrice: 600,
                discountPrice: 450,
                category: "baby"
            }
        ]
    };


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
            <ThemeFiveMainTemplate>
                <ThemeOneHeroSection slides={heroSlides} />
                <CategorySectionTwo heading={"Product Categories"} categories={categories} CategoryCardComponent={ThemeFiveProductCategoryCard} />
                <section className="py-12 bg-gradient-to-br from-white to-neutral/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2 relative inline-block">
                                POPULAR PRODUCTS
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary"></span>
                            </h2>
                            <p className="text-gray-600 mt-4">Check & Get Your Desired Products!</p>
                        </div>

                        <CategoryTabs
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                        />

                        <div className="mt-8 transition-all duration-500 ease-in-out">
                            <ThemeFiveProductGrid products={products[activeCategory]} />
                        </div>
                    </div>
                </section>

                {/* <ThemeOneBannerContentSection /> */}
                <Section
                    heading={"OUR HAPPY CLIENTS"}
                    className={"bg-white"}
                >
                    <TestimonialsSection />
                </Section>
            </ThemeFiveMainTemplate>
        </div>
    );
};

export default ThemeFive;