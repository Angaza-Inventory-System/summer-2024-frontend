import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import NavButton from "./components/NavButton";
import { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

function NavMenu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Table />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//nav only for easy access to pages created, unless you prefer to type page links manually... replace false below with true in that case
function NavBar() {
  const [navOpen, setNav] = useState(false);
  return (
    <>
      <div
        className={[
          "absolute left-0 top-0 flex h-screen w-screen flex-col",
          "bg-slate-400 md:w-[10vw]",
          navOpen ? "" : "invisible",
        ].join(" ")}
      >
        <NavButton text="aaa" link="/" />
        <NavButton text="Show Devices" link="/display" />
      </div>
      <Outlet />
    </>
  );
}
export default NavMenu;
