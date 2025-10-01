import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToggleDemo1() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Toggle Demo 1</h3>
      <button
        onClick={toggle}
        className={`px-6 py-2 rounded-lg font-semibold transition ${
          isOn ? "bg-green-500 text-white hover:bg-green-600" : "bg-red-500 text-white hover:bg-red-600"
        }`}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
