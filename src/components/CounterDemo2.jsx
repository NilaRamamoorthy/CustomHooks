// src/components/CounterDemo2.jsx
import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function CounterDemo2() {
  const { count, increment, decrement, reset } = useCounter(3);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-2">Counter Demo 2</h3>
      <p className="text-2xl font-bold mb-4">{count}</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={increment}
          className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
