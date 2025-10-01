import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export default function PreviousDemo2() {
  const [text, setText] = useState("");
  const prevText = usePrevious(text);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Track Previous Input</h3>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
      />
      <p className="mt-3 text-gray-700">
        Current: <span className="font-medium">{text}</span>
      </p>
      <p className="text-gray-500">
        Previous: <span className="italic">{prevText ?? "None"}</span>
      </p>
    </div>
  );
}
