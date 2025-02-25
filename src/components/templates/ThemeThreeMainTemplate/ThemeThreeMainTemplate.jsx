import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeThreeNavbar from "../../organisms/Navbar/ThemeThreeNavbar";
const ThemeThreeMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeThreeNavbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ThemeThreeMainTemplate;
