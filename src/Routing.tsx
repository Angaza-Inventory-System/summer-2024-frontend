import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import Login from "./components/Login";
import { Details } from "./components/Details";
import { useState } from "react";

function Routing() {
  const url = "http://127.0.0.1:8000";
  const [token, setToken] = useState<string>(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxMTg0NDQ0LCJpYXQiOjE3MjEwOTgwNDQsImp0aSI6IjQ5ZDc0YmE5MjlhZDRmNTViMDRkMTJiZDA2NWNjMDQxIiwidXNlcl9pZCI6Mn0.0m1OvYI41bAasUG3trmKq9gMQtyyMtIyRFylBAWXOcU",
  );
  var options = {
    method: "GET",
    headers: {
      Host: { url },
      Authorization: `Bearer ${token}`,
    },
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Table url={url} options={options} />} />
        <Route path="form" element={<Form />} />
        <Route
          path=":id"
          element={
            <Details rowData={undefined} onClose={() => {}} options={options} />
          }
        />
        <Route
          path="login"
          element={<Login token={token} setToken={setToken} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
