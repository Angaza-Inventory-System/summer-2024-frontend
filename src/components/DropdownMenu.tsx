import { Dropdown } from "flowbite-react";
import DropItem from "./DropItem";

function DropdownMenu() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={true}>
      <DropItem text="saa" checkbox={false} />
    </Dropdown>
  );
}

export default DropdownMenu;
