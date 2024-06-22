import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-800">
      <Outlet />
    </div>
    // <div className="flex min-h-screen justify-center items-center bg-slate-800">
    //   <Outlet />
    // </div>
  );
}

export default Layout;
