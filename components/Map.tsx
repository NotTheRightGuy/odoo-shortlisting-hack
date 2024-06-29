"use client";

import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  HeatmapLayer,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { supabase } from "@/db";

const Map = () => {
  const GOOGLE_MAPS_API_KEY = process.env
    .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  const defaultCenter = { lat: 23.022505, lng: 72.571365 }; //* Centered at Ahmedabad

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["visualization"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

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

  const [incidentPos, setIncidentPos] = useState<
    { location: google.maps.LatLng; weight: number }[]
  >([]);

  const [markers, setMarkers] = useState<
    { position: google.maps.LatLng; type: string; severity: string }[]
  >([]);

  React.useEffect(() => {
    const fetchIncidents = async () => {
      const { data, error } = await supabase.from("CRIME_DETAILS").select();

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        const heatmapData = data.map((incident: any) => ({
          location: new google.maps.LatLng(
            incident.C_LATITUDE,
            incident.C_LONGITUDE
          ),
          weight: 10,
        }));

        const markerData = data.map((incident: any) => ({
          position: new google.maps.LatLng(
            incident.C_LATITUDE,
            incident.C_LONGITUDE
          ),
          type: incident.C_TYPE,
          severity: incident.C_SEVERITY,
        }));

        setIncidentPos(heatmapData);
        setMarkers(markerData);
      }
    };

    fetchIncidents();
  }, []);

  const getMarkerIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
      case "medium":
        return "http://maps.google.com/mapfiles/ms/icons/orange-dot.png";
      case "low":
        return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
      default:
        return "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    }
  };

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
        data={incidentPos}
        options={{
          radius: 20,
          gradient: [
            "rgba(0, 255, 255, 0)",
            "rgba(0, 255, 255, 1)",
            "rgba(0, 191, 255, 1)",
            "rgba(0, 127, 255, 1)",
            "rgba(0, 63, 255, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 223, 1)",
            "rgba(0, 0, 191, 1)",
            "rgba(0, 0, 159, 1)",
            "rgba(0, 0, 127, 1)",
            "rgba(63, 0, 91, 1)",
            "rgba(127, 0, 63, 1)",
            "rgba(191, 0, 31, 1)",
            "rgba(255, 0, 0, 1)",
          ],
          opacity: 0.6,
        }}
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={getMarkerIcon(marker.severity)}
          title={`${marker.type} - ${marker.severity}`}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
