import React from "react";

import { AppBar, AppMenu } from "../";
import { Container, Content, BodyStyle } from "./styled";

export function AppComponent({ actions, children }) {
  return (
    <Container>
      <BodyStyle />
      <AppBar />
      <AppMenu actions={actions} />
      <Content>{children}</Content>
    </Container>
  );
}
