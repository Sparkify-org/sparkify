import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

interface Props {
  selected: string;
  items: string[];
}

const Select: React.FC<Props> = ({ selected, items }) => {
  return (
    <Menu>
      <MenuButton>{selected}</MenuButton>
      <MenuItems anchor="bottom">
        {items.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Select;
