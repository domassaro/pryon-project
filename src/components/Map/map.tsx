import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Spinner } from "@nextui-org/react";
import { LatLngExpression } from "leaflet";
import { iconImage } from "./customIcon";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

interface Props {
  position: LatLngExpression;
  time: string;
}

export default function Map({ position, time }: Props) {
  return (
    <>
      {location ? (
        <MapContainer
          center={position}
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
              <p className="text-tiny uppercase font-bold">
                Last Updated:&nbsp;
                {time}
              </p>
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
