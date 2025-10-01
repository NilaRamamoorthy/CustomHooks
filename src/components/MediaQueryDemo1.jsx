import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function MediaQueryDemo1() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-yellow-800 mb-2">Media Query Demo 1</h2>
      <p className="text-gray-700">
        Current View:{" "}
        <span className="font-semibold">
          {isMobile ? "📱 Mobile" : "💻 Desktop"}
        </span>
      </p>
    </div>
  );
}
