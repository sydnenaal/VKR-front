import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { compose } from 'ramda'

import { getNotificationsList } from '../selectors'
import { pushNotification, removeNotification, configureNotificationsTimeout } from '../actions'

export function useNotifications() {
  const dispatch = useDispatch()

  const notificationsQueue = useSelector(getNotificationsList)

  const setNotificationsTimeout = useCallback(compose(dispatch, configureNotificationsTimeout), [dispatch])
  const deleteNotification = useCallback(compose(dispatch, removeNotification), [dispatch])
  const initNotificaton = useCallback(compose(dispatch, pushNotification), [dispatch])

  return {
    notificationsQueue,
    initNotificaton,
    deleteNotification,
    setNotificationsTimeout,
  }
}
