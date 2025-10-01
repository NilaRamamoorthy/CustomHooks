import React from "react";
import { useHover } from "../hooks/useHover";

export default function HoverDemo1() {
  const [isHovered, ref] = useHover();

  return (
    <div
      ref={ref}
      className={`w-48 h-48 flex items-center justify-center rounded-xl shadow-md transition-colors duration-300 ${
        isHovered ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {isHovered ? "Hovered!" : "Hover Me"}
    </div>
  );
}
