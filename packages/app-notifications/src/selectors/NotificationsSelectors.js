import { pathOr } from "ramda";

export const getNotificationsList = pathOr([], ["notifications", "queue"]);
