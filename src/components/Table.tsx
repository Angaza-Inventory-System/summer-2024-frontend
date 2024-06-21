import { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnDef,
  ColumnHelper,
} from "@tanstack/react-table";
import Checkbox from "./Checkbox";
import { Dropdown } from "flowbite-react";
import { PaginationButton } from "./PaginationButton";
import dataJSON from "./mockdata.json";
import { createColumnHelper } from "@tanstack/react-table";

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
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 16,
  });

  const columnHelper: ColumnHelper<any> = createColumnHelper();

  const colDef: ColumnDef<any>[] = [
    {
      id: "select",
      size: 52,
      enableResizing: false,
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
      minSize: 100,
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
      minSize: 150,
      header: "First Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
      minSize: 150,
      header: "Last Name",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: rows,
    columns: colDef,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    autoResetPageIndex: false, // turn off auto reset of pageIndex
    pageCount: -1,
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

  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    headers.forEach((header) => {
      colSizes[`--header-${header.id}-size`] = header.getSize();
      colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
    });
    return colSizes;
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  return (
    <div className="w-full p-2">
      <div className="grid w-full grid-cols-2 pb-3">
        <div className="h-full">
          <Dropdown
            label="Columns"
            dismissOnClick={false}
            size="sm"
            theme={{ floating: { target: "h-10" } }}
          >
            {table.getAllLeafColumns().map((column) => {
              if (column.id === "select") return null;
              return (
                <div
                  key={column.id}
                  className="flex items-center hover:bg-slate-200"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={column.getIsVisible()}
                      onChange={column.getToggleVisibilityHandler()}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {typeof column.columnDef.header === "function"
                        ? flexRender(column.columnDef.header, { column })
                        : column.columnDef.header}
                    </span>
                  </label>
                </div>
              );
            })}
          </Dropdown>
        </div>
        <div className="flex h-full justify-self-end">
          <Dropdown
            label="Filter"
            dismissOnClick={true}
            theme={{ floating: { target: "h-10" } }}
          >
            {table.getAllLeafColumns().map((column) => {
              if (column.id === "select") return null;
              return (
                <div
                  key={column.id}
                  className="flex items-center hover:bg-slate-200"
                >
                  <label className="flex items-center">
                    <input
                      name="filter"
                      type="radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    />
                    <span className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {typeof column.columnDef.header === "function"
                        ? flexRender(column.columnDef.header, { column })
                        : column.columnDef.header}
                    </span>
                  </label>
                </div>
              );
            })}
          </Dropdown>
          <div className="relative h-full pl-2">
            <input
              type="text"
              id="table-search"
              className="block h-10 w-60 rounded-s-lg border border-gray-300 bg-gray-50 ps-8 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for items"
            />
          </div>
          <div className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <div
          className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"
          style={{ ...columnSizeVars }}
        >
          <div className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <div key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <div
                    key={header.id}
                    className="relative table-cell bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    style={{
                      width: `calc(var(--header-${header.id}-size) * 1px)`,
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <div
                      onDoubleClick={() => header.column.resetSize()}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none bg-blue-100 ${header.id == "select" ? "" : "hover:bg-blue-500"}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {table.getRowModel().rows.map((row) => (
              <div
                key={row.id}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                {row.getVisibleCells().map((cell) => (
                  <div
                    key={cell.id}
                    className="table-cell px-6 py-4"
                    style={{
                      width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 pt-3">
        <div className="flex">
          <div className="flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Prnt
          </div>
          <div className="flex pl-2">
            <div className="flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              +
            </div>
            <div className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              -
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <PaginationButton
            table={table}
            index={pagination.pageIndex}
            pageCount={table.getPageCount()}
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
