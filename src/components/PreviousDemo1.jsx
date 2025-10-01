import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function PreviousDemo1() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Counter with Previous Value</h3>
      <p className="text-2xl font-bold text-blue-600">{count}</p>
      <p className="text-gray-600">Previous: {prevCount ?? "None"}</p>

      <div className="mt-4 space-x-3">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
