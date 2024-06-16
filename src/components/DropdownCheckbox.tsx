import { Dropdown } from "flowbite-react";
import DropItem from "./DropItem";
import { ColumnVisibilityState } from "./ColumnVisibilityState";

interface Props {
  toggleColumnVisibility: (columnName: keyof ColumnVisibilityState) => void;
}

function DropdownCheckbox({ toggleColumnVisibility }: Props) {
  return (
    <Dropdown label="Hide Columns" dismissOnClick={false}>
      <DropItem
        text="ID"
        checkbox={true}
        col="id"
        toggleColumnVisibility={toggleColumnVisibility}
      />
      <DropItem
        text="Name"
        checkbox={true}
        col="name"
        toggleColumnVisibility={toggleColumnVisibility}
      />
    </Dropdown>
  );
}

export default DropdownCheckbox;
