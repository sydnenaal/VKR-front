import React, { useMemo, memo } from "react";
import { useHistory } from "react-router-dom";

import { useModulesInternals } from "../../hooks";

import { AppComponent } from "../../components";

export const AppContainer = memo(({ children }) => {
  const history = useHistory();
  const modules = useModulesInternals();

  const actions = useMemo(() => {
    return modules.map(({ default: item, key }) => ({
      ...item,
      key,
      source: item.icon,
      onClick: () => history.push(item.route),
    }));
  }, [modules]);

  return <AppComponent actions={actions}>{children}</AppComponent>;
});
