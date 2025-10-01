import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function OnlineStatusDemo2() {
  const isOnline = useOnlineStatus();

  return (
    <div
      className={`p-4 text-white text-center font-semibold ${
        isOnline ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {isOnline ? "🌐 You are online" : "⚠️ You are offline"}
    </div>
  );
}
