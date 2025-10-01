import React from "react";
import { useGeolocation } from "../hooks/useGeolocation";

export default function GeolocationDemo1() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div className="p-6 bg-purple-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-purple-800 mb-2">Geolocation Demo 1</h2>
      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : latitude && longitude ? (
        <p className="text-gray-700">
          📍 Lat:{" "}
          <span className="font-semibold text-purple-700">{latitude.toFixed(4)}</span>, Lng:{" "}
          <span className="font-semibold text-purple-700">{longitude.toFixed(4)}</span>
        </p>
      ) : (
        <p className="text-gray-600">Fetching location...</p>
      )}
    </div>
  );
}
