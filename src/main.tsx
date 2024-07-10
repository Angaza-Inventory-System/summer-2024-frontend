import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import Table from "./components/Table";
import Login from "./components/Login";
import Form from "./components/Form";
import NavMenu from "./NavMenu";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
);
