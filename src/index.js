import React from "react";
import ReactDOM from "react-dom/client"; // Use the client version for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext"; // Adjust path if necessary
import "./index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
