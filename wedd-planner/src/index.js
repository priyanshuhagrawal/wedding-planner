import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/packageCard.css";

import App from "./App";

import WeddingProvider from "./context/WeddingContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <WeddingProvider>
      <App />
    </WeddingProvider>
  </React.StrictMode>
);  