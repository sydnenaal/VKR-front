import React, { useMemo, memo } from "react";

import Drawer from "@atlaskit/drawer";

import { MenuItem, MenuItemIcon, MenuItemTitle } from "./styled";

const MenuItemComonent = memo(({ onClick, title, source }) => (
  <MenuItem onClick={onClick}>
    <MenuItemIcon>
      <img width="40%" src={source} />
    </MenuItemIcon>
    <MenuItemTitle>
      <p>{title}</p>
    </MenuItemTitle>
  </MenuItem>
));

export const AppMenu = memo(({ toggleDrawer, isOpen, actions }) => {
  const menuItems = useMemo(
    () => actions.map((props) => <MenuItemComonent {...props} />),
    [actions]
  );

  return (
    <Drawer onClose={toggleDrawer} isOpen={isOpen}>
      {menuItems}
    </Drawer>
  );
});
