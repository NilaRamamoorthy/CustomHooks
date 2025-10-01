import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function FetchDemo2() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  if (loading) return <p className="text-center">⏳ Loading posts...</p>;
  if (error) return <p className="text-red-500 text-center">❌ {error}</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
      <div className="space-y-4">
        {data.map((post) => (
          <div key={post.id} className="border p-3 rounded-lg">
            <h4 className="font-medium">{post.title}</h4>
            <p className="text-sm text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
