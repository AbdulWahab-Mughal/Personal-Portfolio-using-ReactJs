import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GlobalVarProvider } from "./Components/Context/GlobalVar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalVarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalVarProvider>
);
