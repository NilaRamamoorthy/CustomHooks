import React, { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

export default function TimeoutDemo1() {
  const [message, setMessage] = useState("⏳ Waiting...");

  useTimeout(() => {
    setMessage("✅ 3 seconds passed!");
  }, 3000);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-yellow-800 mb-2">Timeout Demo 1</h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}
