import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceDemo1() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 600);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Search with Debounce</h3>
      <input
        type="text"
        placeholder="Type something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-400"
      />
      <p className="mt-3 text-gray-700">
        Immediate: <span className="font-medium">{search}</span>
      </p>
      <p className="text-blue-600">
        Debounced: <span className="font-medium">{debouncedSearch}</span>
      </p>
    </div>
  );
}
