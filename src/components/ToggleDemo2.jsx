import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToggleDemo2() {
  const [isVisible, toggle] = useToggle(true);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Toggle Demo 2</h3>
      <button
        onClick={toggle}
        className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && (
        <p className="text-gray-700 border p-3 rounded-md">
          👋 Hello! I’m visible because toggle is ON.
        </p>
      )}
    </div>
  );
}
