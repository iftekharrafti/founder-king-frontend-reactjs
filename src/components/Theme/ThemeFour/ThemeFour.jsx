import React, { useEffect } from 'react';
import ThemeOneBannerContentSection from '../../organisms/ThemeOneHeroSection/ThemeOneHeroSection';
import FeatureProductsSection from '../../UI/FeatureProductsSection/FeatureProductsSection';
import Section from '../../templates/Section/Section';
import TestimonialsSection from '../../organisms/TestimonialsSection/TestimonialsSection';
import { useColors } from '../../../context/colorContext';
import ThemeOneHeroSection from '../../organisms/HeroSection/ThemeOneHeroSection';
import ThemeThreeMainTemplate from '../../templates/ThemeThreeMainTemplate/ThemeThreeMainTemplate';
import ThemeThreeProductCategoryCard from '../../organisms/CategoryCard/ThemeThreeProductCategoryCard';
import CategorySection from '../../UI/CategorySection/CategorySection';
import ThemeThreeProductCard from '../../atoms/ProductCard/ThemeThreeProductCard';
import ThemeFourMainTemplate from '../../templates/ThemeFourMainTemplate/ThemeFourMainTemplate';
import ThemeFourProductCard from '../../atoms/ProductCard/ThemeFourProductCard';
import ThemeFourProductCategoryCard from '../../organisms/CategoryCard/ThemeFourProductCategoryCard';
import CategorySectionTwo from '../../UI/CategorySection/CategorySectionTwo';
import ProductColumn from '../../UI/ProductColumn/ProductColumn';

const ThemeFour = () => {
    const categories = [
        {
            id: 1,
            name: "Men's Fashion",
            imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 2,
            name: "Women's Collection",
            imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
        {
            id: 3,
            name: "Accessories",
            imageUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
        },
    ];

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

    const bestSellers = [
        {
            image: "https://i.ibb.co/Jk8FWtY/oil.jpg",
            title: "Fresh-Fortified-Soyabean-Oil",
            rating: 0,
            price: "950"
        },
        {
            image: "https://i.ibb.co/YQXzRmw/beef-liver.jpg",
            title: "Beef-Liver-Kolija",
            rating: 0,
            price: "400"
        },
        {
            image: "https://i.ibb.co/0MKKgzx/pangas.jpg",
            title: "Pangas-Fish-After-Cutting",
            rating: 0,
            price: "500"
        },
        {
            image: "https://i.ibb.co/VqFKtPM/chicken.jpg",
            title: "Whole-Deshi-Chicken",
            rating: 0,
            price: "200"
        }
    ];

    const topSelling = [
        {
            image: "https://i.ibb.co/zfwg8wc/pumpkin.jpg",
            title: "Misti-Kumra-Pumpkin",
            rating: 0,
            price: "80"
        },
        {
            image: "https://i.ibb.co/Jk8FWtY/beef-bone.jpg",
            title: "Beef-Bone-In-Small-Piece",
            rating: 0,
            price: "600"
        },
        {
            image: "https://i.ibb.co/YQXzRmw/carrot.jpg",
            title: "Gajor-Imported-Carrot",
            rating: 0,
            price: "50"
        },
        {
            image: "https://i.ibb.co/0MKKgzx/beef-boneless.jpg",
            title: "Beef-Boneless-Premium-Cut",
            rating: 0,
            price: "700"
        }
    ];

    const recentlyAdded = [
        {
            image: "https://i.ibb.co/VqFKtPM/chicken-whole.jpg",
            title: "Cock-Chicken-Sonali",
            rating: 0,
            price: "350"
        },
        {
            image: "https://i.ibb.co/zfwg8wc/hilsha.jpg",
            title: "Whole-Hilsha-Fish",
            rating: 0,
            price: "250"
        },
        {
            image: "https://i.ibb.co/Jk8FWtY/broiler.jpg",
            title: "Broiler-Chicken-Dressed",
            rating: 0,
            price: "240"
        },
        {
            image: "https://i.ibb.co/YQXzRmw/spinach.jpg",
            title: "Aarong-Natural-Spinach",
            rating: 0,
            price: "850"
        }
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
            <ThemeFourMainTemplate>
                <ThemeOneHeroSection slides={heroSlides} />
                <CategorySectionTwo heading={"Product Categories"} categories={categories} CategoryCardComponent={ThemeFourProductCategoryCard} />
                <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ProductColumn title="Best Seller" products={bestSellers} />
                            <ProductColumn title="Top Selling" products={topSelling} />
                            <ProductColumn title="Recently Added" products={recentlyAdded} />
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
            </ThemeFourMainTemplate>
        </div>
    );
};

export default ThemeFour;