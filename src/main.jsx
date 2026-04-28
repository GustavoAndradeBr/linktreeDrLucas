import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Cartao from "./pages/Cartao.jsx";

const path = window.location.pathname;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {path === "/cartao" ? <Cartao /> : <App />}
  </StrictMode>
);
