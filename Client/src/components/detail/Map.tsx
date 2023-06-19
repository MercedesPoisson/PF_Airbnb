import { useEffect, useRef } from 'react';

const Map = ({ location, province }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();
    const mapOptions = {
      center: { lat: -34.603722, lng: -58.381592 }, // Coordenadas de Buenos Aires como valor predeterminado
      zoom: 15,
    };

    const address = `${location}, ${province}, Argentina`;

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        mapOptions.center = { lat: lat(), lng: lng() };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        new window.google.maps.Marker({ position: mapOptions.center, map });
      } else {
        // Si no se encuentra la ubicación, mostrar el mapa predeterminado sin marcador
        new window.google.maps.Map(mapRef.current, mapOptions);
      }
    });
  }, [location, province]);

  return <div ref={mapRef} style={{ width: '40%', height: 'calc(50vw / 2)' }} />;
};

export default Map;