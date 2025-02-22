import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { useColors } from "./context/colorContext";

function App() {
  const { updateGlobalColors } = useColors();

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
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
