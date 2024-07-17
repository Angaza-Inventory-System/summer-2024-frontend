import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import Login from "./components/Login";
import { Details } from "./components/Details";
import Cookies from "js-cookie";

function Routing() {
  const url = "http://127.0.0.1:8000";
  let token = Cookies.get("token");
  let jsonHeaders = {
    "Content-Type": "application/json",
    Host: { url },
    Authorization: `Bearer ${token}`,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            !token ? <Login /> : <Table url={url} jsonHeaders={jsonHeaders} />
          }
        />
        <Route
          path="form"
          element={!token ? <Login /> : <Form jsonHeaders={jsonHeaders} />}
        />
        <Route
          path=":id"
          element={
            !token ? (
              <Login />
            ) : (
              <Details
                rowData={undefined}
                onClose={() => {}}
                jsonHeaders={jsonHeaders}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
