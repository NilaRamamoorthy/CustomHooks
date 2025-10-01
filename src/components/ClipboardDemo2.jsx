import React, { useState } from "react";
import { useClipboard } from "../hooks/useClipboard";

export default function ClipboardDemo2() {
  const [text, setText] = useState("Copy Me!");
  const { copied, copy } = useClipboard();

  return (
    <div className="p-6 bg-pink-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-pink-800 mb-2">Clipboard Demo 2</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button
        onClick={() => copy(text)}
        className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
      >
        Copy Input Text
      </button>
      {copied && <p className="mt-3 text-green-600 font-semibold">✅ Copied!</p>}
    </div>
  );
}
