import React from "react";
import { useTitle } from "../hooks/useTitle";

export default function TitleDemo1() {
  useTitle("Welcome to PetPalooza 🐾");

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-green-800 mb-2">Static Title Demo</h2>
      <p className="text-gray-700">
        Open your browser tab – the title is now{" "}
        <span className="font-semibold">"Welcome to PetPalooza 🐾"</span>
      </p>
    </div>
  );
}
