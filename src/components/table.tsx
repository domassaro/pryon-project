import { Astronaut } from "@/pages/astronauts";
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

interface Props {
  astronauts: Astronaut[];
}

export const TableWrapper = ({ astronauts }: Props): JSX.Element => {
  return (
    <>
      {astronauts ? (
        <Table
          className="tile row-start-2 row-end-5 col-span-3 md:col-span-3 lg:col-span-3"
          aria-label="Example static collection table"
        >
          <TableHeader className="bg-red-600">
            <TableColumn className="text-tiny uppercase font-bold">
              Name
            </TableColumn>
            <TableColumn className="text-tiny uppercase font-bold">
              Craft
            </TableColumn>
          </TableHeader>
          <TableBody>
            {astronauts.map((astronaut, index) => (
              <TableRow key={index}>
                <TableCell>{astronaut.name}</TableCell>
                <TableCell>{astronaut.craft}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Card className="m-auto tile row-start-2 row-end-5 col-span-3 md:col-span-3 lg:col-span-3">
          <Spinner />
        </Card>
      )}
    </>
  );
};
