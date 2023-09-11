import L from "leaflet";
import icon from "../../../public/images/ISS.svg";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const iconImage = new L.Icon({
  iconUrl: icon.src,
  iconRetinaUrl: icon.src,
  markerColor: "transparent",
  iconSize: new L.Point(60, 75),
});

export { iconImage };
