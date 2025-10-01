import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function MediaQueryDemo2() {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-800 mb-4">Media Query Demo 2</h2>
      <div
        className={`grid gap-4 ${
          isLarge ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        <div className="p-4 bg-white rounded shadow">🐶 Box 1</div>
        <div className="p-4 bg-white rounded shadow">🐱 Box 2</div>
        <div className="p-4 bg-white rounded shadow">🐰 Box 3</div>
      </div>
    </div>
  );
}
