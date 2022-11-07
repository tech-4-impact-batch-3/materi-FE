import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import KeranjangCountProvider from "./KeranjangCountProvider";
import UserProvider from "./UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UserProvider>
    <KeranjangCountProvider>
      <App />
    </KeranjangCountProvider>
  </UserProvider>
  // </React.StrictMode>
);
