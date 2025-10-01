import React, { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

export default function TimeoutDemo2() {
  const [show, setShow] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useTimeout(() => {
    if (trigger) setShow(true);
  }, trigger ? 2000 : null);

  return (
    <div className="p-6 bg-purple-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-purple-800 mb-2">Timeout Demo 2</h2>
      <button
        onClick={() => {
          setTrigger(true);
          setShow(false);
        }}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Show Message in 2s
      </button>

      {show && <p className="mt-3 text-green-700 font-semibold">🎉 Hello after 2 seconds!</p>}
    </div>
  );
}
