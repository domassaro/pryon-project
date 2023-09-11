import {
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
        <Table aria-label="Example static collection table">
          <TableHeader>
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
        <Spinner />
      )}
    </>
  );
}
