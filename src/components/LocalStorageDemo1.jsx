import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageDemo1() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      className={`max-w-sm mx-auto rounded-xl shadow-md p-6 m-4 text-center transition ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">Theme Switcher</h3>
      <p className="mb-4">Current theme: <b>{theme}</b></p>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}
