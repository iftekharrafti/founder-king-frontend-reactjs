import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import NavbarTwo from "@/components/organisms/Navbar/NavbarTwo";
import React from "react";
import NavbarThree from "../../organisms/Navbar/NavbarThree";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <NavbarTwo /> */}
      {/* <NavbarThree /> */}
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
