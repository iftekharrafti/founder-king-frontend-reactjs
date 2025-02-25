import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { useColors } from "./context/colorContext";
import { useGeneralSettings } from "./context/generalSettingsContext";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "./utils/MetaTags/MetaTags";

function App() {
  const { updateGlobalColors } = useColors();

  const { generalSettings, errorGeneralSettings, isLoadingGeneralSettings } = useGeneralSettings();

  useEffect(() => {
    const fetchGlobalColors = async () => {
      const globalColors = {
        primaryColor: "#EB581E",
        secondaryColor: "#2D16D3",
        primaryColorHover: "#b89600",
        secondaryColorHover: "#2D1664",
      };

      updateGlobalColors(globalColors);
    };

    fetchGlobalColors();
  }, []);
  return (
    <main className="">
      <HelmetProvider>
        <MetaTags
          title={generalSettings?.data?.name}
          description={generalSettings?.data?.meta_description}
          keywords={generalSettings?.data?.meta_keywords}
          favicon={generalSettings?.data?.favicon}
          image={generalSettings?.data?.logo}
        />
        <RouterProvider router={router} />
      </HelmetProvider>
    </main>
  );
}

export default App;
