import { useEffect, useState } from "react";

export const useGeo = () => {
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [geo, setGeo] = useState({
    latitude: null,
    longitude: null,
  });

  const location = window.navigator && window.navigator.geolocation;

  if (location) {
    location.getCurrentPosition(
      (position) => {
        const lat = localStorage.getItem("latitude");
        const lon = localStorage.getItem("longitude");
        const { latitude, longitude } = position.coords;

        if (latitude.toString() === lat && longitude.toString() === lon) return;

        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
        setGeo({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setGeo({ latitude: null, longitude: null });
      }
    );
  }

  useEffect(() => {
    if (!geo.latitude && !geo.longitude) return;

    (async () => {
      const URL2 = `
        https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geo.latitude}&longitude=${geo.longitude}&localityLanguage=ru`;
      const res = await fetch(URL2).then((response) => response.json());

      if (res.city) {
        localStorage.setItem("city", res.city);
        setCity(res.city);
      }
    })();
  }, [geo.latitude, geo.longitude]);

  return {
    lat: geo.latitude,
    lon: geo.longitude,
    city,
  };
};
