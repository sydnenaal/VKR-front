import React, { useMemo, memo } from "react";

import { useModulesInternals, useToggler } from "../../hooks";
import { useAuth } from "@vkr/app-auth";

import { AppComponent } from "../../components";

export const AppContainer = memo(({ children }) => {
  const modules = useModulesInternals();

  const { user, logout } = useAuth();

  const [isDrawerOpen, toggleIsDrawerOpen] = useToggler(false);
  const [isNotificationShow, toggleIsNotificationShow] = useToggler(false);

  const actions = useMemo(
    () => modules.map(({ default: item, key }) => ({ ...item, key })),
    [modules, history]
  );

  return (
    <AppComponent
      toggleDrawer={toggleIsDrawerOpen}
      toggleNotification={toggleIsNotificationShow}
      isDrawerOpen={isDrawerOpen}
      isNotificationOpen={isNotificationShow}
      actions={actions}
      onLogout={logout}
      user={user}
    >
      {children}
    </AppComponent>
  );
});
