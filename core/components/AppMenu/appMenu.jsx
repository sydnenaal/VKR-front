import React, { useMemo, memo } from "react";
import { useHistory } from "react-router-dom";

import Drawer from "@atlaskit/drawer";

import { MenuItem, MenuItemIcon, MenuItemTitle } from "./styled";

export const AppMenu = memo(({ toggleDrawer, isOpen, actions }) => {
  const history = useHistory();

  const menuItems = useMemo(
    () =>
      actions.map(({ icon, route, title, key }) => (
        <MenuItem key={key} onClick={() => history.push(route)}>
          <MenuItemIcon>
            <img width="40%" src={icon} />
          </MenuItemIcon>
          <MenuItemTitle>
            <p>{title}</p>
          </MenuItemTitle>
        </MenuItem>
      )),
    [actions]
  );

  return (
    <Drawer onClose={toggleDrawer} isOpen={isOpen}>
      {menuItems}
    </Drawer>
  );
});
