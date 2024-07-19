import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import DeviceForm from "./components/DeviceForm";
import Login from "./components/Login";
import { Details } from "./components/Details";
import Cookies from "js-cookie";

function Routing() {
  const backUrl = "http://127.0.0.1:8000";
  const frontUrl = "http://localhost:5173";
  const token = Cookies.get("token");
  const jsonHeaders = {
    "Content-Type": "application/json",
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
          path="device-creation-form"
          element={
            !token ? (
              <Login backUrl={backUrl} />
            ) : (
              <DeviceForm jsonHeaders={jsonHeaders} backUrl={backUrl} />
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
                onClose={() => {
                  //is page no need for close
                }}
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
