import React, { memo } from "react";

import { AppBar, AppMenu } from "../";
import { Container } from "./styled";

export const AppComponent = memo(
  ({ isDrawerOpen, toggleDrawer, actions, user, onLogout, children }) => (
    <Container>
      <AppBar onLogout={onLogout} user={user} toggleDrawer={toggleDrawer} />
      <AppMenu
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        actions={actions}
      />
      {children}
    </Container>
  )
);
