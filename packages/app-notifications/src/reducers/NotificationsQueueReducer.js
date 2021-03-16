export const PUSH_NOTIFICATION = "notifications/push_error";
export const REMOVE_NOTIFICATION = "notifications/remove_error";
export const SET_TIMEOUT_CONFIG = "notifications/set_timeout_config";

const initialState = {
  timeout: {
    error: 3000,
    warning: 3000,
    attachment: "none",
  },
  queue: [],
};

export function NotificationsQueueReducer(state = initialState) {
  const { type, payload } = action;

  switch (type) {
    case PUSH_NOTIFICATION:
      return { ...state, queue: [...state.queue, payload] };
    case REMOVE_NOTIFICATION:
      const filteredQueue = state.queue.filter((item) => item.id !== payload);
      return { ...state, queue: filteredQueue };
    case SET_TIMEOUT_CONFIG:
      return { ...state, timeout: { ...state.timeout, ...payload } };
    default:
      return state;
  }
}
