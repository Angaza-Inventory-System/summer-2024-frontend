import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import dataJSON from "./mockdata.json";
import { createColumnHelper } from "@tanstack/react-table";
import Checkbox from "./Checkbox";
import { Dropdown } from "flowbite-react";
import { PaginationButton } from "./PaginationButton";

export type ColumnSizingTableState = {
  columnSizing: ColumnSizing;
  columnSizingInfo: ColumnSizingInfoState;
};

export type ColumnSizing = Record<string, number>;

export type ColumnSizingInfoState = {
  startOffset: null | number;
  startSize: null | number;
  deltaOffset: null | number;
  deltaPercentage: null | number;
  isResizingColumn: false | string;
  columnSizingStart: [string, number][];
};

function Table() {
  const [rows, setRows] = useState(dataJSON);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({
    id: true,
    first_name: true,
    last_name: true,
  });
  const [columnOrder, setColumnOrder] = useState<string[]>([
    "select",
    "id",
    "first_name",
    "last_name",
  ]);
  const columnHelper = createColumnHelper();
  const colDef = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
      header: "First Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
      header: "Last Name",
      cell: (info) => info.getValue(),
    }),
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 16, //subject to change after asking backend
  });

  const table = useReactTable({
    data: rows,
    columns: colDef,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    autoResetPageIndex: false, //turn off auto reset of pageIndex
    rowCount: 16, //hard coded to maintain order
    state: {
      rowSelection,
      columnOrder,
      columnVisibility,
      pagination,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnOrderChange: setColumnOrder,
    enableRowSelection: true,
  });
  return (
    <div>
      <Dropdown label="Hide Columns" dismissOnClick={false} size="sm">
        {table.getAllLeafColumns().map((column) => {
          if (column.id == "select") return;
          return (
            <div
              key={column.id}
              className="flex items-center hover:bg-slate-200"
            >
              <label>
                <input
                  {...{
                    type: "checkbox",
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                    className:
                      "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700",
                  }}
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {column.columnDef.header}
                </label>
              </label>
            </div>
          );
        })}
      </Dropdown>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3">
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                onClick={row.getToggleSelectedHandler()}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationButton />
    </div>
  );
}
export default Table;
