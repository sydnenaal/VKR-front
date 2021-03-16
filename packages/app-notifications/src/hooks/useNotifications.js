import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { compose } from "ramda";

import { getNotificationsList } from "../selectors";
import {
  pushNotification,
  removeNotification,
  setNotificationConfig,
} from "../actions";

export function useNotifications() {
  const dispatch = useDispatch();

  const notificationsQueue = useSelector(getNotificationsList);

  const setConfig = useCallback(compose(dispatch, setNotificationConfig), [
    dispatch,
  ]);

  const initNotificatons = useCallback(compose(dispatch, pushNotification), [
    dispatch,
  ]);

  const deleteNotification = useCallback(
    compose(dispatch, removeNotification),
    [dispatch]
  );

  return {
    notificationsQueue,
    initNotificatons,
    deleteNotification,
    setConfig,
  };
}
