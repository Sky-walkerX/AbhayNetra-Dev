"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { Routes, Route } from 'react-router-dom';
// Replace with your own utility function or use a library like classnames
import { cn } from "@/lib/utils"; 
import { BackgroundBeams } from "@/components/ui/background-beams";

// These components should be implemented in your project.
// They are imported from your local files.
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

export const Home = () => {
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