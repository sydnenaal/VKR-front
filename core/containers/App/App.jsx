import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { generateKey } from "@vkr/app-utils";

import { AppBar, AppMenu } from "../../components";
import { Container, Content } from "./styled";

import "./style.css";

function AppContainer({ children }) {
  let history = useHistory();

  const [actions, setActions] = useState([]);

  useEffect(() => {
    const modules = process.env.MODULES_LIST.map((item) =>
      import("@vkr/modules-" + item)
    );

    Promise.all(modules).then((res) => {
      const actionsWithClickHandlers = res.map(({ default: item }) => ({
        ...item,
        key: generateKey(),
        source: item.icon,
        onClick: () => history.push(item.route),
      }));

      setActions(actionsWithClickHandlers);
    });
  }, []);

  return (
    <Container>
      <AppBar />
      <AppMenu actions={actions} />
      <Content>{children}</Content>
    </Container>
  );
}

export default AppContainer;
