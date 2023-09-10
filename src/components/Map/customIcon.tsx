import L from "leaflet";
import icon from "../../../public/ISS.svg";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// TODO: Setup custom marker for map
const iconImage = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,

  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { iconImage };
