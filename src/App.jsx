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
        primaryColor: "#3B82F6",
        secondaryColor: "#6B7280",
        primaryColorHover: "#2563EB",
        secondaryColorHover: "#4B5563",
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
