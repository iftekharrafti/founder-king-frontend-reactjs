import { useState, useEffect } from "react";

// Utility function to manage useEffect logic for navbar width
export const useNavbarWidth = () => {
  const [navbarWidth, setNavbarWidth] = useState(false);

  const updateNavbarWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1180 && windowWidth <= 1279) {
      setNavbarWidth(true);
    } else {
      setNavbarWidth(false);
    }
  };

  useEffect(() => {
    // Initial render
    updateNavbarWidth();

    // Event listener for window resize
    window.addEventListener("resize", updateNavbarWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNavbarWidth);
    };
  }, []);

  return navbarWidth;
};

export const getWindowWidth = () => {
  return typeof window !== "undefined" ? window.innerWidth : 0;
};
