import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfirmModalContextProvider } from "./contexts/ConfirmModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfirmModalContextProvider>
      <App />
    </ConfirmModalContextProvider>
  </React.StrictMode>
);
