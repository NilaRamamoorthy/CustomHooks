import React from "react";
import { useInput } from "../hooks/useInput";

export default function InputDemo1() {
  const name = useInput("");

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Enter Your Name</h3>
      <input
        type="text"
        placeholder="Type your name"
        className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
        {...name}
      />
      <p className="text-gray-700">Hello, <span className="font-medium">{name.value}</span> 👋</p>
    </div>
  );
}
