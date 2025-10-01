import { useState, useEffect } from "react";

export function useGeolocation() {

  const [coords, setCoords] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) =>
      setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
    );
  }, []);

  return coords;
}
