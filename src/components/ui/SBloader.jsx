import React from "react";
import { Sidebar as ShadSidebar, SidebarBody, SidebarLink } from "./sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { NavLink } from "react-router";

export const Sidebar = ({ open, setOpen }) => {
  const links = [
    { label: "Dashboard", href: "/dashboard", icon: <IconBrandTabler className="icon" /> },
    { label: "Profile", href: "/profile", icon: <IconUserBolt className="icon" /> },
    { label: "Settings", href: "/settings", icon: <IconSettings className="icon" /> },
    { label: "Logout", href: "/auth", icon: <IconArrowLeft className="icon" /> },
  ];

  return (
    <ShadSidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <SidebarLink
          link={{
            label: "Naman Khandelwal",
            href: "/profile",
            icon: <img src="https://assets.aceternity.com/manu.png" alt="Avatar" className="h-7 w-7 rounded-full" />,
          }}
        />
      </SidebarBody>
    </ShadSidebar>
  );
};

const Logo = () => (
  // <a href="#" className="logo">
  <NavLink to="/">
    <div className="logo-box" />
    <NavLink to="/" className="text-xl font-bold text-white text-center my-4 tracking-wide">AbhayNetra</NavLink>
  </NavLink>
  // </a>
);

const LogoIcon = () => (
  <a href="#" className="logo">
    <div className="logo-box" />
  </a>
);
