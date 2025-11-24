"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const currentPage = table?.getState()?.pagination?.pageIndex + 1;
  const totalPages = table?.getPageCount();

  return (
    <div className="w-full shadow-custom-five border overflow-hidden border-gray200 rounded-xl bg-white">
      <div>
        <Table>
          <TableHeader className="w-full h-11 border-b border-gray200 bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isFirstColumn = header.id === "tool"; // Check if it's the "Tool" column
                  const isLastColumn = header.id === "action"; // Check if it's the "Actions" column
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-sm max-mobile:text-xs font-semibold text-gray-700 ${
                        isFirstColumn ? "pl-6 max-mobile:pl-3" : "" // Add padding-left only to "Tool" column
                      } ${isLastColumn ? "text-end pr-6 max-mobile:pr-3" : ""}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row?.id}
                  className="h-seventyTwo max-mobile:text-xs max-h-seventyTwo border-gray-200"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row?.getVisibleCells()?.map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns?.length}
                  className="h-24 text-center max-mobile:text-xs max-mobile:h-16"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between h-16 border-t border-gray200 px-6">
        <div className="text-sm max-mobile:text-xs text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </div>
        <div className="w-max flex gap-3 items-center">
          <Button
            variant="outline"
            size="sm"
            className="shadow-custom-two border max-mobile:text-xs max-mobile:h-7 border-gray-300 rounded-eight h-9 flex items-center justify-center text-sm bg-white text-gray-700 font-semibold"
            onClick={() => table?.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table?.nextPage()}
            disabled={!table?.getCanNextPage()}
            className="shadow-custom-two border max-mobile:text-xs max-mobile:h-7 border-gray-300 rounded-eight h-9 flex items-center justify-center text-sm bg-white text-gray-700 font-semibold"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
