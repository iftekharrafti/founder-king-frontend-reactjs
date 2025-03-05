import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeFiveNavbar from "../../organisms/Navbar/ThemeFiveNavbar";
import ThemeSixNavbar from "../../organisms/Navbar/ThemeSixNavbar";
const ThemeSixMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeSixNavbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ThemeSixMainTemplate;
