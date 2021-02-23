import React, { memo } from "react";

import { MenuContainer, MenuItem, MenuItemIcon, MenuItemTitle } from "./styled";

function AppMenu({ actions }) {
  return (
    <MenuContainer>
      {actions.map(({ onClick, key, title, source }) => (
        <MenuItem onClick={onClick} key={key}>
          <MenuItemIcon>
            <img width="40%" color="white" src={source} />
          </MenuItemIcon>
          <MenuItemTitle>
            <p>{title}</p>
          </MenuItemTitle>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}

export default memo(AppMenu);
