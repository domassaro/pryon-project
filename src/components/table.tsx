import { Astronaut } from "@/pages/astronauts";
import {
  Card,
  Pagination,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Input,
} from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";

interface Props {
  astronauts: Astronaut[];
}

export const TableWrapper = ({ astronauts }: Props): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>("");
  const hasSearchFilter = Boolean(filterValue);

  const rowsPerPage = 5;

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...astronauts];
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [astronauts, filterValue, hasSearchFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  return (
    <>
      {astronauts ? (
        <>
          <Table
            className="tile col-span-3 md:col-span-3 lg:col-span-3"
            aria-label="Astronaut table"
            topContent={
              <Input
                placeholder="Search by name"
                isClearable
                radius="lg"
                value={filterValue}
                variant="bordered"
                onClear={() => setFilterValue("")}
                onValueChange={onSearchChange}
              />
            }
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader className="bg-red-600">
              <TableColumn className="text-tiny uppercase font-bold">
                Name
              </TableColumn>
              <TableColumn className="text-tiny uppercase font-bold">
                Craft
              </TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {items.map((astronaut, index) => (
                <TableRow key={index}>
                  <TableCell>{astronaut.name}</TableCell>
                  <TableCell>{astronaut.craft}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <Card className="m-auto tile row-start-2 row-end-5 col-span-3 md:col-span-3 lg:col-span-3">
          <Spinner />
        </Card>
      )}
    </>
  );
};
