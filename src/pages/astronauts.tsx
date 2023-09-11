import { Card, CardHeader, Image } from "@nextui-org/react";
import Layout from "@/components/layout";
import TableWrapper from "@/components/table";
import backAstronaut from "../../public/images/astronaut-back.png";
import frontAstronaut from "../../public/images/astronaut-front.png";

export default function Astronauts() {
  return (
    <>
      <Layout>
        <div className="container m-auto grid grid-cols-3 grid-rows-3 md:grid-cols-5 lg:grid-cols-3 gap-4">
          <TableWrapper />
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
                How many astronauts are in space
              </p>
              <h4 className="font-medium text-large">Stream the Acme event</h4>
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
        </div>
      </Layout>
    </>
  );
}
