import Map from "@/components/Map/";
import { Card, CardBody, CardHeader, Image, Spinner } from "@nextui-org/react";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { fetchLocation } from "./api/locationApi";
import AstronautImage from "../../public/images/astronaut-float.png";

type Location = Partial<{
  iss_position: {
    latitude: string;
    longitude: string;
  };
  message: string;
  timestamp: number;
}>;

export default function Location() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLocation().then((json) => {
        setLocation(json);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const position = [
    location ? location.iss_position?.latitude : 0,
    location ? location.iss_position?.longitude : 0,
  ];

  const time =
    location && location.timestamp
      ? new Date(location.timestamp * 1000).toLocaleTimeString()
      : "N/A";

  return (
    <>
      {location ? (
        <div
          data-testid="location-wrapper"
          className="container flex flex-col gap-4"
        >
          <div className="flex gap-4">
            <Card className="flex-1 p-3 items-center">
              <CardHeader className="flex-col items-center">
                <p className="text-tiny uppercase font-bold">latitude</p>
                <h4 className="font-medium text-5xl">
                  {location.iss_position?.latitude}
                </h4>
                <p className="text-xs py-2">as of {time}</p>
              </CardHeader>
            </Card>
            <Card className="flex-1 p-3">
              <CardHeader className="flex-col items-center">
                <Image
                  alt="back"
                  removeWrapper
                  className="object-cover"
                  height={100}
                  width={100}
                  src={AstronautImage.src}
                />
              </CardHeader>
            </Card>
            <Card className="flex-1 p-3 items-center">
              <CardHeader className="flex-col items-center">
                <p className="text-tiny uppercase font-bold">longitude</p>
                <h4 className="font-medium text-5xl">
                  {location.iss_position?.longitude}
                </h4>
                <p className="text-xs py-2">as of {time}</p>
              </CardHeader>
            </Card>
          </div>
          <Card className="block h-full w-full">
            <CardBody className="block w-full">
              <p className="text-tiny uppercase font-bold pb-2">
                Where is ISS now?
              </p>
              <Map position={position as LatLngExpression} time={time} />
            </CardBody>
          </Card>
        </div>
      ) : (
        <Card className="w-full flex p-3">
          <Spinner className="mx-auto" color="secondary" size="lg" />
        </Card>
      )}
    </>
  );
}
