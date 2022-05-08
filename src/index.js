import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Pagetwo from "./Pagetwo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="Maincolor">
      <App />
      <Pagetwo />
    </div>
  </StrictMode>
);
