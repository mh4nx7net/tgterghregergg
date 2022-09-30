import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import Bundler from "./App_component_bundler";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Bundler />
  </StrictMode>
);
