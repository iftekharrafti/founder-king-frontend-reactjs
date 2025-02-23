import React, { useEffect, useState } from "react";
import { useColors } from "../../../context/colorContext";
import ThemeTwoMainTemplate from "../../templates/ThemeTwoMainTemplate/ThemeTwoMainTemplate";
import ThemeTwoHeroSection from "../../organisms/HeroSection/ThemeTwoHeroSection";

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
  return (
    <div>
      <ThemeTwoMainTemplate>
        <ThemeTwoHeroSection slides={heroSlides} />
      </ThemeTwoMainTemplate>
    </div>
  );
};

export default ThemeTwo;
