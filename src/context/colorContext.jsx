import React, { createContext, useContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const updateGlobalColors = (globalColors) => {
    const root = document.documentElement;
    root.style.setProperty("--global-primary", globalColors.primaryColor);
    root.style.setProperty("--global-secondary", globalColors.secondaryColor);
    root.style.setProperty(
      "--global-primary-hover",
      globalColors.primaryColorHover
    );
    root.style.setProperty(
      "--global-secondary-hover",
      globalColors.secondaryColorHover
    );
  };

  const updateThemeColors = (themeColors) => {
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", themeColors.primaryColor);
    root.style.setProperty("--theme-secondary", themeColors.secondaryColor);
    root.style.setProperty(
      "--theme-primary-hover",
      themeColors.primaryColorHover
    );
    root.style.setProperty(
      "--theme-secondary-hover",
      themeColors.secondaryColorHover
    );
  };

  return (
    <ColorContext.Provider value={{ updateGlobalColors, updateThemeColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorProvider");
  }
  return context;
};
