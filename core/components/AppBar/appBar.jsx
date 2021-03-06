import React from "react";

import Avatar from "@atlaskit/avatar";

import { AppBarContainer, AppTitle, UserContainer } from "./styled";

export function AppBar({ user }) {
  return (
    <AppBarContainer>
      <AppTitle>
        <p>Time Manager</p>
      </AppTitle>
      <UserContainer>
        <Avatar />
        <p>{user.name}</p>
      </UserContainer>
    </AppBarContainer>
  );
}

AppBar.defaultProps = {
  user: { name: "Dmitry" },
};
