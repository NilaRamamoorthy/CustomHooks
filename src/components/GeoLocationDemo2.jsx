import React from "react";
import { useGeolocation } from "../hooks/useGeolocation";

export default function GeolocationDemo2() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center border border-gray-200">
      <h2 className="text-lg font-bold mb-2 text-blue-700">🌍 Geolocation Demo 2</h2>
      {error ? (
        <p className="text-red-600">⚠️ {error}</p>
      ) : latitude && longitude ? (
        <div>
          <p className="text-gray-800">Your Location:</p>
          <p className="font-mono text-blue-800">
            {latitude.toFixed(5)}, {longitude.toFixed(5)}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">📡 Locating...</p>
      )}
    </div>
  );
}
