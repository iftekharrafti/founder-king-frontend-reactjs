import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import React from "react";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
