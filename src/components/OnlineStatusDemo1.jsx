import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function OnlineStatusDemo1() {
  const isOnline = useOnlineStatus();

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-blue-800 mb-2">Online Status Demo 1</h2>
      <p className="text-gray-700">
        Status:{" "}
        <span
          className={`font-semibold px-2 py-1 rounded ${
            isOnline ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {isOnline ? "✅ Online" : "❌ Offline"}
        </span>
      </p>
    </div>
  );
}
