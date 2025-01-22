"use client";
import { useTheme } from "@/Hooks/usetheme";
import { MoonStar, Sun } from "lucide-react";
import React from "react";

const Themebutton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme} className="cursor-pointer w-fit">
      {theme === "dark" ? (
        <MoonStar className="text-white" />
      ) : (
        <Sun className="text-white" />
      )}
    </div>
  );
};

export default Themebutton;
