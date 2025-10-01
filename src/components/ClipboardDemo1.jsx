import React from "react";
import { useClipboard } from "../hooks/useClipboard";

export default function ClipboardDemo1() {
  const { copied, copy } = useClipboard();

  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-indigo-800 mb-2">Clipboard Demo 1</h2>
      <p className="mb-3 text-gray-700">Click below to copy text:</p>
      <button
        onClick={() => copy("Hello, I was copied!")}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Copy "Happy Learning React!"
      </button>
      {copied && <p className="mt-3 text-green-600 font-semibold">✅ Copied!</p>}
    </div>
  );
}
