import Map from "@/components/Map/";
import { Card, CardBody } from "@nextui-org/react";

export default function Location() {
  return (
    <>
      <Card data-testid="location-wrapper" className="block h-full w-full">
        <CardBody className="block w-full">
          <p className="text-tiny uppercase font-bold pb-2">
            Where is ISS now?
          </p>
          <Map />
        </CardBody>
      </Card>
    </>
  );
}
