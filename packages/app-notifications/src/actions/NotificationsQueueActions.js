import { compose, propOr, clone, any, prop, not } from 'ramda'

import { SET_NOTIFICATIONS, SET_TIMEOUT_CONFIG } from '../reducers'
import { getNotificationsTimeout, getNotificationsList } from '../selectors'

const DEFAULT_TIMEOUT = 3000

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function pushNotification(notification) {
  return async (dispatch, getState) => {
    try {
      let currentId
      let currentQueue = compose(clone, getNotificationsList, getState)()

      // Select timeout value by notification type
      const timeout = compose(propOr(DEFAULT_TIMEOUT, notification.type), getNotificationsTimeout, getState)()

      // Check for empty notification cells
      if (not(any(compose(not, prop('isOpen')), currentQueue))) {
        await dispatch(removeNotification(currentQueue[0].id))
        currentQueue = compose(clone, getNotificationsList, getState)()

        // Sleep is need for await empty notification render.
        // Its make possible to amimate new notification
        await sleep(10)
      }

      for (let { id, isOpen } of currentQueue) {
        if (!isOpen) {
          const newNotification = { ...notification, id, isOpen: true }
          const resultQueue = currentQueue.map((item) => (item.id === id ? newNotification : item))

          dispatch({ type: SET_NOTIFICATIONS, payload: resultQueue })

          currentId = id
          break
        }
      }

      if (timeout !== 'none') {
        const timeoutLink = setTimeout(() => {
          dispatch(removeNotification(currentId))
          clearTimeout(timeoutLink)
        }, timeout)
      }
    } catch (err) {
      console.error('Notifications error:', err)
    }
  }
}

export function configureNotificationsTimeout(timeout) {
  return { type: SET_TIMEOUT_CONFIG, payload: timeout }
}

export function removeNotification(id) {
  return async (dispatch, getState) => {
    const currentQueue = compose(getNotificationsList, getState)()
    const emptyItem = { isOpen: false, id }

    // Reset current notification
    let resultQueue = currentQueue.map((item) => (item.id === id ? emptyItem : item))

    await dispatch({ type: SET_NOTIFICATIONS, payload: resultQueue })

    // Its need for await unmount animation
    await sleep(300)

    // Drop down current empty notification
    resultQueue = resultQueue.filter((item) => item.id !== id)
    resultQueue.push(emptyItem)

    await dispatch({ type: SET_NOTIFICATIONS, payload: resultQueue })
  }
}
