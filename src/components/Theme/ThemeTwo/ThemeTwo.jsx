import React, { useEffect, useState } from "react";
import { useColors } from "../../../context/colorContext";
import ThemeTwoMainTemplate from "../../templates/ThemeTwoMainTemplate/ThemeTwoMainTemplate";

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
  return (
    <div>
      <ThemeTwoMainTemplate>
        <div className="bg-global-primary hover:bg-global-primary-hover p-4 rounded">
          <h2 className="text-white">Global Color Section</h2>
          <p className="text-global-secondary">
            This text uses the global secondary color
          </p>
        </div>

        <div className="bg-theme-primary hover:bg-theme-primary-hover p-4 rounded">
          <h2 className="text-white">Theme Color Section</h2>
          <p className="text-theme-secondary">
            This text uses the theme secondary color
          </p>
        </div>
      </ThemeTwoMainTemplate>
    </div>
  );
};

export default ThemeTwo;
