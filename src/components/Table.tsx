import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import Checkbox from "./Checkbox";
import { Dropdown } from "flowbite-react";
import { PaginationButton } from "./PaginationButton";
import { Details } from "./Details";
import Cookies from "js-cookie";
import QRGrid from "./QRGrid";
import bg from "./better_better.png";
import { useNavigate } from "react-router-dom";
import { Device } from "./Device";

interface Props {
  backUrl: string;
  frontUrl: string;
  jsonHeaders: { "Content-Type": string; Authorization: string };
}

function Table({ backUrl, jsonHeaders, frontUrl }: Props) {
  document.documentElement.classList.add("dark");
  const [showPopup, setShowPopup] = useState(false);

  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [pageCount, setPage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState<Device>();
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const columnHelper = createColumnHelper<Device>();
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({});
  const colDef = [
    columnHelper.accessor("select", {
      size: 10,
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
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    }),
    columnHelper.accessor("device_id", {
      minSize: 200,
      header: "Device ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("type", {
      minSize: 200,
      header: "Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("make", {
      minSize: 200,
      header: "Make",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("model", {
      minSize: 200,
      header: "Model",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("serial_number", {
      minSize: 200,
      header: "Serial Number",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("mac_id", {
      minSize: 200,
      header: "Mac ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("year_of_manufacture", {
      minSize: 200,
      header: "Year Of Manufacture",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date_received", {
      minSize: 200,
      header: "Date Received",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("physical_condition", {
      minSize: 200,
      header: "Physical Condition",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("specifications", {
      minSize: 200,
      header: "Specifications",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("operating_system", {
      minSize: 200,
      header: "Operation System",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date_of_donation", {
      minSize: 200,
      header: "Date Of Donation",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("value", {
      minSize: 200,
      header: "Value",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("distributor", {
      minSize: 200,
      header: "Distributor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("notes", {
      minSize: 200,
      header: "Notes",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("received_by", {
      minSize: 200,
      header: "Received By",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("donor", {
      minSize: 200,
      header: "Donor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      minSize: 200,
      header: "Location",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("assigned_user", {
      minSize: 200,
      header: "Assigned User",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("details", {
      size: 10,
      header: "Details",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              setSelectedRowData(row.original);
              setShowPopup(true);
            }}
            className="flex h-8 rounded-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            ...
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    defaultColumn: {
      size: 200,
    },
    getRowId: (row) => row.device_id,
    data: rows,
    columns: colDef,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      rowSelection,
      columnOrder,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnOrderChange: setColumnOrder,
    enableRowSelection: true,
  });

  const headers = table.getFlatHeaders();
  const colSizes: { [key: string]: number } = {};
  for (const header of headers) {
    colSizes[`--header-${header.id}-size`] = header.getSize();
    colSizes[`--col-${header.column.id}-size`] = header.column.getSize();
  }

  const [refetch, setRefetch] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("device_id");
  const [selectedHeader, setSelectedHeader] = useState("Device ID");
  const navigate = useNavigate();

  const nav = () => {
    navigate("/device-creation-form");
  };
  const redir = () => {
    Cookies.remove("token", { path: "" });
    window.location.reload();
  };
  const del = async () => {
    const selected = Object.keys(rowSelection);
    await Promise.all(
      selected.map((device_id) =>
        fetch(`${backUrl}/devices/${device_id}`, {
          method: "DELETE",
          headers: jsonHeaders,
        }),
      ),
    );
    setRefetch(!refetch);
  };
  useEffect(() => {
    const getTable = () => {
      fetch(
        `${backUrl}/devices/devices?${selectedFilter}=${search}&page=${pagination}&page_size=14`,
        {
          method: "GET",
          headers: jsonHeaders,
        },
      )
        .then((response) => {
          if (response.status === 403) {
            redir();
            return;
          }
          return response.json();
        })
        .then((json) => {
          setRows(json.results);
          setPage(json.total_pages);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    getTable();
    table.resetRowSelection();
  }, [pagination, refetch, selectedFilter]);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <>
      <div className="fixed hidden print:block">
        <QRGrid frontUrl={frontUrl} qrCodes={Object.keys(rowSelection)} />
      </div>
      <div className="absolute h-screen w-screen bg-black bg-opacity-0 p-2 dark:bg-opacity-70 print:hidden">
        {showPopup && (
          <Details
            backUrl={backUrl}
            rowData={selectedRowData}
            onClose={() => setShowPopup(false)}
            jsonHeaders={jsonHeaders}
            frontUrl={frontUrl}
          />
        )}
        <div className="grid w-full grid-cols-2 pt-5">
          <div className="flex h-full">
            <div className="pr-2">
              <button
                type="button"
                onClick={redir}
                className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Sign Out
              </button>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <Dropdown
                label="Columns"
                dismissOnClick={false}
                size="sm"
                placement="bottom"
                inline
                theme={{ floating: { target: "h-10 w-[200px]" } }}
              >
                {table.getAllLeafColumns().map((column) => {
                  if (column.id === "select" || column.id === "details")
                    return null;
                  return (
                    <div
                      key={column.id}
                      className="flex items-center hover:bg-slate-200/20"
                    >
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={column.getIsVisible()}
                          onChange={column.getToggleVisibilityHandler()}
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {column.columnDef.header?.toString()}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </Dropdown>
            </div>
          </div>
          <div className="flex h-full justify-self-end">
            <div className="flex w-96">
              <div className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <Dropdown
                  label={selectedHeader}
                  placement="bottom"
                  dismissOnClick
                  theme={{ floating: { target: "h-full" } }}
                  inline
                >
                  {table.getAllLeafColumns().map((column) => {
                    if (column.id === "select" || column.id === "details")
                      return null;
                    return (
                      <div
                        key={column.id}
                        className="flex items-center hover:bg-slate-200/20"
                      >
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={selectedFilter === column.id}
                            onChange={() => {
                              setSelectedFilter(column.id);
                              setSelectedHeader(
                                column.columnDef.header?.toString() ?? "",
                              );
                            }}
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          />
                          <span className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {column.columnDef.header?.toString()}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </Dropdown>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  className="z-20 block h-full w-full border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                  placeholder="Search"
                />
              </div>
              <button
                type="button"
                onClick={() => setRefetch(!refetch)}
                className="h-full rounded-e-lg bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="no-scrollbar relative my-3 w-full overflow-x-auto rounded-lg dark:bg-gray-800">
          <table
            className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"
            style={{ ...colSizes, width: table.getTotalSize() }}
          >
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="relative whitespace-nowrap bg-gray-50 px-6 py-3 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                      style={{
                        width: `calc(var(--header-${header.id}-size) * 1px)`,
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      <button
                        onDoubleClick={() => header.column.resetSize()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none bg-black bg-opacity-30 ${header.id === "select" ? "" : "hover:bg-opacity-15"}`}
                      />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="bg-white odd:bg-white even:bg-gray-50 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-900 even:dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4"
                      style={{
                        width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
                      }}
                    >
                      <div
                        className="no-scrollbar overflow-x-auto"
                        style={{ maxHeight: "32px" }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid w-full grid-cols-2">
          <div className="flex">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Print Selection
            </button>
            <div className="flex pl-2">
              <button
                type="button"
                onClick={nav}
                className="flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Add Device
              </button>
              <button
                type="button"
                onClick={del}
                className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Delete Selection
              </button>
            </div>
          </div>
          <div className="justify-self-end">
            <PaginationButton
              index={pagination}
              setPage={setPagination}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
      <img alt="a" className="h-screen w-screen print:hidden" src={bg} />
    </>
  );
}

export default Table;
