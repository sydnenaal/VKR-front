import React from 'react'

import { ModuleIcon } from '@vkr/app-icon-pattern'

import StatisticsAsset from './assets/Module-icon.svg'

import { App } from './src'
export * from './src'

// Navigation menu item
export const module = {
  icon: () => <ModuleIcon asset={StatisticsAsset} module="statistics" />,
  component: App,
  route: '/statistics',
  title: 'Statistics',
}
