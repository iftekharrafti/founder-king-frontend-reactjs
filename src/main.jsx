import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalProvider from "./provider/globalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
        <App />
    </GlobalProvider>
  </StrictMode>
);
