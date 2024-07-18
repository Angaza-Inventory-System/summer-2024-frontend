import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import Login from "./components/Login";
import { Details } from "./components/Details";
import Cookies from "js-cookie";

function Routing() {
  const backUrl = "http://127.0.0.1:8000";
  const frontUrl = "http://localhost:5173";
  let token = Cookies.get("token");
  let jsonHeaders = {
    "Content-Type": "application/json",
    Host: { backUrl },
    Authorization: `Bearer ${token}`,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            !token ? (
              <Login backUrl={backUrl} />
            ) : (
              <Table
                backUrl={backUrl}
                jsonHeaders={jsonHeaders}
                frontUrl={frontUrl}
              />
            )
          }
        />
        <Route
          path="form"
          element={
            !token ? (
              <Login backUrl={backUrl} />
            ) : (
              <Form jsonHeaders={jsonHeaders} backUrl={backUrl} />
            )
          }
        />
        <Route
          path=":id"
          element={
            !token ? (
              <Login backUrl={backUrl} />
            ) : (
              <Details
                frontUrl={frontUrl}
                rowData={undefined}
                onClose={() => {}}
                jsonHeaders={jsonHeaders}
                backUrl={backUrl}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
