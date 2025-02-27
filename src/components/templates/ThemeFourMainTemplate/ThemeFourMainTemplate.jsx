import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeFourNavbar from "../../organisms/Navbar/ThemeFourNavbar";
const ThemeFourMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeFourNavbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ThemeFourMainTemplate;
