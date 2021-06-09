import React, { memo } from 'react'

import { AppBar, AppMenu, Notifications } from '../'
import { Container, PageContainer } from './styled'

export const AppComponent = memo(
  ({ isDrawerOpen, isNotificationOpen, toggleDrawer, toggleNotification, actions, user, onLogout, children }) => (
    <Container>
      <Notifications isOpen={isNotificationOpen} toggle={toggleNotification} />
      <AppBar onLogout={onLogout} user={user} toggleDrawer={toggleDrawer} />
      <AppMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} actions={actions} />
      <PageContainer>{children}</PageContainer>
    </Container>
  ),
)

AppComponent.displayName = 'AppComponent'
