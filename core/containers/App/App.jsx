import React, { useMemo, memo } from 'react'
import { pick } from 'ramda'

import { useModules } from '../../hooks'
import { useAuth } from '@vkr/app-auth'
import { useToggler } from '@vkr/app-hooks'

import { AppComponent } from '../../components'

export const AppContainer = memo(({ children }) => {
  const modules = useModules()

  const { user, logout } = useAuth()

  const [isDrawerOpen, toggleIsDrawerOpen] = useToggler(false)
  const [isNotificationShow, toggleIsNotificationShow] = useToggler(false)

  const actions = useMemo(() => modules.map(pick(['route', 'icon', 'title', 'key'])), [modules])

  return (
    <AppComponent
      toggleDrawer={toggleIsDrawerOpen}
      toggleNotification={toggleIsNotificationShow}
      isDrawerOpen={isDrawerOpen}
      isNotificationOpen={isNotificationShow}
      actions={actions}
      onLogout={logout}
      user={user}
    >
      {children}
    </AppComponent>
  )
})
