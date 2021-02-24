import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { useModulesInternals } from "../../hooks";
import { AppBar, AppMenu } from "../../components";
import { Container, Content, BodyStyle } from "./styled";

function AppContainer({ children }) {
  const history = useHistory();
  const modules = useModulesInternals();

  const actions = useMemo(() => {
    return modules.map(({ default: item }) => ({
      ...item,
      source: item.icon,
      onClick: () => history.push(item.route),
    }));
  }, [modules]);

  return (
    <Container>
      <BodyStyle />
      <AppBar />
      <AppMenu actions={actions} />
      <Content>{children}</Content>
    </Container>
  );
}

export default AppContainer;
