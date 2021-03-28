import { pathOr } from 'ramda'

export const getNotificationsList = pathOr([], ['notifications', 'queue'])

export const getNotificationsTimeout = pathOr({}, ['notifications', 'timeout'])
