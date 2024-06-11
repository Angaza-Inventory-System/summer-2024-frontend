import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import DeviceDisplay from "./components/DeviceDisplay";
import App from "./components/App";

function NavMenu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<App />} />
          <Route path="display" element={<DeviceDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavMenu;
