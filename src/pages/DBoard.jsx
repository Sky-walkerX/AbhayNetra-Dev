"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { Routes, Route } from "react-router-dom";
import { cn } from "@/lib/utils";
// import { BackgroundBeams } from "./components/ui/background-beams";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Line,
} from "recharts";

export function DBoard() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Traffic",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Women Safety",
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
                label: "Admin",
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
        Traffic & Women Safety
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

function StatsCard({ title, value, percentage }) {
  return (
    <div className="rounded-lg bg-neutral-800 p-4">
      <h4 className="text-sm text-neutral-400">{title}</h4>
      <p className="mt-1 text-2xl font-bold text-white">{value}</p>
      <p
        className={`text-sm ${
          percentage.startsWith("+")
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {percentage}
      </p>
    </div>
  );
}

// Dashboard component with Traffic Management and Women Safety content.
const Dashboard = () => {
  // Sample chart data representing monthly incident counts.
  const chartData = [
    { month: "Mar", incidents: 45 },
    { month: "Apr", incidents: 55 },
    { month: "May", incidents: 35 },
    { month: "Jun", incidents: 60 },
    { month: "Jul", incidents: 50 },
    { month: "Aug", incidents: 30 },
    { month: "Sep", incidents: 65 },
    { month: "Oct", incidents: 70 },
    { month: "Nov", incidents: 68 },
    { month: "Dec", incidents: 55 },
    { month: "Jan", incidents: 50 },
    { month: "Feb", incidents: 60 },
  ];

  // State for managing the selected time range.
  const [selectedRange, setSelectedRange] = useState("Today");

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    // Implement filtering logic if necessary.
  };

  return (
    <div className="flex flex-1 h-full w-full bg-neutral-950 relative antialiased">
      <div className="w-full p-6 z-10">
        <main className="w-full">
          {/* Top Section */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Traffic Management & Women Safety Overview
              </h2>
              <p className="text-sm text-neutral-400">
                Data for the past 12 months
              </p>
            </div>
            <div>
              <select
                className="rounded bg-neutral-800 px-3 py-2 text-sm text-white"
                defaultValue="Citywide"
              >
                <option>Citywide</option>
                <option>North Zone</option>
                <option>South Zone</option>
                <option>East Zone</option>
                <option>West Zone</option>
              </select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatsCard
              title="Avg. Traffic Flow"
              value="1,200 veh/hr"
              percentage="+5%"
            />
            <StatsCard
              title="Accidents Reported"
              value="120"
              percentage="+2%"
            />
            <StatsCard
              title="Women Safety Incidents"
              value="30"
              percentage="-1%"
            />
          </div>

          {/* General Statistics (Chart) */}
          <div className="mb-6 rounded-lg bg-neutral-800 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Monthly Incidents Reported
              </h3>
              <div className="space-x-2">
                {["Today", "Last week", "Last month", "Year"].map(
                  (range) => (
                    <button
                      key={range}
                      onClick={() => handleRangeChange(range)}
                      className={`rounded px-2 py-1 text-sm ${
                        selectedRange === range
                          ? "bg-orange-600 text-white"
                          : "bg-neutral-700 text-neutral-300"
                      }`}
                    >
                      {range}
                    </button>
                  )
                )}
              </div>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-2 text-sm shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-neutral-400">Incidents</span>
                                <span className="font-bold text-neutral-100">
                                  {payload[0].incidents}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-neutral-400">Month</span>
                                <span className="font-bold text-neutral-100">
                                  {payload[0].payload.month}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="incidents"
                    stroke="#ff6b00"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Incidents Table */}
          <div className="rounded-lg bg-neutral-800 p-4">
            <div className="mb-4 text-lg font-semibold text-white">
              Recent Incidents
            </div>
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b border-neutral-700 text-neutral-400">
                <tr>
                  <th className="py-2">Location</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Reported Time</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-700 hover:bg-neutral-750">
                  <td className="py-2">Downtown</td>
                  <td className="py-2">Accident</td>
                  <td className="py-2">08:45 AM</td>
                  <td className="py-2">Cleared</td>
                </tr>
                <tr className="hover:bg-neutral-750">
                  <td className="py-2">East Side</td>
                  <td className="py-2">Safety Incident</td>
                  <td className="py-2">09:30 AM</td>
                  <td className="py-2">In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DBoard;
