import React from "react";
import { ColorProvider } from "../context/colorContext";

const GlobalProvider = ({ children }) => {
  return <ColorProvider>{children}</ColorProvider>;
};

export default GlobalProvider;
