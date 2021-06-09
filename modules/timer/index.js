import React from 'react'

import { ModuleIcon } from '@vkr/app-icon-pattern'

import TimerAsset from './assets/Module-icon.svg'

import { TimerPage } from './src'
export * from './src'

// Navigation menu item
export const module = {
  icon: () => <ModuleIcon asset={TimerAsset} module="timer" />,
  component: TimerPage,
  route: '/timer',
  title: 'Timer',
}
