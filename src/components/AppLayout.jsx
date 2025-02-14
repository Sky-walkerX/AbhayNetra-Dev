import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./ui/SBloader";

export const AppLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden m-0 p-0">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} className="h-full" />

      {/* Main content */}
      <div className="flex flex-1 flex-col bg-gray-100 dark:bg-neutral-900 h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};