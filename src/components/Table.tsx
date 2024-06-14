import {useState} from 'react';
interface TableProps {
  data: Array<{
    id: number;
    name: string;
    age: number;
    id2: number;
    name2: string;
    age2: number;
  }>;
}

interface ColumnVisibilityState {
  id: boolean;
  name: boolean;
  age: boolean;
  id2: boolean;
  name2: boolean;
  age2: boolean;
  [key: string]: boolean; 
}
function Table({ data }: TableProps) {
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({
    id: true,
    name: true,
    age: true,
    id2: true,
    name2: true,
    age2: true,
  });

  const toggleColumnVisibility = (columnName: keyof ColumnVisibilityState) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [columnName]: !prevVisibility[columnName],
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columnVisibility.id && <th className="py-2 px-2 border-b border-gray-200">ID</th>}
            {columnVisibility.name && <th className="py-2 px-2 border-b border-gray-200">Name</th>}
            {columnVisibility.age && <th className="py-2 px-2 border-b border-gray-200">Age</th>}
            {columnVisibility.id2 && <th className="py-2 px-2 border-b border-gray-200">ID2</th>}
            {columnVisibility.name2 && <th className="py-2 px-2 border-b border-gray-200">Name2</th>}
            {columnVisibility.age2 && <th className="py-2 px-2 border-b border-gray-200">Age2</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columnVisibility.id && <td className="py-2 px-2 border-b border-gray-200">{item.id}</td>}
              {columnVisibility.name && <td className="py-2 px-2 border-b border-gray-200">{item.name}</td>}
              {columnVisibility.age && <td className="py-2 px-2 border-b border-gray-200">{item.age}</td>}
              {columnVisibility.id2 && <td className="py-2 px-2 border-b border-gray-200">{item.id2}</td>}
              {columnVisibility.name2 && <td className="py-2 px-2 border-b border-gray-200">{item.name2}</td>}
              {columnVisibility.age2 && <td className="py-2 px-2 border-b border-gray-200">{item.age2}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Column Visibility</h2>
        <div className="space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.id}
              onChange={() => toggleColumnVisibility('id')}
              className="mr-1"
            />
            ID
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.name}
              onChange={() => toggleColumnVisibility('name')}
              className="mr-1"
            />
            Name
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.age}
              onChange={() => toggleColumnVisibility('age')}
              className="mr-1"
            />
            Age
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.id2}
              onChange={() => toggleColumnVisibility('id2')}
              className="mr-1"
            />
            ID2
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.name2}
              onChange={() => toggleColumnVisibility('name2')}
              className="mr-1"
            />
            Name2
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={columnVisibility.age2}
              onChange={() => toggleColumnVisibility('age2')}
              className="mr-1"
            />
            Age2
          </label>
        </div>
      </div>
    </div>
  );
}

export default Table;