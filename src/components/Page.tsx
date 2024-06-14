import DropdownCheckbox from "./DropdownCheckbox";
import DropdownMenu from "./DropdownMenu";
import Table from "./Table";
import { Button } from "flowbite-react";


function Page() {
  const data = [
    { id: 1, name: "test1", age: 34, id2: 1, name2: "test1", age2: 34},
    { id: 2, name: "test2", age: 32, id2: 1, name2: "test1", age2: 34},
    { id: 3, name: "test3", age: 31, id2: 1, name2: "test1", age2: 34 },
  ];
  return (
    <div className="flex flex-col">
      <div className="grid-cols-2 h-[20vh]">
      <DropdownMenu />
      <DropdownCheckbox />
      <Button>Click me</Button>
      </div>
 
      <div className="grid-cols-2">
        <Table data = {data} />
      </div>
    </div>
  );
}

export default Page;
