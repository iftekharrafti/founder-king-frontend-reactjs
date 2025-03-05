import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeFourNavbar from "../../organisms/Navbar/ThemeFourNavbar";
import ThemeFiveNavbar from "../../organisms/Navbar/ThemeFiveNavbar";
const ThemeFiveMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeFiveNavbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ThemeFiveMainTemplate;
