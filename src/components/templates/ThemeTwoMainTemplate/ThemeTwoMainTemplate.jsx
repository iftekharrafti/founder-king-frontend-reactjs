import Footer from "@/components/organisms/Footer/Footer";
import React from "react";
import ThemeTwoNavbar from "../../organisms/Navbar/ThemeTwoNavbar";
const ThemeTwoMainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeTwoNavbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default ThemeTwoMainTemplate;
