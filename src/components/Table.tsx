import { ColumnVisibilityState } from "./ColumnVisibilityState";

interface TableProps {
  data: Array<{
    id: number;
    name: string;
    age: number;
    id2: number;
    name2: string;
    age2: number;
  }>;
  columnVisibility: ColumnVisibilityState;
}

function Table({ data, columnVisibility }: TableProps) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            {columnVisibility.id && (
              <th className="border-b border-gray-200 px-2 py-2">ID</th>
            )}
            {columnVisibility.name && (
              <th className="border-b border-gray-200 px-2 py-2">Name</th>
            )}
            {columnVisibility.age && (
              <th className="border-b border-gray-200 px-2 py-2">Age</th>
            )}
            {columnVisibility.id2 && (
              <th className="border-b border-gray-200 px-2 py-2">ID2</th>
            )}
            {columnVisibility.name2 && (
              <th className="border-b border-gray-200 px-2 py-2">Name2</th>
            )}
            {columnVisibility.age2 && (
              <th className="border-b border-gray-200 px-2 py-2">Age2</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              key={item.id}
            >
              {columnVisibility.id && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.id}
                </td>
              )}
              {columnVisibility.name && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.name}
                </td>
              )}
              {columnVisibility.age && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.age}
                </td>
              )}
              {columnVisibility.id2 && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.id2}
                </td>
              )}
              {columnVisibility.name2 && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.name2}
                </td>
              )}
              {columnVisibility.age2 && (
                <td className="border-b border-gray-200 px-2 py-2">
                  {item.age2}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
