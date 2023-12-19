import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { UserProvider } from "hooks/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
