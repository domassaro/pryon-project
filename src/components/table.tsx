import {
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

type Astronaut = Partial<{
  people: {
    craft: string;
    name: string;
  }[];
  message: string;
  number: number;
}>;

const fetchAstronautData = async () => {
  const api = await fetch("/api/astronauts");
  return api.json();
};

export default function TableWrapper() {
  const [astronautData, setAstronautData] = useState<Astronaut | null>(null);

  useEffect(() => {
    fetchAstronautData().then((json) => {
      setAstronautData(json);
    });
  }, []);

  return (
    <>
      {astronautData ? (
        <Table
          className="tile row-start-2 row-end-5 col-span-3 md:col-span-3 lg:col-span-3"
          aria-label="Example static collection table"
        >
          <TableHeader className="bg-red-600">
            <TableColumn>NAME</TableColumn>
            <TableColumn>CRAFT</TableColumn>
          </TableHeader>
          <TableBody>
            {
              astronautData?.people?.map((people, index) => (
                <TableRow key={index}>
                  <TableCell>{people.name}</TableCell>
                  <TableCell>{people.craft}</TableCell>
                </TableRow>
              )) as any
            }
          </TableBody>
        </Table>
      ) : (
        <Card className="m-auto tile row-start-2 row-end-5 col-span-3 md:col-span-3 lg:col-span-3">
          <Spinner />
        </Card>
      )}
    </>
  );
}
