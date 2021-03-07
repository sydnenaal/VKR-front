import React, { useMemo, useState, useCallback, memo } from "react";
import { useHistory } from "react-router-dom";

import { useModulesInternals } from "../../hooks";
import { useAuth } from "@vkr/app-auth";

import { AppComponent } from "../../components";

export const AppContainer = memo(({ children }) => {
  const history = useHistory();
  const modules = useModulesInternals();

  const { user, logout } = useAuth();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = useCallback(
    () => setIsDrawerOpen((value) => !value),
    []
  );

  const actions = useMemo(() => {
    return modules.map(({ default: item, key }) => ({
      ...item,
      key,
      source: item.icon,
      onClick: () => history.push(item.route),
    }));
  }, [modules]);

  return (
    <AppComponent
      toggleDrawer={handleToggleDrawer}
      isDrawerOpen={isDrawerOpen}
      actions={actions}
      onLogout={logout}
      user={user}
    >
      {children}
    </AppComponent>
  );
});
