import { Dropdown, DropdownItem } from "flowbite-react";
import CheckboxItem from "./CheckboxItem";

function DropdownCheckbox() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem as={CheckboxItem} href="#">
        Home
      </DropdownItem>
    </Dropdown>
  );
}

export default DropdownCheckbox;
