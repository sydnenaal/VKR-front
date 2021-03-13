import React, { memo, useMemo, useEffect } from "react";

import WarningIcon from "@atlaskit/icon/glyph/warning";
import ErrorIcon from "@atlaskit/icon/glyph/error";

import { NotificationsContainer } from "./styled";

const iconsHash = {
  warning: <WarningIcon label="Warning icon" secondaryColor="inherit" />,
  error: <ErrorIcon label="Error icon" secondaryColor="inherit" />,
  announcement: <></>,
};

export const Notifications = memo(
  ({ message, type, isOpen, delay, toggle }) => {
    useEffect(() => {
      const timeout = setTimeout(toggle, delay);

      return () => clearTimeout(timeout);
    }, [delay, toggle]);

    const iconComponent = useMemo(() => iconsHash[type], [type]);

    return (
      <NotificationsContainer
        onClick={toggle}
        appearance={type}
        icon={iconComponent}
        isOpen={isOpen}
      >
        {message}
      </NotificationsContainer>
    );
  }
);

Notifications.defaultProps = {
  type: "warning",
  message: "Warning goes here",
  delay: 3000,
};
