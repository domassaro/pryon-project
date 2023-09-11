import { Card, CardHeader, Image } from "@nextui-org/react";
import { TableWrapper } from "@/components/table";
import { useEffect, useState } from "react";
import backAstronaut from "../../public/images/astronaut-back.png";
import frontAstronaut from "../../public/images/astronaut-front.png";
import solarSystem from "../../public/images/solar-system.svg";

type AstronautData = Partial<{
  people: Astronaut[];
  message: string;
  number: number;
}>;

export type Astronaut = {
  craft: string;
  name: string;
};

const fetchAstronautData = async () => {
  const api = await fetch("/api/astronauts");
  return api.json();
};

export default function Astronauts() {
  const [astronautData, setAstronautData] = useState<AstronautData | null>(
    null
  );

  useEffect(() => {
    fetchAstronautData().then((json) => {
      setAstronautData(json);
    });
  }, []);
  return (
    <>
      {astronautData && (
        <div className="container flex flex-col gap-4">
          <div className="flex gap-4">
            <Card className="flex-1 p-3 items-center">
              <Image
                alt="front"
                removeWrapper
                className="object-cover"
                height={200}
                width={200}
                src={frontAstronaut.src}
              />
            </Card>
            <Card className="flex-1 p-3">
              <CardHeader className="flex-col items-center">
                <p className="text-tiny uppercase font-bold">
                  How many astronauts are in space?
                </p>
                <h4 className="font-medium text-9xl">{astronautData.number}</h4>
              </CardHeader>
            </Card>
            <Card className="flex-1 p-3 items-center">
              <Image
                alt="back"
                removeWrapper
                className="object-cover"
                height={200}
                width={200}
                src={backAstronaut.src}
              />
            </Card>
          </div>
          <TableWrapper astronauts={astronautData.people || []} />
          <Card>
            <Image
              alt="rocket"
              removeWrapper
              className="object-cover mx-auto"
              width={600}
              src={solarSystem.src}
            />
          </Card>
        </div>
      )}
    </>
  );
}
