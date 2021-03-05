import React, { useMemo } from "react";

import { MenuContainer, MenuItem, MenuItemIcon, MenuItemTitle } from "./styled";

function MenuItemComonent({ onClick, key, title, source }) {
  return (
    <MenuItem onClick={onClick} key={key}>
      <MenuItemIcon>
        <img width="40%" color="white" src={source} />
      </MenuItemIcon>
      <MenuItemTitle>
        <p>{title}</p>
      </MenuItemTitle>
    </MenuItem>
  );
}

export function AppMenu({ actions }) {
  const menuItems = useMemo(() => {
    return actions.map((props) => <MenuItemComonent {...props} />);
  }, [actions]);

  return <MenuContainer>{menuItems}</MenuContainer>;
}
