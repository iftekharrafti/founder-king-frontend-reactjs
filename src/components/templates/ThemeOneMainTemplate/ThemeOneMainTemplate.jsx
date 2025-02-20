import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeOneNavbar from "../../organisms/Navbar/ThemeOneNavbar";
const ThemeOneMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeOneNavbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ThemeOneMainTemplate;
