import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

const fakeUsers = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

export default function DebounceDemo2() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 700);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedQuery) {
      const filtered = fakeUsers.filter((user) =>
        user.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">User Search</h3>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
      />
      <ul className="mt-4 space-y-1">
        {results.length > 0 ? (
          results.map((user, idx) => (
            <li
              key={idx}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {user}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results</li>
        )}
      </ul>
    </div>
  );
}
