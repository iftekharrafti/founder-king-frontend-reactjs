import React, { useEffect, useState } from "react";
import { useColors } from "../../../context/colorContext";
import ThemeTwoMainTemplate from "../../templates/ThemeTwoMainTemplate/ThemeTwoMainTemplate";
import ThemeTwoHeroSection from "../../organisms/HeroSection/ThemeTwoHeroSection";
import FeatureProductsSection from "../../UI/FeatureProductsSection/FeatureProductsSection";
import Section from "../../templates/Section/Section";
import TestimonialsSection from "../../organisms/TestimonialsSection/TestimonialsSection";
import ThemeTwoProductCategoryCard from "../../organisms/CategoryCard/ThemeTwoProductCategoryCard";
import CategorySection from "../../UI/CategorySection/CategorySection";
import ThemeTwoProductCard from "../../atoms/ProductCard/ThemeTwoProductCard";

const ThemeTwo = () => {
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

  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      mainPrice: 99.99,
      discountedPrice: 89.99,
      inStock: true,
      rating: 4.5,
      mainImage:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800",
      hoverImage:
        "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      mainPrice: 149.99,
      discountedPrice: 129.99,
      inStock: true,
      rating: 4.7,
      mainImage:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      hoverImage:
        "https://img.freepik.com/premium-photo/vintage-style-chic-fashion-accessories-lady-set_161568-2367.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Minimalist Watch - Silver",
      mainPrice: 219.99,
      discountedPrice: 199.99,
      inStock: false,
      rating: 4.8,
      mainImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      hoverImage:
        "https://img.freepik.com/free-vector/smart-watch-realistic_78370-593.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      mainPrice: 179.99,
      discountedPrice: 159.99,
      inStock: true,
      rating: 4.6,
      mainImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      hoverImage:
        "https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Leather Crossbody Bag",
      mainPrice: 149.99,
      discountedPrice: 129.99,
      inStock: true,
      rating: 4.7,
      mainImage:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      hoverImage:
        "https://img.freepik.com/premium-photo/vintage-style-chic-fashion-accessories-lady-set_161568-2367.jpg?ga=GA1.1.654311608.1722150614&semt=ais_hybrid",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Men's Fashion",
      imageUrl:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Women's Collection",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Accessories",
      imageUrl:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Footwear",
      imageUrl:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Beauty & Skincare",
      imageUrl:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Sportswear",
      imageUrl:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      name: "Watches",
      imageUrl:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      name: "Bags & Luggage",
      imageUrl:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div>
      <ThemeTwoMainTemplate>
        <ThemeTwoHeroSection slides={heroSlides} />
        <CategorySection heading={"Our Categories"} categories={categories} CategoryCardComponent={ThemeTwoProductCategoryCard} />
        <FeatureProductsSection
          products={products}
          heading="Featured Products"
          ProductCardComponent={ThemeTwoProductCard}
        />
        <FeatureProductsSection
          products={products}
          heading="New Arrivals"
          ProductCardComponent={ThemeTwoProductCard}
        />

        <Section heading={"OUR HAPPY CLIENTS"} className={"bg-white"}>
          <TestimonialsSection />
        </Section>
      </ThemeTwoMainTemplate>
    </div>
  );
};

export default ThemeTwo;
