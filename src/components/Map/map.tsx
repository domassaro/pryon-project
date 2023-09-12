import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Spinner } from "@nextui-org/react";
import { LatLngExpression } from "leaflet";
import { iconImage } from "./customIcon";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

type Location = Partial<{
  iss_position: {
    latitude: string;
    longitude: string;
  };
  message: string;
  timestamp: number;
}>;

const fetchLocation = async () => {
  const api = await fetch("/api/iss");
  return api.json();
};

export default function Map() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    fetchLocation().then((json) => {
      setLocation(json);
    });
  }, []);

  const position = [
    location ? location.iss_position?.latitude : 0,
    location ? location.iss_position?.longitude : 0,
  ];

  return (
    <>
      {location ? (
        <MapContainer
          center={position as LatLngExpression}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: 500, width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position as LatLngExpression} icon={iconImage}>
            <Popup>
              Last Updated:&nbsp;
              {new Date(location.timestamp! * 1000).toLocaleTimeString()}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="w-full flex p-3">
          <Spinner className="mx-auto" color="secondary" size="lg" />
        </div>
      )}
    </>
  );
}
