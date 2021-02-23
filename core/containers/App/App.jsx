import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { generateKey } from "@vkr/app-utils";

import { AppBar, AppMenu } from "../../components";
import { Container, Content } from "./styled";

import book from "./assets/address-book-regular.svg";
import address from "./assets/address-card-regular.svg";
import clock from "./assets/clock-regular.svg";
import calendar from "./assets/calendar-alt-regular.svg";

import "./style.css";

const items = [
  { key: generateKey(), source: book, title: "contacts", route: "/about" },
  { key: generateKey(), source: clock, title: "timer", route: "/home" },
  { key: generateKey(), source: address, title: "address", route: "/" },
  { key: generateKey(), source: calendar, title: "calendar", route: "/about" },
];

function AppContainer({ children }) {
  let history = useHistory();

  const actionsWithClickHandlers = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        onClick: () => history.push(item.route),
      })),
    [history]
  );

  return (
    <Container>
      <AppBar />
      <AppMenu actions={actionsWithClickHandlers} />
      <Content>{children}</Content>
    </Container>
  );
}

export default AppContainer;
