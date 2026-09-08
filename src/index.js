/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

createRoot(document.getElementById("app")).render(<App />);
