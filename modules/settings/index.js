import React from 'react'

import { ModuleIcon } from '@vkr/app-icon-pattern'

import Icon from './icon.svg'
import { App } from './src'

export * from './src'

// Navigation menu item
export const module = {
  icon: () => <ModuleIcon asset={Icon} module="settings" />,
  component: App,
  route: '/settings',
  title: 'Settings',
}
