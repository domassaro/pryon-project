import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Spinner } from "@nextui-org/react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
// import { iconImage } from "./customIcon";

type Location = Partial<{
  iss_position: {
    latitude: string;
    longitude: string;
  };
  message: string;
  timestamp: number;
}>;

const fetchLocation = async () => {
  const api = await fetch("http://api.open-notify.org/iss-now.json");
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
          center={position}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: 400, width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={position}
            // icon={iconImage}
            style={{ zIndex: "1!important" }}
          >
            <Popup>
              Last Updated:&nbsp;
              {new Date(location.timestamp! * 1000).toLocaleTimeString()}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
}
