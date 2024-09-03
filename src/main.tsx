import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./config/i18n";

const container = document.getElementById("root");

if (!container) {
  throw new Error("No se encontró un elemento con el ID 'root'.");
}

const root = ReactDOM.createRoot(container);
root.render(
  <Suspense>
    <App />
  </Suspense>
);
