import Icon from './icon.svg'
import { App } from './src'

export * from './src'

// Navigation menu item
export const module = {
  icon: Icon,
  component: App,
  route: '/settings',
  title: 'Settings',
}
