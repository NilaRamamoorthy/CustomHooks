// src/components/LocalStorageDemo2.jsx
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageDemo2() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Persistent Input</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border rounded-lg px-3 py-2 w-full mb-3"
      />
      <p className="text-gray-700">
        👋 Hello, <b>{name || "Stranger"}</b>!
      </p>
    </div>
  );
}
