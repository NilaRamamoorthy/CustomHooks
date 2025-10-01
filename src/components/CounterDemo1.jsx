// src/components/CounterDemo1.jsx
import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function CounterDemo1() {
  const { count, increment } = useCounter();

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-2">Counter Demo 1</h3>
      <p className="text-2xl font-bold mb-4">{count}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Increment
      </button>
    </div>
  );
}
