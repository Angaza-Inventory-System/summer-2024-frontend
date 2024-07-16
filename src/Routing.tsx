import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import Login from "./components/Login";
import { Details } from "./components/Details";
import Cookies from "js-cookie";

function Routing() {
  const url = "http://127.0.0.1:8000";
  var jsonHeaders = {
    Host: { url },
    Authorization: `Bearer ${Cookies.get("token")}`,
  };
  //<Form />
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Table url={url} jsonHeaders={jsonHeaders} />} />
        <Route path="form" element={<></>} />
        <Route
          path=":id"
          element={
            <Details
              rowData={undefined}
              onClose={() => {}}
              jsonHeaders={jsonHeaders}
            />
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
