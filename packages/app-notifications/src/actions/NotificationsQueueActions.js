import uuid from "uuid";

import {
  PUSH_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_TIMEOUT_CONFIG,
} from "../reducers";

export function pushNotification(notification) {
  return async (dispatch, getState) => {
    try {
      const { timeout } = getState();
      const timeoutByType = timeout[notification.type];
      const notificationId = uuid();

      dispatch({
        type: PUSH_NOTIFICATION,
        payload: { ...notification, id: notificationId },
      });

      setTimeout(() => {
        dispatch({ type: REMOVE_NOTIFICATION, payload: notificationId });
      }, timeoutByType);
    } catch (err) {
      console.error("Notifications error:", err);
    }
  };
}

export function configureNotificationsTimeout(timeout) {
  return { type: SET_TIMEOUT_CONFIG, payload: timeout };
}

export function removeNotification(id) {
  return { type: REMOVE_NOTIFICATION, payload: id };
}
