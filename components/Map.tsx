"use client";

import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  HeatmapLayer,
  useJsApiLoader,
} from "@react-google-maps/api";

const Map = () => {
  const GOOGLE_MAPS_API_KEY = process.env
    .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  const defaultCenter = { lat: 23.022505, lng: 72.571365 }; //* Centered at Ahmedabad

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["visualization"],
  });

  const [_, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true, // Disables all default UI
    zoomControl: false, // Disables the zoom control
    mapTypeControl: false, // Disables the map type control
    scaleControl: false, // Disables the scale control
    streetViewControl: false, // Disables the Street View control
    rotateControl: false, // Disables the rotate control
    fullscreenControl: false, // Disables the fullscreen control
  };

  const dummyHeatmapData = isLoaded
    ? [{ location: new google.maps.LatLng(23.022505, 72.571365), weight: 10 }]
    : [];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "100%", width: "100%" }}
      center={defaultCenter}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <HeatmapLayer
        data={dummyHeatmapData}
        options={{
          radius: 20,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
