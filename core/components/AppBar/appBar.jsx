import React, { useCallback, memo } from 'react'

import Avatar from '@atlaskit/avatar'
import { AtlassianNavigation, ProductHome, AppSwitcher } from '@atlaskit/atlassian-navigation'
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down'
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu'
import { PresentationLogo } from '@vkr/app-common'

import { UserContainer } from './styled'

const Logo = () => <PresentationLogo margin="0" fontSize="17px" letterSpacing="1.5px" />

const Home = () => <ProductHome icon={Logo} logo={Logo} />

const UserActions = memo(({ trigger, onLogout }) => {
  return (
    <DropdownMenu trigger={trigger}>
      <DropdownItemGroup>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem onClick={onLogout}>Logout</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  )
})

export const AppBar = memo(({ onLogout, toggleDrawer, user }) => {
  const userComponent = useCallback(() => {
    const User = (
      <UserContainer>
        <Avatar />
        <p>{user.username}</p>
        <ChevronDownIcon />
      </UserContainer>
    )

    return <UserActions onLogout={onLogout} trigger={User} />
  }, [user, onLogout])

  const appSwitcherComponnet = useCallback(() => <AppSwitcher onClick={toggleDrawer} />, [toggleDrawer])

  return (
    <AtlassianNavigation renderProductHome={Home} renderAppSwitcher={appSwitcherComponnet} renderHelp={userComponent} />
  )
})

UserActions.displayName = 'UserActions'
AppBar.displayName = 'AppBar'
