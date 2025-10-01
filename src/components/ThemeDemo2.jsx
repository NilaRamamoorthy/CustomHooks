import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeDemo2() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg border ${
        theme === "light"
          ? "bg-white text-gray-800 border-gray-200"
          : "bg-gray-800 text-gray-100 border-gray-700"
      }`}
    >
      <h2 className="text-lg font-bold mb-3">🌗 Theme Demo 2</h2>
      <p className="mb-4">
        This box adapts its background and text colors based on the selected theme.
      </p>
      <button
        onClick={toggleTheme}
        className="px-3 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
