import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/App.css";
import RegisterTemplate from "./templates/RegisterTemplate";
import { steps } from "./utils/steps";
import Register from "./pages/Register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegisterTemplate steps={steps}>
      <Register />
    </RegisterTemplate>
  </StrictMode>
);
