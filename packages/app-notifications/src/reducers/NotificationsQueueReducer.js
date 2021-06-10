import { v4 as uuidv4 } from 'uuid'

export const SET_NOTIFICATIONS = 'notifications/set_notification'
export const SET_TIMEOUT_CONFIG = 'notifications/set_timeout_config'

const MAX_LENGTH = 8
const initialQueue = new Array(MAX_LENGTH).fill({
  isOpen: false,
  id: uuidv4(),
})

const initialState = {
  timeout: {
    error: 'none',
    warning: 3000,
    attachment: 'none',
  },
  queue: initialQueue,
}

export function NotificationsQueueReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_NOTIFICATIONS:
      return { ...state, queue: payload }
    case SET_TIMEOUT_CONFIG:
      return { ...state, timeout: { ...state.timeout, ...payload } }
    default:
      return state
  }
}
