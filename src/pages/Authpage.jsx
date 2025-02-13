"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SignupFormDemo from "@/components/signup-form-demo";
import Login from "@/components/login-form";

const AuthPage = () => {

  // A simple variant for animating the form contents
  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Reuse your background animation */}
      <BackgroundBeams />
      <div className="max-w-xl mx-auto p-10 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/30 transition-transform duration-500 hover:scale-105">
      <SignupFormDemo />
      <Login/>
</div>

        
    </div>
  );
};

export default AuthPage;
