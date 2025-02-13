"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { Routes, Route } from 'react-router-dom';
// Replace with your own utility function or use a library like classnames
import { cn } from "./lib/utils"; 
import { BackgroundBeams } from "./components/ui/background-beams";

// These components should be implemented in your project.
// They are imported from your local files.
import { Sidebar, SidebarBody, SidebarLink } from "./components/ui/sidebar";

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

export function App() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        // Remove centering and max-width to cover full screen.
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen h-screen overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Naman Khandelwal",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    alt="Avatar"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width="50"
                    height="50"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        AbhayNetra
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};

// Dashboard component now fills the available space.
const Dashboard = () => {
  return (
    <div className="flex flex-1 h-full w-full bg-neutral-950 relative flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold -translate-y-[100px]">
          AbhayNetra
        </h1>
        <h1 className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10 -translate-y-[100px]">
        AI-Driven <Cover>Traffic Management</Cover> & Women Safety Solutions
        </h1>
        {/* <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default App;
