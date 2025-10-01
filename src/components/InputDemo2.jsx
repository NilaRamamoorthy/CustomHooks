import React from "react";
import { useInput } from "../hooks/useInput";

export default function InputDemo2() {
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email.value}\nPassword: ${password.value}`);
    email.reset();
    password.reset();
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 m-4">
      <h3 className="text-lg font-semibold mb-4">Login Form</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          {...email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          {...password}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
