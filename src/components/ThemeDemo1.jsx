import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeDemo1() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-100"
      }`}
    >
      <h2 className="text-xl font-bold mb-2">Theme Demo 1</h2>
      <p className="mb-4">Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}
