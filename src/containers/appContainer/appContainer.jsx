import React from "react";

import { AppBar, AppMenu } from "../../components";
import { Container, Content } from "./styled";

import { generateKey } from "../../utils";

import book from "./assets/address-book-regular.svg";
import address from "./assets/address-card-regular.svg";
import clock from "./assets/clock-regular.svg";
import calendar from "./assets/calendar-alt-regular.svg";

import "./style.css";

const items = [
  { key: generateKey(), source: book, title: "contacts" },
  { key: generateKey(), source: clock, title: "timer" },
  { key: generateKey(), source: address, title: "address" },
  { key: generateKey(), source: calendar, title: "calendar" },
];

function AppContainer({ children }) {
  return (
    <Container>
      <AppBar />
      <AppMenu actions={items} />
      <Content>{children}</Content>
    </Container>
  );
}

export default AppContainer;
