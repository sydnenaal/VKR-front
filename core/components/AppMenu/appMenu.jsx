import React, { useMemo, memo } from 'react'
import { useHistory } from 'react-router-dom'

import Drawer from '@atlaskit/drawer'

import { MenuItem, MenuItemIcon, MenuItemTitle } from './styled'

export const AppMenu = memo(({ toggleDrawer, isOpen, actions }) => {
  const history = useHistory()

  const handleClick = (route) => () => {
    history.push(route)
    toggleDrawer()
  }

  const menuItems = useMemo(
    () =>
      actions.map(({ icon: Icon, route, title, key, type }) => (
        <MenuItem key={key} onClick={handleClick(route)}>
          <MenuItemIcon>{type === 'external' ? <img width="40%" src={Icon} /> : <Icon />}</MenuItemIcon>
          <MenuItemTitle>{title}</MenuItemTitle>
        </MenuItem>
      )),
    [actions],
  )

  return (
    <Drawer onClose={toggleDrawer} isOpen={isOpen}>
      {menuItems}
    </Drawer>
  )
})

AppMenu.displayName = 'AppMenu'
