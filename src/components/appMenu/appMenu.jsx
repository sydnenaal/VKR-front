import React from "react";

import { MenuContainer, MenuItem, MenuItemIcon, MenuItemTitle } from "./styled";

function AppMenu({ actions }) {
  return (
    <MenuContainer>
      {actions.map((item) => (
        <MenuItem key={item.key}>
          <MenuItemIcon>
            <img width="40%" color="white" src={item.source} />
          </MenuItemIcon>
          <MenuItemTitle>
            <p>{item.title}</p>
          </MenuItemTitle>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}

export default AppMenu;
