import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/App.css";

import GeneralSection from "./pages/GeneralSection";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeneralSection />
  </StrictMode>
);
