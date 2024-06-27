import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import Table from "./components/Table";
import Form from "./components/Form";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
);
