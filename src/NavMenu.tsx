import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import DeviceDisplay from "./components/DeviceDisplay";
import App from "./components/App";
import NavButton from "./components/NavButton";
import { useState } from "react";

function NavMenu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<App />} />
          <Route path="display" element={<DeviceDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function NavBar() {
  const [navOpen, setNav] = useState(false);
  const Button = () => (
    <button onClick={() => setNav((navOpen) => !navOpen)} className=""></button>
  );
  return (
    <>
      {/* temp styling do not change first string unless you want to change layout style- darryl*/}
      <div
        className={[
          "absolute left-0 top-0 flex h-screen w-screen flex-col",
          "bg-slate-400 md:w-[10vw]",
        ].join(" ")}
      >
        {/* change styling of all buttons in nav int NavButton.tsx - darryk*/}
        <NavButton text="aaa" link="/" />
        <NavButton text="Show Devices" link="/display" />
      </div>
      <Outlet />
    </>
  );
}
export default NavMenu;
