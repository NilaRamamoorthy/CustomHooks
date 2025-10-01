import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function FetchDemo1() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p className="text-center">⏳ Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">❌ {error}</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Users</h3>
      <ul className="space-y-2">
        {data.map((user) => (
          <li key={user.id} className="border-b pb-2">
            <span className="font-medium">{user.name}</span>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
