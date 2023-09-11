import { Card, CardHeader, Image } from "@nextui-org/react";
import Layout from "@/components/layout";
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
        <Layout>
          <div className="container m-auto grid grid-cols-3 grid-rows-3 md:grid-cols-5 lg:grid-cols-3 gap-4">
            <TableWrapper astronauts={astronautData.people || []} />
            <Card>
              <Image
                alt="front"
                removeWrapper
                className="z-0 object-cover p-2 mx-auto"
                height={200}
                width={200}
                src={frontAstronaut.src}
              />
            </Card>
            <Card className="tile">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny uppercase font-bold">
                  How many astronauts are in space?
                </p>
                <h4 className="font-medium text-8xl">{astronautData.number}</h4>
              </CardHeader>
            </Card>
            <Card className="tile">
              <Image
                alt="back"
                removeWrapper
                className="z-0 object-cover p-2 mx-auto"
                height={200}
                width={200}
                src={backAstronaut.src}
              />
            </Card>
            <Card className="tile  row-start-6 col-span-3 md:col-span-3 lg:col-span-3">
              <Image
                alt="rocket"
                removeWrapper
                className="object-cover mx-auto"
                width={600}
                src={solarSystem.src}
              />
            </Card>
          </div>
        </Layout>
      )}
    </>
  );
}
