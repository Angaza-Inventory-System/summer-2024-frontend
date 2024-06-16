import { useState } from "react";
import DropdownCheckbox from "./DropdownCheckbox";
import DropdownMenu from "./DropdownMenu";
import Table from "./Table2";
import { ColumnVisibilityState } from "./ColumnVisibilityState";

function Page() {
  const data = [
    { id: 1, name: "test1", age: 34, id2: 1, name2: "test1", age2: 34 },
    { id: 2, name: "test2", age: 32, id2: 1, name2: "test1", age2: 34 },
    { id: 3, name: "test3", age: 31, id2: 1, name2: "test1", age2: 34 },
  ];
  const [columnVisibility, setColumnVisibility] =
    useState<ColumnVisibilityState>({
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
    <div className="flex flex-col">
      <div className="flex items-center">
        <DropdownMenu />
        <DropdownCheckbox toggleColumnVisibility={toggleColumnVisibility} />
      </div>
      <Table />
      <div className="flex flex-col"></div>
    </div>
  );
}

export default Page;
