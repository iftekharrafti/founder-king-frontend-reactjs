import React from "react";
import { ColorProvider } from "../context/colorContext";
import { GeneralSettingsProvider } from "../context/generalSettingsContext";

const GlobalProvider = ({ children }) => {
  return (
    <ColorProvider>
      <GeneralSettingsProvider>
        {children}
      </GeneralSettingsProvider>
    </ColorProvider>
  )
};

export default GlobalProvider;
