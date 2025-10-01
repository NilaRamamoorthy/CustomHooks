import React, { useState } from "react";
import { useTitle } from "../hooks/useTitle";

export default function TitleDemo2() {
  const [count, setCount] = useState(0);
  useTitle(`Clicked ${count} times 🖱️`);

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-blue-800 mb-2">Dynamic Title Demo</h2>
      <p className="text-gray-700 mb-4">
        Every time you click the button, the document title updates!
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Click Me ({count})
      </button>
    </div>
  );
}
